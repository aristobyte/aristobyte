"use client";

import * as React from "react";
import NextLink from "next/link";

import { CdnIcon } from "@/components";
import { useConfig } from "@/config";
import { useTranslate } from "@/context";

import "./Footer.scss";

const socialLinks = [
  {
    id: "github",
    labelKey: "footer.social.github",
    href: "https://github.com/aristobyte",
    icon: "mdi:github",
  },
  {
    id: "stackoverflow",
    labelKey: "footer.social.stackoverflow",
    href: "https://stackoverflow.com/users/30507294/aristobyte",
    icon: "mdi:stack-overflow",
  },
  {
    id: "npm",
    labelKey: "footer.social.npm",
    href: "https://www.npmjs.com/~aristobyte_team",
    icon: "mdi:npm",
  },
  {
    id: "email",
    labelKey: "footer.social.email",
    href: "mailto:info.aristobyte@gmail.com",
    icon: "mdi:email-outline",
  },
  {
    id: "linkedin",
    labelKey: "footer.social.linkedin",
    href: "http://linkedin.com/company/aristobyte/",
    icon: "mdi:linkedin",
  },
  {
    id: "instagram",
    labelKey: "footer.social.instagram",
    href: "https://www.instagram.com/aristo_byte/",
    icon: "mdi:instagram",
  },
  {
    id: "youtube",
    labelKey: "footer.social.youtube",
    href: "https://www.youtube.com/@aristobyte",
    icon: "mdi:youtube",
  },
  {
    id: "open-collective",
    labelKey: "footer.social.open-collective",
    href: "https://opencollective.com/aristobyte",
    icon: "simple-icons:opencollective",
  },
  {
    id: "patreon",
    labelKey: "footer.social.patreon",
    href: "https://www.patreon.com/c/aristobyte",
    icon: "mdi:patreon",
  },
];

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
              {socialLinks.map(({ id, href, icon, labelKey }) => (
                <a
                  key={id}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={`footer__social footer__social--${id}`}
                  aria-label={t(labelKey)}
                >
                  <CdnIcon name={icon} size={16} />
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
                {config.apps.products.map(({ id, href }) => (
                  <li key={id}>
                    <NextLink href={href} className="footer__link">
                      {t(`apps.products.items.${id}.title`)}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">{t("footer.columns.company")}</h3>
              <ul className="footer__list">
                {config.header.nav.map(({ id, href }) => (
                  <li key={id}>
                    <NextLink href={href} className="footer__link">
                      {t(`header.nav.${id}`)}
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
                {config.compliance.main.list.map(({ id, href }) => (
                  <li key={id}>
                    <NextLink href={href} className="footer__link">
                      {t(`compliance.main.list.${id}`)}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">{t("footer.columns.contact")}</h3>
              <ul className="footer__list">
                {config.contact.cards.map(({ id, href }) => (
                  <li key={id}>
                    <a href={href} className="footer__link">
                      {t(`contact.cards.${id}.title`)}
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
