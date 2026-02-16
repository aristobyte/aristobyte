import * as React from "react";

import { Hero, ProductDetails } from "@/components";

export default function AristoRepoPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoRepo", size: 280 }]}
        title="apps.products.pages.aristo-repo.hero.title"
        subtitle="apps.products.pages.aristo-repo.hero.subtitle"
        description="apps.products.pages.aristo-repo.hero.description"
      />
      <ProductDetails
        title="AristoRepo"
        description="Repository operations workspace for organizing project health, release flow, and collaboration signals across active codebases."
        links={[
          {
            label: "GitHub Repo",
            href: "https://github.com/aristobyte-ui/aristo-repo",
          },
          {
            label: "AristoByte GitHub Org",
            href: "https://github.com/aristobyte",
          },
        ]}
        features={[
          {
            title: "Repository Pulse",
            description:
              "Track essential activity indicators like delivery rhythm, change volume, and contribution trends.",
          },
          {
            title: "Maintainer Workflows",
            description:
              "Support maintainers with clear checkpoints for triage, release preparation, and follow-up tasks.",
          },
          {
            title: "Execution Visibility",
            description:
              "Surface operational context in one place for both engineering and product stakeholders.",
          },
        ]}
      />
    </>
  );
}
