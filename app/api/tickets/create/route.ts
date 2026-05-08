import { NextRequest, NextResponse } from "next/server";
import { saveTicket } from "@/lib/ticket-store";
import { generateTicketId, generateCardId, generateQR } from "@/lib/tickets";
import { events } from "@/lib/config";
import type { Ticket } from "@/types";

export const dynamic = "force-dynamic";

const PAYPAL_URL = process.env.PAYPAL_PAYMENT_URL ?? "https://www.paypal.com/ncp/payment/RPPK47WFKZW4N";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, type, eventId } = body as {
    name?: string;
    email?: string;
    type?: string;
    eventId?: string;
  };

  if (!name || !email || !type) {
    return NextResponse.json({ error: "name, email and type are required" }, { status: 400 });
  }
  if (type !== "event" && type !== "zehnerkarte") {
    return NextResponse.json({ error: "type must be event or zehnerkarte" }, { status: 400 });
  }
  if (type === "event" && !eventId) {
    return NextResponse.json({ error: "eventId is required for event tickets" }, { status: 400 });
  }

  const now = new Date();
  const id = type === "event" ? await generateTicketId() : await generateCardId();
  const qrDataUrl = await generateQR(id);

  let ticket: Ticket;
  let paypalUrl: string;
  let emailHtml: string;
  let emailSubject: string;

  if (type === "event") {
    const event = events.find((e) => e.id === eventId);
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    const eventDate = new Date(event.date).toLocaleDateString("de-DE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    ticket = {
      id,
      type: "event",
      name,
      email,
      createdAt: now.toISOString(),
      status: "active",
      qrDataUrl,
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
    };

    paypalUrl = PAYPAL_URL;

    emailSubject = `Dein Ticket für Ecstatic Dance Leipzig — ${eventDate}`;
    emailHtml = buildEventEmail({ name, id, eventTitle: event.title, eventDate, qrDataUrl, paypalUrl, amount: event.price.presale });
  } else {
    const validUntil = new Date(now);
    validUntil.setMonth(validUntil.getMonth() + 24);

    ticket = {
      id,
      type: "zehnerkarte",
      name,
      email,
      createdAt: now.toISOString(),
      status: "active",
      qrDataUrl,
      totalPunches: 10,
      usedPunches: 0,
      validUntil: validUntil.toISOString(),
    };

    paypalUrl = PAYPAL_URL;

    const validUntilStr = validUntil.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
    emailSubject = `Deine Zehnerkarte #${id} — Ecstatic Dance Leipzig`;
    emailHtml = buildZehnerkarteEmail({ name, id, validUntilStr, qrDataUrl, paypalUrl });
  }

  await saveTicket(ticket);

  // Send email
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);
    const fromEmail = process.env.CONTACT_EMAIL ?? "hallo@ecstaticdanceleipzig.de";
    await resend.emails.send({
      from: `Ecstatic Dance Leipzig <${fromEmail}>`,
      to: email,
      subject: emailSubject,
      html: emailHtml,
    });
  }

  return NextResponse.json({ id, paypalUrl });
}

// ─── Email Templates ──────────────────────────────────────────────────────────

function buildEventEmail({
  name,
  id,
  eventTitle,
  eventDate,
  qrDataUrl,
  paypalUrl,
  amount,
}: {
  name: string;
  id: string;
  eventTitle: string;
  eventDate: string;
  qrDataUrl: string;
  paypalUrl: string;
  amount: number;
}) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0D0D1A;font-family:sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <p style="color:#C9A84C;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:8px;">Ecstatic Dance Leipzig</p>
    <h1 style="color:#F8F5EE;font-size:28px;font-weight:300;margin:0 0 24px;">Dein Ticket ist bereit, ${escHtml(name)}!</h1>

    <div style="background:#1A1A2E;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:32px;margin-bottom:24px;">
      <p style="color:#7A7A9A;font-size:12px;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 4px;">Veranstaltung</p>
      <p style="color:#F8F5EE;font-size:18px;margin:0 0 16px;">${escHtml(eventTitle)}</p>

      <p style="color:#7A7A9A;font-size:12px;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 4px;">Datum</p>
      <p style="color:#F8F5EE;font-size:16px;margin:0 0 16px;text-transform:capitalize;">${escHtml(eventDate)}</p>

      <p style="color:#7A7A9A;font-size:12px;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 4px;">Ort</p>
      <p style="color:#F8F5EE;font-size:16px;margin:0 0 16px;">ZiMMT Leipzig · Torgauer Straße 80</p>

      <p style="color:#7A7A9A;font-size:12px;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 8px;">Ticket-ID</p>
      <p style="color:#C9A84C;font-family:monospace;font-size:14px;margin:0;">${escHtml(id)}</p>
    </div>

    <div style="text-align:center;margin-bottom:24px;">
      <img src="${qrDataUrl}" alt="QR Code" width="200" height="200" style="border-radius:12px;" />
      <p style="color:#7A7A9A;font-size:13px;margin-top:12px;">Zeig diesen QR-Code an der Tür</p>
    </div>

    <div style="text-align:center;margin-bottom:32px;">
      <a href="${paypalUrl}" style="display:inline-block;background:#0070BA;color:white;font-weight:600;padding:14px 28px;border-radius:50px;text-decoration:none;font-size:16px;">
        Jetzt bezahlen — ${amount} €
      </a>
      <p style="color:#7A7A9A;font-size:12px;margin-top:8px;">Sichere Zahlung über PayPal</p>
    </div>

    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:0 0 24px;">
    <p style="color:#4A4A6A;font-size:12px;margin:0;">Ecstatic Dance Leipzig · Jeden Dienstag 19–22 Uhr · ZiMMT Leipzig</p>
  </div>
</body>
</html>`;
}

function buildZehnerkarteEmail({
  name,
  id,
  validUntilStr,
  qrDataUrl,
  paypalUrl,
}: {
  name: string;
  id: string;
  validUntilStr: string;
  qrDataUrl: string;
  paypalUrl: string;
}) {
  const circles = "●".repeat(10);
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0D0D1A;font-family:sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <p style="color:#C9A84C;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:8px;">Ecstatic Dance Leipzig</p>
    <h1 style="color:#F8F5EE;font-size:28px;font-weight:300;margin:0 0 24px;">Deine Zehnerkarte ist bereit, ${escHtml(name)}!</h1>

    <div style="background:#1A1A2E;border:1px solid rgba(201,168,76,0.3);border-radius:16px;padding:32px;margin-bottom:24px;">
      <p style="color:#7A7A9A;font-size:12px;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 4px;">Karten-Nummer</p>
      <p style="color:#C9A84C;font-family:monospace;font-size:18px;margin:0 0 20px;">${escHtml(id)}</p>

      <p style="color:#C9A84C;font-size:28px;letter-spacing:6px;margin:0 0 16px;">${circles}</p>
      <p style="color:#7A7A9A;font-size:13px;margin:0 0 20px;">10 Eintritte · 10 € pro Abend</p>

      <p style="color:#7A7A9A;font-size:12px;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 4px;">Gültig bis</p>
      <p style="color:#F8F5EE;font-size:16px;margin:0;">${escHtml(validUntilStr)}</p>
    </div>

    <div style="text-align:center;margin-bottom:24px;">
      <img src="${qrDataUrl}" alt="QR Code" width="200" height="200" style="border-radius:12px;" />
      <p style="color:#7A7A9A;font-size:13px;margin-top:12px;">Zeig diesen QR-Code an der Tür</p>
    </div>

    <div style="text-align:center;margin-bottom:32px;">
      <a href="${paypalUrl}" style="display:inline-block;background:#0070BA;color:white;font-weight:600;padding:14px 28px;border-radius:50px;text-decoration:none;font-size:16px;">
        Jetzt bezahlen — 100 €
      </a>
      <p style="color:#7A7A9A;font-size:12px;margin-top:8px;">Sichere Zahlung über PayPal</p>
    </div>

    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:0 0 24px;">
    <p style="color:#4A4A6A;font-size:12px;margin:0;">Ecstatic Dance Leipzig · Jeden Dienstag 19–22 Uhr · ZiMMT Leipzig</p>
  </div>
</body>
</html>`;
}

function escHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
