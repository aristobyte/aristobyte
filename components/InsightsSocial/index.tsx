"use client";

import * as React from "react";
import Script from "next/script";
import { useTranslate } from "@/context";
import { Config, useConfig } from "@/config";
import { CdnIcon, Slide, Slider } from "@/components";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { SmartLink } from "@/components/ui";

import "./InsightsSocial.scss";

const iconMap: Record<string, string> = {
  instagram: "mdi:instagram",
  facebook: "mdi:facebook",
  "linked-in": "mdi:linkedin",
  twitter: "mdi:twitter",
};

export const InsightsSocial = () => {
  const { t } = useTranslate();
  const { insights } = useConfig();
  const processEmbeds = React.useCallback(() => {
    if (typeof window === "undefined") return;
    const instgrm = (
      window as unknown as {
        instgrm?: { Embeds?: { process: () => void } };
      }
    ).instgrm;
    instgrm?.Embeds?.process?.();
  }, []);

  React.useEffect(() => {
    processEmbeds();
  }, [processEmbeds]);

  return (
    <Section
      namespace={SectionNamespace.InsightsSocial}
      title={{ text: "insights.social.title", align: Align.LEFT }}
      description={{ text: "insights.social.description" }}
    >
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processEmbeds}
      />
      <div className="insights-social__grid">
        {Config.insights.socials.map(({ id, href }) => (
          <SmartLink key={id} href={href} className="insights-social__card">
            <span className="insights-social__icon">
              <CdnIcon name={iconMap[id] ?? "mdi:link"} size={22} />
            </span>
            <span className="insights-social__label">
              {t(`insights.social.links.${id}`)}
            </span>
          </SmartLink>
        ))}
      </div>

      <Slider
        className="insights-social__slider"
        title={t("insights.social.instagram.title")}
        itemLabel="Instagram post"
        slidesToShow={1}
        slidesToScroll={1}
        gap={14}
        dotMode="page"
        responsive={[
          { minWidth: 380, slidesToShow: 1, slidesToScroll: 1 },
          { minWidth: 600, slidesToShow: 2, slidesToScroll: 1 },
          { minWidth: 800, slidesToShow: 3, slidesToScroll: 2 },
          { minWidth: 1200, slidesToShow: 4, slidesToScroll: 2 },
        ]}
      >
        {insights.instagramPosts.map((post) => (
          <Slide key={post.id}>
            <div className="insights-social__embed">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={post.url}
                data-instgrm-version="14"
              />
            </div>
          </Slide>
        ))}
      </Slider>
    </Section>
  );
};
