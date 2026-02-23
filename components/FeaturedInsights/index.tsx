"use client";
import { Section } from "@/components/Section";
import { SectionNamespace, Align, Title, useConfig } from "@/config";
import { useTranslate } from "@/context";

import "./FeaturedInsights.scss";

export const FeaturedInsights = () => {
  const { t } = useTranslate();
  const { insights } = useConfig();

  return (
    <Section
      namespace={SectionNamespace.FeaturedInsights}
      title={{
        text: "insights.featured.section.title",
        align: Align.LEFT,
        as: Title.H3,
      }}
    >
      <div className="featured-insights__grid">
        {insights.featuredItems.map((item) => (
          <article key={item.id} className="featured-insights__card">
            <span className="featured-insights__topic">{t(item.topicKey)}</span>
            <h4>{t(item.titleKey)}</h4>
            <p>{t(item.metaKey)}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};
