"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { events } from "@/lib/config";
import { FadeUp } from "@/components/ui/FadeUp";

function CheckoutForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as "event" | "zehnerkarte" | null;
  const eventId = searchParams.get("eventId");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const event = type === "event" && eventId ? events.find((e) => e.id === eventId) : null;

  if (!type || (type === "event" && !eventId)) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="font-sans text-muted">Ungültige Anfrage.</p>
      </div>
    );
  }

  const isEvent = type === "event";
  const productLabel = isEvent
    ? event
      ? `Ticket — ${event.title}`
      : "Ticket"
    : "Zehnerkarte — 10 Eintritte";
  const priceLabel = isEvent
    ? event
      ? `${event.price.presale} €`
      : ""
    : "100 €";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/tickets/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, type, eventId }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Fehler beim Erstellen des Tickets");
        setLoading(false);
        return;
      }
      const { id } = await res.json();
      router.push(`/checkout/success/${id}`);
    } catch {
      setError("Verbindungsfehler. Bitte versuche es erneut.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-4">
      <div className="mx-auto max-w-md">
        <FadeUp className="mb-10 text-center">
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em] mb-3">
            {isEvent ? "Ticket buchen" : "Zehnerkarte kaufen"}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-cream mb-2">
            {productLabel}
          </h1>
          {priceLabel && (
            <p className="font-display text-2xl text-gold">{priceLabel}</p>
          )}
          {event && (
            <p className="font-sans text-sm text-muted mt-2">
              {new Date(event.date).toLocaleDateString("de-DE", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </FadeUp>

        <FadeUp delay={100}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-sans text-xs text-muted uppercase tracking-widest mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dein Name"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-sm text-cream placeholder:text-muted/40 focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-xs text-muted uppercase tracking-widest mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-sm text-cream placeholder:text-muted/40 focus:outline-none focus:border-accent/60 transition-colors"
                />
                <p className="font-sans text-xs text-muted/50 mt-1.5">
                  Du erhältst deinen QR-Code per E-Mail.
                </p>
              </div>

              {error && (
                <p className="font-sans text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed text-cream font-semibold px-6 py-4 rounded-full transition-colors text-sm"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-cream/40 border-t-cream rounded-full animate-spin" />
                    Ticket wird erstellt…
                  </>
                ) : (
                  "Weiter zur Zahlung →"
                )}
              </button>
            </form>
          </div>
        </FadeUp>

        <FadeUp delay={200} className="text-center mt-6">
          <p className="font-sans text-xs text-muted/40">
            Kein Konto erforderlich. Zahlung erfolgt über PayPal nach der Buchung.
          </p>
        </FadeUp>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutForm />
    </Suspense>
  );
}
