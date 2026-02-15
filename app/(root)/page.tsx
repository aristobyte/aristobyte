import * as React from "react";
import {
  Hero,
  Features,
  UIComponentsPreview,
  HomeServices,
  HomeProcess,
  HomeStack,
  HomeCTA,
  HomeToolkit,
  HomeCommunity,
} from "@/components";
import { Config } from "@/config";

export default function Home() {
  return (
    <>
      <Hero
        withGradient
        icon="AristoByte"
        title="home.hero.title"
        subtitle="home.hero.subtitle"
        description="home.hero.description"
        linkText="home.hero.links"
        links={Config.home.hero.links}
      />
      <Features />
      <HomeServices />
      <HomeProcess />
      <HomeToolkit />
      <UIComponentsPreview />
      <HomeStack />
      <HomeCommunity />
      <HomeCTA />
    </>
  );
}
