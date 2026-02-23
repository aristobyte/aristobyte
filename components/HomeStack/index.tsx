"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Section } from "@/components";
import { SectionNamespace, Config } from "@/config";

import "./HomeStack.scss";

export const HomeStack = () => {
  const { t } = useTranslate();
  const [openGroupId, setOpenGroupId] = React.useState(
    Config.home.stack.groups[0]?.id || "",
  );

  return (
    <Section
      namespace={SectionNamespace.HomeStack}
      title={{ text: "home.stack.title" }}
      description={{ text: "home.stack.description" }}
    >
      <div className="home-stack__groups">
        {Config.home.stack.groups.map(
          ({ id, items, titleKey, descriptionKey }) => (
            <div
              key={id}
              className={`home-stack__group ${openGroupId === id ? "home-stack__group--open" : ""}`}
            >
              <div className="home-stack__group-head">
                <span className="home-stack__group-title">{t(titleKey)}</span>
                <div className="home-stack__group-meta">
                  <span className="home-stack__group-count">
                    {items.length}
                  </span>
                  <button
                    type="button"
                    className="home-stack__group-toggle"
                    aria-expanded={openGroupId === id}
                    aria-controls={`home-stack-panel-${id}`}
                    aria-label={t(titleKey)}
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
                {t(descriptionKey)}
              </p>
              <div
                id={`home-stack-panel-${id}`}
                className="home-stack__panel"
                aria-hidden={openGroupId !== id}
              >
                <div className="home-stack__panel-inner">
                  <div className="home-stack__badges">
                    {items.map((item) => (
                      <span key={item.id} className="home-stack__badge">
                        {t(item.labelKey)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </Section>
  );
};
