import type { Metadata } from "next";
import { events } from "@/lib/config";
import { EventCard } from "@/components/ui/EventCard";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Próximos eventos de Ecstatic Dance Leipzig — cada martes 19:30 Uhr. Reserva tu entrada online con Early Bird o preventa.",
};

export default function EventosPage() {
  const upcoming = events.filter((e) => new Date(e.date) > new Date());
  const past = events.filter((e) => new Date(e.date) <= new Date());

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
            Agenda
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-cream mb-4">
            Próximos <span className="italic text-accent-light">eventos</span>
          </h1>
          <p className="font-sans text-base text-muted max-w-xl mx-auto">
            Cada martes, 19:30 Uhr — Leipzig. Reserva tu entrada con antelación
            para garantizar el precio Early Bird.
          </p>
        </div>

        {/* Upcoming */}
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-white/10 bg-white/5 mb-16">
            <p className="font-display text-2xl text-muted mb-2">
              No hay eventos programados
            </p>
            <p className="font-sans text-sm text-muted/60">
              Síguenos en Telegram para ser el primero en saberlo.
            </p>
          </div>
        )}

        {/* Past events */}
        {past.length > 0 && (
          <>
            <h2 className="font-display text-3xl font-light text-cream mb-8">
              Eventos pasados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60">
              {past.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
