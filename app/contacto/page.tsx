import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Ecstatic Dance Leipzig — preguntas, colaboraciones y prensa.",
};

export default function ContactoPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
            Escríbenos
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-cream mb-4">
            <span className="italic text-accent-light">Contacto</span>
          </h1>
          <p className="font-sans text-base text-muted max-w-lg mx-auto">
            Para preguntas, colaboraciones, prensa o simplemente saludarnos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-light text-cream mb-6">
              Enviar mensaje
            </h2>
            <form action="/api/contact" method="POST" className="space-y-5">
              <input type="hidden" name="type" value="contact" />

              <div>
                <label htmlFor="name" className="block font-sans text-xs text-muted uppercase tracking-widest mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-cream text-sm font-sans placeholder:text-muted/40 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-sans text-xs text-muted uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-cream text-sm font-sans placeholder:text-muted/40 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-sans text-xs text-muted uppercase tracking-widest mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-cream text-sm font-sans focus:outline-none focus:border-accent/50 transition-colors"
                >
                  <option value="pregunta" className="bg-dark">Pregunta general</option>
                  <option value="colaboracion" className="bg-dark">Colaboración artística</option>
                  <option value="prensa" className="bg-dark">Prensa / Media</option>
                  <option value="otro" className="bg-dark">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-xs text-muted uppercase tracking-widest mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-cream text-sm font-sans placeholder:text-muted/40 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-accent hover:bg-accent-light text-cream text-sm font-sans font-medium transition-colors cursor-pointer"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-xl font-light text-cream mb-4">
                Información directa
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted hover:text-cream transition-colors"
                >
                  <span className="text-accent-light text-lg">✉</span>
                  <span className="font-sans text-sm">{siteConfig.email}</span>
                </a>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-cream transition-colors"
                >
                  <span className="text-accent-light text-lg">→</span>
                  <span className="font-sans text-sm">Telegram: @ecstaticdanceleipzig</span>
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-cream transition-colors"
                >
                  <span className="text-accent-light text-lg">◎</span>
                  <span className="font-sans text-sm">Instagram: @staticdanceleipzig</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-xl font-light text-cream mb-3">
                Lugar del evento
              </h3>
              <p className="font-sans text-sm text-muted">
                Studio Bewegungsraum
                <br />
                Karl-Liebknecht-Str. 42
                <br />
                04107 Leipzig
              </p>
              <p className="font-sans text-xs text-muted/60 mt-3">
                Cada martes, 19:30 Uhr
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-xl font-light text-cream mb-3">
                Tiempo de respuesta
              </h3>
              <p className="font-sans text-sm text-muted">
                Respondemos en un plazo de 48h. Para urgencias o preguntas
                rápidas, el grupo de Telegram es lo más ágil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
