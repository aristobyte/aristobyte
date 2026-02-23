import * as React from "react";

import { Hero, OpenSourceRadar } from "@/components";

export const dynamic = "force-dynamic";

export default function OpenSourceRadarPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="insights.open-source-radar.hero.title"
        subtitle="insights.open-source-radar.hero.subtitle"
        description="insights.open-source-radar.hero.description"
      />
      <OpenSourceRadar />
    </>
  );
}
