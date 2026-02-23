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
        titleKey="apps.products.pages.aristo-badges.details.title"
        descriptionKey="apps.products.pages.aristo-badges.details.description"
        links={[
          {
            label: "apps.products.pages.aristo-badges.details.links.website",
            href: "https://badges.aristobyte.com",
          },
          {
            label: "apps.products.pages.aristo-badges.details.links.github",
            href: "https://github.com/aristobyte-ui/aristo-badges",
          },
        ]}
        features={[
          {
            titleKey:
              "apps.products.pages.aristo-badges.details.features.readme-focused.title",
            descriptionKey:
              "apps.products.pages.aristo-badges.details.features.readme-focused.description",
          },
          {
            titleKey:
              "apps.products.pages.aristo-badges.details.features.svg-native.title",
            descriptionKey:
              "apps.products.pages.aristo-badges.details.features.svg-native.description",
          },
          {
            titleKey:
              "apps.products.pages.aristo-badges.details.features.composable.title",
            descriptionKey:
              "apps.products.pages.aristo-badges.details.features.composable.description",
          },
        ]}
      />
    </>
  );
}
