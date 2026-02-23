import * as React from "react";

import { FeaturedInsights } from "@/components";
import { Hero } from "@/components/Hero";
import { InsightsNewsletter } from "@/components/InsightsNewsletter";
import { InsightsSocial } from "@/components/InsightsSocial";
import { InsightsVideo } from "@/components/InsightsVideo";

export const dynamic = "force-dynamic";

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
