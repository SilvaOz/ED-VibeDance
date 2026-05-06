import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { events, siteConfig } from "@/lib/config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.description,
  };
}

function formatFullDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function EventoPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const date = new Date(event.date);
  const time = date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <Button href="/eventos" variant="ghost" size="sm" className="mb-8">
          ← Volver a eventos
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-4">
              {event.tags.map((tag) => (
                <Badge key={tag} variant="muted">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-light text-cream mb-2">
              {event.title}
            </h1>
            {event.subtitle && (
              <p className="font-display text-2xl italic text-accent-light mb-6">
                {event.subtitle}
              </p>
            )}

            <div className="flex flex-col gap-3 mb-8 p-5 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-muted uppercase tracking-widest w-20">Fecha</span>
                <span className="font-sans text-sm text-cream capitalize">
                  {formatFullDate(event.date)}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-muted uppercase tracking-widest w-20">Hora</span>
                <span className="font-sans text-sm text-cream">{time} Uhr</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-muted uppercase tracking-widest w-20">Lugar</span>
                <span className="font-sans text-sm text-cream">{event.venue}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-muted uppercase tracking-widest w-20">Dirección</span>
                <span className="font-sans text-sm text-cream">{event.address}</span>
              </div>
              {event.liveAct && (
                <div className="flex items-center gap-3">
                  <span className="font-sans text-xs text-muted uppercase tracking-widest w-20">Live</span>
                  <Badge variant="gold">{event.liveAct}</Badge>
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-muted uppercase tracking-widest w-20">DJ</span>
                <Badge variant="accent">{event.dj}</Badge>
              </div>
            </div>

            <p className="font-sans text-sm text-muted leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Ticket sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-accent/30 bg-white/5 backdrop-blur-sm p-6">
              <h2 className="font-display text-2xl font-light text-cream mb-6">
                Entradas
              </h2>

              <div className="space-y-3 mb-6">
                {event.price.earlyBird && (
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <div>
                      <p className="font-sans text-sm text-cream">Early Bird</p>
                      <p className="font-sans text-xs text-muted">Disponibilidad limitada</p>
                    </div>
                    <span className="font-display text-xl text-gold">{event.price.earlyBird}€</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div>
                    <p className="font-sans text-sm text-cream">Preventa</p>
                  </div>
                  <span className="font-display text-xl text-cream">{event.price.presale}€</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div>
                    <p className="font-sans text-sm text-muted">Taquilla</p>
                  </div>
                  <span className="font-display text-xl text-muted">{event.price.door}€</span>
                </div>
                {event.price.support && (
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <p className="font-sans text-sm text-muted">Precio solidario</p>
                    </div>
                    <span className="font-display text-xl text-muted">{event.price.support}€</span>
                  </div>
                )}
              </div>

              {event.soldOut ? (
                <div className="text-center py-3 rounded-full border border-white/20 text-muted font-sans text-sm">
                  Sold Out
                </div>
              ) : (
                <Button
                  href={`/api/checkout?eventId=${event.id}`}
                  variant="primary"
                  className="w-full justify-center"
                >
                  Comprar entrada
                </Button>
              )}

              <p className="font-sans text-xs text-muted/60 text-center mt-4">
                Pago seguro via Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
