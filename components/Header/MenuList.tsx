"use client";

import * as React from "react";
import NextLink from "next/link";

import { Icons } from "@aristobyte-ui/utils";
import { MenuList, type HeaderMenuItem } from "@config";
import { useTranslate } from "@/context";

type HeaderMenuListProps = {
  items: HeaderMenuItem[];
  onChangeList: (nextList: MenuList) => void;
  onLinkClick: () => void;
  onButtonAction?: (item: HeaderMenuItem) => void;
  registerButtonRef?: (
    item: HeaderMenuItem,
    element: HTMLButtonElement | null,
  ) => void;
  getButtonId?: (item: HeaderMenuItem) => string | undefined;
  getButtonAriaControls?: (item: HeaderMenuItem) => string | undefined;
  getButtonExpanded?: (item: HeaderMenuItem) => boolean;
  isButtonActive?: (item: HeaderMenuItem) => boolean;
};

export const MenuListType = ({
  items,
  onChangeList,
  onLinkClick,
  onButtonAction,
  registerButtonRef,
  getButtonId,
  getButtonAriaControls,
  getButtonExpanded,
  isButtonActive,
}: HeaderMenuListProps) => {
  const { t } = useTranslate();

  return (
    <>
      {items.map((item) => {
        const label = t(item.labelKey);

        if (item.type === "button") {
          const isDropdownButton =
            item.nextList === MenuList.APPS ||
            item.nextList === MenuList.INSIGHTS;

          return (
            <li
              key={item.id}
              className={`header__item ${isDropdownButton ? "header__item--dropdown" : ""}`}
            >
              <button
                type="button"
                className={`header__link header__link--button ${isButtonActive?.(item) ? "header__link--active" : ""}`}
                ref={(element) => registerButtonRef?.(item, element)}
                id={getButtonId?.(item)}
                onClick={() => {
                  if (onButtonAction) {
                    onButtonAction(item);
                    return;
                  }

                  if (item.nextList) {
                    onChangeList(item.nextList);
                  }
                }}
                aria-haspopup={isDropdownButton ? "menu" : undefined}
                aria-controls={getButtonAriaControls?.(item)}
                aria-expanded={getButtonExpanded?.(item)}
              >
                <span className="header__text">{label}</span>
                <span className="header__desktop-caret" aria-hidden="true">
                  <Icons.ArrowRight />
                </span>
                <span className="header__arrow-icon">
                  <Icons.ArrowRight />
                </span>
              </button>
            </li>
          );
        }

        if (item.type === "external-link" && item.href) {
          return (
            <li key={item.id}>
              <a
                className="header__link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={onLinkClick}
              >
                <span className="header__text">{label}</span>
                <span className="header__arrow-icon">
                  <Icons.ArrowRight />
                </span>
              </a>
            </li>
          );
        }

        if (item.href) {
          return (
            <li key={item.id}>
              <NextLink
                className="header__link"
                href={item.href}
                onClick={onLinkClick}
              >
                <span className="header__text">{label}</span>
                <span className="header__arrow-icon">
                  <Icons.ArrowRight />
                </span>
              </NextLink>
            </li>
          );
        }

        return null;
      })}
    </>
  );
};
