import * as React from "react";

import { Hero } from "@/components/Hero";
import { AppsProducts } from "@/components/AppsProducts";
import { AppsRoadmap } from "@/components/AppsRoadmap";
import { AppsHighlights } from "@/components/AppsHighlights";

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
