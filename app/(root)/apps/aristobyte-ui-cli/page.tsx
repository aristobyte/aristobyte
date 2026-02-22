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
            label: "CLI Docs",
            href: "https://ui.aristobyte.com/get-started/aristobyte-ui-cli",
          },
          {
            label: "GH Package CLI",
            href: "https://github.com/aristobyte-ui/aristobyte-ui/pkgs/npm/cli",
          },
          {
            label: "Source Code",
            href: "https://github.com/aristobyte-ui/aristobyte-ui/tree/master/packages/cli",
          },
          {
            label: "NPM",
            href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
          },
        ]}
        features={[
          {
            title: "Scaffold Fast",
            description:
              "Generate consistent UI primitives and project structure quickly, with less setup friction.",
          },
          {
            title: "Package-Aware",
            description:
              "Install and update package-level resources using a single workflow aligned with the AristoByte UI ecosystem.",
          },
          {
            title: "Team Consistency",
            description:
              "Keep naming, structure, and upgrade flow predictable across developers and repositories.",
          },
        ]}
      />
    </>
  );
}
