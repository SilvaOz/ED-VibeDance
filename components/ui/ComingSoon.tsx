import Link from "next/link";
import { siteConfig, events } from "@/lib/config";

export function ComingSoon() {
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-lg w-full">
        <p className="font-sans text-xs text-gold uppercase tracking-[0.4em] mb-8">
          Leipzig · Jeden Dienstag
        </p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-4 leading-tight">
          Ecstatic Dance<br />
          <em className="not-italic italic text-gold">Leipzig</em>
        </h1>

        <p className="font-sans text-sm text-muted mb-10">
          Conscious Dance · Didgeridoo Live · Sacred Sound
        </p>

        <div className="inline-block rounded-full border border-white/15 bg-white/5 px-6 py-2.5 mb-10">
          <p className="font-sans text-sm text-muted">
            Website kommt bald — wir arbeiten daran ✦
          </p>
        </div>

        {nextEvent && eventDate && (
          <div className="rounded-2xl border border-accent/20 bg-accent/5 px-8 py-6 mb-10">
            <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-2">
              Nächstes Event
            </p>
            <p className="font-display text-xl text-cream capitalize mb-1">{eventDate}</p>
            <p className="font-sans text-sm text-muted mb-4">19:00 Uhr · ZiMMT Leipzig</p>
            <Link
              href={`/veranstaltungen/${nextEvent.slug}`}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-cream font-sans font-medium text-sm px-6 py-2.5 rounded-full transition-colors"
            >
              Ticket kaufen →
            </Link>
          </div>
        )}

        <div className="flex items-center justify-center gap-6">
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"
            className="font-sans text-sm text-muted hover:text-cream transition-colors">
            Instagram
          </a>
          <span className="text-white/10">·</span>
          <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer"
            className="font-sans text-sm text-muted hover:text-cream transition-colors">
            Telegram
          </a>
          <span className="text-white/10">·</span>
          <a href={`mailto:${siteConfig.email}`}
            className="font-sans text-sm text-muted hover:text-cream transition-colors">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
