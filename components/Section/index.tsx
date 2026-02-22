"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import { Align, SectionNamespace, Title } from "@/config";
import { SectionHeadingTextType, SectionTitleType } from "@/config";
import "./Section.scss";

type SectionProps = {
  namespace: SectionNamespace;
  sectionId?: string;
  title?: SectionTitleType;
  description?: SectionHeadingTextType;
  heading?: React.ReactNode;
  children: React.ReactNode;
};

export const Section = ({
  namespace,
  sectionId,
  title,
  description,
  heading,
  children,
}: SectionProps) => {
  const { t } = useTranslate();
  const headingAlign = title?.align ?? description?.align ?? Align.LEFT;
  const HeadingTag = (title?.as ?? Title.H2) as "h1" | "h2" | "h3" | "h4";
  const hasHeading = Boolean(title?.text || description || heading);

  return (
    <section id={sectionId} className={`section section--${namespace} ${namespace}`}>
      <div className={`section__container ${namespace}__container`}>
        {hasHeading ? (
          <div
            className={`section__heading ${namespace}__heading`}
            style={{
              alignItems:
                headingAlign === Align.CENTER
                  ? "center"
                  : headingAlign === Align.RIGHT
                    ? "flex-end"
                    : "flex-start",
              textAlign: headingAlign,
            }}
          >
            {heading ? (
              heading
            ) : (
              <>
                {title?.text ? (
                  <HeadingTag className={`section__title ${namespace}__title`}>
                    {t(title.text)}
                  </HeadingTag>
                ) : null}
                {description ? (
                  <p className={`section__description ${namespace}__description`}>
                    {t(description.text)}
                  </p>
                ) : null}
              </>
            )}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
};
