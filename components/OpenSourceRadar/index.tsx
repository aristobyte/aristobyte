"use client";

import NextLink from "next/link";

import "./OpenSourceRadar.scss";

type RadarItemType = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

const releases: RadarItemType[] = [
  {
    id: "ui-cli-release",
    title: "@aristobyte-ui/cli",
    description:
      "Latest CLI package updates, publish history, and distribution visibility.",
    href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
    cta: "View package",
  },
  {
    id: "ui-releases",
    title: "Repository Releases",
    description:
      "Version tags and release notes from the main aristobyte-ui repository.",
    href: "https://github.com/aristobyte-ui/aristobyte-ui/releases",
    cta: "Open releases",
  },
];

const milestones: RadarItemType[] = [
  {
    id: "project-board",
    title: "Roadmap Board",
    description:
      "Delivery milestones and planned work streams tracked in the public project board.",
    href: "https://github.com/orgs/aristobyte-ui/projects/2/views/1?filterQuery=",
    cta: "Open roadmap",
  },
  {
    id: "apps-overview",
    title: "Product Surface",
    description:
      "Current app landscape and package ecosystem visible from the products overview.",
    href: "/apps",
    cta: "See products",
  },
];

const discussions: RadarItemType[] = [
  {
    id: "org-discussions",
    title: "GitHub Discussions",
    description:
      "Feature requests, proposals, and community threads across AristoByte spaces.",
    href: "https://github.com/orgs/aristobyte-ui/discussions",
    cta: "Join discussion",
  },
  {
    id: "community-route",
    title: "Community Hub",
    description:
      "Entry point for ecosystem links, contribution channels, and community resources.",
    href: "/community",
    cta: "Open community",
  },
];

const sections = [
  { id: "releases", title: "Releases", items: releases },
  { id: "milestones", title: "Roadmap Milestones", items: milestones },
  { id: "discussions", title: "Discussions", items: discussions },
];

export const OpenSourceRadar = () => {
  return (
    <section className="open-source-radar">
      <div className="open-source-radar__container">
        <div className="open-source-radar__head">
          <h2 className="open-source-radar__title">Open Source Radar</h2>
          <p className="open-source-radar__description">
            A structured view of what is shipping, what is planned, and where
            community conversations are happening right now.
          </p>
        </div>

        <div className="open-source-radar__grid">
          {sections.map((section) => (
            <article key={section.id} className="open-source-radar__section">
              <h3 className="open-source-radar__section-title">{section.title}</h3>
              <div className="open-source-radar__items">
                {section.items.map((item) => {
                  const isExternal = item.href.startsWith("http");

                  if (isExternal) {
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        className="open-source-radar__item"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <span>{item.cta}</span>
                      </a>
                    );
                  }

                  return (
                    <NextLink key={item.id} href={item.href} className="open-source-radar__item">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <span>{item.cta}</span>
                    </NextLink>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
