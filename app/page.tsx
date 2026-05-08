import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, events } from "@/lib/config";

export const metadata: Metadata = {
  title: "Ecstatic Dance Leipzig — Kommt bald",
  description:
    "Jeden Dienstag in Leipzig: Ecstatic Dance mit Didgeridoo live, DJ La Lvcha und Sound Healing. Kein Alkohol, barfuß, bewusste Bewegung im ZiMMT.",
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  const nextEvent = events.find((e) => new Date(e.date) >= new Date());
  const eventDate = nextEvent
    ? new Date(nextEvent.date).toLocaleDateString("de-DE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-lg w-full">

        {/* Label */}
        <p className="font-sans text-xs text-gold uppercase tracking-[0.4em] mb-8">
          Leipzig · Jeden Dienstag
        </p>

        {/* Title */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-4 leading-tight">
          Ecstatic Dance<br />
          <em className="not-italic italic text-gold">Leipzig</em>
        </h1>

        <p className="font-sans text-sm text-muted mb-10 leading-relaxed">
          Conscious Dance · Didgeridoo Live · Sacred Sound
        </p>

        {/* Coming soon badge */}
        <div className="inline-block rounded-full border border-white/15 bg-white/5 px-6 py-2.5 mb-10">
          <p className="font-sans text-sm text-muted">
            Website kommt bald — wir arbeiten daran ✦
          </p>
        </div>

        {/* Next event */}
        {nextEvent && eventDate && (
          <div className="rounded-2xl border border-accent/20 bg-accent/5 px-8 py-6 mb-10">
            <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-2">
              Nächstes Event
            </p>
            <p className="font-display text-xl text-cream capitalize mb-1">
              {eventDate}
            </p>
            <p className="font-sans text-sm text-muted mb-4">
              19:00 Uhr · ZiMMT Leipzig
            </p>
            <Link
              href={`/veranstaltungen/${nextEvent.slug}`}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-cream font-sans font-medium text-sm px-6 py-2.5 rounded-full transition-colors"
            >
              Ticket kaufen →
            </Link>
          </div>
        )}

        {/* Newsletter */}
        <form
          action="/api/contact"
          method="POST"
          className="flex gap-2 mb-10 max-w-sm mx-auto"
        >
          <input type="hidden" name="type" value="newsletter" />
          <input
            type="email"
            name="email"
            required
            placeholder="deine@email.de"
            className="flex-1 bg-white/5 border border-white/15 rounded-full px-4 py-2.5 font-sans text-sm text-cream placeholder:text-muted/40 focus:outline-none focus:border-accent/60 transition-colors"
          />
          <button
            type="submit"
            className="bg-gold hover:bg-gold/90 text-dark font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
          >
            Benachrichtigen
          </button>
        </form>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-muted hover:text-cream transition-colors flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          <span className="text-white/10">·</span>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-muted hover:text-cream transition-colors flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Telegram
          </a>
          <span className="text-white/10">·</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-sans text-sm text-muted hover:text-cream transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

      </div>
    </div>
  );
}
