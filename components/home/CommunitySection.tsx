import { siteConfig } from "@/lib/config";

export function CommunitySection() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden px-6 py-16 sm:px-12 text-center">
          {/* Background glows */}
          <div className="absolute top-0 left-1/4 w-[300px] h-[200px] bg-accent/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-gold/8 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
              Únete
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-cream mb-5">
              Sé parte de la{" "}
              <span className="italic text-accent-light">comunidad</span>
            </h2>
            <p className="font-sans text-base text-muted max-w-lg mx-auto leading-relaxed mb-10">
              Recibe novedades, fechas y actualizaciones de los próximos eventos.
              Únete a nuestro grupo de Telegram o síguenos en Instagram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Telegram */}
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-accent/40 bg-accent/10 text-cream hover:bg-accent/20 hover:border-accent/60 transition-all duration-200 font-sans text-sm font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.356 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.783-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Unirse en Telegram
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-white/10 text-muted hover:text-cream hover:border-white/30 transition-all duration-200 font-sans text-sm font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                @staticdanceleipzig
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
