"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Config } from "@/config";
import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";

import "./HomeStack.scss";

export const HomeStack = () => {
  const { t } = useTranslate();
  const [openGroupId, setOpenGroupId] = React.useState(
    Config.home.stack.groups[0]?.id || "",
  );

  return (
    <Section
      namespace={SectionNamespace.HomeStack}
      title={{ text: "home.stack.title", align: Align.LEFT }}
      description={{ text: "home.stack.description" }}
    >
      <div className="home-stack__groups">
        {Config.home.stack.groups.map(({ id, items }) => (
          <div
            key={id}
            className={`home-stack__group ${openGroupId === id ? "home-stack__group--open" : ""}`}
          >
            <div className="home-stack__group-head">
              <span className="home-stack__group-title">
                {t(`home.stack.groups.${id}.title`)}
              </span>
              <div className="home-stack__group-meta">
                <span className="home-stack__group-count">{items.length}</span>
                <button
                  type="button"
                  className="home-stack__group-toggle"
                  aria-expanded={openGroupId === id}
                  aria-controls={`home-stack-panel-${id}`}
                  aria-label={t(`home.stack.groups.${id}.title`)}
                  onClick={() => {
                    if (openGroupId === id) return;
                    setOpenGroupId(id);
                  }}
                >
                  <span className="home-stack__group-toggle-arrow">▾</span>
                </button>
              </div>
            </div>
            <p className="home-stack__group-description">
              {t(`home.stack.groups.${id}.description`)}
            </p>
            <div
              id={`home-stack-panel-${id}`}
              className="home-stack__panel"
              aria-hidden={openGroupId !== id}
            >
              <div className="home-stack__panel-inner">
                <div className="home-stack__badges">
                  {items.map((item) => (
                    <span key={item} className="home-stack__badge">
                      {t(`home.stack.items.${item}`)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
