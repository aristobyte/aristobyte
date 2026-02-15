"use client";

import * as React from "react";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { Icons } from "@aristobyte-ui/utils";
import { Gradient } from "@/components";
import { HEADER_SIZE, LinkType } from "@/utils";
import { useTranslate } from "@/context";

import "./Hero.scss";

export type HeroPropsType = {
  withGradient?: boolean;
  icon?: keyof typeof Icons;
  subtitle?: string;
  title?: string;
  description?: string;
  linkText?: string;
  links?: {
    id: string;
    href: string;
    type: LinkType;
  }[];
};

const offset = -HEADER_SIZE - 20;

export const Hero = ({
  withGradient,
  icon,
  subtitle,
  title,
  description,
  linkText,
  links,
}: HeroPropsType) => {
  const { t } = useTranslate();

  const subtitleDelay = 0;
  const iconDelay = 0.2 + subtitleDelay;
  const titleDelay = 0.2 + subtitleDelay;
  const descriptionDelay = titleDelay + 0.2;
  const linksDelay = descriptionDelay + 0.2;

  return (
    <section className="hero">
      {withGradient && <Gradient id="hero" preventMotionAnimation />}
      <div className="hero__container">
        <div className="hero__content">
          {icon && (
            <motion.span
              className="hero__icon"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: iconDelay }}
              viewport={{ once: false }}
            >
              {Icons[icon]({ size: "100%" })}
            </motion.span>
          )}
          {subtitle && (
            <motion.h3
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: subtitleDelay }}
              viewport={{ once: false }}
            >
              {t(subtitle)}
            </motion.h3>
          )}
          {title && (
            <motion.h2
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: titleDelay }}
              viewport={{ once: false }}
            >
              {t(title)}
            </motion.h2>
          )}
          {description && (
            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: descriptionDelay }}
              viewport={{ once: false }}
            >
              {t(description)}
            </motion.p>
          )}
        </div>
        {links && linkText && (
          <ul className="hero__links">
            {links.map(({ id, href, type }) => (
              <motion.li
                key={id}
                className={`hero__item hero__item--${id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: linksDelay }}
                viewport={{ once: false }}
              >
                {type === LinkType.NEXT_LINK && (
                  <NextLink
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="hero__link"
                  >
                    <span>{t(`${linkText}.${id}`)}</span>
                  </NextLink>
                )}
                {type === LinkType.SCROLL_LINK && (
                  <Link offset={offset} to={href} className="hero__link">
                    <span>{t(`${linkText}.${id}`)}</span>
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
