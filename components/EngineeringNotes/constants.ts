export type NamespaceType = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
  links: Array<{ labelKey: string; href: string }>;
};

export type NoteType = {
  id: string;
  date: string;
  type: "release" | "decision" | "migration";
  titleKey: string;
  descriptionKey: string;
  namespace: "@aristobyte" | "@aristobyte-ui";
  namespaceKey: string;
  href?: string;
};

export type FilterType = "all" | NoteType["type"];

export const namespaces: NamespaceType[] = [
  {
    id: "aristobyte-ui",
    titleKey: "insights.engineering-notes.namespaces.aristobyte-ui.title",
    descriptionKey:
      "insights.engineering-notes.namespaces.aristobyte-ui.description",
    href: "https://www.npmjs.com/org/aristobyte-ui",
    links: [
      {
        labelKey: "insights.engineering-notes.namespaces.aristobyte-ui.links.npm-org",
        href: "https://www.npmjs.com/org/aristobyte-ui",
      },
      {
        labelKey:
          "insights.engineering-notes.namespaces.aristobyte-ui.links.cli-package",
        href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
      },
      {
        labelKey:
          "insights.engineering-notes.namespaces.aristobyte-ui.links.github-packages",
        href: "https://github.com/aristobyte-ui/aristobyte-ui/pkgs/npm/cli",
      },
    ],
  },
  {
    id: "aristobyte",
    titleKey: "insights.engineering-notes.namespaces.aristobyte.title",
    descriptionKey:
      "insights.engineering-notes.namespaces.aristobyte.description",
    href: "https://www.npmjs.com/search?q=%40aristobyte",
    links: [
      {
        labelKey:
          "insights.engineering-notes.namespaces.aristobyte.links.namespace-search",
        href: "https://www.npmjs.com/search?q=%40aristobyte",
      },
      {
        labelKey:
          "insights.engineering-notes.namespaces.aristobyte.links.team-profile",
        href: "https://www.npmjs.com/~aristobyte_team",
      },
    ],
  },
];

export const notes: NoteType[] = [
  {
    id: "note-1",
    date: "2026-02-10",
    type: "release",
    namespace: "@aristobyte-ui",
    namespaceKey: "insights.engineering-notes.namespace-labels.aristobyte-ui",
    titleKey: "insights.engineering-notes.notes.note-1.title",
    descriptionKey: "insights.engineering-notes.notes.note-1.description",
    href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
  },
  {
    id: "note-2",
    date: "2026-02-06",
    type: "decision",
    namespace: "@aristobyte-ui",
    namespaceKey: "insights.engineering-notes.namespace-labels.aristobyte-ui",
    titleKey: "insights.engineering-notes.notes.note-2.title",
    descriptionKey: "insights.engineering-notes.notes.note-2.description",
  },
  {
    id: "note-3",
    date: "2026-01-31",
    type: "migration",
    namespace: "@aristobyte-ui",
    namespaceKey: "insights.engineering-notes.namespace-labels.aristobyte-ui",
    titleKey: "insights.engineering-notes.notes.note-3.title",
    descriptionKey: "insights.engineering-notes.notes.note-3.description",
  },
  {
    id: "note-4",
    date: "2026-01-24",
    type: "release",
    namespace: "@aristobyte",
    namespaceKey: "insights.engineering-notes.namespace-labels.aristobyte",
    titleKey: "insights.engineering-notes.notes.note-4.title",
    descriptionKey: "insights.engineering-notes.notes.note-4.description",
    href: "https://www.npmjs.com/search?q=%40aristobyte",
  },
];

export const filters: Array<{ id: FilterType; label: string }> = [
  { id: "all", label: "insights.engineering-notes.filters.all" },
  { id: "release", label: "insights.engineering-notes.filters.release" },
  { id: "decision", label: "insights.engineering-notes.filters.decision" },
  { id: "migration", label: "insights.engineering-notes.filters.migration" },
];

export const noteTypeIcon: Record<NoteType["type"], string> = {
  release: "mdi:rocket-launch-outline",
  decision: "mdi:source-branch",
  migration: "mdi:swap-horizontal",
};

export const deepDives = [
  {
    id: "d1",
    titleKey: "insights.engineering-notes.deep-dives.items.d1.title",
    descriptionKey:
      "insights.engineering-notes.deep-dives.items.d1.description",
  },
  {
    id: "d2",
    titleKey: "insights.engineering-notes.deep-dives.items.d2.title",
    descriptionKey:
      "insights.engineering-notes.deep-dives.items.d2.description",
  },
  {
    id: "d3",
    titleKey: "insights.engineering-notes.deep-dives.items.d3.title",
    descriptionKey:
      "insights.engineering-notes.deep-dives.items.d3.description",
  },
];
