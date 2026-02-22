"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Config } from "@/config";
import { Icons } from "@aristobyte-ui/utils";
import { CdnIcon } from "@/components";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { SmartLink } from "@/components/ui";

import "./UISuite.scss";

const iconMap: Record<string, string> = {
  documentation: "mdi:book-open-variant",
  "github-org": "mdi:github",
  "github-project": "mdi:source-repository",
  "npm-packages": "simple-icons:npm",
  releases: "mdi:tag-outline",
  packages: "mdi:package-variant",
  "open-collective": "simple-icons:opencollective",
  discussions: "mdi:message-text-outline",
};

export const UISuite = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.UISuite}
      title={{ text: "ui.suite.title", align: Align.LEFT }}
      description={{ text: "ui.suite.description" }}
    >
      <span className="ui-suite__logo">
        <span className="ui-suite__logo-glyph">
          <Icons.AristoByteUI size={100} />
        </span>
      </span>
      <div className="ui-suite__grid">
        {Config.ui.links.map(({ id, href }) => (
          <SmartLink key={id} href={href} className="ui-suite__card">
            <span className="ui-suite__icon">
              <CdnIcon name={iconMap[id] ?? "mdi:link"} size={22} />
            </span>
            <span className="ui-suite__label">{t(`ui.suite.links.${id}`)}</span>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
};
