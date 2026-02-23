import * as React from "react";

import { CommunityOverview, Hero } from "@/components";
import { Config } from "@/config";

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
