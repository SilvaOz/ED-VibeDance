import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/config";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
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
      // Newsletter subscription
      await resend.emails.send({
        from: `VibraDance <${process.env.CONTACT_EMAIL}>`,
        to: email,
        subject: "Bienvenido/a a Ecstatic Dance Leipzig",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #1A1A2E; color: #F8F5EE; padding: 40px; border-radius: 16px;">
            <h1 style="font-size: 28px; font-weight: 300; color: #F8F5EE; margin-bottom: 16px;">
              Bienvenido/a a la comunidad 🌀
            </h1>
            <p style="color: #7A7A9A; line-height: 1.6;">
              Gracias por unirte al newsletter de Ecstatic Dance Leipzig.
              Te avisaremos de los próximos eventos, Early Birds y novedades.
            </p>
            <hr style="border-color: rgba(255,255,255,0.1); margin: 24px 0;" />
            <p style="color: #7A7A9A; font-size: 12px;">
              Ecstatic Dance Leipzig · Cada martes 19:30 Uhr
            </p>
          </div>
        `,
      });
    } else {
      // Contact form
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
        subject: `[Contacto] ${subject ?? "Nueva consulta"} — ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>De:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Asunto:</strong> ${subject ?? "Sin asunto"}</p>
            <hr />
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      });
    }

    // Redirect back with success
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
