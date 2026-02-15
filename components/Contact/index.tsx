"use client";

import * as React from "react";

import { useTranslate } from "@/context";
import { Config } from "@/config";

import "./Contact.scss";

export const ContactSection = () => {
  const { t } = useTranslate();

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <h2 className="contact__title">{t("contact.title")}</h2>
          <p className="contact__description">{t("contact.description")}</p>
        </div>

        <ul className="contact__list">
          {Config.contact.cards.map(({ id, href }) => {
            const title = t(`contact.cards.${id}.title`);
            const value = t(`contact.cards.${id}.value`);
            const description = t(`contact.cards.${id}.description`);
            const action = t(`contact.cards.${id}.action`);
            const isExternal = href?.startsWith("http");

            return (
              <li key={id} className="contact__card">
                <div className="contact__card-content">
                  <h3 className="contact__card-title">{title}</h3>
                  <p className="contact__card-value">{value}</p>
                  <p className="contact__card-description">{description}</p>
                </div>
                {href ? (
                  <a
                    className="contact__card-link"
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    <span>{action}</span>
                  </a>
                ) : (
                  <span className="contact__card-link contact__card-link--disabled">
                    <span>{action}</span>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
