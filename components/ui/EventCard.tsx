import Link from "next/link";
import type { Event } from "@/types";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface EventCardProps {
  event: Event;
}

function formatDate(isoDate: string): { day: string; month: string; weekday: string } {
  const date = new Date(isoDate);
  return {
    day: date.toLocaleDateString("de-DE", { day: "2-digit" }),
    month: date.toLocaleDateString("de-DE", { month: "short" }).toUpperCase(),
    weekday: date.toLocaleDateString("es-ES", { weekday: "long" }),
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
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(107,79,160,0.15)]">
      {/* Date badge */}
      <div className="absolute top-4 left-4 flex flex-col items-center bg-accent/20 border border-accent/30 rounded-xl px-3 py-2 min-w-[56px] text-center">
        <span className="font-display text-2xl font-semibold text-cream leading-none">
          {day}
        </span>
        <span className="font-sans text-xs font-medium text-accent-light tracking-widest">
          {month}
        </span>
      </div>

      {event.soldOut && (
        <div className="absolute top-4 right-4">
          <Badge variant="muted">Sold Out</Badge>
        </div>
      )}

      <div className="pt-20 px-6 pb-6">
        <p className="font-sans text-xs text-muted uppercase tracking-widest mb-1 capitalize">
          {weekday} · {time} Uhr
        </p>
        <h3 className="font-display text-2xl font-light text-cream mb-1 group-hover:text-accent-light transition-colors">
          {event.title}
        </h3>
        {event.subtitle && (
          <p className="font-sans text-sm text-muted italic mb-3">{event.subtitle}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {event.liveAct && <Badge variant="gold">{event.liveAct}</Badge>}
          <Badge variant="muted">{event.dj}</Badge>
        </div>

        <p className="font-sans text-sm text-muted mb-1">{event.venue}</p>
        <p className="font-sans text-xs text-muted/70 mb-5">{event.address}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs text-muted uppercase tracking-wide">desde</p>
            <p className="font-display text-2xl text-gold font-semibold">
              {lowestPrice}€
            </p>
          </div>
          {event.soldOut ? (
            <Button variant="outline" size="sm" href={`/eventos/${event.slug}`}>
              Ver detalles
            </Button>
          ) : (
            <Button variant="primary" size="sm" href={`/eventos/${event.slug}`}>
              Reservar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
