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
            Sichere Zahlung über PayPal — auch ohne PayPal-Konto mit Kreditkarte möglich.
          </p>
          <a
            href="https://paypal.me/didgeridoovibes/100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0070BA] hover:bg-[#003087] text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
            </svg>
            Zehnerkarte kaufen — 100 €
          </a>
          <p className="font-sans text-xs text-muted/40 mt-3">
            Nach der Zahlung erhältst du eine Bestätigung per E-Mail.<br />
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
