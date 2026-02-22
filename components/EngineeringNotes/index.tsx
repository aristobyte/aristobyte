"use client";

import * as React from "react";
import { CdnIcon } from "@/components";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { SmartLink } from "@/components/ui";
import {
  deepDives,
  filters,
  noteTypeIcon,
  notes,
  namespaces,
  type FilterType,
} from "./constants";

import "./EngineeringNotes.scss";

export const EngineeringNotes = () => {
  const [activeFilter, setActiveFilter] = React.useState<FilterType>("all");
  const filteredNotes =
    activeFilter === "all"
      ? notes
      : notes.filter((note) => note.type === activeFilter);

  return (
    <Section
      namespace={SectionNamespace.EngineeringNotes}
      title={{
        text: "insights.engineering-notes.section.title",
        align: Align.LEFT,
      }}
      description={{ text: "insights.engineering-notes.section.description" }}
    >
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
              <SmartLink href={namespace.href}>Open</SmartLink>
            </div>
            <p>{namespace.description}</p>
            <div className="engineering-notes__namespace-links">
              {namespace.links.map((link) => (
                <SmartLink
                  key={`${namespace.id}-${link.label}`}
                  href={link.href}
                >
                  {link.label}
                </SmartLink>
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
                <span
                  className={`engineering-notes__type engineering-notes__type--${note.type}`}
                >
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
                  <SmartLink href={note.href}>Source</SmartLink>
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
    </Section>
  );
};
