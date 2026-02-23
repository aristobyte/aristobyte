"use client";

import * as React from "react";
import { Section } from "@/components";
import { SectionNamespace } from "@/config";
import { useTranslate } from "@/context";

import "./InsightsNewsletter.scss";

export const InsightsNewsletter = () => {
  const { t } = useTranslate();
  const [email, setEmail] = React.useState("");
  const [releaseNotes, setReleaseNotes] = React.useState(true);
  const [majorPosts, setMajorPosts] = React.useState(true);
  const [consent, setConsent] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const newsletterStatus = params.get("newsletter");
    if (newsletterStatus === "unsubscribed") {
      setStatus("success");
      setMessage(t("insights.newsletter.messages.unsubscribed"));
      return;
    }

    if (newsletterStatus === "already_unsubscribed") {
      setStatus("success");
      setMessage(t("insights.newsletter.messages.already-unsubscribed"));
      return;
    }

    if (newsletterStatus === "error") {
      setStatus("error");
      setMessage(t("insights.newsletter.messages.invalid-unsubscribe"));
    }
  }, [t]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/insights/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          consent,
          source: "insights-newsletter",
          topics: {
            releaseNotes,
            majorPosts,
          },
        }),
      });

      const data = (await response.json()) as {
        ok: boolean;
        message?: string;
        code?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(
          data.message ?? t("insights.newsletter.messages.subscription-failed"),
        );
        return;
      }

      setStatus("success");
      setMessage(
        data.message ?? t("insights.newsletter.messages.subscribed-success"),
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(
        t("insights.newsletter.messages.subscription-failed-try-again"),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section namespace={SectionNamespace.InsightsNewsletter}>
      <div className="insights-newsletter__card">
        <h2 className="insights-newsletter__title">
          {t("insights.newsletter.form.title")}
        </h2>
        <p className="insights-newsletter__description">
          {t("insights.newsletter.form.description")}
        </p>

        <form className="insights-newsletter__form" onSubmit={onSubmit}>
          <label
            htmlFor="newsletter-email"
            className="insights-newsletter__label"
          >
            {t("insights.newsletter.form.email-label")}
          </label>
          <input
            id="newsletter-email"
            type="email"
            className="insights-newsletter__input"
            placeholder={t("insights.newsletter.form.email-placeholder")}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isSubmitting}
            required
          />

          <div className="insights-newsletter__checks">
            <label className="insights-newsletter__check-option">
              <input
                className="insights-newsletter__check-input"
                type="checkbox"
                checked={releaseNotes}
                onChange={(event) => setReleaseNotes(event.target.checked)}
                disabled={isSubmitting}
              />
              <span
                className="insights-newsletter__check-box"
                aria-hidden="true"
              />
              <span className="insights-newsletter__check-text">
                {t("insights.newsletter.form.release-notes")}
              </span>
            </label>
            <label className="insights-newsletter__check-option">
              <input
                className="insights-newsletter__check-input"
                type="checkbox"
                checked={majorPosts}
                onChange={(event) => setMajorPosts(event.target.checked)}
                disabled={isSubmitting}
              />
              <span
                className="insights-newsletter__check-box"
                aria-hidden="true"
              />
              <span className="insights-newsletter__check-text">
                {t("insights.newsletter.form.major-posts")}
              </span>
            </label>
          </div>

          <label className="insights-newsletter__consent insights-newsletter__check-option">
            <input
              className="insights-newsletter__check-input"
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              disabled={isSubmitting}
            />
            <span
              className="insights-newsletter__check-box"
              aria-hidden="true"
            />
            <span className="insights-newsletter__check-text">
              {t("insights.newsletter.form.consent")}
            </span>
          </label>

          <button
            type="submit"
            className="insights-newsletter__button"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("insights.newsletter.form.subscribing")
              : t("insights.newsletter.form.subscribe")}
          </button>
        </form>

        {status === "success" && (
          <p className="insights-newsletter__success">{message}</p>
        )}
        {status === "error" && (
          <p className="insights-newsletter__error">{message}</p>
        )}
      </div>
    </Section>
  );
};
