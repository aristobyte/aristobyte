"use client";

import * as React from "react";
import {
  resolveLocaleFromPathname,
  translate,
  type TranslateFunctionType,
} from "@/data/translations";
import { usePathname } from "next/navigation";

const TranslateContext = React.createContext({
  t: ((_: string) => _) as TranslateFunctionType,
});

export type TranslateProviderPropsType = {
  children: React.ReactNode;
};

export const TranslateProvider = ({ children }: TranslateProviderPropsType) => {
  const pathname = usePathname();

  const locale = React.useMemo(
    () => resolveLocaleFromPathname(pathname),
    [pathname],
  );

  const translateFn = React.useMemo(
    () => translate(locale),
    [locale],
  );

  return (
    <TranslateContext.Provider value={{ t: translateFn }}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslate = () => {
  return React.useContext(TranslateContext);
};
