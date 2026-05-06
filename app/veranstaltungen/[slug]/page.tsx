import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { events, eventSchedule, siteConfig } from "@/lib/config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  const date = new Date(event.date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return {
    title: `${event.title} — ${date}`,
    description: event.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const date = new Date(event.date);
  const dateStr = date.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeStr = date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px]">
        <Image
          src={event.image ?? "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&q=80&fit=crop"}
          alt={event.title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-10">
          <div className="mx-auto max-w-7xl">
            <Badge variant="accent" className="mb-4">
              {event.tags[0]}
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-2">
              {event.title}
            </h1>
            <p className="font-display text-xl italic text-accent-light">
              {event.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            <FadeUp>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h2 className="font-display text-2xl font-light text-cream mb-4">
                  Über diesen Abend
                </h2>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {event.description}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h2 className="font-display text-2xl font-light text-cream mb-6">
                  Ablauf des Abends
                </h2>
                <div className="space-y-4">
                  {eventSchedule.map((item) => (
                    <div
                      key={item.time}
                      className="flex items-start gap-4 text-sm"
                    >
                      <span className="font-sans font-medium text-accent-light w-12 shrink-0">
                        {item.time}
                      </span>
                      <span className="font-sans text-muted">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h2 className="font-display text-2xl font-light text-cream mb-6">
                  Künstler
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-white/8 bg-white/3">
                    <p className="font-sans text-xs text-accent-light uppercase tracking-widest mb-1">
                      Didgeridoo Live
                    </p>
                    <p className="font-display text-lg text-cream">
                      {event.liveAct}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/8 bg-white/3">
                    <p className="font-sans text-xs text-accent-light uppercase tracking-widest mb-1">
                      DJ
                    </p>
                    <p className="font-display text-lg text-cream">{event.dj}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Sidebar — tickets */}
          <FadeUp delay={150}>
            <div className="lg:sticky lg:top-28 space-y-4">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8">
                <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-5">
                  Tickets
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-white/8">
                    <span className="font-sans text-sm text-muted">Early Bird</span>
                    <span className="font-display text-lg text-cream">
                      {event.price.earlyBird} €
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/8">
                    <span className="font-sans text-sm text-muted">Vorverkauf</span>
                    <span className="font-display text-lg text-cream">
                      {event.price.presale} €
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/8">
                    <span className="font-sans text-sm text-muted">Abendkasse</span>
                    <span className="font-display text-lg text-cream">
                      {event.price.door} €
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-sans text-sm text-gold">Support</span>
                    <span className="font-display text-lg text-gold">
                      {event.price.support} €
                    </span>
                  </div>
                </div>

                {event.soldOut ? (
                  <div className="text-center py-3 rounded-full border border-white/20 font-sans text-sm text-muted">
                    Ausverkauft
                  </div>
                ) : (
                  <Button
                    href={`/api/checkout?eventId=${event.id}&tier=presale`}
                    variant="primary"
                    className="w-full justify-center"
                  >
                    Ticket kaufen
                  </Button>
                )}

                <p className="font-sans text-xs text-muted/60 text-center mt-4">
                  Oder nutze deine{" "}
                  <Link href="/zehnerkarte" className="text-accent-light underline-offset-2 hover:underline">
                    Zehnerkarte
                  </Link>
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">
                    Datum
                  </p>
                  <p className="font-sans text-sm text-cream capitalize">
                    {dateStr}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">
                    Einlass
                  </p>
                  <p className="font-sans text-sm text-cream">{timeStr} Uhr</p>
                </div>
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-widest mb-0.5">
                    Ort
                  </p>
                  <p className="font-sans text-sm text-cream">{event.venue}</p>
                  <p className="font-sans text-xs text-muted">{event.address}</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
