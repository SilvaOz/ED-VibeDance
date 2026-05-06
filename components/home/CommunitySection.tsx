import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { FadeUp } from "@/components/ui/FadeUp";

const COMMUNITY_IMAGE =
  "https://images.unsplash.com/photo-1547153760-18fc86324498?w=1200&auto=format&q=80&fit=crop";

export function CommunitySection() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src={COMMUNITY_IMAGE}
                alt="Comunidad Ecstatic Dance Leipzig"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/75 to-accent/20" />
            </div>

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-4">
                Únete
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-5">
                Sé parte de la{" "}
                <em className="not-italic italic text-accent-light">comunidad</em>
              </h2>
              <p className="font-sans text-base text-cream/60 max-w-lg mx-auto leading-relaxed mb-10">
                Recibe novedades, fechas y actualizaciones. Únete a nuestro grupo de
                Telegram o síguenos en Instagram.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-accent/50 bg-accent/20 backdrop-blur-sm text-cream hover:bg-accent/35 hover:border-accent/70 transition-all duration-200 font-sans text-sm font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.356 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.783-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Unirse en Telegram
                </a>

                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 backdrop-blur-sm text-cream/80 hover:text-cream hover:border-white/40 transition-all duration-200 font-sans text-sm font-medium"
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
        </FadeUp>
      </div>
    </section>
  );
}
