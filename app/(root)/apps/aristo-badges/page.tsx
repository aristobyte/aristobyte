import * as React from "react";

import { Hero, ProductDetails } from "@/components";

export default function AristoBadgesPage() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoBadges", size: 280 }]}
        title="apps.products.pages.aristo-badges.hero.title"
        subtitle="apps.products.pages.aristo-badges.hero.subtitle"
        description="apps.products.pages.aristo-badges.hero.description"
      />
      <ProductDetails
        title="AristoBadges"
        description="A badge toolkit for README dashboards with lightweight SVG output and clean visual defaults for repositories, packages, and release streams."
        links={[
          { label: "Website", href: "https://badges.aristobyte.com" },
          {
            label: "GitHub",
            href: "https://github.com/aristobyte-ui/aristo-badges",
          },
        ]}
        features={[
          {
            title: "README Focused",
            description:
              "Generate concise status and metrics badges intended for maintainers and open-source teams.",
          },
          {
            title: "SVG-Native",
            description:
              "Output is optimized for repository docs and web rendering without raster artifacts.",
          },
          {
            title: "Composable",
            description:
              "Use badges individually or combine multiple metrics for compact project dashboards.",
          },
        ]}
      />
    </>
  );
}
