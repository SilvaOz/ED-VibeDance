import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { events, eventSchedule, siteConfig } from "@/lib/config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { VenueCard } from "@/components/ui/VenueCard";

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
                  <div className="p-4 rounded-xl border border-gold/20 bg-gold/5">
                    <p className="font-sans text-xs text-gold uppercase tracking-widest mb-1">
                      DJ
                    </p>
                    <p className="font-display text-lg text-cream">{event.dj}</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={300}>
              <VenueCard />
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
                  <a
                    href={`https://paypal.me/didgeridoovibes/${event.price.presale}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-[#0070BA] hover:bg-[#003087] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
                    </svg>
                    Ticket kaufen — {event.price.presale} €
                  </a>
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
                  <a
                    href="https://maps.google.com/?q=Torgauer+Stra%C3%9Fe+80,+04318+Leipzig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-accent-light hover:underline underline-offset-2 mt-1 block"
                  >
                    Anfahrt →
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
