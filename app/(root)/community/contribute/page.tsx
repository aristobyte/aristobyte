import * as React from "react";

import { CommunityContribute } from "@/components/CommunityContribute";
import { Hero } from "@/components/Hero";

export const dynamic = "force-dynamic";

export default function CommunityContributePage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="community.contribute.hero.title"
        subtitle="community.contribute.hero.subtitle"
        description="community.contribute.hero.description"
      />
      <CommunityContribute />
    </>
  );
}
