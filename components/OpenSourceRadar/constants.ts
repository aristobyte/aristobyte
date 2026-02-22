type RadarItemType = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
  ctaKey: string;
};

const releases: RadarItemType[] = [
  {
    id: "ui-cli-release",
    titleKey: "insights.open-source-radar.sections.releases.items.ui-cli-release.title",
    descriptionKey:
      "insights.open-source-radar.sections.releases.items.ui-cli-release.description",
    href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
    ctaKey: "insights.open-source-radar.sections.releases.items.ui-cli-release.cta",
  },
  {
    id: "ui-releases",
    titleKey: "insights.open-source-radar.sections.releases.items.ui-releases.title",
    descriptionKey:
      "insights.open-source-radar.sections.releases.items.ui-releases.description",
    href: "https://github.com/aristobyte-ui/aristobyte-ui/releases",
    ctaKey: "insights.open-source-radar.sections.releases.items.ui-releases.cta",
  },
];

const milestones: RadarItemType[] = [
  {
    id: "project-board",
    titleKey:
      "insights.open-source-radar.sections.milestones.items.project-board.title",
    descriptionKey:
      "insights.open-source-radar.sections.milestones.items.project-board.description",
    href: "https://github.com/orgs/aristobyte-ui/projects/2/views/1?filterQuery=",
    ctaKey:
      "insights.open-source-radar.sections.milestones.items.project-board.cta",
  },
  {
    id: "apps-overview",
    titleKey:
      "insights.open-source-radar.sections.milestones.items.apps-overview.title",
    descriptionKey:
      "insights.open-source-radar.sections.milestones.items.apps-overview.description",
    href: "/apps",
    ctaKey:
      "insights.open-source-radar.sections.milestones.items.apps-overview.cta",
  },
];

const discussions: RadarItemType[] = [
  {
    id: "org-discussions",
    titleKey:
      "insights.open-source-radar.sections.discussions.items.org-discussions.title",
    descriptionKey:
      "insights.open-source-radar.sections.discussions.items.org-discussions.description",
    href: "https://github.com/orgs/aristobyte-ui/discussions",
    ctaKey:
      "insights.open-source-radar.sections.discussions.items.org-discussions.cta",
  },
  {
    id: "community-route",
    titleKey:
      "insights.open-source-radar.sections.discussions.items.community-route.title",
    descriptionKey:
      "insights.open-source-radar.sections.discussions.items.community-route.description",
    href: "/community",
    ctaKey:
      "insights.open-source-radar.sections.discussions.items.community-route.cta",
  },
];

export const sections = [
  {
    id: "releases",
    titleKey: "insights.open-source-radar.sections.releases.title",
    items: releases,
  },
  {
    id: "milestones",
    titleKey: "insights.open-source-radar.sections.milestones.title",
    items: milestones,
  },
  {
    id: "discussions",
    titleKey: "insights.open-source-radar.sections.discussions.title",
    items: discussions,
  },
];
