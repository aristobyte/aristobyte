import * as React from "react";

import { Hero } from "@/components/Hero";
import { UIOverviewVideo } from "@/components/UIOverviewVideo";
import { UISuite } from "@/components/UISuite";
import { UICliGallery } from "@/components/UICliGallery";

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
