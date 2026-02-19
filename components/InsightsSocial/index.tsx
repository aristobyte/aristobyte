"use client";

import * as React from "react";
import NextLink from "next/link";
import Script from "next/script";
import { useTranslate } from "@/context";
import { Config, useConfig } from "@/config";
import { CdnIcon, Slide, Slider } from "@/components";

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
    <section className="insights-social">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processEmbeds}
      />
      <div className="insights-social__container">
        <div className="insights-social__content">
          <h2 className="insights-social__title">
            {t("insights.social.title")}
          </h2>
          <p className="insights-social__description">
            {t("insights.social.description")}
          </p>
        </div>
        <div className="insights-social__grid">
          {Config.insights.socials.map(({ id, href }) => (
            <NextLink
              key={id}
              href={href}
              className="insights-social__card"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="insights-social__icon">
                <CdnIcon name={iconMap[id] ?? "mdi:link"} size={22} />
              </span>
              <span className="insights-social__label">
                {t(`insights.social.links.${id}`)}
              </span>
            </NextLink>
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
      </div>
    </section>
  );
};
