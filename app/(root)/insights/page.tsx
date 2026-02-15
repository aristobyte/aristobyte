import * as React from "react";

import { Hero, InsightsSocial } from "@/components";

export default function Insights() {
  return (
    <>
      <Hero
        withGradient
        icon="AristoByte"
        title="insights.hero.title"
        subtitle="insights.hero.subtitle"
        description="insights.hero.description"
      />
      <InsightsSocial />
    </>
  );
}
