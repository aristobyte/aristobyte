type SendEmailPayloadType = {
  to: string;
  subject: string;
  html: string;
};

const resendApiUrl = "https://api.resend.com/emails";

export const sendEmailViaResend = async ({
  to,
  subject,
  html,
}: SendEmailPayloadType) => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NEWSLETTER_FROM_EMAIL;
  if (!apiKey || !from) return { sent: false, reason: "missing-config" };

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend failed: ${response.status} ${body}`);
  }

  return { sent: true };
};
