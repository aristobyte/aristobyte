"use client";

import * as React from "react";
import NextLink from "next/link";

import { Icons } from "@aristobyte-ui/utils";
import type { HeaderMenuItem, MenuList } from "@config";
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
  isButtonActive?: (item: HeaderMenuItem) => boolean;
};

export const MenuListType = ({
  items,
  onChangeList,
  onLinkClick,
  onButtonAction,
  registerButtonRef,
  isButtonActive,
}: HeaderMenuListProps) => {
  const { t } = useTranslate();

  return (
    <>
      {items.map((item) => {
        const label = t(item.labelKey);

        if (item.type === "button") {
          return (
            <li key={item.id} className="header__item header__item--apps">
              <button
                type="button"
                className={`header__link header__link--button ${isButtonActive?.(item) ? "header__link--active" : ""}`}
                ref={(element) => registerButtonRef?.(item, element)}
                onClick={() => {
                  if (onButtonAction) {
                    onButtonAction(item);
                    return;
                  }

                  if (item.nextList) {
                    onChangeList(item.nextList);
                  }
                }}
                aria-haspopup="menu"
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
