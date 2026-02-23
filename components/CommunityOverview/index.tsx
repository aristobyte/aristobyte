"use client";

import * as React from "react";
import { CommunityFeatureGrid } from "@/components/CommunityFeatureGrid";
import { SectionNamespace, useConfig } from "@/config";

export const CommunityOverview = () => {
  const { community } = useConfig();

  return (
    <CommunityFeatureGrid
      namespace={SectionNamespace.CommunityOverview}
      titleKey="community.overview.section.title"
      descriptionKey="community.overview.section.description"
      items={community.overview}
    />
  );
};
