import { notFound } from "next/navigation";
import { getTicket } from "@/lib/ticket-store";
import type { Ticket } from "@/types";

export const dynamic = "force-dynamic";

export default async function PublicTicketPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket = await getTicket(id);
  if (!ticket) notFound();
  const isUsed = ticket.status === "used";
  const isZehnerkarte = ticket.type === "zehnerkarte";

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

  const remaining = isZehnerkarte
    ? (ticket.totalPunches ?? 10) - (ticket.usedPunches ?? 0)
    : null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em] mb-2">
            Ecstatic Dance Leipzig
          </p>
          <h1 className="font-display text-3xl font-light text-cream">
            {isZehnerkarte ? "Zehnerkarte" : "Ticket"}
          </h1>
        </div>

        {/* Status banner */}
        {isUsed && (
          <div className="rounded-xl bg-red-500/20 border border-red-500/40 px-4 py-3 text-center mb-6">
            <p className="font-sans text-sm font-semibold text-red-400">
              {isZehnerkarte ? "Alle Eintritte aufgebraucht" : "Bereits eingelöst"}
            </p>
          </div>
        )}
        {!isUsed && (
          <div className="rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-3 text-center mb-6">
            <p className="font-sans text-sm text-green-400">
              {isZehnerkarte ? `${remaining} Eintritte verbleibend` : "Ticket aktiv ✓"}
            </p>
          </div>
        )}

        {/* QR code */}
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 mb-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ticket.qrDataUrl}
            alt="Ticket QR Code"
            width={280}
            height={280}
            className="mx-auto rounded-xl w-full"
          />
        </div>

        {/* Info */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div>
            <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">Name</p>
            <p className="font-sans text-sm text-cream">{ticket.name}</p>
          </div>

          {!isZehnerkarte && eventDateStr && (
            <div>
              <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">Datum</p>
              <p className="font-sans text-sm text-cream capitalize">{eventDateStr}</p>
            </div>
          )}

          {isZehnerkarte && (
            <div>
              <p className="font-sans text-xs text-muted uppercase tracking-widest mb-1">Eintritte</p>
              <div className="flex gap-1.5 flex-wrap">
                {Array.from({ length: ticket.totalPunches ?? 10 }).map((_, i) => (
                  <span
                    key={i}
                    className={[
                      "w-6 h-6 rounded-full text-center text-xs leading-6",
                      i < (ticket.usedPunches ?? 0)
                        ? "bg-muted/20 text-muted/40"
                        : "bg-gold/20 text-gold",
                    ].join(" ")}
                  >
                    ●
                  </span>
                ))}
              </div>
              {validUntilStr && (
                <p className="font-sans text-xs text-muted mt-2">Gültig bis {validUntilStr}</p>
              )}
            </div>
          )}

          <div>
            <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">Ticket-ID</p>
            <p className="font-sans text-xs text-gold font-mono">{ticket.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
