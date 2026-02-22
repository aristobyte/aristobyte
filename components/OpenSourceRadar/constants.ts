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

export const sections = [
  { id: "releases", title: "Releases", items: releases },
  { id: "milestones", title: "Roadmap Milestones", items: milestones },
  { id: "discussions", title: "Discussions", items: discussions },
];

