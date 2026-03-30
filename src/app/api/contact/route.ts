import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  companyWebsite?: unknown; // honeypot
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isEmailLike(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

type RateLimitEntry = { count: number; resetAtMs: number };
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 min
const RATE_LIMIT_MAX = 3; // per IP per window
const rateLimitStore = new Map<string, RateLimitEntry>();

function isRateLimited(ip: string, nowMs: number): boolean {
  const entry = rateLimitStore.get(ip);
  if (!entry) return false;
  if (nowMs >= entry.resetAtMs) {
    rateLimitStore.delete(ip);
    return false;
  }
  return entry.count >= RATE_LIMIT_MAX;
}

function getRateLimitRetryAfterSeconds(ip: string, nowMs: number): number | null {
  const entry = rateLimitStore.get(ip);
  if (!entry) return null;
  if (nowMs >= entry.resetAtMs) return null;
  if (entry.count < RATE_LIMIT_MAX) return null;
  const seconds = Math.ceil((entry.resetAtMs - nowMs) / 1000);
  return Number.isFinite(seconds) && seconds > 0 ? seconds : 1;
}

function incrementRateLimit(ip: string, nowMs: number): void {
  const entry = rateLimitStore.get(ip);
  if (!entry || nowMs >= entry.resetAtMs) {
    rateLimitStore.set(ip, { count: 1, resetAtMs: nowMs + RATE_LIMIT_WINDOW_MS });
    return;
  }
  entry.count += 1;
  rateLimitStore.set(ip, entry);
}

async function sendViaResend(params: {
  from: string;
  to: string;
  subject: string;
  text: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: params.from,
      to: [params.to],
      subject: params.subject,
      text: params.text,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Resend error: ${response.status} ${body}`);
  }
}

export async function POST(request: Request) {
  const nowMs = Date.now();
  const ip = getClientIp(request);

  if (isRateLimited(ip, nowMs)) {
    const retryAfterSeconds = getRateLimitRetryAfterSeconds(ip, nowMs) ?? 60;
    return NextResponse.json(
      {
        ok: false,
        error: `Too many requests. Please try again in ${retryAfterSeconds}s.`,
      },
      {
        status: 429,
        headers: { "Retry-After": String(retryAfterSeconds) },
      },
    );
  }

  let body: ContactRequestBody;
  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  // honeypot
  if (isNonEmptyString(body.companyWebsite)) {
    incrementRateLimit(ip, nowMs);
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!isNonEmptyString(body.email) || !isEmailLike(body.email)) {
    return NextResponse.json(
      { ok: false, error: "Valid email is required." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(body.message)) {
    return NextResponse.json(
      { ok: false, error: "Message is required." },
      { status: 400 },
    );
  }

  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const nameTrimmed =
    typeof body.name === "string" ? body.name.trim() : "";

  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!fromEmail || !toEmail) {
    return NextResponse.json(
      {
        ok: false,
        error: "Contact form is not configured. Please try again later.",
      },
      { status: 500 },
    );
  }

  const subject = nameTrimmed
    ? `New contact: ${nameTrimmed} (${body.email.trim()})`
    : `New contact: ${body.email.trim()}`;
  const text = [
    nameTrimmed ? `Name: ${nameTrimmed}` : "Name: (not provided)",
    `Email: ${body.email.trim()}`,
    phone ? `Phone: ${phone}` : "Phone: (not provided)",
    "",
    "Message:",
    body.message.trim(),
    "",
    `IP: ${ip}`,
    `UA: ${request.headers.get("user-agent") ?? "(unknown)"}`,
  ].join("\n");

  incrementRateLimit(ip, nowMs);

  try {
    await sendViaResend({
      from: fromEmail,
      to: toEmail,
      subject,
      text,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "I couldn’t send your message right now. Please try again later or reach out via LinkedIn.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

