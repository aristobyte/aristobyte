import * as React from "react";

import { Hero, ContactSection, HomeCommunity } from "@/components";
import { Config } from "@/config";

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
