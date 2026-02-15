"use client";

import * as React from "react";
import NextLink from "next/link";
import { useTranslate } from "@/context";
import { Config } from "@/config";
import { Icons } from "@aristobyte-ui/utils";
import { CdnIcon } from "@/components";

import "./UISuite.scss";

const iconMap: Record<string, string> = {
  documentation: "mdi:book-open-variant",
  "github-org": "mdi:github",
  "github-project": "mdi:source-repository",
  "npm-packages": "simple-icons:npm",
  releases: "mdi:tag-outline",
  packages: "mdi:package-variant",
  "open-collective": "simple-icons:opencollective",
  discussions: "mdi:message-text-outline",
};

export const UISuite = () => {
  const { t } = useTranslate();

  return (
    <section className="ui-suite">
      <div className="ui-suite__container">
        <div className="ui-suite__content">
          <span className="ui-suite__logo">
            <Icons.AristoByteUI size={100} />
          </span>
          <h2 className="ui-suite__title">{t("ui.suite.title")}</h2>
          <p className="ui-suite__description">{t("ui.suite.description")}</p>
        </div>
        <div className="ui-suite__grid">
          {Config.ui.links.map(({ id, href }) => (
            <NextLink
              key={id}
              href={href}
              className="ui-suite__card"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="ui-suite__icon">
                <CdnIcon name={iconMap[id] ?? "mdi:link"} size={22} />
              </span>
              <span className="ui-suite__label">
                {t(`ui.suite.links.${id}`)}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
};
