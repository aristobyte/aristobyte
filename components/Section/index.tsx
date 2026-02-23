"use client";

import * as React from "react";
import { useTranslate } from "@/context";
import {
  Align,
  SectionNamespace,
  Title,
  SectionHeadingTextType,
  SectionTitleType,
} from "@/config";
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
  const titleAlign = title?.align ?? Align.CENTER;
  const descriptionAlign = description?.align ?? Align.CENTER;
  const TitleTag = title?.as ?? Title.H2;
  const hasHeading = Boolean(title?.text || description || heading);

  return (
    <section
      id={sectionId}
      className={`section section--${namespace} ${namespace}`}
    >
      <div className={`section__container ${namespace}__container`}>
        {hasHeading && (
          <div className={`section__heading ${namespace}__heading`}>
            {!!heading && heading}
            {!heading && (
              <>
                {title?.text && (
                  <TitleTag
                    className={`section__title section__title--${titleAlign} ${namespace}__title`}
                  >
                    {t(title.text)}
                  </TitleTag>
                )}
                {description?.text && (
                  <p
                    className={`section__description section__description--${descriptionAlign} ${namespace}__description`}
                  >
                    {t(description.text)}
                  </p>
                )}
              </>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
