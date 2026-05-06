"use client";

import { useState } from "react";
import { siteConfig, venue } from "@/lib/config";
import { FadeUp } from "@/components/ui/FadeUp";

export function KontaktForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "contact" }),
      });
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-4">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-4">
            Schreib uns
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-cream mb-6">
            Kontakt
          </h1>
          <p className="font-sans text-base text-muted max-w-xl mx-auto leading-relaxed">
            Fragen, Kooperationen oder Pressearbeit — wir freuen uns über
            Nachrichten.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Formular */}
          <FadeUp delay={100} className="lg:col-span-3">
            {sent ? (
              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-10 text-center">
                <p className="font-display text-3xl text-cream mb-3">Danke!</p>
                <p className="font-sans text-sm text-muted">
                  Wir melden uns so schnell wie möglich bei dir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-sans text-xs text-muted uppercase tracking-widest block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl px-5 py-3.5 bg-white/8 border border-white/15 text-cream placeholder:text-muted/50 font-sans text-sm focus:outline-none focus:border-accent/40"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs text-muted uppercase tracking-widest block mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl px-5 py-3.5 bg-white/8 border border-white/15 text-cream placeholder:text-muted/50 font-sans text-sm focus:outline-none focus:border-accent/40"
                    placeholder="deine@email.de"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs text-muted uppercase tracking-widest block mb-2">
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl px-5 py-3.5 bg-white/8 border border-white/15 text-cream placeholder:text-muted/50 font-sans text-sm focus:outline-none focus:border-accent/40 resize-none"
                    placeholder="Womit können wir dir helfen?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-full py-4 bg-accent text-cream font-sans text-sm font-medium hover:bg-accent/80 transition-colors disabled:opacity-50"
                >
                  {sending ? "Wird gesendet…" : "Nachricht senden"}
                </button>
              </form>
            )}
          </FadeUp>

          {/* Kontaktdaten */}
          <FadeUp delay={200} className="lg:col-span-2">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-sans text-xs text-accent-light uppercase tracking-widest mb-3">
                  E-Mail
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-sans text-sm text-cream hover:text-accent-light transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-sans text-xs text-accent-light uppercase tracking-widest mb-3">
                  Telegram
                </p>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-cream hover:text-accent-light transition-colors"
                >
                  t.me/ecstaticdanceleipzig
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-sans text-xs text-accent-light uppercase tracking-widest mb-3">
                  Instagram
                </p>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-cream hover:text-accent-light transition-colors"
                >
                  @staticdanceleipzig
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-sans text-xs text-accent-light uppercase tracking-widest mb-3">
                  Veranstaltungsort
                </p>
                <p className="font-sans text-sm text-cream">{venue.name}</p>
                <p className="font-sans text-xs text-muted mt-1">
                  {venue.address}
                </p>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-accent-light hover:underline underline-offset-2 mt-2 block"
                >
                  Anfahrt →
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Karte */}
        <div className="mt-12">
          <p className="font-sans text-xs text-muted uppercase tracking-widest mb-3">
            Lage — {venue.name}
          </p>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=12.393,51.338,12.413,51.348&marker=51.3432,12.4034&layers=M"
            width="100%"
            height="300"
            title="ZiMMT Leipzig auf OpenStreetMap"
            style={{
              borderRadius: "12px",
              border: "1px solid rgba(107,79,160,0.2)",
              display: "block",
            }}
            loading="lazy"
          />
          <p className="font-sans text-xs text-muted/50 mt-2 text-right">
            © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">OpenStreetMap</a>-Mitwirkende
          </p>
        </div>
      </div>
    </div>
  );
}
