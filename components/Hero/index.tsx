"use client";

import * as React from "react";
import NextLink from "next/link";
import { Link } from "react-scroll";

import { Icons } from "@aristobyte-ui/utils";
import { Gradient } from "@/components/Gradient";
import { HEADER_SIZE, LinkType } from "@/config";
import { useTranslate } from "@/context";

import "./Hero.scss";

export type HeroPropsType = {
  withGradient?: boolean;
  icons?: { id: keyof typeof Icons; size?: number }[];
  subtitle?: string;
  title?: string;
  description?: string;
  linkText?: string;
  links?: {
    id: string;
    href: string;
    type: LinkType;
    labelKey: string;
  }[];
};

const offset = -HEADER_SIZE - 20;

export const Hero = ({
  withGradient,
  icons,
  subtitle,
  title,
  description,
  linkText,
  links,
}: HeroPropsType) => {
  const { t } = useTranslate();

  return (
    <section className="hero">
      {withGradient && <Gradient id="hero" preventMotionAnimation />}
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__icons">
            {icons &&
              icons.map(({ id, size }, index) => (
                <span
                  key={`${id}-${index}`}
                  className="hero__icon hero__animate hero__animate--icon"
                >
                  <span className="hero__icon-glyph">
                    {Icons[id]({ size: size || "100%" })}
                  </span>
                </span>
              ))}
          </div>
          {subtitle && (
            <h3 className="hero__subtitle hero__animate hero__animate--subtitle">
              {t(subtitle)}
            </h3>
          )}
          {title && (
            <h2 className="hero__title hero__animate hero__animate--title">
              {t(title)}
            </h2>
          )}
          {description && (
            <p className="hero__description hero__animate hero__animate--description">
              {t(description)}
            </p>
          )}
        </div>
        {links && linkText && (
          <ul className="hero__links">
            {links.map(({ id, href, type, labelKey }) => (
              <li
                key={id}
                className={`hero__item hero__item--${id} hero__animate hero__animate--links`}
              >
                {type === LinkType.NEXT_LINK && (
                  <NextLink
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="hero__link"
                  >
                    <span>{t(labelKey)}</span>
                  </NextLink>
                )}
                {type === LinkType.SCROLL_LINK && (
                  <Link offset={offset} to={href} className="hero__link">
                    <span>{t(labelKey)}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
