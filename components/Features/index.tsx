"use client";

import * as React from "react";

import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./Features.scss";

export const Features = () => {
  const { t } = useTranslate();

  return (
    <Section
      sectionId="features"
      namespace={SectionNamespace.Features}
      title={{ text: "home.features.title", align: Align.LEFT }}
      description={{ text: "home.features.description" }}
    >
      <ul className="features__list">
        {Config.home.features.cards.map(({ id, icon: Icon }) => (
          <li key={id} className="features__card">
            <span className="features__card-icon">
              <Icon />
            </span>
            <h3 className="features__card-title">
              {t(`home.features.cards.${id}.title`)}
            </h3>
            <p className="features__card-description">
              {t(`home.features.cards.${id}.description`)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
