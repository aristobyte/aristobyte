"use client";

import * as React from "react";

import { type MenuListType as ConfigMenuListType, MenuList } from "@config";
import { Portal } from "@/components/Portal";
import { MenuListType } from "./MenuList";

type DesktopDropdownProps = {
  isDesktop: boolean;
  activeList: MenuList.APPS | MenuList.COMMUNITY | MenuList.INSIGHTS | null;
  renderedList: MenuList.APPS | MenuList.COMMUNITY | MenuList.INSIGHTS | null;
  position: {
    top: number;
    left: number;
    minWidth: number;
  };
  menuLists: Record<MenuList, ConfigMenuListType>;
  triggerRefs: React.MutableRefObject<
    Partial<Record<MenuList.APPS | MenuList.COMMUNITY | MenuList.INSIGHTS, HTMLButtonElement | null>>
  >;
  onClose: () => void;
  onLinkClick: () => void;
  getMenuId: (list: MenuList.APPS | MenuList.COMMUNITY | MenuList.INSIGHTS) => string;
  contentKey: number;
};

export const DesktopDropdown = ({
  isDesktop,
  activeList,
  renderedList,
  position,
  menuLists,
  triggerRefs,
  onClose,
  onLinkClick,
  getMenuId,
  contentKey,
}: DesktopDropdownProps) => {
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!activeList) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedTrigger = Object.values(triggerRefs.current).some((button) =>
        button?.contains(target),
      );
      const clickedDropdown = dropdownRef.current?.contains(target);
      if (clickedTrigger || clickedDropdown) return;
      onClose();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeList, onClose, triggerRefs]);

  if (!isDesktop || !renderedList) return null;

  return (
    <Portal>
      <div
        ref={dropdownRef}
        id={getMenuId(renderedList)}
        className={`header__dropdown header__dropdown--${activeList ? "open" : "closed"}`}
        role="menu"
        aria-hidden={!activeList}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          minWidth: `${position.minWidth}px`,
        }}
      >
        <ul key={contentKey} className="header__dropdown-list header__dropdown-list--animated">
          <MenuListType
            items={menuLists[renderedList].menu}
            onChangeList={() => {
              // Desktop dropdown only contains links for now.
            }}
            onLinkClick={onLinkClick}
          />
        </ul>
      </div>
    </Portal>
  );
};
