"use client";

import * as React from "react";
import NextLink from "next/link";

import { CdnIcon } from "@/components/CdnIcon";
import { useConfig } from "@/config";
import { useTranslate } from "@/context";

import "./Footer.scss";

export const Footer = () => {
  const config = useConfig();
  const { t } = useTranslate();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label={t("footer.aria.label")}>
      <div className="footer__container">
        <div className="footer__panel">
          <div className="footer__brand">
            <span className="footer__badge">{t("footer.badge")}</span>
            <NextLink href="/" className="footer__logo">
              <span className="footer__logo-icon">
                <span className="footer__logo-glyph">
                  {config.header.logo({ size: 22 })}
                </span>
              </span>
              <span className="footer__logo-text">{t("header.brand")}</span>
            </NextLink>
            <p className="footer__description">{t("footer.description")}</p>
            <div className="footer__socials">
              {config.footer.socials.map(({ id, href, iconName, labelKey }) => (
                <a
                  key={id}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={`footer__social footer__social--${id}`}
                  aria-label={t(labelKey)}
                >
                  <CdnIcon name={iconName} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h3 className="footer__heading">
                {t("footer.columns.products")}
              </h3>
              <ul className="footer__list">
                {config.apps.products.map(({ id, href, titleKey }) => (
                  <li key={id}>
                    <NextLink href={href} className="footer__link">
                      {t(titleKey)}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">{t("footer.columns.company")}</h3>
              <ul className="footer__list">
                {config.header.nav.map(({ id, href, labelKey }) => (
                  <li key={id}>
                    <NextLink href={href} className="footer__link">
                      {t(labelKey)}
                    </NextLink>
                  </li>
                ))}
                <li>
                  <NextLink href="/compliance" className="footer__link">
                    {t("footer.complianceHub")}
                  </NextLink>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">
                {t("footer.columns.compliance")}
              </h3>
              <ul className="footer__list">
                {config.compliance.main.list.map(({ id, href, labelKey }) => (
                  <li key={id}>
                    <NextLink href={href} className="footer__link">
                      {t(labelKey)}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">{t("footer.columns.contact")}</h3>
              <ul className="footer__list">
                {config.contact.cards.map(({ id, href, titleKey }) => (
                  <li key={id}>
                    <a href={href} className="footer__link">
                      {t(titleKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            {t("footer.copyPrefix")} {year}. {t("footer.copySuffix")}
          </span>
        </div>
      </div>
    </footer>
  );
};
