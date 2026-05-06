import { events } from "@/lib/config";
import { EventCard } from "@/components/ui/EventCard";
import { Button } from "@/components/ui/Button";

export function NextEventsSection() {
  const upcoming = events
    .filter((e) => new Date(e.date) > new Date())
    .slice(0, 2);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-3">
              Agenda
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-cream">
              Próximos{" "}
              <span className="italic text-accent-light">eventos</span>
            </h2>
          </div>
          <Button href="/eventos" variant="outline" size="sm">
            Ver todos
          </Button>
        </div>

        {/* Events grid */}
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl border border-white/10 bg-white/5">
            <p className="font-sans text-muted">No hay eventos programados próximamente.</p>
            <p className="font-sans text-sm text-muted/60 mt-2">
              Únete a nuestra comunidad para ser el primero en saberlo.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
