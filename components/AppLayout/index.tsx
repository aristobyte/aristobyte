"use client";

import * as React from "react";

import { Footer, Header, Splash } from "@/components";

import "./AppLayout.scss";

export type AppLayoutPropsType = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutPropsType) => {
  const [isReady, setIsReady] = React.useState(false);

  return (
    <>
      {isReady && <Header />}
      <Splash isReady={isReady} setIsReady={setIsReady} />
      {isReady && (
        <>
          <main className="app-layout__main">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};
