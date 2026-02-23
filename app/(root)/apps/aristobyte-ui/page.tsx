import * as React from "react";

import { Hero, UIOverviewVideo, UISuite, UICliGallery } from "@/components";

export const dynamic = "force-dynamic";

export default function AristoByteUIPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByteUI", size: 300 }]}
        title="ui.hero.title"
        subtitle="ui.hero.subtitle"
        description="ui.hero.description"
      />
      <UIOverviewVideo />
      <UISuite />
      <UICliGallery />
    </>
  );
}
