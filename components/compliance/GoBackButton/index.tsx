import * as React from "react";
import NextLink from "next/link";

import { Icons } from "@aristobyte-ui/utils";

import "./GoBackButton.scss";

export const GoBackButton = () => (
  <NextLink href="/compliance" className="go-back-button">
    <Icons.ArrowLeft />
  </NextLink>
);
