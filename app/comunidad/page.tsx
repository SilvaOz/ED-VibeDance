import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Únete a la comunidad de Ecstatic Dance Leipzig en Telegram e Instagram. Newsletter de eventos y actualizaciones.",
};

export default function ComunidadPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
            Comunidad
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-cream mb-4">
            Sé parte del{" "}
            <span className="italic text-accent-light">movimiento</span>
          </h1>
          <p className="font-sans text-base text-muted max-w-lg mx-auto">
            Recibe novedades de eventos, actualizaciones y conecta con otros
            bailarines conscientes de Leipzig.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Telegram */}
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-accent-light" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.356 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.783-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-light text-cream mb-2 group-hover:text-accent-light transition-colors">
              Telegram
            </h2>
            <p className="font-sans text-sm text-muted mb-4">
              Grupo de comunidad — eventos, fotos y actualizaciones en tiempo real.
            </p>
            <span className="font-sans text-sm text-accent-light">
              Unirse al grupo →
            </span>
          </a>

          {/* Instagram */}
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-white/30 transition-all duration-300 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-light text-cream mb-2 group-hover:text-accent-light transition-colors">
              Instagram
            </h2>
            <p className="font-sans text-sm text-muted mb-4">
              @staticdanceleipzig — Reels, stories y contenido detrás de escena.
            </p>
            <span className="font-sans text-sm text-accent-light">
              Seguir en Instagram →
            </span>
          </a>
        </div>

        {/* Newsletter signup */}
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 sm:p-10 text-center">
          <h2 className="font-display text-3xl font-light text-cream mb-3">
            Newsletter
          </h2>
          <p className="font-sans text-sm text-muted mb-6 max-w-md mx-auto">
            Recibe en tu email los próximos eventos, entrevistas con artistas y
            reflexiones sobre movimiento consciente.
          </p>
          <form
            action="/api/contact"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
          >
            <input type="hidden" name="type" value="newsletter" />
            <input
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/20 text-cream placeholder:text-muted/50 text-sm font-sans focus:outline-none focus:border-accent/50"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-accent hover:bg-accent-light text-cream text-sm font-sans font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
