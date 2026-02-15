"use client";

import * as React from "react";
import { Link } from "react-scroll";
import { HEADER_SIZE } from "@/config";

import "./ScrollLink.scss";

export type ScrollLinkPropsType = {
  children: React.ReactElement | React.ReactNode | string;
  to: string;
  smooth?: boolean | string;
  duration?: number;
  offset?: number;
};

export const ScrollLink = ({
  children,
  to,
  smooth = "easeOut",
  duration = 150,
  offset = -HEADER_SIZE,
}: ScrollLinkPropsType) => (
  <Link
    className="scroll-link"
    to={to}
    smooth={smooth}
    duration={duration}
    offset={offset}
  >
    {children}
  </Link>
);
