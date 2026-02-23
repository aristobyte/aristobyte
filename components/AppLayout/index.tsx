"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Splash } from "@/components/Splash";

import "./AppLayout.scss";

export type AppLayoutPropsType = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutPropsType) => {
  const pathname = usePathname();
  const shouldShowSplash = pathname === "/";
  const [isReady, setIsReady] = React.useState(pathname !== "/");

  React.useEffect(() => {
    if (pathname !== "/") {
      setIsReady(true);
    }
  }, [pathname]);

  const isAppReady = !shouldShowSplash || isReady;

  return (
    <>
      {isAppReady && <Header />}
      <Splash enabled={shouldShowSplash} isReady={isReady} setIsReady={setIsReady} />
      {isAppReady && (
        <>
          <main className="app-layout__main">{children}</main>
          <Footer />
          <CookieConsent />
        </>
      )}
    </>
  );
};
