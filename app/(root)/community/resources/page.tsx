import * as React from "react";

import { CommunityResourcesHub } from "@/components/CommunityResourcesHub";
import { Hero } from "@/components/Hero";

export const dynamic = "force-dynamic";

export default function CommunityResourcesPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="community.resources-hub.hero.title"
        subtitle="community.resources-hub.hero.subtitle"
        description="community.resources-hub.hero.description"
      />
      <CommunityResourcesHub />
    </>
  );
}
