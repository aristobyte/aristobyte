"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { SmartLink } from "@/components/ui";
import { Align, SectionNamespace } from "@/config";
import { useTranslate } from "@/context";
import "./CommunityFeatureGrid.scss";

type CommunityFeatureGridProps = {
  namespace: SectionNamespace;
  titleKey: string;
  descriptionKey: string;
  itemPrefix: string;
  items: Array<{ id: string; href: string }>;
};

export const CommunityFeatureGrid = ({
  namespace,
  titleKey,
  descriptionKey,
  itemPrefix,
  items,
}: CommunityFeatureGridProps) => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={namespace}
      title={{ text: titleKey, align: Align.LEFT }}
      description={{ text: descriptionKey }}
    >
      <div className="community-feature-grid">
        {items.map((item) => (
          <SmartLink key={item.id} href={item.href} className="community-feature-grid__card">
            <h3>{t(`${itemPrefix}.${item.id}.title`)}</h3>
            <p>{t(`${itemPrefix}.${item.id}.description`)}</p>
            <span>{t(`${itemPrefix}.${item.id}.action`)}</span>
          </SmartLink>
        ))}
      </div>
    </Section>
  );
};
