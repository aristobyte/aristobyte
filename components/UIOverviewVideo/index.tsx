"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";

import "./UIOverviewVideo.scss";

export const UIOverviewVideo = () => {
  return (
    <Section
      namespace={SectionNamespace.UIOverview}
      title={{ text: "ui.overview.title", align: Align.LEFT }}
      description={{ text: "ui.overview.description" }}
    >
      <div className="ui-overview__frame">
        <iframe
          className="ui-overview__video"
          src="https://www.youtube.com/embed/aKAhw2RkZfA"
          title="AristoByte UI Product Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </Section>
  );
};
