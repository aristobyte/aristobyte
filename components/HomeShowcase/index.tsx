"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./HomeShowcase.scss";

export const HomeShowcase = () => {
  const { t } = useTranslate();

  return (
    <section className="home-showcase">
      <div className="home-showcase__container">
        <div className="home-showcase__content">
          <h2 className="home-showcase__title">
            {t("home.showcase.title")}
          </h2>
          <p className="home-showcase__description">
            {t("home.showcase.description")}
          </p>
        </div>

        <div className="home-showcase__grid">
          {Config.home.showcase.images.map((src, index) => (
            <div key={src} className="home-showcase__tile">
              <img
                src={src}
                alt={`Showcase ${index + 1}`}
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
