"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { SectionNamespace } from "@/config";
import { useTranslate } from "@context";

import "./AppsHighlights.scss";

const highlights = [
  "/images/aristobot/aristobot-holding-bulb.png",
  "/images/aristobot/aristobot-holding-chat-app.png",
  "/images/aristobot/aristobot-facing-left.png",
];

export const AppsHighlights = () => {
  const { t } = useTranslate();
  return (
    <Section
      namespace={SectionNamespace.AppsHighlights}
      title={{ text: "apps.highlights.title" }}
      description={{ text: "apps.highlights.description" }}
    >
      <a
        className="apps-highlights__button"
        href="https://github.com/apps/aristo-bot"
        target="_blank"
        rel="noreferrer"
      >
        <span>{t("apps.highlights.button")}</span>
      </a>
      <div className="apps-highlights__cards">
        {highlights.map((src, index) => (
          <div key={src} className="apps-highlights__card">
            <img
              src={
                "https://github.com/aristobyte-team/assets/blob/master/png/aristobyte/sponsors/sponsors-60-min-advisory-session.png"
              }
              alt={`Aristobot ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
