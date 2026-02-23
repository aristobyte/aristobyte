"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { SmartLink } from "@/components/ui/SmartLink";
import { SectionNamespace } from "@/config";
import { useTranslate } from "@/context";
import "./CommunityFeatureGrid.scss";

type CommunityFeatureGridProps = {
  namespace: SectionNamespace;
  titleKey: string;
  descriptionKey: string;
  items: Array<{
    id: string;
    href: string;
    titleKey: string;
    descriptionKey: string;
    actionKey: string;
  }>;
};

export const CommunityFeatureGrid = ({
  namespace,
  titleKey,
  descriptionKey,
  items,
}: CommunityFeatureGridProps) => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={namespace}
      title={{ text: titleKey }}
      description={{ text: descriptionKey }}
    >
      <div className="community-feature-grid">
        {items.map((item) => (
          <SmartLink
            key={item.id}
            href={item.href}
            className="community-feature-grid__card"
          >
            <h3>{t(item.titleKey)}</h3>
            <p>{t(item.descriptionKey)}</p>
            <span>{t(item.actionKey)}</span>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
};
