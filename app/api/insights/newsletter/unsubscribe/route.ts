import { NextRequest, NextResponse } from "next/server";
import { hasResendAudienceConfig, removeResendAudienceContact } from "@/lib/newsletter/audience";
import { removeSubscriber } from "@/lib/newsletter/store";
import { verifyUnsubscribeToken } from "@/lib/newsletter/token";

const getSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "https://aristobyte.com";

const performUnsubscribe = async (token: string) => {
  const email = verifyUnsubscribeToken(token);
  if (!email) {
    return {
      ok: false,
      code: "invalid_token",
      message: "Unsubscribe link is invalid or expired.",
    };
  }

  let removedProvider = false;
  if (hasResendAudienceConfig()) {
    removedProvider = await removeResendAudienceContact(email);
  }

  const removedLocal = await removeSubscriber(email);
  const removed = removedProvider || removedLocal;
  return {
    ok: true,
    code: removed ? "unsubscribed" : "already_unsubscribed",
    message: removed
      ? "You have been unsubscribed."
      : "This email is already unsubscribed.",
  };
};

export async function GET(request: NextRequest) {
  const url = new URL("/insights", getSiteUrl());
  try {
    const token = request.nextUrl.searchParams.get("token") ?? "";
    const result = await performUnsubscribe(token);

    url.searchParams.set("newsletter", result.ok ? result.code : "error");
    if (!result.ok) {
      url.searchParams.set("reason", result.code);
    }
  } catch {
    url.searchParams.set("newsletter", "error");
    url.searchParams.set("reason", "internal_error");
  }

  return NextResponse.redirect(url);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { token?: string };
    const result = await performUnsubscribe(body.token ?? "");
    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
  } catch {
    return NextResponse.json(
      { ok: false, code: "internal_error", message: "Something went wrong." },
      { status: 500 },
    );
  }
}
