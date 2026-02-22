import Image from "next/image";
import { Section } from "@/components/Section";
import { SectionNamespace, Align, Title } from "@/config";

import "./InsightsVideo.scss";

export const InsightsVideo = () => {
  return (
    <Section
      namespace={SectionNamespace.InsightsVideo}
      title={{
        text: "insights.video.section.title",
        align: Align.LEFT,
        as: Title.H3,
      }}
      description={{ text: "insights.video.section.description" }}
    >
      <div className="insights-video__placeholder">
        <Image
          src="/og-image-1200x630.png"
          alt="Video placeholder"
          width={1200}
          height={630}
          className="insights-video__image"
        />
        <div className="insights-video__badge">Video Placeholder</div>
      </div>
    </Section>
  );
};
