import { NextRequest, NextResponse } from "next/server";
import { hasResendAudienceConfig, upsertResendAudienceContact } from "@/lib/newsletter/audience";
import { hasSubscriber, upsertSubscriber } from "@/lib/newsletter/store";
import { buildSubscriberWelcomeEmail } from "@/lib/newsletter/template";
import { sendEmailViaResend } from "@/lib/newsletter/send";
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
        { ok: false, code: "invalid_email", message: "Invalid email format." },
        { status: 400 },
      );
    }

    if (!consent) {
      return NextResponse.json(
        {
          ok: false,
          code: "consent_required",
          message: "Consent is required to subscribe.",
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
        message: "This email is already subscribed.",
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
          subject: `New newsletter subscriber: ${email}`,
          html: `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">
              <p><strong>New subscription</strong></p>
              <p>Email: ${email}</p>
              <p>Topics: releaseNotes=${topics.releaseNotes}, majorPosts=${topics.majorPosts}</p>
              <p>Source: ${source}</p>
            </div>`,
        });
      }
    } catch (error) {
      console.error("Newsletter email send failed:", error);
    }

    return NextResponse.json({
      ok: true,
      code: "subscribed",
      message: "Subscription successful.",
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return NextResponse.json(
      { ok: false, code: "internal_error", message: "Something went wrong." },
      { status: 500 },
    );
  }
}
