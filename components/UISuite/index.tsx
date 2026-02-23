"use client";

import * as React from "react";
import { Icons } from "@aristobyte-ui/utils";
import { Section, CdnIcon } from "@/components";
import { SmartLink } from "@/components/ui/SmartLink";
import { SectionNamespace, Config } from "@/config";
import { useTranslate } from "@/context";

import "./UISuite.scss";

export const UISuite = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.UISuite}
      title={{ text: "ui.suite.title" }}
      description={{ text: "ui.suite.description" }}
    >
      <span className="ui-suite__logo">
        <span className="ui-suite__logo-glyph">
          <Icons.AristoByteUI size={100} />
        </span>
      </span>
      <div className="ui-suite__grid">
        {Config.ui.links.map(({ id, href, iconName, labelKey }) => (
          <SmartLink key={id} href={href} className="ui-suite__card">
            <span className="ui-suite__icon">
              <CdnIcon name={iconName} size={22} />
            </span>
            <span className="ui-suite__label">{t(labelKey)}</span>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
};
