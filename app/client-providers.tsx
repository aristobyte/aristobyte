"use client";

import * as React from "react";
import { CookieConsentProvider, TranslateProvider } from "@/context";

export type ClientProvidersPropsType = {
  children: React.ReactNode;
};

export const ClientProviders = ({ children }: ClientProvidersPropsType) => {
  return (
    <TranslateProvider>
      <CookieConsentProvider>{children}</CookieConsentProvider>
    </TranslateProvider>
  );
};
