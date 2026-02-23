"use client";

import * as React from "react";
import { CommunityFeatureGrid } from "@/components/CommunityFeatureGrid";
import { SectionNamespace, useConfig } from "@/config";

export const CommunityContribute = () => {
  const { community } = useConfig();

  return (
    <CommunityFeatureGrid
      namespace={SectionNamespace.CommunityContribute}
      titleKey="community.contribute.section.title"
      descriptionKey="community.contribute.section.description"
      items={community.contribute}
    />
  );
};
