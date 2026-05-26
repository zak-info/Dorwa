import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Payload = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 422 },
    );
  }

  // Stub: log the submission. Swap this for a Resend / SMTP send later by
  // reading RESEND_API_KEY from process.env and calling the provider here.
  // eslint-disable-next-line no-console
  console.log("[contact] new submission", {
    name,
    email,
    company: body.company ?? null,
    message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
