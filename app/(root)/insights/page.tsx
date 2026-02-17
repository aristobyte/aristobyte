import * as React from "react";

import { Hero, InsightsSocial } from "@/components";

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
      <InsightsSocial />
    </>
  );
}
