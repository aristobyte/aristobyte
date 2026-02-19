import * as React from "react";

import {
  FeaturedInsights,
  Hero,
  InsightsNewsletter,
  InsightsSocial,
  InsightsVideo,
} from "@/components";

export default function Insights() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="insights.hero.title"
        subtitle="insights.hero.subtitle"
        description="insights.hero.description"
      />
      <FeaturedInsights />
      <InsightsVideo />
      <InsightsSocial />
      <InsightsNewsletter />
    </>
  );
}
