"use client";

import { DoorOpen, Waves, Users, Infinity } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const steps = [
  {
    number: "01",
    Icon: DoorOpen,
    title: "ANKOMMEN",
    description:
      "Schuhe aus, Handy weg. Du atmest durch und lässt den Tag hinter dir.",
  },
  {
    number: "02",
    Icon: Waves,
    title: "BEWEGEN",
    description:
      "Die Musik führt. Dein Körper antwortet. Keine Choreografie — nur Resonanz.",
  },
  {
    number: "03",
    Icon: Users,
    title: "VERBINDEN",
    description:
      "Mit dir selbst, mit dem Raum, mit anderen — ohne ein einziges Wort.",
  },
  {
    number: "04",
    Icon: Infinity,
    title: "ERWEITERN",
    description:
      "Sound Journey: Klangschalen, Didgeridoo, Stille. Der Abend öffnet sich.",
  },
] as const;

export function DieReiseSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-accent/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeUp className="text-center mb-14">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-4">
            Der Ablauf
          </p>
          <h2 className="font-display text-5xl sm:text-6xl font-light text-cream">
            Die{" "}
            <em className="not-italic italic text-accent-light">Reise</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {steps.map(({ number, Icon, title, description }, i) => (
            <FadeUp key={title} delay={i * 80}>
              <div className="group relative bg-dark/60 backdrop-blur-sm p-8 h-full flex flex-col gap-5 hover:bg-accent/5 transition-colors duration-300">
                {/* Step number */}
                <span className="font-sans text-xs font-medium text-accent-light/50 tracking-[0.2em]">
                  {number}
                </span>

                {/* Icon */}
                <div className="text-accent-light group-hover:text-cream transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-light text-cream tracking-wide">
                  {title}
                </h3>

                {/* Description */}
                <p className="font-sans text-base text-muted leading-relaxed">
                  {description}
                </p>

                {/* Arrow connector — visible only on desktop, hidden on last */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-px -translate-y-1/2 z-10">
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
