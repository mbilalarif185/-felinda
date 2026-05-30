import { NextResponse } from "next/server";

import { getAdminPassword } from "@/lib/admin/auth";
import { createAdminSession } from "@/lib/admin/session";

export async function POST(request: Request) {
  const configured = getAdminPassword();
  if (!configured) {
    return NextResponse.json(
      { ok: false, message: "Admin login is not configured on this server." },
      { status: 503 },
    );
  }

  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const password = typeof body.password === "string" ? body.password : "";
  if (!password || password !== configured) {
    return NextResponse.json({ ok: false, message: "Invalid password." }, { status: 401 });
  }

  try {
    await createAdminSession();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Session secret is not configured (ADMIN_SESSION_SECRET)." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
