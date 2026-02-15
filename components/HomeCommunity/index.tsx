"use client";

import * as React from "react";
import NextLink from "next/link";
import { useTranslate } from "@/context";
import { Config } from "@/config";
import { CdnIcon } from "@/components";

import "./HomeCommunity.scss";

const iconMap: Record<string, string> = {
  github: "mdi:github",
  "open-collective": "simple-icons:opencollective",
  patreon: "simple-icons:patreon",
  stackoverflow: "mdi:stack-overflow",
};

export const HomeCommunity = () => {
  const { t } = useTranslate();

  return (
    <section className="home-community">
      <div className="home-community__container">
        <div className="home-community__content">
          <h2 className="home-community__title">{t("home.community.title")}</h2>
          <p className="home-community__description">
            {t("home.community.description")}
          </p>
        </div>

        <div className="home-community__grid">
          {Config.home.community.links.map(({ id, href }) => (
            <NextLink
              key={id}
              href={href}
              className="home-community__card"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="home-community__icon">
                <CdnIcon name={iconMap[id] ?? "mdi:link"} size={22} />
              </span>
              <span className="home-community__label">
                {t(`home.community.links.${id}`)}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
};
