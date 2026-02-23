import * as React from "react";

import { Hero, ProductDetails } from "@/components";

export default function AristoByteUICLIPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByteUICLI", size: 200 }]}
        title="apps.products.pages.aristobyte-ui-cli.hero.title"
        subtitle="apps.products.pages.aristobyte-ui-cli.hero.subtitle"
        description="apps.products.pages.aristobyte-ui-cli.hero.description"
      />
      <ProductDetails
        titleKey="apps.products.pages.aristobyte-ui-cli.details.title"
        descriptionKey="apps.products.pages.aristobyte-ui-cli.details.description"
        links={[
          {
            label:
              "apps.products.pages.aristobyte-ui-cli.details.links.cli-docs",
            href: "https://ui.aristobyte.com/get-started/aristobyte-ui-cli",
          },
          {
            label:
              "apps.products.pages.aristobyte-ui-cli.details.links.gh-package-cli",
            href: "https://github.com/aristobyte-ui/aristobyte-ui/pkgs/npm/cli",
          },
          {
            label:
              "apps.products.pages.aristobyte-ui-cli.details.links.source-code",
            href: "https://github.com/aristobyte-ui/aristobyte-ui/tree/master/packages/cli",
          },
          {
            label: "apps.products.pages.aristobyte-ui-cli.details.links.npm",
            href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
          },
        ]}
        features={[
          {
            titleKey:
              "apps.products.pages.aristobyte-ui-cli.details.features.scaffold-fast.title",
            descriptionKey:
              "apps.products.pages.aristobyte-ui-cli.details.features.scaffold-fast.description",
          },
          {
            titleKey:
              "apps.products.pages.aristobyte-ui-cli.details.features.package-aware.title",
            descriptionKey:
              "apps.products.pages.aristobyte-ui-cli.details.features.package-aware.description",
          },
          {
            titleKey:
              "apps.products.pages.aristobyte-ui-cli.details.features.team-consistency.title",
            descriptionKey:
              "apps.products.pages.aristobyte-ui-cli.details.features.team-consistency.description",
          },
        ]}
      />
    </>
  );
}
