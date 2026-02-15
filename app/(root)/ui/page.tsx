import * as React from "react";
import { Hero, UIOverviewVideo, UISuite, UICliGallery } from "@/components";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        icon="AristoByteUI"
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
