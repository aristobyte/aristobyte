"use client";

import * as React from "react";
import { CdnIcon } from "@/components";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { Config } from "@/config";
import { useTranslate } from "@/context";
import { SmartLink } from "@/components/ui";

import "./CommunityResources.scss";

const iconMap: Record<string, string> = {
  github: "mdi:github",
  "aristobyte-ui-org": "mdi:source-repository",
  "aristobyte-ui-packages": "mdi:package-variant",
  "open-collective": "simple-icons:opencollective",
};

export const CommunityResources = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.CommunityResources}
      title={{ text: "community.resources.title",
        align: Align.LEFT,
      }}
      description={{ text: "community.resources.description" }}
    >
      <div className="community-resources__grid">
        {Config.community.links.map(({ id, href }) => (
          <SmartLink key={id} href={href} className="community-resources__card">
            <span className="community-resources__icon">
              <CdnIcon name={iconMap[id] ?? "mdi:link"} size={22} />
            </span>
            <span className="community-resources__label">
              {t(`community.resources.links.${id}`)}
            </span>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
};
