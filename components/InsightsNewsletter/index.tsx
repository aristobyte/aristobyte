"use client";

import * as React from "react";
import { Section } from "@/components/Section";
import { SectionNamespace } from "@/config";

import "./InsightsNewsletter.scss";

export const InsightsNewsletter = () => {
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
      setMessage("You have been unsubscribed from newsletter updates.");
      return;
    }

    if (newsletterStatus === "already_unsubscribed") {
      setStatus("success");
      setMessage("This email was already unsubscribed.");
      return;
    }

    if (newsletterStatus === "error") {
      setStatus("error");
      setMessage("Unsubscribe link is invalid or expired.");
    }
  }, []);

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
        setMessage(data.message ?? "Subscription failed.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Subscribed successfully.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Subscription failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section namespace={SectionNamespace.InsightsNewsletter}>
      <div className="insights-newsletter__card">
        <h2 className="insights-newsletter__title">Subscribe to Updates</h2>
        <p className="insights-newsletter__description">
          Release notes, major posts, and engineering highlights. No spam.
        </p>

        <form className="insights-newsletter__form" onSubmit={onSubmit}>
          <label htmlFor="newsletter-email" className="insights-newsletter__label">
            Work email
          </label>
          <input
            id="newsletter-email"
            type="email"
            className="insights-newsletter__input"
            placeholder="you@company.com"
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
              <span className="insights-newsletter__check-box" aria-hidden="true" />
              <span className="insights-newsletter__check-text">Release notes</span>
            </label>
            <label className="insights-newsletter__check-option">
              <input
                className="insights-newsletter__check-input"
                type="checkbox"
                checked={majorPosts}
                onChange={(event) => setMajorPosts(event.target.checked)}
                disabled={isSubmitting}
              />
              <span className="insights-newsletter__check-box" aria-hidden="true" />
              <span className="insights-newsletter__check-text">Major posts</span>
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
            <span className="insights-newsletter__check-box" aria-hidden="true" />
            <span className="insights-newsletter__check-text">
              I agree to receive product updates and release notes.
            </span>
          </label>

          <button
            type="submit"
            className="insights-newsletter__button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
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
