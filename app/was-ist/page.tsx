import type { Metadata } from "next";
import { rules, eventSchedule } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Was ist Ecstatic Dance?",
  description:
    "Erfahre, was Ecstatic Dance ist: freie Bewegung, bewusstes Tanzen ohne Alkohol, ohne Choreografie. Nur Musik, Bewegung und vollständige Präsenz.",
};

export default function WasIstPage() {
  return (
    <div className="pt-28 pb-24 px-4">
      {/* Hero */}
      <FadeUp className="mx-auto max-w-4xl text-center mb-20">
        <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
          Conscious Dance
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-6">
          Was ist{" "}
          <em className="not-italic italic text-accent-light">Ecstatic Dance?</em>
        </h1>
        <p className="font-sans text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          Eine Praxis der freien Bewegung, bei der der Körper der Lehrer ist. Kein
          Alkohol, keine Drogen, keine Choreografie, barfuß — nur Musik, Bewegung
          und echte Verbindung.
        </p>
      </FadeUp>

      {/* Raum & Zielgruppe */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <FadeUp>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full">
            <h2 className="font-display text-3xl font-light text-cream mb-4">
              Der Raum
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              Ecstatic Dance entstand Anfang der 2000er Jahre auf Hawaii als
              gemeinschaftliche Praxis bewusster Bewegung. Heute wird es in hunderten
              Städten weltweit praktiziert — immer mit denselben Prinzipien: Freiheit,
              Respekt und Präsenz.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              In Leipzig machen wir es jeden Dienstag mit einem einzigartigen Merkmal:{" "}
              <strong className="text-cream">Didgeridoo live</strong> von Oscar Silva
              (Peru/Leipzig), der den Raum mit ancestralem Klang öffnet, und La Lvcha
              als Resident-DJ, die eine 2-stündige Journey erschafft.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full">
            <h2 className="font-display text-3xl font-light text-cream mb-4">
              Für wen ist es?
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              Für alle. Egal ob du noch nie getanzt hast, 20 oder 60 Jahre alt bist,
              alleine oder mit Begleitung kommst. Die einzige Voraussetzung ist, dich
              frei bewegen und den gemeinsamen Raum respektieren zu wollen.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Ecstatic Dance ist besonders wirkungsvoll für alle, die sich{" "}
              <strong className="text-cream">mit ihrem Körper verbinden</strong>,
              Spannungen lösen, Gemeinschaft finden und einen Abend ohne Alkohol und
              Substanzen genießen möchten.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Regeln */}
      <div className="mx-auto max-w-6xl mb-20">
        <FadeUp className="text-center mb-10">
          <h2 className="font-display text-4xl font-light text-cream">
            Die 6 Regeln des Raums
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rules.map((rule, i) => (
            <FadeUp key={i} delay={i * 60}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 h-full">
                <div className="text-3xl mb-3">{rule.icon}</div>
                <h3 className="font-display text-xl font-semibold text-cream mb-2">
                  {rule.title}
                </h3>
                <p className="font-sans text-sm text-muted">{rule.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Ablauf */}
      <div className="mx-auto max-w-3xl mb-20">
        <FadeUp className="text-center mb-10">
          <h2 className="font-display text-4xl font-light text-cream">
            Ablauf des Abends
          </h2>
        </FadeUp>
        <FadeUp delay={100}>
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
        </FadeUp>
      </div>

      {/* CTA */}
      <FadeUp className="text-center">
        <Button href="/veranstaltungen" size="lg">
          Nächste Events ansehen
        </Button>
      </FadeUp>
    </div>
  );
}
