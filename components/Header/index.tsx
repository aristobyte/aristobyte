"use client";

import * as React from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { Config } from "@config";
import { CdnIcon } from "@/components";
import { useTranslate } from "@/context";

import "./Header.scss";

export const Header = () => {
  const { t } = useTranslate();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={`header ${menuOpen ? "header--menu-open" : ""}`}
      initial={{ opacity: 0, y: -120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="header__container">
        <NextLink href="/" className="header__logo">
          <span className="header__logo-icon">
            <span
              className="header__logo-icon-container"
              dangerouslySetInnerHTML={{ __html: Config.header.logo }}
            />
          </span>
          <span className="header__logo-text">AristoByte</span>
        </NextLink>

        <button
          className="header__toggle"
          type="button"
          aria-controls="header-nav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? (
            <CdnIcon name="lucide:x" size={22} />
          ) : (
            <CdnIcon name="lucide:menu" size={22} />
          )}
        </button>

        <nav id="header-nav" className="header__nav" aria-label="Primary">
          <ul className={`header__list ${menuOpen ? "header__list--open" : ""}`}>
            {Config.header.nav.map(({ id, href }) => (
              <li key={id}>
                <NextLink
                  className="header__link"
                  href={href}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`header.nav.${id}`)}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};
