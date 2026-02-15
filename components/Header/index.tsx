"use client";

import * as React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { Config, Icons } from "@config";
import { CdnIcon } from "@/components";
import { useTranslate } from "@/context";

import "./Header.scss";

export const Header = () => {
  const { t } = useTranslate();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 900px)");
    const handleDesktopViewport = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    if (mediaQuery.matches) {
      setMenuOpen(false);
    }

    mediaQuery.addEventListener("change", handleDesktopViewport);
    return () => mediaQuery.removeEventListener("change", handleDesktopViewport);
  }, []);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.classList.toggle("header-menu-open", menuOpen);

    return () => {
      document.body.classList.remove("header-menu-open");
    };
  }, [menuOpen]);

  return (
    <header className={`header header--menu-${menuOpen ? "opened" : "closed"}`}>
      <div className="header__container">
        <NextLink href="/" className="header__logo">
          <span className="header__logo-icon">
            <span className="header__logo-icon-container">
              {Config.header.logo({})}
            </span>
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
          <ul
            className={`header__list header__list--${menuOpen ? "opened" : "closed"}`}
          >
            {Config.header.nav.map(({ id, href }) => (
              <li key={id}>
                <NextLink
                  className="header__link"
                  href={href}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="header__text">{t(`header.nav.${id}`)}</span>
                  <span className="header__arrow-icon">
                    <Icons.ArrowRight />
                  </span>
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
