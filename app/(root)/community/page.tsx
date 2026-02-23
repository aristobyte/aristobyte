import * as React from "react";

import { CommunityOverview } from "@/components/CommunityOverview";
import { Hero } from "@/components/Hero";
import { Config } from "@/config";

export const dynamic = "force-dynamic";

export default function CommunityOverviewPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="community.hero.title"
        subtitle="community.hero.subtitle"
        description="community.hero.description"
        linkText="community.hero.links"
        links={Config.community.hero.links}
      />
      <CommunityOverview />
    </>
  );
}
