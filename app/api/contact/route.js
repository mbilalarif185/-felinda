import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_INBOX = "info@felindajewelry.com";
const FROM_EMAIL =
  process.env.SMTP_USER || "test@cressoftmarketing.ae";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "cressoftmarketing.ae",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "test@cressoftmarketing.ae",
    pass: process.env.SMTP_PASS || "test@231",
  },
});

export async function POST(request) {
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

  try {
    await transporter.sendMail({
      from: `Felinda Website <${FROM_EMAIL}>`,
      to: [CONTACT_INBOX],
      replyTo: email.trim(),
      subject: `Visit request · ${name.trim()}`,
      text,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#2B2321">${html}</div>`,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Could not send message. Please try again or use WhatsApp.",
      },
      { status: 502 }
    );
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
