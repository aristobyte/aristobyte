import { NextRequest, NextResponse } from "next/server";
import { hasResendAudienceConfig, upsertResendAudienceContact } from "@/lib/newsletter/audience";
import { hasSubscriber, upsertSubscriber } from "@/lib/newsletter/store";
import { buildSubscriberWelcomeEmail } from "@/lib/newsletter/template";
import { sendEmailViaResend } from "@/lib/newsletter/send";
import { tNewsletter } from "@/lib/newsletter/i18n";
import { NewsletterTopicsType } from "@/lib/newsletter/types";

export const runtime = "nodejs";

type RequestBodyType = {
  email?: string;
  topics?: NewsletterTopicsType;
  consent?: boolean;
  source?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeTopics = (topics?: NewsletterTopicsType): NewsletterTopicsType => ({
  releaseNotes: Boolean(topics?.releaseNotes),
  majorPosts: Boolean(topics?.majorPosts),
});

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RequestBodyType;
    const email = body.email?.trim().toLowerCase() ?? "";
    const consent = Boolean(body.consent);
    const source = body.source?.trim() || "insights-newsletter";
    const topics = normalizeTopics(body.topics);

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          code: "invalid_email",
          message: tNewsletter("newsletter.api.invalid-email"),
        },
        { status: 400 },
      );
    }

    if (!consent) {
      return NextResponse.json(
        {
          ok: false,
          code: "consent_required",
          message: tNewsletter("newsletter.api.consent-required"),
        },
        { status: 400 },
      );
    }

    let alreadySubscribed = false;

    if (hasResendAudienceConfig()) {
      const providerStatus = await upsertResendAudienceContact(email);
      alreadySubscribed = providerStatus === "already_subscribed";
    } else {
      alreadySubscribed = await hasSubscriber(email);
    }

    if (alreadySubscribed) {
      return NextResponse.json({
        ok: true,
        code: "already_subscribed",
        message: tNewsletter("newsletter.api.already-subscribed"),
      });
    }

    await upsertSubscriber({
      email,
      topics,
      consent,
      source,
      createdAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") ?? undefined,
      ip: request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? undefined,
    });

    try {
      const { subject, html } = buildSubscriberWelcomeEmail({ email, topics });
      await sendEmailViaResend({ to: email, subject, html });

      const notifyEmail = process.env.NEWSLETTER_NOTIFY_EMAIL;
      if (notifyEmail) {
        await sendEmailViaResend({
          to: notifyEmail,
          subject: `${tNewsletter("newsletter.notify.subject-prefix")}: ${email}`,
          html: `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">
              <p><strong>${tNewsletter("newsletter.notify.new-subscription")}</strong></p>
              <p>${tNewsletter("newsletter.notify.email-label")}: ${email}</p>
              <p>${tNewsletter("newsletter.notify.topics-label")}: releaseNotes=${topics.releaseNotes}, majorPosts=${topics.majorPosts}</p>
              <p>${tNewsletter("newsletter.notify.source-label")}: ${source}</p>
            </div>`,
        });
      }
    } catch (error) {
      console.error("Newsletter email send failed:", error);
    }

    return NextResponse.json({
      ok: true,
      code: "subscribed",
      message: tNewsletter("newsletter.api.subscribed-success"),
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return NextResponse.json(
      {
        ok: false,
        code: "internal_error",
        message: tNewsletter("newsletter.api.internal-error"),
      },
      { status: 500 },
    );
  }
}
