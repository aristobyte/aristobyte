import * as React from "react";

import { Hero, AppsProducts, AppsRoadmap, AppsHighlights } from "@/components";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
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
