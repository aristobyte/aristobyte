"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { CdnIcon, Section } from "@/components";
import { SmartLink } from "@/components/ui/SmartLink";
import { SectionNamespace, Align, Config } from "@/config";

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
            <span className="home-community__label">{t(labelKey)}</span>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
};
