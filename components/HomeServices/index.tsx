"use client";

import * as React from "react";
import NextLink from "next/link";

import { useTranslate } from "@/context";
import { CdnIcon, Section } from "@/components";
import { SectionNamespace, Config } from "@/config";

import "./HomeServices.scss";

const OUT_DURATION_MS = 220;
const IN_DURATION_MS = 420;

const panelBackgroundSrc = "/images/neon-background.png";

type AnimationPhase = "idle" | "out" | "in";

export const HomeServices = () => {
  const { t } = useTranslate();

  const initialId = Config.home.services.cards[0]?.id ?? "";
  const [activeId, setActiveId] = React.useState<string>(initialId);
  const [displayedId, setDisplayedId] = React.useState<string>(initialId);
  const [phase, setPhase] = React.useState<AnimationPhase>("idle");

  const nextIdRef = React.useRef<string>(initialId);
  const outTimerRef = React.useRef<number | null>(null);
  const inTimerRef = React.useRef<number | null>(null);

  const clearTimers = React.useCallback(() => {
    if (outTimerRef.current !== null) {
      window.clearTimeout(outTimerRef.current);
      outTimerRef.current = null;
    }

    if (inTimerRef.current !== null) {
      window.clearTimeout(inTimerRef.current);
      inTimerRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const startSwapAnimation = React.useCallback(() => {
    clearTimers();
    setPhase("out");

    outTimerRef.current = window.setTimeout(() => {
      setDisplayedId(nextIdRef.current);
      setPhase("in");

      inTimerRef.current = window.setTimeout(() => {
        setPhase("idle");
      }, IN_DURATION_MS);
    }, OUT_DURATION_MS);
  }, [clearTimers]);

  const handleTabClick = React.useCallback(
    (id: string) => {
      if (id === activeId) {
        return;
      }

      setActiveId(id);
      nextIdRef.current = id;
      startSwapAnimation();
    },
    [activeId, startSwapAnimation],
  );

  const displayedIndex = Math.max(
    0,
    Config.home.services.cards.findIndex(({ id }) => id === displayedId),
  );

  const displayedService =
    Config.home.services.cards[displayedIndex] ?? Config.home.services.cards[0];

  const animationClass =
    phase === "out"
      ? "home-services__anim home-services__anim--out"
      : phase === "in"
        ? "home-services__anim home-services__anim--in"
        : "home-services__anim home-services__anim--idle";

  return (
    <Section
      namespace={SectionNamespace.HomeServices}
      title={{ text: "home.services.title" }}
      description={{ text: "home.services.description" }}
    >
      <div className="home-services__layout">
        {displayedService && (
          <div className={`home-services__mobile-active ${animationClass}`}>
            <h3 className="home-services__mobile-active-title">
              {t(displayedService.titleKey)}
            </h3>
            <p className="home-services__mobile-active-description">
              {t(displayedService.previewDescriptionKey)}
            </p>
          </div>
        )}

        <ul
          className="home-services__list"
          role="tablist"
          aria-label={t("home.services.aria.list")}
        >
          {Config.home.services.cards.map(
            ({ id, titleKey, descriptionKey, iconName }) => {
              const isActive = id === activeId;

              return (
                <li key={id} className="home-services__item">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`home-service-panel-${id}`}
                    className={`home-services__tab${isActive ? " home-services__tab--active" : ""}`}
                    onClick={() => handleTabClick(id)}
                  >
                    <span className="home-services__tab-icon" aria-hidden>
                      <CdnIcon name={iconName} size={18} />
                    </span>
                    <span className="home-services__tab-title">
                      {t(titleKey)}
                    </span>
                    <span
                      className={`home-services__tab-description${isActive ? " home-services__tab-description--active" : ""}`}
                    >
                      {t(descriptionKey)}
                    </span>
                  </button>
                </li>
              );
            },
          )}
        </ul>

        {displayedService && (
          <aside
            id={`home-service-panel-${displayedService.id}`}
            className={`home-services__panel ${animationClass}`}
            role="tabpanel"
          >
            <span className="home-services__panel-index">
              {String(displayedIndex + 1).padStart(2, "0")}
            </span>

            <div className="home-services__panel-media">
              <div className="home-services__panel-bg">
                <img
                  src={panelBackgroundSrc}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="home-services__panel-icon">
                <img
                  src={displayedService.image}
                  alt={t(displayedService.titleKey)}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <h3 className="home-services__panel-title">
              {t(displayedService.titleKey)}
            </h3>
            <p className="home-services__panel-description">
              {t(displayedService.previewDescriptionKey)}
            </p>
            <NextLink href="/contact" className="home-services__panel-link">
              <span>{t("home.cta.primary")}</span>
            </NextLink>
          </aside>
        )}
      </div>
    </Section>
  );
};
