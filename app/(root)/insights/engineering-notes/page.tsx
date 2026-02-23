import * as React from "react";

import { EngineeringNotes } from "@/components/EngineeringNotes";
import { Hero } from "@/components/Hero";

export const dynamic = "force-dynamic";

export default function EngineeringNotesPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="insights.engineering-notes.hero.title"
        subtitle="insights.engineering-notes.hero.subtitle"
        description="insights.engineering-notes.hero.description"
      />
      <EngineeringNotes />
    </>
  );
}
