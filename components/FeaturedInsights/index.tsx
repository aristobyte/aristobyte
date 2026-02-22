import { Section } from "@/components/Section";
import { SectionNamespace, Align, Title } from "@/config";

import "./FeaturedInsights.scss";

const items = [
  {
    id: "1",
    topic: "Engineering",
    title: "Config-first header architecture for multi-level navigation",
    meta: "6 min read · Feb 2026",
  },
  {
    id: "2",
    topic: "Design System",
    title: "Building a reusable Slider primitive for app-wide consistency",
    meta: "8 min read · Feb 2026",
  },
  {
    id: "3",
    topic: "Product",
    title: "How Insights routes were grouped for clarity and scale",
    meta: "5 min read · Feb 2026",
  },
];

export const FeaturedInsights = () => {
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
        {items.map((item) => (
          <article key={item.id} className="featured-insights__card">
            <span className="featured-insights__topic">{item.topic}</span>
            <h4>{item.title}</h4>
            <p>{item.meta}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};
