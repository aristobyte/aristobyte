"use client";

import * as React from "react";

import { CdnIcon } from "@/components";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { SmartLink } from "@/components/ui";
import { type CommonLinkType } from "@/config";

import "./ProductDetails.scss";

type ProductFeature = {
  title: string;
  description: string;
};

export type ProductDetailsProps = {
  titleKey: string;
  descriptionKey: string;
  features: ProductFeature[];
  links: CommonLinkType[];
};

export const ProductDetails = ({
  titleKey,
  descriptionKey,
  features,
  links,
}: ProductDetailsProps) => {
  return (
    <Section
      namespace={SectionNamespace.ProductDetails}
      title={{ text: titleKey, align: Align.LEFT }}
      description={{ text: descriptionKey }}
    >
      <div className="product-details__actions">
        {links.map(({ label, href }) => (
          <SmartLink
            key={href}
            className="product-details__action"
            href={href}
            forceExternal
          >
            <span className="product-details__action-icon">
              <CdnIcon name="lucide:arrow-up-right" size={16} />
            </span>
            <span>{label}</span>
          </SmartLink>
        ))}
      </div>

      <ul className="product-details__grid">
        {features.map(({ title: featureTitle, description: featureDesc }) => (
          <li key={featureTitle} className="product-details__card">
            <h3 className="product-details__card-title">{featureTitle}</h3>
            <p className="product-details__card-description">{featureDesc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
