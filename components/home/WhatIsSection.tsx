import Image from "next/image";
import { rules } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

const SECTION_IMAGE =
  "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&auto=format&q=80&fit=crop";

export function WhatIsSection() {
  return (
    <section className="relative py-28 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-4">
            Conscious Dance
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-6">
            ¿Qué es el{" "}
            <em className="not-italic italic text-accent-light">Ecstatic Dance?</em>
          </h2>
          <p className="font-sans text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Una práctica de movimiento libre donde el cuerpo es el maestro. Sin
            coreografías, sin alcohol, descalzos — solo música, movimiento y presencia total.
            Cada martes, con didgeridoo en vivo.
          </p>
        </FadeUp>

        {/* Two-column layout — rules + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          {/* Rules grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rules.map((rule, index) => (
              <FadeUp key={index} delay={index * 60}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 h-full transition-all duration-300 hover:border-accent/30 hover:bg-accent/5">
                  <div className="text-2xl mb-3">{rule.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-cream mb-1.5 group-hover:text-accent-light transition-colors">
                    {rule.title}
                  </h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Atmospheric image */}
          <FadeUp delay={200}>
            <div className="relative h-[480px] lg:h-[560px] rounded-2xl overflow-hidden">
              <Image
                src={SECTION_IMAGE}
                alt="Movimiento consciente — Ecstatic Dance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/30 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl font-light text-cream italic">
                  "El cuerpo sabe lo que el<br />
                  <span className="text-accent-light">alma necesita."</span>
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* CTA */}
        <FadeUp className="text-center">
          <Button href="/que-es" variant="outline">
            Leer más sobre el Ecstatic Dance
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
