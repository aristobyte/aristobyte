export type NamespaceType = {
  id: string;
  title: string;
  description: string;
  href: string;
  links: Array<{ label: string; href: string }>;
};

export type NoteType = {
  id: string;
  date: string;
  type: "release" | "decision" | "migration";
  title: string;
  description: string;
  namespace: "@aristobyte" | "@aristobyte-ui";
  href?: string;
};

export type FilterType = "all" | NoteType["type"];

export const namespaces: NamespaceType[] = [
  {
    id: "aristobyte-ui",
    title: "@aristobyte-ui",
    description:
      "UI system packages: components, CLI tooling, and shared utilities for design-consistent product development.",
    href: "https://www.npmjs.com/org/aristobyte-ui",
    links: [
      { label: "NPM Org", href: "https://www.npmjs.com/org/aristobyte-ui" },
      {
        label: "CLI Package",
        href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
      },
      {
        label: "GitHub Packages",
        href: "https://github.com/aristobyte-ui/aristobyte-ui/pkgs/npm/cli",
      },
    ],
  },
  {
    id: "aristobyte",
    title: "@aristobyte",
    description:
      "Core ecosystem namespace for foundational packages and shared engineering modules used across AristoByte products.",
    href: "https://www.npmjs.com/search?q=%40aristobyte",
    links: [
      {
        label: "Namespace Search",
        href: "https://www.npmjs.com/search?q=%40aristobyte",
      },
      { label: "Team Profile", href: "https://www.npmjs.com/~aristobyte_team" },
    ],
  },
];

export const notes: NoteType[] = [
  {
    id: "note-1",
    date: "2026-02-10",
    type: "release",
    namespace: "@aristobyte-ui",
    title: "CLI workflow updates for faster local setup",
    description:
      "Improved command flow and package publishing alignment for the CLI package to reduce setup friction.",
    href: "https://www.npmjs.com/package/@aristobyte-ui/cli",
  },
  {
    id: "note-2",
    date: "2026-02-06",
    type: "decision",
    namespace: "@aristobyte-ui",
    title: "Unified slider architecture across app features",
    description:
      "Adopted a single reusable slider/slide primitive to standardize interaction behavior and simplify future package extraction.",
  },
  {
    id: "note-3",
    date: "2026-01-31",
    type: "migration",
    namespace: "@aristobyte-ui",
    title: "Header navigation moved to config-driven list routing",
    description:
      "Replaced hardcoded nav branching with list-based menu state to support multi-level app/insights navigation.",
  },
  {
    id: "note-4",
    date: "2026-01-24",
    type: "release",
    namespace: "@aristobyte",
    title: "Namespace indexing and package discovery cleanup",
    description:
      "Aligned package naming and discovery pages for clearer separation between @aristobyte and @aristobyte-ui scopes.",
    href: "https://www.npmjs.com/search?q=%40aristobyte",
  },
];

export const filters: Array<{ id: FilterType; label: string }> = [
  { id: "all", label: "All" },
  { id: "release", label: "Releases" },
  { id: "decision", label: "Decisions" },
  { id: "migration", label: "Migrations" },
];

export const noteTypeIcon: Record<NoteType["type"], string> = {
  release: "mdi:rocket-launch-outline",
  decision: "mdi:source-branch",
  migration: "mdi:swap-horizontal",
};

export const deepDives = [
  {
    id: "d1",
    title: "CLI flow patterns",
    description:
      "Command orchestration and terminal UX decisions used in package tooling.",
  },
  {
    id: "d2",
    title: "Design system implementation",
    description:
      "Reusable component patterns, token usage, and consistency rules in production.",
  },
  {
    id: "d3",
    title: "CI and release discipline",
    description:
      "Versioning guardrails, deployment checks, and migration-safe rollout strategy.",
  },
];

