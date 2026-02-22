"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";

import "./AppsHighlights.scss";

const highlights = [
  "/images/aristobot/aristobot-holding-bulb.png",
  "/images/aristobot/aristobot-holding-chat-app.png",
  "/images/aristobot/aristobot-facing-left.png",
];

export const AppsHighlights = () => {
  return (
    <Section
      namespace={SectionNamespace.AppsHighlights}
      title={{ text: "apps.highlights.title", align: Align.LEFT }}
      description={{ text: "apps.highlights.description" }}
    >
      <div className="apps-highlights__grid">
        {highlights.map((src, index) => (
          <div key={src} className="apps-highlights__card">
            <img
              src={src}
              alt={`Aristobot ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
