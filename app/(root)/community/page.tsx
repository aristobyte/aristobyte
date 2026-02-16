import * as React from "react";

import { Hero, CommunityResources, HomeCommunity } from "@/components";
import { Config } from "@/config";

export default function Community() {
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
      <CommunityResources />
      <HomeCommunity />
    </>
  );
}
