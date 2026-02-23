"use client";
import Image from "next/image";
import { useTranslate } from "@/context";
import { Section } from "@/components";
import { SectionNamespace, Title } from "@/config";

import "./InsightsVideo.scss";

export const InsightsVideo = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.InsightsVideo}
      title={{
        text: "insights.video.section.title",
        as: Title.H3,
      }}
      description={{ text: "insights.video.section.description" }}
    >
      <div className="insights-video__placeholder">
        <Image
          src="/og-image-1200x630.png"
          alt={t("insights.video.image-alt")}
          width={1200}
          height={630}
          className="insights-video__image"
        />
        <div className="insights-video__badge">{t("insights.video.badge")}</div>
      </div>
    </Section>
  );
};
