"use client";

import * as React from "react";

import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./HomeServices.scss";

export const HomeServices = () => {
  const { t } = useTranslate();

  return (
    <section className="home-services">
      <div className="home-services__container">
        <div className="home-services__content">
          <h2 className="home-services__title">{t("home.services.title")}</h2>
          <p className="home-services__description">
            {t("home.services.description")}
          </p>
        </div>

        <ul className="home-services__grid">
          {Config.home.services.cards.map(({ id }) => (
            <li key={id} className="home-services__card">
              <div className="home-services__card-inner">
                <h3 className="home-services__card-title">
                  {t(`home.services.cards.${id}.title`)}
                </h3>
                <p className="home-services__card-description">
                  {t(`home.services.cards.${id}.description`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
