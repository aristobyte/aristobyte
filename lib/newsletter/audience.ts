type ResendContactType = {
  id: string;
  email: string;
  unsubscribed?: boolean;
};

type UpsertContactResultType = "subscribed" | "already_subscribed";

const resendApiBase = "https://api.resend.com";

const getApiKey = () => process.env.RESEND_API_KEY ?? "";
const getAudienceId = () => process.env.NEWSLETTER_AUDIENCE_ID ?? "";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const extractContacts = (payload: unknown): ResendContactType[] => {
  if (!isObject(payload)) return [];
  const data = payload.data;
  if (!Array.isArray(data)) return [];

  return data
    .filter(isObject)
    .map((item) => ({
      id: String(item.id ?? ""),
      email: String(item.email ?? "").toLowerCase(),
      unsubscribed: Boolean(item.unsubscribed),
    }))
    .filter((item) => Boolean(item.id) && Boolean(item.email));
};

const resendRequest = async (
  path: string,
  init?: RequestInit,
): Promise<Response> => {
  const apiKey = getApiKey();
  const headers = new Headers(init?.headers);
  headers.set("Authorization", `Bearer ${apiKey}`);
  if (!headers.has("Content-Type") && init?.body) {
    headers.set("Content-Type", "application/json");
  }

  return fetch(`${resendApiBase}${path}`, {
    ...init,
    headers,
  });
};

const findContactByEmail = async (
  audienceId: string,
  email: string,
): Promise<ResendContactType | null> => {
  const normalizedEmail = email.toLowerCase();

  const withEmailResponse = await resendRequest(
    `/audiences/${audienceId}/contacts?email=${encodeURIComponent(normalizedEmail)}`,
  );
  if (withEmailResponse.ok) {
    const payload = await withEmailResponse.json();
    const contact = extractContacts(payload).find(
      (item) => item.email === normalizedEmail,
    );
    if (contact) return contact;
  }

  const listResponse = await resendRequest(`/audiences/${audienceId}/contacts`);
  if (!listResponse.ok) return null;
  const payload = await listResponse.json();
  return (
    extractContacts(payload).find((item) => item.email === normalizedEmail) ??
    null
  );
};

export const hasResendAudienceConfig = () =>
  Boolean(getApiKey()) && Boolean(getAudienceId());

export const upsertResendAudienceContact = async (
  email: string,
): Promise<UpsertContactResultType> => {
  const audienceId = getAudienceId();
  const normalizedEmail = email.toLowerCase();

  const existing = await findContactByEmail(audienceId, normalizedEmail);
  if (existing) {
    if (existing.unsubscribed) {
      await resendRequest(`/audiences/${audienceId}/contacts/${existing.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          unsubscribed: false,
        }),
      });
      return "subscribed";
    }
    return "already_subscribed";
  }

  const createResponse = await resendRequest(`/audiences/${audienceId}/contacts`, {
    method: "POST",
    body: JSON.stringify({
      email: normalizedEmail,
      unsubscribed: false,
    }),
  });

  if (createResponse.status === 409) {
    return "already_subscribed";
  }

  if (!createResponse.ok) {
    const body = await createResponse.text();
    throw new Error(
      `Resend audience subscribe failed: ${createResponse.status} ${body}`,
    );
  }

  return "subscribed";
};

export const removeResendAudienceContact = async (email: string) => {
  const audienceId = getAudienceId();
  const contact = await findContactByEmail(audienceId, email.toLowerCase());
  if (!contact) return false;

  const response = await resendRequest(
    `/audiences/${audienceId}/contacts/${contact.id}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Resend audience unsubscribe failed: ${response.status} ${body}`,
    );
  }

  return true;
};
