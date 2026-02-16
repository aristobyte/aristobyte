"use client";

import * as React from "react";
import NextLink from "next/link";

import { Config } from "@/config";
import { useTranslate } from "@/context";

import "./AppsProducts.scss";

export const AppsProducts = () => {
  const { t } = useTranslate();

  return (
    <section className="apps-products">
      <div className="apps-products__container">
        <div className="apps-products__content">
          <h2 className="apps-products__title">{t("apps.products.title")}</h2>
          <p className="apps-products__description">
            {t("apps.products.description")}
          </p>
        </div>
        <ul className="apps-products__grid">
          {Config.apps.products.map(({ id, href, status }) => (
            <li key={id} className="apps-products__card">
              <span
                className={`apps-products__status apps-products__status--${status}`}
              >
                {t(`apps.products.status.${status}`)}
              </span>
              <h3 className="apps-products__card-title">
                {t(`apps.products.items.${id}.title`)}
              </h3>
              <p className="apps-products__card-description">
                {t(`apps.products.items.${id}.description`)}
              </p>
              <NextLink href={href} className="apps-products__card-link">
                <span>{t("apps.products.cardAction")}</span>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
