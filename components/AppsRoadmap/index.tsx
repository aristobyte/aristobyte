"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./AppsRoadmap.scss";

export const AppsRoadmap = () => {
  const { t } = useTranslate();

  return (
    <section className="apps-roadmap">
      <div className="apps-roadmap__container">
        <div className="apps-roadmap__content">
          <h2 className="apps-roadmap__title">{t("apps.roadmap.title")}</h2>
          <p className="apps-roadmap__description">
            {t("apps.roadmap.description")}
          </p>
        </div>

        <ul className="apps-roadmap__grid">
          {Config.apps.roadmap.items.map(({ id }) => (
            <li key={id} className="apps-roadmap__card">
              <h3 className="apps-roadmap__card-title">
                {t(`apps.roadmap.items.${id}.title`)}
              </h3>
              <p className="apps-roadmap__card-description">
                {t(`apps.roadmap.items.${id}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
