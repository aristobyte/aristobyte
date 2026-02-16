"use client";

import * as React from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Icons } from "@aristobyte-ui/utils";
import { type HeaderMenuItem, MenuList, useConfig } from "@config";
import { CdnIcon, Portal } from "@/components";
import { useTranslate } from "@/context";
import { MenuListType } from "./MenuList";

import "./Header.scss";

export const Header = () => {
  const config = useConfig();
  const { t } = useTranslate();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [currentList, setCurrentList] = React.useState<MenuList>(MenuList.ROOT);
  const [appsDropdownOpen, setAppsDropdownOpen] = React.useState(false);
  const [appsDropdownPos, setAppsDropdownPos] = React.useState({
    top: 0,
    left: 0,
    minWidth: 250,
  });
  const appsButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);
  const currentListData = config.header.menuLists[currentList];

  const mobileTitle = React.useMemo(() => {
    if (pathname === "/") return "AristoByte";
    if (pathname.startsWith("/ui")) return t("header.nav.ui");
    if (pathname.startsWith("/apps")) return t("header.nav.apps");
    if (pathname.startsWith("/community")) return t("header.nav.community");
    if (pathname.startsWith("/insights")) return t("header.nav.insights");
    if (pathname.startsWith("/contact")) return t("header.nav.contact");
    if (pathname.startsWith("/compliance")) return "Compliance";
    return "AristoByte";
  }, [pathname, t]);

  const closeMenu = React.useCallback(() => {
    setMenuOpen(false);
    setCurrentList(MenuList.ROOT);
    setAppsDropdownOpen(false);
  }, []);

  const closeAppsDropdown = React.useCallback(() => {
    setAppsDropdownOpen(false);
  }, []);

  const updateAppsDropdownPosition = React.useCallback(() => {
    const trigger = appsButtonRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    setAppsDropdownPos({
      top: rect.bottom + 10,
      left: rect.left + rect.width / 2,
      minWidth: Math.max(250, rect.width + 90),
    });
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 900px)");
    setIsDesktop(mediaQuery.matches);

    const handleDesktopViewport = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
      if (event.matches) {
        closeMenu();
      } else {
        closeAppsDropdown();
      }
    };

    if (mediaQuery.matches) {
      closeMenu();
    }

    mediaQuery.addEventListener("change", handleDesktopViewport);
    return () =>
      mediaQuery.removeEventListener("change", handleDesktopViewport);
  }, [closeMenu, closeAppsDropdown]);

  React.useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  React.useEffect(() => {
    if (!appsDropdownOpen || !isDesktop) return;

    updateAppsDropdownPosition();
    const handlePosition = () => updateAppsDropdownPosition();
    window.addEventListener("resize", handlePosition);
    window.addEventListener("scroll", handlePosition, true);
    return () => {
      window.removeEventListener("resize", handlePosition);
      window.removeEventListener("scroll", handlePosition, true);
    };
  }, [appsDropdownOpen, isDesktop, updateAppsDropdownPosition]);

  React.useEffect(() => {
    if (!appsDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedTrigger = appsButtonRef.current?.contains(target);
      const clickedDropdown = dropdownRef.current?.contains(target);
      if (clickedTrigger || clickedDropdown) return;
      closeAppsDropdown();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAppsDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [appsDropdownOpen, closeAppsDropdown]);

  React.useEffect(() => {
    document.body.classList.toggle("header-menu-open", menuOpen);

    return () => {
      document.body.classList.remove("header-menu-open");
    };
  }, [menuOpen]);

  const handleListChange = React.useCallback(
    (nextList: MenuList) => {
      if (isDesktop) return;
      setCurrentList(nextList);
    },
    [isDesktop],
  );

  const handleButtonAction = React.useCallback(
    (item: { id: string; nextList?: MenuList }) => {
      if (item.id !== "apps") {
        if (item.nextList) {
          handleListChange(item.nextList);
        }
        return;
      }

      if (isDesktop) {
        updateAppsDropdownPosition();
        setAppsDropdownOpen((value) => !value);
        return;
      }

      if (item.nextList) {
        setCurrentList(item.nextList);
      }
    },
    [handleListChange, isDesktop, updateAppsDropdownPosition],
  );

  const handleGoBackClick = () => {
    if (!currentListData.goBack) {
      return;
    }
    setCurrentList(currentListData.goBack);
  };

  const handleToggleClick = () => {
    if (menuOpen) {
      closeMenu();
      return;
    }

    setCurrentList(MenuList.ROOT);
    setMenuOpen(true);
  };

  const handleLinkClick = () => {
    closeMenu();
    closeAppsDropdown();
  };

  const registerButtonRef = (
    item: HeaderMenuItem,
    element: HTMLButtonElement | null,
  ) => {
    if (item.id === "apps") {
      appsButtonRef.current = element;
    }
  };

  return (
    <header className={`header header--menu-${menuOpen ? "opened" : "closed"}`}>
      <div className="header__container">
        <div className="header__mobile-left">
          <button
            type="button"
            className={`header__mobile-square header__mobile-square--left ${menuOpen ? "header__mobile-square--open" : ""}`}
            aria-label={menuOpen ? "Go back" : "Go to homepage"}
            disabled={menuOpen && !currentListData.goBack}
            onClick={() => {
              if (menuOpen) {
                handleGoBackClick();
                return;
              }
              router.push("/");
            }}
          >
            <div className="header__mobile-square-icon header__mobile-square-icon--logo">
              <span className="header__mobile-square-glyph header__mobile-square-glyph--logo">
                {config.header.logo({ size: 20 })}
              </span>
            </div>
            <span className="header__mobile-square-icon header__mobile-square-icon--back">
              <span className="header__mobile-square-glyph header__mobile-square-glyph--back">
                <Icons.ArrowLeft />
              </span>
            </span>
          </button>
        </div>

        <div className="header__mobile-title">{mobileTitle}</div>

        <NextLink href="/" className="header__logo header__logo--desktop">
          <span className="header__logo-icon">
            <span className="header__logo-icon-container">
              <span className="header__logo-glyph">
                {config.header.logo({ size: 22 })}
              </span>
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
          onClick={handleToggleClick}
        >
          <span className="header__toggle-icon-wrap">
            <span className="header__toggle-icon header__toggle-icon--menu">
              <span className="header__toggle-glyph">
                <CdnIcon name="lucide:menu" size={22} />
              </span>
            </span>
            <span className="header__toggle-icon header__toggle-icon--close">
              <span className="header__toggle-glyph">
                <CdnIcon name="lucide:x" size={22} />
              </span>
            </span>
          </span>
        </button>

        <nav id="header-nav" className="header__nav" aria-label="Primary">
          <ul
            className={`header__list header__list--${menuOpen ? "opened" : "closed"}`}
          >
            <MenuListType
              items={currentListData.menu}
              onChangeList={handleListChange}
              onLinkClick={closeMenu}
              onButtonAction={handleButtonAction}
              registerButtonRef={registerButtonRef}
              isButtonActive={(item) =>
                item.id === "apps" && isDesktop && appsDropdownOpen
              }
            />
          </ul>
        </nav>
      </div>
      {isDesktop && (
        <Portal>
          <div
            ref={dropdownRef}
            className={`header__dropdown header__dropdown--${appsDropdownOpen ? "open" : "closed"}`}
            role="menu"
            style={{
              top: `${appsDropdownPos.top}px`,
              left: `${appsDropdownPos.left}px`,
              minWidth: `${appsDropdownPos.minWidth}px`,
            }}
          >
            <ul className="header__dropdown-list">
              <MenuListType
                items={config.header.menuLists[MenuList.APPS].menu}
                onChangeList={handleListChange}
                onLinkClick={handleLinkClick}
              />
            </ul>
          </div>
        </Portal>
      )}
    </header>
  );
};
