import * as React from "react";

import { CommunityDiscussions, Hero } from "@/components";

export default function CommunityDiscussionsPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="community.discussions.hero.title"
        subtitle="community.discussions.hero.subtitle"
        description="community.discussions.hero.description"
      />
      <CommunityDiscussions />
    </>
  );
}
