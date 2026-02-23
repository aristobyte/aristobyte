"use client";

import * as React from "react";
import NextLink from "next/link";

import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { Config } from "@/config";
import { useTranslate } from "@/context";

import "./AppsProducts.scss";

export const AppsProducts = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.AppsProducts}
      title={{ text: "apps.products.title", align: Align.LEFT }}
      description={{ text: "apps.products.description" }}
    >
      <ul className="apps-products__grid">
        {Config.apps.products.map(({ id, href, status, statusKey, titleKey, descriptionKey }) => (
          <li key={id} className="apps-products__card">
            <span
              className={`apps-products__status apps-products__status--${status}`}
            >
              {t(statusKey)}
            </span>
            <h3 className="apps-products__card-title">
              {t(titleKey)}
            </h3>
            <p className="apps-products__card-description">
              {t(descriptionKey)}
            </p>
            <NextLink href={href} className="apps-products__card-link">
              <span>{t("apps.products.cardAction")}</span>
            </NextLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};
