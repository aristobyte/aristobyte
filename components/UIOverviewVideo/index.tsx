"use client";

import * as React from "react";
import { useTranslate } from "@/context";

import "./UIOverviewVideo.scss";

export const UIOverviewVideo = () => {
  const { t } = useTranslate();

  return (
    <section className="ui-overview">
      <div className="ui-overview__container">
        <div className="ui-overview__content">
          <h2 className="ui-overview__title">{t("ui.overview.title")}</h2>
          <p className="ui-overview__description">
            {t("ui.overview.description")}
          </p>
        </div>
        <div className="ui-overview__frame">
          <iframe
            className="ui-overview__video"
            src="https://www.youtube.com/embed/aKAhw2RkZfA"
            title="AristoByte UI Product Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
