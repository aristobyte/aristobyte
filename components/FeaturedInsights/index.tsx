import { Section } from "@/components/Section";
import { SectionNamespace, Align, Title } from "@/config";
import { useTranslate } from "@/context";

import "./FeaturedInsights.scss";

const items = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
];

export const FeaturedInsights = () => {
  const { t } = useTranslate();

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
            <span className="featured-insights__topic">
              {t(`insights.featured.items.${item.id}.topic`)}
            </span>
            <h4>{t(`insights.featured.items.${item.id}.title`)}</h4>
            <p>{t(`insights.featured.items.${item.id}.meta`)}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};
