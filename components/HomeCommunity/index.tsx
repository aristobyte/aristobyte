"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Config } from "@/config";
import { CdnIcon } from "@/components";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { SmartLink } from "@/components/ui";

import "./HomeCommunity.scss";

export const HomeCommunity = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.HomeCommunity}
      title={{ text: "home.community.title", align: Align.CENTER }}
      description={{ text: "home.community.description" }}
    >
      <div className="home-community__grid">
        {Config.home.community.links.map(({ id, href, iconName, labelKey }) => (
          <SmartLink key={id} href={href} className="home-community__card">
            <span className="home-community__icon">
              <CdnIcon name={iconName} size={22} />
            </span>
            <span className="home-community__label">
              {t(labelKey)}
            </span>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
};
