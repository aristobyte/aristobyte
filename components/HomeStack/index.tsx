"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./HomeStack.scss";

export const HomeStack = () => {
  const { t } = useTranslate();

  return (
    <section className="home-stack">
      <div className="home-stack__container">
        <div className="home-stack__content">
          <h2 className="home-stack__title">{t("home.stack.title")}</h2>
          <p className="home-stack__description">{t("home.stack.description")}</p>
        </div>

        <div className="home-stack__groups">
          {Config.home.stack.groups.map(({ id, items }) => (
            <div key={id} className="home-stack__group">
              <span className="home-stack__group-title">
                {t(`home.stack.groups.${id}.title`)}
              </span>
              <div className="home-stack__badges">
                {items.map((item) => (
                  <span key={item} className="home-stack__badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
