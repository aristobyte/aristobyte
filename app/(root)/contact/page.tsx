import * as React from "react";

import { Hero } from "@/components/Hero";
import { ContactSection } from "@/components/Contact";
import { HomeCommunity } from "@/components/HomeCommunity";
import { Config } from "@/config";

export const dynamic = "force-dynamic";

export default function Contact() {
  return (
    <>
      <Hero
        withGradient
        icons={[{ id: "AristoByte", size: 200 }]}
        title="contact.hero.title"
        subtitle="contact.hero.subtitle"
        description="contact.hero.description"
        linkText="contact.hero.links"
        links={Config.contact.hero.links}
      />
      <ContactSection />
      <HomeCommunity />
    </>
  );
}
