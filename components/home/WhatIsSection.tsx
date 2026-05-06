import { rules } from "@/lib/config";
import { Button } from "@/components/ui/Button";

export function WhatIsSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
            Conscious Dance
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-6">
            ¿Qué es el{" "}
            <span className="italic text-accent-light">Ecstatic Dance?</span>
          </h2>
          <p className="font-sans text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Una práctica de movimiento libre donde el cuerpo es el maestro. Sin
            coreografías, sin alcohol, sin expectativas. Solo música, movimiento y
            presencia total. Cada martes, con didgeridoo en vivo.
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
            >
              <div className="text-3xl mb-4">{rule.icon}</div>
              <h3 className="font-display text-xl font-semibold text-cream mb-2 group-hover:text-accent-light transition-colors">
                {rule.title}
              </h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/que-es" variant="outline">
            Leer más sobre el Ecstatic Dance
          </Button>
        </div>
      </div>
    </section>
  );
}
