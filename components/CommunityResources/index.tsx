"use client";

import * as React from "react";
import { CdnIcon, Section } from "@/components";
import { SmartLink } from "@/components/ui/SmartLink";
import { SectionNamespace, Config } from "@/config";
import { useTranslate } from "@/context";

import "./CommunityResources.scss";

export const CommunityResources = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.CommunityResources}
      title={{ text: "community.resources.title" }}
      description={{ text: "community.resources.description" }}
    >
      <div className="community-resources__grid">
        {Config.community.links.map(({ id, href, iconName, labelKey }) => (
          <SmartLink key={id} href={href} className="community-resources__card">
            <span className="community-resources__icon">
              <CdnIcon name={iconName} size={22} />
            </span>
            <span className="community-resources__label">{t(labelKey)}</span>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
};
