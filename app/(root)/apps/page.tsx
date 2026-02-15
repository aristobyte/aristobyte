import * as React from "react";

import { Hero, AppsRoadmap, AppsHighlights } from "@/components";
import { Config } from "@/config";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        icon="AristoByte"
        title="apps.hero.title"
        subtitle="apps.hero.subtitle"
        description="apps.hero.description"
        linkText="apps.hero.links"
        links={Config.apps.hero.links}
      />
      <AppsRoadmap />
      <AppsHighlights />
    </>
  );
}
