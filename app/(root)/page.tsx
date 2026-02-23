import * as React from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { UIComponentsPreview } from "@/components/UIComponentsPreview";
import { HomeServices } from "@/components/HomeServices";
import { HomeProcess } from "@/components/HomeProcess";
import { HomeStack } from "@/components/HomeStack";
import { HomeCTA } from "@/components/HomeCTA";
import { HomeCommunity } from "@/components/HomeCommunity";
import { Config } from "@/config";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="home.hero.title"
        subtitle="home.hero.subtitle"
        description="home.hero.description"
        linkText="home.hero.links"
        links={Config.home.hero.links}
      />
      <Features />
      <HomeServices />
      <HomeProcess />
      <HomeStack />
      <HomeCommunity />
      <HomeCTA />
      <UIComponentsPreview />
    </>
  );
}
