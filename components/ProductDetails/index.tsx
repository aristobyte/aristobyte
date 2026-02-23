"use client";

import * as React from "react";

import { Section, SmartLink, CdnIcon } from "@/components";
import { SectionNamespace, type CommonLinkType } from "@/config";
import { useTranslate } from "@/context";

import "./ProductDetails.scss";

type ProductFeature = {
  titleKey: string;
  descriptionKey: string;
};

export type ProductDetailsProps = {
  titleKey: string;
  descriptionKey: string;
  features: ProductFeature[];
  links: Array<CommonLinkType & { labelKey?: string }>;
};

export const ProductDetails = ({
  titleKey,
  descriptionKey,
  features,
  links,
}: ProductDetailsProps) => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.ProductDetails}
      title={{ text: titleKey }}
      description={{ text: descriptionKey }}
    >
      <div className="product-details__actions">
        {links.map(({ label, labelKey, href }) => (
          <SmartLink
            key={href}
            className="product-details__action"
            href={href}
            forceExternal
          >
            <span className="product-details__action-icon">
              <CdnIcon name="lucide:arrow-up-right" size={16} />
            </span>
            <span>{t(labelKey ?? label)}</span>
          </SmartLink>
        ))}
      </div>

      <ul className="product-details__grid">
        {features.map(
          ({ titleKey: featureTitle, descriptionKey: featureDesc }) => (
            <li key={featureTitle} className="product-details__card">
              <h3 className="product-details__card-title">{t(featureTitle)}</h3>
              <p className="product-details__card-description">
                {t(featureDesc)}
              </p>
            </li>
          ),
        )}
      </ul>
    </Section>
  );
};
