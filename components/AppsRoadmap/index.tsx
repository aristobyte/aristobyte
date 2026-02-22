"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./AppsRoadmap.scss";

export const AppsRoadmap = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.AppsRoadmap}
      title={{ text: "apps.roadmap.title", align: Align.LEFT }}
      description={{ text: "apps.roadmap.description" }}
    >
      <ul className="apps-roadmap__grid">
        {Config.apps.roadmap.items.map(({ id }) => (
          <li key={id} className="apps-roadmap__card">
            <h3 className="apps-roadmap__card-title">
              {t(`apps.roadmap.items.${id}.title`)}
            </h3>
            <p className="apps-roadmap__card-description">
              {t(`apps.roadmap.items.${id}.description`)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
