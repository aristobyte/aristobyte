"use client";

import * as React from "react";
import NextLink from "next/link";
import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./HomeToolkit.scss";

export const HomeToolkit = () => {
  const { t } = useTranslate();

  return (
    <section className="home-toolkit">
      <div className="home-toolkit__container">
        <div className="home-toolkit__content">
          <h2 className="home-toolkit__title">{t("home.toolkit.title")}</h2>
          <p className="home-toolkit__description">
            {t("home.toolkit.description")}
          </p>
          <div className="home-toolkit__actions">
            {Config.home.toolkit.links.map(({ id, href }) => (
              <NextLink
                key={id}
                href={href}
                className="home-toolkit__button"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span>{t(`home.toolkit.links.${id}`)}</span>
              </NextLink>
            ))}
          </div>
        </div>

        <div className="home-toolkit__gallery">
          {Config.home.toolkit.images.map((src, index) => (
            <div key={src} className="home-toolkit__image">
              <img
                src={src}
                alt={`Toolkit ${index + 1}`}
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
