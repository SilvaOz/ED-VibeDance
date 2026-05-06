import Image from "next/image";
import type { Event } from "@/types";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { venue } from "@/lib/config";

interface EventCardProps {
  event: Event;
}

function formatDate(isoDate: string): { day: string; month: string; weekday: string } {
  const date = new Date(isoDate);
  return {
    day: date.toLocaleDateString("de-DE", { day: "2-digit" }),
    month: date.toLocaleDateString("de-DE", { month: "short" }).toUpperCase(),
    weekday: date.toLocaleDateString("de-DE", { weekday: "long" }),
  };
}

function formatTime(isoDate: string): string {
  return new Date(isoDate).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function EventCard({ event }: EventCardProps) {
  const { day, month, weekday } = formatDate(event.date);
  const time = formatTime(event.date);
  const lowestPrice = event.price.earlyBird ?? event.price.presale;

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-400 hover:border-accent/40 hover:shadow-[0_0_50px_rgba(107,79,160,0.2)] hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-dark">
        {event.image && (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

        {/* Date badge */}
        <div className="absolute top-4 left-4 flex flex-col items-center bg-dark/80 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 min-w-[52px] text-center">
          <span className="font-display text-2xl font-semibold text-cream leading-none">
            {day}
          </span>
          <span className="font-sans text-[10px] font-medium text-gold tracking-widest">
            {month}
          </span>
        </div>

        {event.soldOut && (
          <div className="absolute top-4 right-4">
            <Badge variant="muted">Ausverkauft</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-5 py-5">
        <p className="font-sans text-xs text-muted uppercase tracking-widest mb-1 capitalize">
          {weekday} · {time} Uhr
        </p>
        <h3 className="font-display text-2xl font-light text-cream mb-1 group-hover:text-accent-light transition-colors duration-300">
          {event.title}
        </h3>
        {event.subtitle && (
          <p className="font-display text-base italic text-muted mb-3">
            {event.subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          {event.liveAct && <Badge variant="gold">{event.liveAct}</Badge>}
          <Badge variant="muted">{event.dj}</Badge>
        </div>

        {/* Venue line */}
        <a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-sans text-xs text-muted hover:text-accent-light transition-colors mb-4"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          ZiMMT · Torgauer Str. 80 · Leipzig-Reudnitz
        </a>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-[10px] text-muted uppercase tracking-wide">ab</p>
            <p className="font-display text-2xl text-gold font-semibold">
              {lowestPrice}€
            </p>
          </div>
          {event.soldOut ? (
            <Button variant="outline" size="sm" href={`/veranstaltungen/${event.slug}`}>
              Details
            </Button>
          ) : (
            <Button variant="primary" size="sm" href={`/veranstaltungen/${event.slug}`}>
              Ticket sichern
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
