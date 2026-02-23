"use client";

import * as React from "react";
import { Section } from "@/components";
import { useTranslate } from "@/context";
import { Config, SectionNamespace } from "@/config";

import "./AppsRoadmap.scss";

export const AppsRoadmap = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.AppsRoadmap}
      title={{ text: "apps.roadmap.title" }}
      description={{ text: "apps.roadmap.description" }}
    >
      <ul className="apps-roadmap__grid">
        {Config.apps.roadmap.items.map(({ id, titleKey, descriptionKey }) => (
          <li key={id} className="apps-roadmap__card">
            <h3 className="apps-roadmap__card-title">{t(titleKey)}</h3>
            <p className="apps-roadmap__card-description">
              {t(descriptionKey)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
