import * as React from "react";

import { CaseStudies } from "@/components/CaseStudies";
import { Hero } from "@/components/Hero";

export const dynamic = "force-dynamic";

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="insights.case-studies.hero.title"
        subtitle="insights.case-studies.hero.subtitle"
        description="insights.case-studies.hero.description"
      />
      <CaseStudies />
    </>
  );
}
