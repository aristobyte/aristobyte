import { NewsletterTopicsType } from "./types";
import { createUnsubscribeToken } from "./token";
import { readFileSync } from "node:fs";
import path from "node:path";
import { tNewsletter } from "./i18n";

const topicSummary = (topics: NewsletterTopicsType) => {
  const selected: string[] = [];
  if (topics.releaseNotes) selected.push(tNewsletter("newsletter.email.topics.release-notes"));
  if (topics.majorPosts) selected.push(tNewsletter("newsletter.email.topics.major-posts"));
  return selected.length
    ? selected.join(" • ")
    : tNewsletter("newsletter.email.topics.general-updates");
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

  const subject = tNewsletter("newsletter.email.subject");
  const year = String(new Date().getFullYear());
  const textMap: Record<string, string> = {
    "{{EMAIL_TITLE}}": tNewsletter("newsletter.email.title"),
    "{{PREHEADER}}": tNewsletter("newsletter.email.preheader"),
    "{{HEADER_BRAND}}": tNewsletter("newsletter.email.header-brand"),
    "{{STATUS_LABEL}}": tNewsletter("newsletter.email.status-label"),
    "{{CONFIRMED_TITLE}}": tNewsletter("newsletter.email.confirmed-title"),
    "{{SUBSCRIBED_WITH}}": tNewsletter("newsletter.email.subscribed-with"),
    "{{UPDATES_DESCRIPTION}}": tNewsletter("newsletter.email.updates-description"),
    "{{RELEASE_NOTES_LABEL}}": tNewsletter("newsletter.email.release-notes-label"),
    "{{ROADMAP_SIGNALS_LABEL}}": tNewsletter("newsletter.email.roadmap-signals-label"),
    "{{PRODUCT_UPDATES_LABEL}}": tNewsletter("newsletter.email.product-updates-label"),
    "{{EXPLORE_INSIGHTS}}": tNewsletter("newsletter.email.explore-insights"),
    "{{UNSUBSCRIBE_ANYTIME}}": tNewsletter("newsletter.email.unsubscribe-anytime"),
    "{{UNSUBSCRIBE}}": tNewsletter("newsletter.email.unsubscribe"),
    "{{NETWORK_TITLE}}": tNewsletter("newsletter.email.network-title"),
    "{{NETWORK_DESCRIPTION}}": tNewsletter("newsletter.email.network-description"),
    "{{BRAND_NAME}}": tNewsletter("header.brand"),
    "{{EXTERNAL_LABEL}}": tNewsletter("newsletter.email.external-label"),
    "{{SOCIAL_GITHUB}}": tNewsletter("newsletter.email.social.github"),
    "{{SOCIAL_STACKOVERFLOW}}": tNewsletter("newsletter.email.social.stackoverflow"),
    "{{SOCIAL_NPM}}": tNewsletter("newsletter.email.social.npm"),
    "{{SOCIAL_EMAIL}}": tNewsletter("newsletter.email.social.email"),
    "{{SOCIAL_LINKEDIN}}": tNewsletter("newsletter.email.social.linkedin"),
    "{{SOCIAL_INSTAGRAM}}": tNewsletter("newsletter.email.social.instagram"),
    "{{SOCIAL_YOUTUBE}}": tNewsletter("newsletter.email.social.youtube"),
    "{{SOCIAL_OPEN_COLLECTIVE}}": tNewsletter("newsletter.email.social.open-collective"),
    "{{SOCIAL_PATREON}}": tNewsletter("newsletter.email.social.patreon"),
    "{{COMPLIANCE_LABEL}}": tNewsletter("newsletter.email.compliance-label"),
    "{{COMPLIANCE_PRIVACY_POLICY}}": tNewsletter("newsletter.email.compliance.privacy-policy"),
    "{{COMPLIANCE_TERMS_AND_CONDITIONS}}": tNewsletter(
      "newsletter.email.compliance.terms-and-conditions",
    ),
    "{{COMPLIANCE_COOKIE_POLICY}}": tNewsletter("newsletter.email.compliance.cookie-policy"),
    "{{COMPLIANCE_RETURN_POLICY}}": tNewsletter("newsletter.email.compliance.return-policy"),
    "{{COMPLIANCE_ACCEPTABLE_USE_POLICY}}": tNewsletter(
      "newsletter.email.compliance.acceptable-use-policy",
    ),
    "{{COMPLIANCE_DISCLAIMER}}": tNewsletter("newsletter.email.compliance.disclaimer"),
    "{{COMPLIANCE_EULA}}": tNewsletter("newsletter.email.compliance.eula"),
    "{{COMPLIANCE_DSAR}}": tNewsletter("newsletter.email.compliance.dsar"),
    "{{COMPLIANCE_CENTER}}": tNewsletter("newsletter.email.compliance-center"),
  };
  const html = loadSubscribeTemplate()
    .replaceAll("{{EMAIL}}", email)
    .replaceAll("{{TOPIC_SUMMARY}}", topicSummary(topics))
    .replaceAll("{{INSIGHTS_URL}}", insightsUrl)
    .replaceAll("{{UNSUBSCRIBE_URL}}", unsubscribeUrl)
    .replaceAll("{{SITE_URL}}", siteUrl)
    .replaceAll("{{YEAR}}", year);

  const localizedHtml = Object.entries(textMap).reduce(
    (currentHtml, [key, value]) => currentHtml.replaceAll(key, value),
    html,
  );

  return { subject, html: localizedHtml };
};
