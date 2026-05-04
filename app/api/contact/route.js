import { NextResponse } from "next/server";

const CONTACT_INBOX =
  process.env.CONTACT_INBOX_EMAIL || "info@felindajewelry.com";

/**
 * POST /api/contact
 * Sends booking enquiries via Resend (https://resend.com).
 *
 * Required for production:
 *   RESEND_API_KEY=re_xxxxx
 *
 * Optional:
 *   CONTACT_INBOX_EMAIL=you@yourdomain.com   (defaults to Felinda inbox above)
 *   RESEND_FROM_EMAIL="Felinda Jewelry <bookings@yourverifieddomain.com>"
 *     — must use a domain you verify in Resend; for tests Resend provides onboarding@resend.dev
 */
export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Contact form is not configured yet. Add RESEND_API_KEY to your server environment.",
      },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const {
    name,
    email,
    phone,
    note,
    intention,
    visitDate,
    timeWindow,
  } = body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof note !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !note.trim()
  ) {
    return NextResponse.json(
      { ok: false, message: "Name, email, and note are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const from =
    process.env.RESEND_FROM_EMAIL ||
    "Felinda Website <onboarding@resend.dev>";

  const lines = [
    `New atelier visit request (felindajewelry.com contact form)`,
    ``,
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Phone / WhatsApp: ${typeof phone === "string" && phone.trim() ? phone.trim() : "—"}`,
    `Intention: ${typeof intention === "string" ? intention : "—"}`,
    `Preferred date: ${typeof visitDate === "string" ? visitDate : "—"}`,
    `Preferred time: ${typeof timeWindow === "string" ? timeWindow : "—"}`,
    ``,
    `Note:`,
    note.trim(),
  ];

  const text = lines.join("\n");
  const html = lines
    .map((line) =>
      line === ""
        ? "<br />"
        : `<div>${escapeHtml(line).replace(/\n/g, "<br />")}</div>`
    )
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_INBOX],
      reply_to: email.trim(),
      subject: `Visit request · ${name.trim()}`,
      text,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#2B2321">${html}</div>`,
    }),
  });

  const payload = await res.json().catch(() => ({}));

  if (!res.ok) {
    const msg =
      payload?.message ||
      payload?.error?.message ||
      "Could not send message. Please try again or use WhatsApp.";
    return NextResponse.json({ ok: false, message: msg }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
