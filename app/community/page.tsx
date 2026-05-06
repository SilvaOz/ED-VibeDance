import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Tritt der Ecstatic-Dance-Leipzig-Community bei: Telegram-Gruppe, Instagram und Newsletter für Events und Updates.",
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-4">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-4">
            Mitmachen
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-6">
            Teil der{" "}
            <em className="not-italic italic text-accent-light">Community</em>{" "}
            werden
          </h1>
          <p className="font-sans text-base text-muted max-w-xl mx-auto leading-relaxed">
            Erhalte Neuigkeiten, Termine und Updates. Tritt unserer
            Telegram-Gruppe bei oder folge uns auf Instagram.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {/* Telegram */}
          <FadeUp delay={100}>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-accent/30 bg-accent/10 p-8 hover:border-accent/50 hover:bg-accent/15 transition-all duration-200 group"
            >
              <div className="mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-accent-light" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.356 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.783-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-light text-cream mb-2 group-hover:text-accent-light transition-colors">
                Telegram-Gruppe
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Direkte Ankündigungen, Änderungen und die Energie der Community —
                alles auf einen Blick.
              </p>
              <p className="font-sans text-xs text-accent-light mt-4">
                Gruppe beitreten →
              </p>
            </a>
          </FadeUp>

          {/* Instagram */}
          <FadeUp delay={200}>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/15 bg-white/5 p-8 hover:border-white/30 hover:bg-white/8 transition-all duration-200 group"
            >
              <div className="mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream/70" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-light text-cream mb-2 group-hover:text-accent-light transition-colors">
                Instagram
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Fotos, Videos und Stimmungen aus unseren Abenden. Folge uns für
                visuelle Einblicke.
              </p>
              <p className="font-sans text-xs text-cream/50 mt-4">
                @staticdanceleipzig →
              </p>
            </a>
          </FadeUp>
        </div>

        {/* Newsletter */}
        <FadeUp delay={300}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="font-display text-3xl font-light text-cream mb-3">
              Newsletter
            </h2>
            <p className="font-sans text-sm text-muted mb-6 max-w-md mx-auto">
              Kein Spam. Nur die wichtigsten Events und Ankündigungen —
              höchstens einmal im Monat.
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
                placeholder="deine@email.de"
                className="flex-1 rounded-full px-5 py-3 bg-white/10 border border-white/20 text-cream placeholder:text-muted font-sans text-sm focus:outline-none focus:border-accent/50"
              />
              <button
                type="submit"
                className="rounded-full px-6 py-3 bg-accent text-cream font-sans text-sm font-medium hover:bg-accent/80 transition-colors"
              >
                Anmelden
              </button>
            </form>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
