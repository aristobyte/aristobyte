import * as React from "react";

import { CommunityShowcase, Hero } from "@/components";

export const dynamic = "force-dynamic";

export default function CommunityShowcasePage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="community.showcase.hero.title"
        subtitle="community.showcase.hero.subtitle"
        description="community.showcase.hero.description"
      />
      <CommunityShowcase />
    </>
  );
}
