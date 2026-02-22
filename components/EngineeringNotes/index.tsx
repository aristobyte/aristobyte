"use client";

import * as React from "react";
import { CdnIcon } from "@/components";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { SmartLink } from "@/components/ui";
import { useTranslate } from "@/context";
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
  const { t } = useTranslate();
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
            {t("insights.engineering-notes.highlights.namespaces")}
          </span>
        </article>
        <article className="engineering-notes__highlight">
          <span className="engineering-notes__highlight-value">
            {t("insights.engineering-notes.highlights.release-title")}
          </span>
          <span className="engineering-notes__highlight-label">
            {t("insights.engineering-notes.highlights.release-description")}
          </span>
        </article>
        <article className="engineering-notes__highlight">
          <span className="engineering-notes__highlight-value">
            {t("insights.engineering-notes.highlights.policy-title")}
          </span>
          <span className="engineering-notes__highlight-label">
            {t("insights.engineering-notes.highlights.policy-description")}
          </span>
        </article>
      </div>

      <div className="engineering-notes__namespaces">
        {namespaces.map((namespace) => (
          <article key={namespace.id} className="engineering-notes__namespace">
            <div className="engineering-notes__namespace-top">
              <h3>{t(namespace.titleKey)}</h3>
              <SmartLink href={namespace.href}>
                {t("insights.engineering-notes.actions.open")}
              </SmartLink>
            </div>
            <p>{t(namespace.descriptionKey)}</p>
            <div className="engineering-notes__namespace-links">
              {namespace.links.map((link) => (
                <SmartLink
                  key={`${namespace.id}-${link.labelKey}`}
                  href={link.href}
                >
                  {t(link.labelKey)}
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
            {t(filter.label)}
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
                  {t(`insights.engineering-notes.filters.${note.type}`)}
                </span>
                <time dateTime={note.date}>{note.date}</time>
              </div>
              <h4>{t(note.titleKey)}</h4>
              <p>{t(note.descriptionKey)}</p>
              <div className="engineering-notes__footer">
                <span>{t(note.namespaceKey)}</span>
                {note.href ? (
                  <SmartLink href={note.href}>
                    {t("insights.engineering-notes.actions.source")}
                  </SmartLink>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="engineering-notes__deep-dives">
        <h3>{t("insights.engineering-notes.deep-dives.title")}</h3>
        <div className="engineering-notes__deep-grid">
          {deepDives.map((dive) => (
            <article key={dive.id} className="engineering-notes__deep-card">
              <h4>{t(dive.titleKey)}</h4>
              <p>{t(dive.descriptionKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};
