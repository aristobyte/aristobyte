"use client";

import * as React from "react";
import NextLink from "next/link";
import { useTranslate } from "@/context";
import { Section } from "@/components/Section";
import { SectionNamespace } from "@/config";

import "./HomeCTA.scss";

export const HomeCTA = () => {
  const { t } = useTranslate();

  return (
    <Section namespace={SectionNamespace.HomeCta}>
      <div className="home-cta__card">
        <div className="home-cta__content">
          <h2 className="home-cta__title">{t("home.cta.title")}</h2>
          <p className="home-cta__description">{t("home.cta.description")}</p>
        </div>
        <div className="home-cta__actions">
          <NextLink href="/contact" className="home-cta__button">
            <span>{t("home.cta.primary")}</span>
          </NextLink>
          <NextLink
            href="/apps"
            className="home-cta__button home-cta__button--ghost"
          >
            <span>{t("home.cta.secondary")}</span>
          </NextLink>
        </div>
      </div>
    </Section>
  );
};
