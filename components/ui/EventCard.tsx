import Image from "next/image";
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

        {/* Date badge floating on image */}
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
            <Badge variant="muted">Sold Out</Badge>
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
          <p className="font-display text-base italic text-muted mb-3">{event.subtitle}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {event.liveAct && <Badge variant="gold">{event.liveAct}</Badge>}
          <Badge variant="muted">{event.dj}</Badge>
        </div>

        <p className="font-sans text-xs text-muted/70 mb-5">{event.venue}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-[10px] text-muted uppercase tracking-wide">desde</p>
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
