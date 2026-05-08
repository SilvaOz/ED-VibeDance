import type { Metadata } from "next";
import { zehnerkarte, siteConfig } from "@/lib/config";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Zehnerkarte — 10 Abende für 100€",
  description:
    "Die Zehnerkarte für Ecstatic Dance Leipzig: 10 Eintritte für 100€ — nur 10€ pro Abend. 2 Jahre gültig, kein festes Datum. Über 44% Ersparnis.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecstaticdanceleipzig.de"}/zehnerkarte` },
};

export default function ZehnerkarteSeite() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-4">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="text-center mb-16">
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em] mb-4">
            Bester Preis garantiert
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-6">
            Zehnerkarte —{" "}
            <em className="not-italic italic text-gold">10 Abende, 100 €</em>
          </h1>
          <p className="font-sans text-base text-muted max-w-xl mx-auto leading-relaxed">
            {zehnerkarte.description}
          </p>
        </FadeUp>

        {/* Preisvergleich */}
        <FadeUp delay={100}>
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden mb-10">
            {zehnerkarte.comparison.map((item) => (
              <div
                key={item.label}
                className={[
                  "flex items-center justify-between px-8 py-5 border-b border-white/8 last:border-0",
                  item.highlight ? "bg-gold/10" : "",
                ].join(" ")}
              >
                <span
                  className={[
                    "font-sans text-base",
                    item.highlight ? "text-gold font-semibold" : "text-muted",
                  ].join(" ")}
                >
                  {item.label}
                </span>
                <span
                  className={[
                    "font-display text-2xl",
                    item.highlight
                      ? "text-gold font-semibold"
                      : "text-muted/60 line-through",
                  ].join(" ")}
                >
                  {item.price} €
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Details */}
        <FadeUp delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: "Preis gesamt", value: `${zehnerkarte.price} €` },
              { label: "Pro Abend", value: `${zehnerkarte.pricePerNight} €` },
              { label: "Gültigkeit", value: `${zehnerkarte.validMonths} Monate` },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="text-center rounded-xl border border-white/10 bg-white/5 py-6 px-4"
              >
                <p className="font-sans text-xs text-muted uppercase tracking-widest mb-2">
                  {label}
                </p>
                <p className="font-display text-3xl text-gold">{value}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={300} className="text-center">
          <p className="font-sans text-sm text-muted mb-4">
            Du erhältst deinen QR-Code sofort per E-Mail — Zahlung über PayPal.
          </p>
          <a
            href="/checkout?type=zehnerkarte"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-dark font-semibold px-8 py-4 rounded-full transition-colors text-lg"
          >
            Zehnerkarte kaufen — 100 €
          </a>
          <p className="font-sans text-xs text-muted/40 mt-3">
            Du erhältst sofort deinen QR-Code per E-Mail.<br />
            Deine physische Karte bekommst du beim ersten Besuch.
          </p>

          <details className="mt-6">
            <summary className="font-sans text-sm text-muted/40 cursor-pointer hover:text-muted/60 transition-colors">
              Lieber per Banküberweisung zahlen?
            </summary>
            <div className="mt-4 p-4 bg-white/5 rounded-lg font-sans text-sm text-muted text-left max-w-sm mx-auto space-y-1">
              <p><span className="text-cream/80">Empfänger:</span> Oscar Silva</p>
              <p><span className="text-cream/80">IBAN:</span> [DEIN IBAN HIER]</p>
              <p><span className="text-cream/80">Verwendungszweck:</span> Zehnerkarte + dein Name</p>
              <p className="text-muted/50 text-xs mt-2">Nach Zahlungseingang melden wir uns per E-Mail.</p>
            </div>
          </details>

          <p className="font-sans text-xs text-muted mt-6">
            Fragen? Schreib uns an{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent-light hover:underline underline-offset-2"
            >
              {siteConfig.email}
            </a>
          </p>
        </FadeUp>

        {/* Häufige Fragen */}
        <FadeUp delay={400}>
          <div className="mt-16 space-y-4">
            {[
              {
                q: "Wie erhalte ich die Karte?",
                a: "Du erhältst deine physische Zehnerkarte beim ersten Event, das du mit ihr besuchst. Online erhältst du sofort eine Bestätigung per E-Mail.",
              },
              {
                q: "Kann ich sie verschenken?",
                a: "Ja, die Zehnerkarte ist übertragbar. Sie ist an keine Person gebunden.",
              },
              {
                q: "Was, wenn ich einen Dienstag verpasse?",
                a: "Kein Problem — die Karte ist 2 Jahre gültig. Nutze sie wann immer du möchtest.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-6"
              >
                <p className="font-display text-lg text-cream mb-2">{q}</p>
                <p className="font-sans text-sm text-muted leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
