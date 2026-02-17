import * as React from "react";
import {
  Hero,
  Features,
  UIComponentsPreview,
  HomeServices,
  HomeProcess,
  HomeStack,
  HomeCTA,
  HomeCommunity,
} from "@/components";
import { Config } from "@/config";

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
