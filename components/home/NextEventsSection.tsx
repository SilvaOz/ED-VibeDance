import { events } from "@/lib/config";
import { EventCard } from "@/components/ui/EventCard";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export function NextEventsSection() {
  const upcoming = events
    .filter((e) => new Date(e.date) > new Date())
    .slice(0, 2);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-3">
                Agenda
              </p>
              <h2 className="font-display text-5xl sm:text-6xl font-light text-cream">
                Próximos{" "}
                <em className="not-italic italic text-accent-light">eventos</em>
              </h2>
            </div>
            <Button href="/eventos" variant="outline" size="sm">
              Ver todos los eventos
            </Button>
          </div>
        </FadeUp>

        {/* Events grid */}
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcoming.map((event, i) => (
              <FadeUp key={event.id} delay={i * 100}>
                <EventCard event={event} />
              </FadeUp>
            ))}
          </div>
        ) : (
          <FadeUp>
            <div className="text-center py-20 rounded-2xl border border-white/10 bg-white/5">
              <p className="font-sans text-muted">No hay eventos próximamente.</p>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
