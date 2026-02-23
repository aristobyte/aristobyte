"use client";

import * as React from "react";
import { CommunityFeatureGrid } from "@/components/CommunityFeatureGrid";
import { SectionNamespace, useConfig } from "@/config";

export const CommunityResourcesHub = () => {
  const { community } = useConfig();

  return (
    <CommunityFeatureGrid
      namespace={SectionNamespace.CommunityResourcesHub}
      titleKey="community.resources-hub.section.title"
      descriptionKey="community.resources-hub.section.description"
      items={community.resourcesHub}
    />
  );
};
