"use client";

import * as React from "react";
import NextLink from "next/link";

type SmartLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  forceExternal?: boolean;
};

const isExternalHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

export const SmartLink = ({
  href,
  className,
  children,
  forceExternal,
}: SmartLinkProps) => {
  const isExternal = forceExternal ?? isExternalHref(href);

  if (isExternal) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <NextLink className={className} href={href}>
      {children}
    </NextLink>
  );
};

