import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { events, siteConfig } from "@/lib/config";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&auto=format&q=85&fit=crop";

function formatNextEvent() {
  const upcoming = events.find((e) => new Date(e.date) > new Date());
  if (!upcoming) return null;
  const date = new Date(upcoming.date);
  return {
    event: upcoming,
    label: date.toLocaleDateString("de-DE", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }),
    time: date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
  };
}

export function HeroSection() {
  const next = formatNextEvent();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Ecstatic Dance Leipzig — bewusste Bewegung"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/55 to-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/40" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/10 blur-[80px] opacity-60" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <p className="animate-fade-up font-sans text-xs text-gold uppercase tracking-[0.4em] mb-8">
          {siteConfig.fullName}
        </p>

        <h1
          className="animate-fade-up font-display font-light text-cream leading-[1.0] mb-6"
          style={{ animationDelay: "100ms" }}
        >
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[100px]">
            Bewege dich
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[100px] italic text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-cream to-gold">
            aus der Seele
          </span>
        </h1>

        <p
          className="animate-fade-up font-sans text-base sm:text-lg text-cream/60 tracking-wider mb-10"
          style={{ animationDelay: "200ms" }}
        >
          Conscious Dance &nbsp;·&nbsp; Didgeridoo Live &nbsp;·&nbsp; Sacred Sound
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center mb-16"
          style={{ animationDelay: "300ms" }}
        >
          <Button href="/veranstaltungen" size="lg" variant="primary">
            Ticket kaufen
          </Button>
          <Button href="/was-ist" size="lg" variant="outline">
            Was ist Ecstatic Dance?
          </Button>
        </div>

        {next && (
          <div
            className="animate-fade-up inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-2xl border border-white/15 bg-dark/50 backdrop-blur-md px-6 py-4"
            style={{ animationDelay: "450ms" }}
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-sans text-xs text-muted uppercase tracking-widest">
                Nächster Abend
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <p className="font-sans text-sm text-cream capitalize">
              {next.label} &nbsp;·&nbsp; {next.time} Uhr
            </p>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <p className="font-display text-xl text-gold">
              ab {next.event.price.earlyBird ?? next.event.price.presale}€
            </p>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-sans text-[10px] text-cream uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
