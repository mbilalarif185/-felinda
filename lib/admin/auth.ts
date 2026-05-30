import { NextResponse } from "next/server";

import { isAdminAuthenticated } from "@/lib/admin/session";

export function getAdminPassword(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  return password && password.length >= 8 ? password : null;
}

export async function requireAdminApi(): Promise<NextResponse | null> {
  if (!getAdminPassword()) {
    return NextResponse.json(
      { ok: false, message: "Admin is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET." },
      { status: 503 },
    );
  }
  const ok = await isAdminAuthenticated();
  if (!ok) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }
  return null;
}
