import * as React from "react";

import { Hero, AppsProducts, AppsRoadmap, AppsHighlights } from "@/components";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        icons={[
          { id: "AristoByteUICLI", size: 200 },
          { id: "AristoByteUI", size: 300 },
          { id: "AristoBadges", size: 280 },
          { id: "AristoRepo", size: 280 },
        ]}
        title="apps.hero.title"
        subtitle="apps.hero.subtitle"
        description="apps.hero.description"
      />
      <AppsProducts />
      <AppsRoadmap />
      <AppsHighlights />
    </>
  );
}
