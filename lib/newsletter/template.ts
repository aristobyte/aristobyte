import { NewsletterTopicsType } from "./types";
import { createUnsubscribeToken } from "./token";
import { readFileSync } from "node:fs";
import path from "node:path";

const topicSummary = (topics: NewsletterTopicsType) => {
  const selected: string[] = [];
  if (topics.releaseNotes) selected.push("Release notes");
  if (topics.majorPosts) selected.push("Major posts");
  return selected.length ? selected.join(" • ") : "General updates";
};

const subscribeTemplatePath = path.join(
  process.cwd(),
  "lib/newsletter/templates/subscribe.html",
);

let subscribeTemplateCache = "";

const loadSubscribeTemplate = () => {
  if (subscribeTemplateCache) return subscribeTemplateCache;
  subscribeTemplateCache = readFileSync(subscribeTemplatePath, "utf8");
  return subscribeTemplateCache;
};

export const buildSubscriberWelcomeEmail = ({
  email,
  topics,
}: {
  email: string;
  topics: NewsletterTopicsType;
}) => {
  const token = createUnsubscribeToken(email);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    "https://aristobyte.com";
  const insightsUrl = `${siteUrl}/insights`;
  const unsubscribeUrl = token
    ? `${siteUrl}/api/insights/newsletter/unsubscribe?token=${encodeURIComponent(token)}`
    : insightsUrl;

  const subject = "Welcome to AristoByte Updates";
  const year = String(new Date().getFullYear());
  const html = loadSubscribeTemplate()
    .replaceAll("{{EMAIL}}", email)
    .replaceAll("{{TOPIC_SUMMARY}}", topicSummary(topics))
    .replaceAll("{{INSIGHTS_URL}}", insightsUrl)
    .replaceAll("{{UNSUBSCRIBE_URL}}", unsubscribeUrl)
    .replaceAll("{{SITE_URL}}", siteUrl)
    .replaceAll("{{YEAR}}", year);

  return { subject, html };
};
