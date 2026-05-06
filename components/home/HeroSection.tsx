import { Button } from "@/components/ui/Button";
import { events, siteConfig } from "@/lib/config";

function formatNextEvent() {
  const upcoming = events.find((e) => new Date(e.date) > new Date());
  if (!upcoming) return null;
  const date = new Date(upcoming.date);
  return {
    event: upcoming,
    label: date.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    time: date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
  };
}

export function HeroSection() {
  const next = formatNextEvent();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark px-4">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/6 blur-[80px]" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(107,79,160,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="font-sans text-xs text-gold uppercase tracking-[0.3em] mb-6">
          {siteConfig.fullName}
        </p>

        <h1 className="font-display font-light text-cream leading-[1.05] mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Muévete desde
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic text-accent-light">
            el alma
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed mb-10">
          Conscious Dance · Didgeridoo en Vivo · Sacred Sound
          <br />
          <span className="text-cream/60">{siteConfig.eventDay}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button href="/eventos" size="lg" variant="primary">
            Reservar entrada
          </Button>
          <Button href="/que-es" size="lg" variant="outline">
            ¿Qué es el Ecstatic Dance?
          </Button>
        </div>

        {/* Next event pill */}
        {next && (
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-sans text-xs text-muted uppercase tracking-widest">
                Próxima noche
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <p className="font-sans text-sm text-cream capitalize">
              {next.label} · {next.time} Uhr
            </p>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <p className="font-display text-lg text-gold">
              desde {next.event.price.earlyBird ?? next.event.price.presale}€
            </p>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-sans text-[10px] text-muted uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
