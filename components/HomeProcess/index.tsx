"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./HomeProcess.scss";

export const HomeProcess = () => {
  const { t } = useTranslate();

  return (
    <section className="home-process">
      <div className="home-process__container">
        <div className="home-process__content">
          <h2 className="home-process__title">{t("home.process.title")}</h2>
          <p className="home-process__description">
            {t("home.process.description")}
          </p>
        </div>

        <ol className="home-process__timeline">
          {Config.home.process.steps.map(({ id }, index) => (
            <li key={id} className="home-process__step">
              <span className="home-process__index">0{index + 1}</span>
              <div className="home-process__step-body">
                <h3 className="home-process__step-title">
                  {t(`home.process.steps.${id}.title`)}
                </h3>
                <p className="home-process__step-description">
                  {t(`home.process.steps.${id}.description`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
