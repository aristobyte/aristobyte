"use client";

import * as React from "react";
import { CommunityFeatureGrid } from "@/components/CommunityFeatureGrid";
import { SectionNamespace, useConfig } from "@/config";

export const CommunityShowcase = () => {
  const { community } = useConfig();

  return (
    <CommunityFeatureGrid
      namespace={SectionNamespace.CommunityShowcase}
      titleKey="community.showcase.section.title"
      descriptionKey="community.showcase.section.description"
      itemPrefix="community.showcase.items"
      items={community.showcase}
    />
  );
};
