"use client";

import * as React from "react";

import { Section } from "@/components";
import { SectionNamespace, Config } from "@/config";
import { useTranslate } from "@/context";

import "./Features.scss";

export const Features = () => {
  const { t } = useTranslate();

  return (
    <Section
      sectionId="features"
      namespace={SectionNamespace.Features}
      title={{ text: "home.features.title" }}
      description={{ text: "home.features.description" }}
    >
      <ul className="features__list">
        {Config.home.features.cards.map(
          ({ id, icon: Icon, titleKey, descriptionKey }) => (
            <li key={id} className="features__card">
              <span className="features__card-icon">
                <Icon />
              </span>
              <h3 className="features__card-title">{t(titleKey)}</h3>
              <p className="features__card-description">{t(descriptionKey)}</p>
            </li>
          ),
        )}
      </ul>
    </Section>
  );
};
