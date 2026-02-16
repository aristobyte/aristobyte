"use client";

import * as React from "react";
import NextLink from "next/link";

import { Icons } from "@aristobyte-ui/utils";
import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./ComplianceMap.scss";

export const ComplianceMap = () => {
  const { t } = useTranslate();

  return (
    <section className="compliance-map">
      <div className="compliance-map__container">
        <div className="compliance-map__document">
          <div className="compliance-map__content">
            <h1 className="compliance-map__title">
              {t("compliance.main.title")}
            </h1>
            <h2 className="compliance-map__title-small">
              {t("compliance.main.titleSmall")}
            </h2>
            <p className="compliance-map__description">
              {t("compliance.main.description")}
            </p>
          </div>

          <ul className="compliance-map__list">
            {Config.compliance.main.list.map(({ id, href }) => (
              <li key={id}>
                <NextLink href={href} className="compliance-map__link">
                  <span className="compliance-map__link-text">
                    {t(`compliance.main.list.${id}`)}
                  </span>
                  <span className="compliance-map__link-icon">
                    <Icons.ArrowRight />
                  </span>
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
