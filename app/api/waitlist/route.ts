import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json(
      { error: "Waitlist is not configured." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const role = typeof body?.role === "string" ? body.role : undefined;

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const sheetResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: webhookSecret, email, role }),
  });

  if (!sheetResponse.ok) {
    return NextResponse.json(
      { error: "Could not save your email. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
