"use client";

import * as React from "react";

import { Section, SmartLink } from "@/components";
import { SectionNamespace, Config } from "@/config";
import { useTranslate } from "@/context";

import "./Contact.scss";

export const ContactSection = () => {
  const { t } = useTranslate();

  return (
    <Section
      namespace={SectionNamespace.Contact}
      title={{ text: "contact.title" }}
      description={{ text: "contact.description" }}
    >
      <ul className="contact__list">
        {Config.contact.cards.map(
          ({ id, href, titleKey, valueKey, descriptionKey, actionKey }) => {
            const title = t(titleKey);
            const value = t(valueKey);
            const description = t(descriptionKey);
            const action = t(actionKey);

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
          },
        )}
      </ul>
    </Section>
  );
};
