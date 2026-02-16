"use client";

import * as React from "react";
import { useTranslate } from "@/context";

import "./AppsHighlights.scss";

const highlights = [
  "/images/aristobot/aristobot-holding-bulb.png",
  "/images/aristobot/aristobot-holding-chat-app.png",
  "/images/aristobot/aristobot-facing-left.png",
];

export const AppsHighlights = () => {
  const { t } = useTranslate();

  return (
    <section className="apps-highlights">
      <div className="apps-highlights__container">
        <div className="apps-highlights__content">
          <h2 className="apps-highlights__title">
            {t("apps.highlights.title")}
          </h2>
          <p className="apps-highlights__description">
            {t("apps.highlights.description")}
          </p>
        </div>
        <div className="apps-highlights__grid">
          {highlights.map((src, index) => (
            <div key={src} className="apps-highlights__card">
              <img
                src={src}
                alt={`Aristobot ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
