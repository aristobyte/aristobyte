"use client";

import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { SmartLink } from "@/components/ui";
import { sections } from "./constants";

import "./OpenSourceRadar.scss";

export const OpenSourceRadar = () => {
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
        {sections.map((section) => (
          <article key={section.id} className="open-source-radar__section">
            <h3 className="open-source-radar__section-title">
              {section.title}
            </h3>
            <div className="open-source-radar__items">
              {section.items.map((item) => (
                <SmartLink
                  key={item.id}
                  href={item.href}
                  className="open-source-radar__item"
                >
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span>{item.cta}</span>
                </SmartLink>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
