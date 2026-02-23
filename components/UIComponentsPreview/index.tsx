"use client";

import * as React from "react";
import NextLink from "next/link";
import { useTranslate } from "@/context";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";

import "./UIComponentsPreview.scss";

export const UIComponentsPreview = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.UIComponentsPreview}
      title={{ text: "home.ui-components-preview.title", align: Align.CENTER }}
      description={{ text: "home.ui-components-preview.description" }}
    >
      <NextLink
        href="/apps/aristobyte-ui"
        className="ui-components-preview__link"
      >
        <span>{t("home.ui-components-preview.link")}</span>
      </NextLink>
    </Section>
  );
};
