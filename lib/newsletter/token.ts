import crypto from "node:crypto";

const tokenTtlMs = 1000 * 60 * 60 * 24 * 30;

const getSecret = () => process.env.NEWSLETTER_UNSUBSCRIBE_SECRET ?? "";

const toBase64Url = (value: string) =>
  Buffer.from(value, "utf8").toString("base64url");

const fromBase64Url = (value: string) =>
  Buffer.from(value, "base64url").toString("utf8");

export const createUnsubscribeToken = (email: string) => {
  const secret = getSecret();
  if (!secret) return "";

  const payload = JSON.stringify({
    email: email.toLowerCase(),
    issuedAt: Date.now(),
  });
  const encodedPayload = toBase64Url(payload);
  const signature = crypto
    .createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("base64url");

  return `${encodedPayload}.${signature}`;
};

export const verifyUnsubscribeToken = (token: string) => {
  const secret = getSecret();
  if (!secret || !token) return null;

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return null;

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(encodedPayload)
    .digest("base64url");

  if (signature !== expectedSignature) return null;

  try {
    const payload = JSON.parse(fromBase64Url(encodedPayload)) as {
      email?: string;
      issuedAt?: number;
    };

    if (!payload.email || typeof payload.issuedAt !== "number") return null;
    if (Date.now() - payload.issuedAt > tokenTtlMs) return null;
    return payload.email.toLowerCase();
  } catch {
    return null;
  }
};
