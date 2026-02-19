"use client";

import * as React from "react";
import NextLink from "next/link";
import { CdnIcon } from "@/components";

import "./EngineeringNotes.scss";

type NamespaceType = {
  id: string;
  title: string;
  description: string;
  href: string;
  links: Array<{ label: string; href: string }>;
};

type NoteType = {
  id: string;
  date: string;
  type: "release" | "decision" | "migration";
  title: string;
  description: string;
  namespace: "@aristobyte" | "@aristobyte-ui";
  href?: string;
};

type FilterType = "all" | NoteType["type"];

const namespaces: NamespaceType[] = [
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

const notes: NoteType[] = [
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

const filters: Array<{ id: FilterType; label: string }> = [
  { id: "all", label: "All" },
  { id: "release", label: "Releases" },
  { id: "decision", label: "Decisions" },
  { id: "migration", label: "Migrations" },
];

const noteTypeIcon: Record<NoteType["type"], string> = {
  release: "mdi:rocket-launch-outline",
  decision: "mdi:source-branch",
  migration: "mdi:swap-horizontal",
};

const deepDives = [
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

export const EngineeringNotes = () => {
  const [activeFilter, setActiveFilter] = React.useState<FilterType>("all");
  const filteredNotes =
    activeFilter === "all"
      ? notes
      : notes.filter((note) => note.type === activeFilter);

  return (
    <section className="engineering-notes">
      <div className="engineering-notes__container">
        <div className="engineering-notes__head">
          <h2 className="engineering-notes__title">Engineering Notes</h2>
          <p className="engineering-notes__description">
            Release updates, architecture decisions, and migration checkpoints
            across AristoByte package namespaces.
          </p>
        </div>

        <div className="engineering-notes__highlights">
          <article className="engineering-notes__highlight">
            <span className="engineering-notes__highlight-value">2</span>
            <span className="engineering-notes__highlight-label">
              Active NPM Namespaces
            </span>
          </article>
          <article className="engineering-notes__highlight">
            <span className="engineering-notes__highlight-value">Release</span>
            <span className="engineering-notes__highlight-label">
              Notes focus on shipping outcomes and package changes
            </span>
          </article>
          <article className="engineering-notes__highlight">
            <span className="engineering-notes__highlight-value">Policy</span>
            <span className="engineering-notes__highlight-label">
              Migrations include impact summary and clear transition path
            </span>
          </article>
        </div>

        <div className="engineering-notes__namespaces">
          {namespaces.map((namespace) => (
            <article key={namespace.id} className="engineering-notes__namespace">
              <div className="engineering-notes__namespace-top">
                <h3>{namespace.title}</h3>
                <a href={namespace.href} target="_blank" rel="noreferrer">
                  Open
                </a>
              </div>
              <p>{namespace.description}</p>
              <div className="engineering-notes__namespace-links">
                {namespace.links.map((link) => (
                  <a
                    key={`${namespace.id}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="engineering-notes__filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className="engineering-notes__filter"
              data-active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="engineering-notes__timeline">
          {filteredNotes.map((note) => (
            <article key={note.id} className="engineering-notes__item">
              <div className="engineering-notes__point" />
              <div className="engineering-notes__content">
                <div className="engineering-notes__meta">
                  <span className={`engineering-notes__type engineering-notes__type--${note.type}`}>
                    <CdnIcon name={noteTypeIcon[note.type]} size={14} />
                    {note.type}
                  </span>
                  <time dateTime={note.date}>{note.date}</time>
                </div>
                <h4>{note.title}</h4>
                <p>{note.description}</p>
                <div className="engineering-notes__footer">
                  <span>{note.namespace}</span>
                  {note.href ? (
                    <NextLink href={note.href} target="_blank" rel="noreferrer">
                      Source
                    </NextLink>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="engineering-notes__deep-dives">
          <h3>Tooling Deep Dives</h3>
          <div className="engineering-notes__deep-grid">
            {deepDives.map((dive) => (
              <article key={dive.id} className="engineering-notes__deep-card">
                <h4>{dive.title}</h4>
                <p>{dive.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
