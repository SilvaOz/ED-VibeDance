import { notFound } from "next/navigation";
import Link from "next/link";
import { getTicket } from "@/lib/ticket-store";
import type { Ticket } from "@/types";

export const dynamic = "force-dynamic";

export default async function CheckoutSuccessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket = await getTicket(id);
  if (!ticket) notFound();

  const isEvent = ticket.type === "event";
  const paypalUrl = process.env.PAYPAL_PAYMENT_URL ?? "https://www.paypal.com/ncp/payment/RPPK47WFKZW4N";
  const amount = isEvent ? "18 €" : "100 €";

  const eventDateStr = ticket.eventDate
    ? new Date(ticket.eventDate).toLocaleDateString("de-DE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const validUntilStr = ticket.validUntil
    ? new Date(ticket.validUntil).toLocaleDateString("de-DE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen pt-28 pb-24 px-4">
      <div className="mx-auto max-w-md text-center">
        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 mb-8">
          <svg
            className="w-10 h-10 text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="font-sans text-xs text-gold uppercase tracking-[0.3em] mb-3">
          {isEvent ? "Ticket bestätigt" : "Zehnerkarte bestätigt"}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-light text-cream mb-3">
          {isEvent ? "Dein Ticket ist bereit!" : "Deine Zehnerkarte ist bereit!"}
        </h1>
        <p className="font-sans text-sm text-muted mb-8">
          Wir haben dir eine E-Mail mit deinem QR-Code geschickt.
        </p>

        {/* Ticket card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-6 text-left space-y-4">
          {isEvent && eventDateStr && (
            <div>
              <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">Datum</p>
              <p className="font-sans text-sm text-cream capitalize">{eventDateStr}</p>
            </div>
          )}
          {isEvent && (
            <div>
              <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">Veranstaltung</p>
              <p className="font-sans text-sm text-cream">{ticket.eventTitle ?? "Ecstatic Dance Leipzig"}</p>
            </div>
          )}
          {!isEvent && (
            <>
              <div>
                <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">Eintritte</p>
                <p className="font-sans text-sm text-gold">
                  {"●".repeat(10)}
                </p>
                <p className="font-sans text-xs text-muted mt-1">10 Eintritte · 10 € pro Abend</p>
              </div>
              {validUntilStr && (
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">Gültig bis</p>
                  <p className="font-sans text-sm text-cream">{validUntilStr}</p>
                </div>
              )}
            </>
          )}
          <div>
            <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">Ticket-ID</p>
            <p className="font-sans text-sm text-gold font-mono">{ticket.id}</p>
          </div>
        </div>

        {/* QR code */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-8">
          <p className="font-sans text-xs text-muted uppercase tracking-widest mb-4">Dein QR-Code</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ticket.qrDataUrl}
            alt="Ticket QR Code"
            width={220}
            height={220}
            className="mx-auto rounded-xl"
          />
          <p className="font-sans text-xs text-muted/60 mt-4">
            Zeig diesen QR-Code an der Tür
          </p>
        </div>

        {/* PayPal CTA */}
        <a
          href={paypalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-3 bg-[#0070BA] hover:bg-[#003087] text-white font-semibold px-6 py-4 rounded-full transition-colors text-base mb-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
          </svg>
          Jetzt bezahlen — {amount}
        </a>

        <p className="font-sans text-xs text-muted/40 mb-8">
          Dein QR-Code ist bereits aktiv. Die Zahlung ermöglicht deinen Einlass.
        </p>

        <Link
          href="/veranstaltungen"
          className="font-sans text-sm text-accent-light hover:underline underline-offset-2"
        >
          ← Zurück zu den Events
        </Link>
      </div>
    </div>
  );
}
