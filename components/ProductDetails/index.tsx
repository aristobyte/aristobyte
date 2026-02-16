"use client";

import * as React from "react";

import { CdnIcon } from "@/components";

import "./ProductDetails.scss";

type ProductFeature = {
  title: string;
  description: string;
};

type ProductLink = {
  label: string;
  href: string;
};

export type ProductDetailsProps = {
  title: string;
  description: string;
  features: ProductFeature[];
  links: ProductLink[];
};

export const ProductDetails = ({
  title,
  description,
  features,
  links,
}: ProductDetailsProps) => {
  return (
    <section className="product-details">
      <div className="product-details__container">
        <div className="product-details__content">
          <h2 className="product-details__title">{title}</h2>
          <p className="product-details__description">{description}</p>
        </div>

        <div className="product-details__actions">
          {links.map(({ label, href }) => (
            <a
              key={href}
              className="product-details__action"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="product-details__action-icon">
                <CdnIcon name="lucide:arrow-up-right" size={16} />
              </span>
              <span>{label}</span>
            </a>
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
      </div>
    </section>
  );
};
