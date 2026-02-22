"use client";

import * as React from "react";
import NextLink from "next/link";

import { useTranslate } from "@/context";
import { Config } from "@/config";
import { CdnIcon } from "@/components/CdnIcon";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";

import "./HomeServices.scss";

const OUT_DURATION_MS = 220;
const IN_DURATION_MS = 420;

const panelBackgroundSrc = "/images/neon-background.png";

const serviceImageById: Record<string, string> = {
  "product-strategy": "/images/what-we-create/product-strategy.png",
  "ui-ux": "/images/what-we-create/ux-ui-designs.png",
  "web-platforms": "/images/what-we-create/web-platforms.png",
  "mobile-experiences": "/images/what-we-create/mobile-experience.png",
  "ai-automation": "/images/what-we-create/ai-automation.png",
  "devops-growth": "/images/what-we-create/devops-growth.png",
};

const serviceIconById: Record<string, string> = {
  "product-strategy": "mdi:compass-outline",
  "ui-ux": "mdi:palette-outline",
  "web-platforms": "mdi:web",
  "mobile-experiences": "mdi:cellphone",
  "ai-automation": "mdi:robot-outline",
  "devops-growth": "mdi:infinity",
};

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
      title={{ text: "home.services.title", align: Align.LEFT }}
      description={{ text: "home.services.description" }}
    >
      <div className="home-services__layout">
        {displayedService && (
          <div className={`home-services__mobile-active ${animationClass}`}>
            <h3 className="home-services__mobile-active-title">
              {t(`home.services.cards.${displayedService.id}.title`)}
            </h3>
            <p className="home-services__mobile-active-description">
              {t(
                `home.services.cards.${displayedService.id}.previewDescription`,
              )}
            </p>
          </div>
        )}

        <ul
          className="home-services__list"
          role="tablist"
          aria-label="Services"
        >
          {Config.home.services.cards.map(({ id }) => {
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
                    <CdnIcon
                      name={serviceIconById[id] ?? "mdi:shape-outline"}
                      size={18}
                    />
                  </span>
                  <span className="home-services__tab-title">
                    {t(`home.services.cards.${id}.title`)}
                  </span>
                  <span
                    className={`home-services__tab-description${isActive ? " home-services__tab-description--active" : ""}`}
                  >
                    {t(`home.services.cards.${id}.description`)}
                  </span>
                </button>
              </li>
            );
          })}
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
                  src={serviceImageById[displayedService.id]}
                  alt={t(`home.services.cards.${displayedService.id}.title`)}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <h3 className="home-services__panel-title">
              {t(`home.services.cards.${displayedService.id}.title`)}
            </h3>
            <p className="home-services__panel-description">
              {t(
                `home.services.cards.${displayedService.id}.previewDescription`,
              )}
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
