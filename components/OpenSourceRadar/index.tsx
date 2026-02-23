"use client";

import { Section } from "@/components/Section";
import { SectionNamespace, Align, useConfig } from "@/config";
import { SmartLink } from "@/components/ui";
import { useTranslate } from "@/context";

import "./OpenSourceRadar.scss";

export const OpenSourceRadar = () => {
  const { t } = useTranslate();
  const { insights } = useConfig();

  return (
    <Section
      namespace={SectionNamespace.OpenSourceRadar}
      title={{
        text: "insights.open-source-radar.section.title",
        align: Align.LEFT,
      }}
      description={{ text: "insights.open-source-radar.section.description" }}
    >
      <div className="open-source-radar__grid">
        {insights.openSourceRadar.sections.map((section) => (
          <article key={section.id} className="open-source-radar__section">
            <h3 className="open-source-radar__section-title">
              {t(section.titleKey)}
            </h3>
            <div className="open-source-radar__items">
              {section.items.map((item) => (
                <SmartLink
                  key={item.id}
                  href={item.href}
                  className="open-source-radar__item"
                >
                  <h4>{t(item.titleKey)}</h4>
                  <p>{t(item.descriptionKey)}</p>
                  <span>{t(item.ctaKey)}</span>
                </SmartLink>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
