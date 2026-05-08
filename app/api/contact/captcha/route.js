import { NextResponse } from "next/server";

import { createCaptchaChallenge } from "@/lib/simpleCaptchaStore";

export async function GET() {
  const challenge = createCaptchaChallenge();
  return NextResponse.json({ ok: true, ...challenge });
}
