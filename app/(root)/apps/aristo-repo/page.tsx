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
        titleKey="apps.products.pages.aristo-repo.details.title"
        descriptionKey="apps.products.pages.aristo-repo.details.description"
        links={[
          {
            label: "apps.products.pages.aristo-repo.details.links.github-repo",
            href: "https://github.com/aristobyte-ui/aristo-repo",
          },
          {
            label: "apps.products.pages.aristo-repo.details.links.aristobyte-github-org",
            href: "https://github.com/aristobyte",
          },
        ]}
        features={[
          {
            titleKey: "apps.products.pages.aristo-repo.details.features.repository-pulse.title",
            descriptionKey:
              "apps.products.pages.aristo-repo.details.features.repository-pulse.description",
          },
          {
            titleKey: "apps.products.pages.aristo-repo.details.features.maintainer-workflows.title",
            descriptionKey:
              "apps.products.pages.aristo-repo.details.features.maintainer-workflows.description",
          },
          {
            titleKey: "apps.products.pages.aristo-repo.details.features.execution-visibility.title",
            descriptionKey:
              "apps.products.pages.aristo-repo.details.features.execution-visibility.description",
          },
        ]}
      />
    </>
  );
}
