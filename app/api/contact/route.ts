import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({ error: "Email not configured" }, { status: 503 });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(resendKey);

  let body: Record<string, string>;

  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    body = await request.json();
  } else {
    const formData = await request.formData();
    body = Object.fromEntries(
      Array.from(formData.entries()).map(([k, v]) => [k, v.toString()])
    );
  }

  const { type, email, name, message, subject } = body;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    if (type === "newsletter") {
      await resend.emails.send({
        from: `VibraDance <${process.env.CONTACT_EMAIL}>`,
        to: email,
        subject: "Willkommen bei Ecstatic Dance Leipzig",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #1A1A2E; color: #F8F5EE; padding: 40px; border-radius: 16px;">
            <h1 style="font-size: 28px; font-weight: 300; color: #F8F5EE; margin-bottom: 16px;">
              Willkommen in der Community
            </h1>
            <p style="color: #7A7A9A; line-height: 1.6;">
              Danke, dass du dich für den Newsletter von Ecstatic Dance Leipzig angemeldet hast.
              Wir informieren dich über kommende Events, Early Birds und Neuigkeiten.
            </p>
            <hr style="border-color: rgba(255,255,255,0.1); margin: 24px 0;" />
            <p style="color: #7A7A9A; font-size: 12px;">
              Ecstatic Dance Leipzig · Jeden Dienstag, 19:00 Uhr · ZiMMT Leipzig
            </p>
          </div>
        `,
      });
    } else {
      if (!name || !message) {
        return NextResponse.json(
          { error: "Name and message are required" },
          { status: 400 }
        );
      }

      await resend.emails.send({
        from: `${siteConfig.fullName} <${process.env.CONTACT_EMAIL}>`,
        to: process.env.CONTACT_EMAIL!,
        replyTo: email,
        subject: `[Kontakt] ${subject ?? "Neue Anfrage"} — ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2>Neue Kontaktanfrage</h2>
            <p><strong>Von:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Betreff:</strong> ${subject ?? "Kein Betreff"}</p>
            <hr />
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      });
    }

    const referer = request.headers.get("referer") ?? "/";
    return NextResponse.redirect(new URL(`${referer}?sent=true`, request.url), {
      status: 303,
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
