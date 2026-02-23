"use client";

import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";

import {
  CookieConsentCategory,
  type CookieConsentPreferencesType,
} from "@/lib/cookie-consent";
import { useCookieConsent, useTranslate } from "@/context";

import "./CookieConsent.scss";

const PANEL_EXIT_MS = 240;
const SETTINGS_EXIT_MS = 220;

const createDraftPreferences = (
  preferences?: CookieConsentPreferencesType,
): CookieConsentPreferencesType => ({
  [CookieConsentCategory.Necessary]: true,
  [CookieConsentCategory.Preferences]:
    preferences?.[CookieConsentCategory.Preferences] ?? false,
  [CookieConsentCategory.Analytics]:
    preferences?.[CookieConsentCategory.Analytics] ?? false,
  [CookieConsentCategory.Marketing]:
    preferences?.[CookieConsentCategory.Marketing] ?? false,
});

export const CookieConsent = () => {
  const { t } = useTranslate();
  const {
    shouldPrompt,
    state,
    acceptAll,
    rejectNonEssential,
    savePreferences,
  } = useCookieConsent();

  const [view, setView] = React.useState<"panel" | "settings" | null>(() => {
    if (shouldPrompt) return "panel";
    if (state) return "settings";
    return null;
  });
  const [panelPhase, setPanelPhase] = React.useState<"enter" | "exit">("enter");
  const [settingsPhase, setSettingsPhase] = React.useState<"enter" | "exit">(
    "enter",
  );
  const [isManageOpen, setIsManageOpen] = React.useState(false);
  const [hasManageInteracted, setHasManageInteracted] = React.useState(false);
  const [draftPreferences, setDraftPreferences] =
    React.useState<CookieConsentPreferencesType>(
      createDraftPreferences(state?.preferences),
    );
  const transitionTimeoutRef = React.useRef<number | null>(null);

  const clearTransitionTimeout = React.useCallback(() => {
    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (shouldPrompt) {
      setView("panel");
      setPanelPhase("enter");
      setIsManageOpen(false);
      setHasManageInteracted(false);
    }
  }, [shouldPrompt]);

  React.useEffect(() => {
    if (!shouldPrompt && !state) {
      setView(null);
      return;
    }

    if (!shouldPrompt && state && view === null) {
      setView("settings");
      setSettingsPhase("enter");
    }
  }, [shouldPrompt, state, view]);

  React.useEffect(() => {
    setDraftPreferences(createDraftPreferences(state?.preferences));
  }, [state]);

  React.useEffect(
    () => () => {
      clearTransitionTimeout();
    },
    [clearTransitionTimeout],
  );

  const switchToSettings = React.useCallback(() => {
    clearTransitionTimeout();
    setPanelPhase("exit");
    transitionTimeoutRef.current = window.setTimeout(() => {
      setView("settings");
      setSettingsPhase("enter");
      transitionTimeoutRef.current = null;
    }, PANEL_EXIT_MS);
  }, [clearTransitionTimeout]);

  const switchToPanel = React.useCallback(() => {
    clearTransitionTimeout();
    setSettingsPhase("exit");
    transitionTimeoutRef.current = window.setTimeout(() => {
      setIsManageOpen(false);
      setHasManageInteracted(false);
      setView("panel");
      setPanelPhase("enter");
      transitionTimeoutRef.current = null;
    }, SETTINGS_EXIT_MS);
  }, [clearTransitionTimeout]);

  const handleToggle = (category: CookieConsentCategory) => {
    if (category === CookieConsentCategory.Necessary) return;
    setDraftPreferences((current) => ({
      ...current,
      [category]: !current[category],
    }));
  };

  const handleSave = () => {
    savePreferences(draftPreferences);
    switchToSettings();
  };

  const handleAccept = () => {
    acceptAll();
    switchToSettings();
  };

  const handleReject = () => {
    rejectNonEssential();
    switchToSettings();
  };

  if (view === "settings") {
    if (!state) return null;
    return (
      <div
        className={`cookie-consent cookie-consent--settings is-${settingsPhase}`}
      >
        <button
          type="button"
          className="cookie-consent__settings-button"
          onClick={switchToPanel}
          aria-label={t("cookies.actions.settings")}
        >
          <Image src="/images/cookies.png" alt="" width={34} height={34} />
        </button>
      </div>
    );
  }

  if (view !== "panel") return null;

  return (
    <aside className={`cookie-consent is-${panelPhase}`} aria-live="polite">
      <div className="cookie-consent__card">
        <div className="cookie-consent__content">
          <h2 className="cookie-consent__title">
            <span className="cookie-consent__icon" aria-hidden="true">
              <Image src="/images/cookies.png" alt="" width={26} height={26} />
            </span>
            <span>{t("cookies.banner.title")}</span>
          </h2>
          <p className="cookie-consent__description">
            {t("cookies.banner.description")}
          </p>
          <p
            className={`cookie-consent__links ${
              isManageOpen
                ? "is-open"
                : hasManageInteracted
                  ? "is-closed"
                  : "is-initial"
            }`}
          >
            <NextLink
              href="/compliance/cookie-policy"
              className="cookie-consent__link"
            >
              {t("cookies.banner.cookie-policy")}
            </NextLink>
            <span>·</span>
            <NextLink
              href="/compliance/privacy-policy"
              className="cookie-consent__link"
            >
              {t("cookies.banner.privacy-policy")}
            </NextLink>
          </p>
        </div>

        {Boolean(state) && (
          <button
            className="cookie-consent__close"
            type="button"
            aria-label={t("cookies.actions.close")}
            onClick={switchToSettings}
          >
            {t("cookies.actions.close")}
          </button>
        )}

        <div
          className={`cookie-consent__manager ${
            isManageOpen
              ? "is-open"
              : hasManageInteracted
                ? "is-closed"
                : "is-initial"
          }`}
          aria-hidden={!isManageOpen}
        >
          <h3 className="cookie-consent__manager-title">
            {t("cookies.manager.title")}
          </h3>
          <p className="cookie-consent__manager-description">
            {t("cookies.manager.description")}
          </p>
          <ul className="cookie-consent__options">
            {[
              CookieConsentCategory.Necessary,
              CookieConsentCategory.Preferences,
              CookieConsentCategory.Analytics,
              CookieConsentCategory.Marketing,
            ].map((category) => {
              const isRequired = category === CookieConsentCategory.Necessary;
              return (
                <li className="cookie-consent__option" key={category}>
                  <div className="cookie-consent__option-meta">
                    <strong>{t(`cookies.categories.${category}.label`)}</strong>
                    <span>
                      {t(`cookies.categories.${category}.description`)}
                    </span>
                  </div>
                  <button
                    type="button"
                    className={`cookie-consent__toggle ${draftPreferences[category] ? "is-on" : ""}`}
                    aria-pressed={draftPreferences[category]}
                    aria-label={t(`cookies.categories.${category}.label`)}
                    disabled={isRequired}
                    onClick={() => handleToggle(category)}
                  >
                    <span className="cookie-consent__toggle-thumb" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="cookie-consent__actions">
          <button
            className="cookie-consent__button cookie-consent__button--ghost"
            type="button"
            onClick={() => {
              setHasManageInteracted(true);
              setIsManageOpen((current) => !current);
            }}
          >
            {t("cookies.actions.manage")}
          </button>
          {isManageOpen && (
            <button
              className="cookie-consent__button cookie-consent__button--outline"
              type="button"
              onClick={handleSave}
            >
              {t("cookies.actions.save")}
            </button>
          )}
          <button
            className="cookie-consent__button cookie-consent__button--outline"
            type="button"
            onClick={handleReject}
          >
            {t("cookies.actions.reject")}
          </button>
          <button
            className="cookie-consent__button cookie-consent__button--solid"
            type="button"
            onClick={handleAccept}
          >
            <span>{t("cookies.actions.accept")}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
