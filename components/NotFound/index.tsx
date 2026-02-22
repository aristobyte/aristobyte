"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTranslate } from "@/context";
import { Section } from "@/components/Section";
import { SectionNamespace } from "@/config";

import "./NotFound.scss";

export const NotFound = () => {
  const router = useRouter();
  const { t } = useTranslate();

  return (
    <Section namespace={SectionNamespace.NotFound}>
      <div className="not-found__content">
        <span className="not-found__404">404</span>
        <h1 className="not-found__title">{t("not-found.title")}</h1>
        <h3 className="not-found__subtitle">{t("not-found.subtitle")}</h3>
        <p className="not-found__description">{t("not-found.description")}</p>
        <button className="not-found__button" onClick={() => router.back()}>
          <span>{t("not-found.button")}</span>
        </button>
      </div>
    </Section>
  );
};
