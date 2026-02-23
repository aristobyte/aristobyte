"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Section } from "@/components/Section";
import { SectionNamespace, Config } from "@/config";

import "./HomeProcess.scss";

export const HomeProcess = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.HomeProcess}
      title={{ text: "home.process.title" }}
      description={{ text: "home.process.description" }}
    >
      <ol className="home-process__timeline">
        {Config.home.process.steps.map(
          ({ id, titleKey, descriptionKey }, index) => (
            <li key={id} className="home-process__step">
              <span className="home-process__index">0{index + 1}</span>
              <div className="home-process__step-body">
                <h3 className="home-process__step-title">{t(titleKey)}</h3>
                <p className="home-process__step-description">
                  {t(descriptionKey)}
                </p>
              </div>
            </li>
          ),
        )}
      </ol>
    </Section>
  );
};
