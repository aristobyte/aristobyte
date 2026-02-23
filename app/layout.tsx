import * as React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { AppLayout } from "@/components/AppLayout";
import { HtmlMeta, structuredData, viewport as viewportConfig } from "@/data";
import { ClientProviders } from "./client-providers";
import "./globals.scss";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans/WorkSans-Thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans/WorkSans-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

const unisonPro = localFont({
  src: [
    {
      path: "./fonts/UnisonPro/UnisonPro-Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/UnisonPro/UnisonPro-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/UnisonPro/UnisonPro-BoldRoundItalic.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/UnisonPro/UnisonPro-BoldRound.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/UnisonPro/UnisonPro-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/UnisonPro/UnisonPro-LightRound.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/UnisonPro/UnisonPro-LightRoundItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-unison-pro",
});

const righteous = localFont({
  src: [
    {
      path: "./fonts/Righteous/Righteous-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-righteous",
});

export const metadata: Metadata = HtmlMeta["root"];

export const viewport: Viewport = viewportConfig;

export type RootLayoutPropsType = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutPropsType>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta
          name="facebook-domain-verification"
          content={process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION}
        />
      </head>
      <body className={`${workSans.variable} ${unisonPro.variable} ${righteous.variable}`}>
        <ClientProviders>
          <AppLayout>{children}</AppLayout>
        </ClientProviders>
      </body>
    </html>
  );
}
