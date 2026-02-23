"use client";

import * as React from "react";
import { CommunityFeatureGrid } from "@/components/CommunityFeatureGrid";
import { SectionNamespace, useConfig } from "@/config";

export const CommunityDiscussions = () => {
  const { community } = useConfig();

  return (
    <CommunityFeatureGrid
      namespace={SectionNamespace.CommunityDiscussions}
      titleKey="community.discussions.section.title"
      descriptionKey="community.discussions.section.description"
      items={community.discussions}
    />
  );
};
