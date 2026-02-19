"use client";

import * as React from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Icons } from "@aristobyte-ui/utils";
import { type HeaderMenuItem, MenuList, useConfig } from "@config";
import { CdnIcon } from "@/components";
import { useTranslate } from "@/context";
import { DesktopDropdown } from "./DesktopDropdown";
import { MenuListType } from "./MenuList";

import "./Header.scss";

export const Header = () => {
  const headerId = React.useId();
  const config = useConfig();
  const { t } = useTranslate();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [currentList, setCurrentList] = React.useState<MenuList>(MenuList.ROOT);
  const [desktopDropdownList, setDesktopDropdownList] = React.useState<
    MenuList.APPS | MenuList.INSIGHTS | null
  >(null);
  const [desktopDropdownRenderedList, setDesktopDropdownRenderedList] = React.useState<
    MenuList.APPS | MenuList.INSIGHTS | null
  >(null);
  const [desktopDropdownContentKey, setDesktopDropdownContentKey] = React.useState(0);
  const [desktopDropdownPos, setDesktopDropdownPos] = React.useState({
    top: 0,
    left: 0,
    minWidth: 250,
  });
  const desktopButtonRefs = React.useRef<
    Partial<Record<MenuList.APPS | MenuList.INSIGHTS, HTMLButtonElement | null>>
  >({});
  const currentListData = config.header.menuLists[currentList];
  const getDesktopMenuId = React.useCallback(
    (list: MenuList.APPS | MenuList.INSIGHTS) => `${headerId}-${list}-menu`,
    [headerId],
  );

  const mobileTitle = React.useMemo(() => {
    if (pathname === "/") return "AristoByte";
    if (pathname.startsWith("/apps/aristobyte-ui-cli")) return "AristoByte UI CLI";
    if (pathname.startsWith("/apps/aristobyte-ui")) return "AristoByte UI";
    if (pathname.startsWith("/apps/aristo-badges")) return "AristoBadges";
    if (pathname.startsWith("/apps/aristo-repo")) return "AristoRepo";
    if (pathname.startsWith("/apps")) return t("header.nav.apps");
    if (pathname.startsWith("/insights/open-source-radar")) {
      return t("header.nav.insights-open-source-radar");
    }
    if (pathname.startsWith("/insights/case-studies")) {
      return t("header.nav.insights-case-studies");
    }
    if (pathname.startsWith("/insights/engineering-notes")) {
      return t("header.nav.insights-engineering-notes");
    }
    if (pathname.startsWith("/insights/newsletter")) {
      return t("header.nav.insights-newsletter");
    }
    if (pathname.startsWith("/community")) return t("header.nav.community");
    if (pathname.startsWith("/insights")) return t("header.nav.insights");
    if (pathname.startsWith("/contact")) return t("header.nav.contact");
    if (pathname.startsWith("/compliance")) return "Compliance";
    return "AristoByte";
  }, [pathname, t]);

  const closeMenu = React.useCallback(() => {
    setMenuOpen(false);
    setCurrentList(MenuList.ROOT);
    setDesktopDropdownList(null);
    setDesktopDropdownRenderedList(null);
  }, []);

  const closeDesktopDropdown = React.useCallback(() => {
    setDesktopDropdownList(null);
  }, []);

  const updateDesktopDropdownPosition = React.useCallback(
    (list: MenuList.APPS | MenuList.INSIGHTS) => {
      const trigger = desktopButtonRefs.current[list];
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      setDesktopDropdownPos({
        top: rect.bottom + 10,
        left: rect.left + rect.width / 2,
        minWidth: Math.max(250, rect.width + 90),
      });
    },
    [],
  );

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
        closeDesktopDropdown();
      }
    };

    if (mediaQuery.matches) {
      closeMenu();
    }

    mediaQuery.addEventListener("change", handleDesktopViewport);
    return () =>
      mediaQuery.removeEventListener("change", handleDesktopViewport);
  }, [closeMenu, closeDesktopDropdown]);

  React.useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  React.useEffect(() => {
    if (!desktopDropdownList || !isDesktop) return;

    updateDesktopDropdownPosition(desktopDropdownList);
    const handlePosition = () =>
      updateDesktopDropdownPosition(desktopDropdownList);
    window.addEventListener("resize", handlePosition);
    window.addEventListener("scroll", handlePosition, true);
    return () => {
      window.removeEventListener("resize", handlePosition);
      window.removeEventListener("scroll", handlePosition, true);
    };
  }, [desktopDropdownList, isDesktop, updateDesktopDropdownPosition]);

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
      if (!item.nextList) return;

      if (isDesktop) {
        if (
          item.nextList !== MenuList.APPS &&
          item.nextList !== MenuList.INSIGHTS
        ) {
          return;
        }

        const nextDesktopList = item.nextList;
        updateDesktopDropdownPosition(nextDesktopList);

        if (desktopDropdownList === nextDesktopList) {
          setDesktopDropdownList(null);
          return;
        }

        setDesktopDropdownRenderedList(nextDesktopList);
        setDesktopDropdownContentKey((current) => current + 1);

        if (!desktopDropdownList) {
          requestAnimationFrame(() => {
            setDesktopDropdownList(nextDesktopList);
          });
          return;
        }

        setDesktopDropdownList(nextDesktopList);
        return;
      }

      setCurrentList(item.nextList);
    },
    [desktopDropdownList, isDesktop, updateDesktopDropdownPosition],
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
    closeDesktopDropdown();
  };

  const registerButtonRef = (
    item: HeaderMenuItem,
    element: HTMLButtonElement | null,
  ) => {
    if (item.nextList === MenuList.APPS || item.nextList === MenuList.INSIGHTS) {
      desktopButtonRefs.current[item.nextList] = element;
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
              getButtonId={(item) =>
                item.nextList === MenuList.APPS || item.nextList === MenuList.INSIGHTS
                  ? `${headerId}-${item.nextList}-button`
                  : undefined
              }
              getButtonAriaControls={(item) =>
                item.nextList === MenuList.APPS || item.nextList === MenuList.INSIGHTS
                  ? getDesktopMenuId(item.nextList)
                  : undefined
              }
              getButtonExpanded={(item) =>
                Boolean(
                  item.nextList &&
                    (item.nextList === MenuList.APPS ||
                      item.nextList === MenuList.INSIGHTS) &&
                    isDesktop &&
                    desktopDropdownList === item.nextList,
                )
              }
              isButtonActive={(item) =>
                Boolean(
                  item.nextList &&
                    (item.nextList === MenuList.APPS ||
                      item.nextList === MenuList.INSIGHTS) &&
                    isDesktop &&
                    desktopDropdownList === item.nextList,
                )
              }
            />
          </ul>
        </nav>
      </div>
      <DesktopDropdown
        isDesktop={isDesktop}
        activeList={desktopDropdownList}
        renderedList={desktopDropdownRenderedList}
        position={desktopDropdownPos}
        menuLists={config.header.menuLists}
        triggerRefs={desktopButtonRefs}
        onClose={closeDesktopDropdown}
        onLinkClick={handleLinkClick}
        getMenuId={getDesktopMenuId}
        contentKey={desktopDropdownContentKey}
      />
    </header>
  );
};
