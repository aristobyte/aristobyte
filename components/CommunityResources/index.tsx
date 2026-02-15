"use client";

import * as React from "react";
import NextLink from "next/link";
import { useTranslate } from "@/context";
import { Config } from "@/config";
import { CdnIcon } from "@/components";

import "./CommunityResources.scss";

const iconMap: Record<string, string> = {
  github: "mdi:github",
  "aristobyte-ui-org": "mdi:source-repository",
  "aristobyte-ui-packages": "mdi:package-variant",
  "open-collective": "simple-icons:opencollective",
};

export const CommunityResources = () => {
  const { t } = useTranslate();

  return (
    <section className="community-resources">
      <div className="community-resources__container">
        <div className="community-resources__content">
          <h2 className="community-resources__title">
            {t("community.resources.title")}
          </h2>
          <p className="community-resources__description">
            {t("community.resources.description")}
          </p>
        </div>

        <div className="community-resources__grid">
          {Config.community.links.map(({ id, href }) => (
            <NextLink
              key={id}
              href={href}
              className="community-resources__card"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="community-resources__icon">
                <CdnIcon name={iconMap[id] ?? "mdi:link"} size={22} />
              </span>
              <span className="community-resources__label">
                {t(`community.resources.links.${id}`)}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
};
