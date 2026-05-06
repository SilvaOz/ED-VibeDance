import type { Metadata } from "next";
import { rules, eventSchedule } from "@/lib/config";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "¿Qué es el Ecstatic Dance?",
  description:
    "Descubre qué es el Ecstatic Dance: baile libre, consciente y sin alcohol. Sin coreografías, sin juicios. Solo movimiento y presencia total.",
};

export default function QueEsPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      {/* Hero */}
      <div className="mx-auto max-w-4xl text-center mb-20">
        <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
          Conscious Dance
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-6">
          ¿Qué es el{" "}
          <span className="italic text-accent-light">Ecstatic Dance?</span>
        </h1>
        <p className="font-sans text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          Una práctica de movimiento libre donde el cuerpo es el maestro. Sin
          alcohol, sin drogas, sin coreografías, descalzos — solo música, movimiento
          y conexión auténtica.
        </p>
      </div>

      {/* What + why */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-display text-3xl font-light text-cream mb-4">
            El espacio
          </h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-4">
            El Ecstatic Dance nació en Hawaii en los años 2000 como práctica
            comunitaria de movimiento consciente. Hoy se practica en cientos de
            ciudades del mundo, siempre con los mismos principios: libertad,
            respeto y presencia.
          </p>
          <p className="font-sans text-sm text-muted leading-relaxed">
            En Leipzig, lo hacemos cada martes con un diferencial único:{" "}
            <strong className="text-cream">didgeridoo en vivo</strong> de Oscar
            Silva (Perú/Leipzig), que abre el espacio con sonido ancestral, y La
            Lvcha como DJ residente, construyendo una journey de 2 horas.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-display text-3xl font-light text-cream mb-4">
            Para quién es
          </h2>
          <p className="font-sans text-sm text-muted leading-relaxed mb-4">
            Para todos. No importa si nunca has bailado, si tienes 20 o 60 años,
            si vienes solo/a o acompañado/a. El único requisito es querer moverte
            libremente y respetar el espacio compartido.
          </p>
          <p className="font-sans text-sm text-muted leading-relaxed">
            El Ecstatic Dance es especialmente poderoso para quienes quieren{" "}
            <strong className="text-cream">conectar con su cuerpo</strong>, liberar
            tensiones, encontrar comunidad y disfrutar de una noche sin alcohol ni
            substancias.
          </p>
        </div>
      </div>

      {/* Reglas */}
      <div className="mx-auto max-w-6xl mb-20">
        <h2 className="font-display text-4xl font-light text-cream text-center mb-10">
          Las 6 reglas del espacio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rules.map((rule, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{rule.icon}</div>
              <h3 className="font-display text-xl font-semibold text-cream mb-2">
                {rule.title}
              </h3>
              <p className="font-sans text-sm text-muted">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Formato */}
      <div className="mx-auto max-w-3xl mb-20">
        <h2 className="font-display text-4xl font-light text-cream text-center mb-10">
          Formato de la noche
        </h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          {eventSchedule.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-6 px-6 py-5 border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors"
            >
              <span className="font-sans text-sm font-medium text-gold min-w-[48px] tabular-nums">
                {item.time}
              </span>
              <span className="font-sans text-sm text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button href="/eventos" size="lg">
          Ver próximos eventos
        </Button>
      </div>
    </div>
  );
}
