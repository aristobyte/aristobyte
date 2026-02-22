"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Config } from "@/config";
import { CdnIcon } from "@/components";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { SmartLink } from "@/components/ui";

import "./HomeCommunity.scss";

const iconMap: Record<string, string> = {
  github: "mdi:github",
  "open-collective": "simple-icons:opencollective",
  patreon: "simple-icons:patreon",
  stackoverflow: "mdi:stack-overflow",
};

export const HomeCommunity = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.HomeCommunity}
      title={{ text: "home.community.title", align: Align.CENTER }}
      description={{ text: "home.community.description" }}
    >
      <div className="home-community__grid">
        {Config.home.community.links.map(({ id, href }) => (
          <SmartLink key={id} href={href} className="home-community__card">
            <span className="home-community__icon">
              <CdnIcon name={iconMap[id] ?? "mdi:link"} size={22} />
            </span>
            <span className="home-community__label">
              {t(`home.community.links.${id}`)}
            </span>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
};
