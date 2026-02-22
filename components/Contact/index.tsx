"use client";

import * as React from "react";

import { Section } from "@/components/Section";
import { SectionNamespace, Align } from "@/config";
import { useTranslate } from "@/context";
import { Config } from "@/config";
import { SmartLink } from "@/components/ui";

import "./Contact.scss";

export const ContactSection = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.Contact}
      title={{ text: "contact.title", align: Align.LEFT }}
      description={{ text: "contact.description" }}
    >
      <ul className="contact__list">
        {Config.contact.cards.map(({ id, href }) => {
          const title = t(`contact.cards.${id}.title`);
          const value = t(`contact.cards.${id}.value`);
          const description = t(`contact.cards.${id}.description`);
          const action = t(`contact.cards.${id}.action`);

          return (
            <li key={id} className="contact__card">
              <div className="contact__card-content">
                <h3 className="contact__card-title">{title}</h3>
                <p className="contact__card-value">{value}</p>
                <p className="contact__card-description">{description}</p>
              </div>
              {href ? (
                <SmartLink className="contact__card-link" href={href}>
                  <span>{action}</span>
                </SmartLink>
              ) : (
                <span className="contact__card-link contact__card-link--disabled">
                  <span>{action}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
