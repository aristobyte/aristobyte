"use client";

import * as React from "react";
import NextLink from "next/link";
import { useTranslate } from "@/context";
import { Config } from "@/config";
import { CdnIcon } from "@/components";

import "./InsightsSocial.scss";

const iconMap: Record<string, string> = {
  instagram: "mdi:instagram",
  facebook: "mdi:facebook",
  "linked-in": "mdi:linkedin",
  twitter: "mdi:twitter",
};

export const InsightsSocial = () => {
  const { t } = useTranslate();

  return (
    <section className="insights-social">
      <div className="insights-social__container">
        <div className="insights-social__content">
          <h2 className="insights-social__title">
            {t("insights.social.title")}
          </h2>
          <p className="insights-social__description">
            {t("insights.social.description")}
          </p>
        </div>
        <div className="insights-social__grid">
          {Config.insights.socials.map(({ id, href }) => (
            <NextLink
              key={id}
              href={href}
              className="insights-social__card"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="insights-social__icon">
                <CdnIcon name={iconMap[id] ?? "mdi:link"} size={22} />
              </span>
              <span className="insights-social__label">
                {t(`insights.social.links.${id}`)}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
};
