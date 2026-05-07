import type { Metadata } from "next";
import { events } from "@/lib/config";
import { EventCard } from "@/components/ui/EventCard";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Alle Ecstatic-Dance-Veranstaltungen in Leipzig. Jeden Dienstag: Didgeridoo Live + DJ, barfuß, ohne Alkohol — in vollständiger Präsenz.",
  keywords: [
    "ecstatic dance Leipzig Events",
    "ZiMMT Leipzig events",
    "Torgauer Straße Leipzig",
    "ecstatic dance ZiMMT",
    "conscious dance Leipzig-Reudnitz",
  ],
};

export default function VeranstaltungenPage() {
  const upcoming = events.filter((e) => new Date(e.date) > new Date());
  const past = events.filter((e) => new Date(e.date) <= new Date());

  return (
    <div className="min-h-screen pt-28 pb-24 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-4">
            Programm
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-6">
            Nächste{" "}
            <em className="not-italic italic text-accent-light">Events</em>
          </h1>
          <p className="font-sans text-base text-muted max-w-xl mx-auto leading-relaxed">
            Jeden Dienstag, 19:00 Uhr. ZiMMT Leipzig.
          </p>
        </FadeUp>

        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {upcoming.map((event, i) => (
              <FadeUp key={event.id} delay={i * 80}>
                <EventCard event={event} />
              </FadeUp>
            ))}
          </div>
        ) : (
          <FadeUp>
            <div className="text-center py-20 rounded-2xl border border-white/10 bg-white/5 mb-20">
              <p className="font-sans text-muted">
                Keine Events geplant — schau bald wieder vorbei.
              </p>
            </div>
          </FadeUp>
        )}

        {past.length > 0 && (
          <>
            <FadeUp>
              <h2 className="font-display text-3xl font-light text-cream/50 mb-8">
                Vergangene Abende
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-50">
              {past.map((event, i) => (
                <FadeUp key={event.id} delay={i * 60}>
                  <EventCard event={event} />
                </FadeUp>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
