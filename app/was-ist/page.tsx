import type { Metadata } from "next";
import { rules, eventSchedule, venue } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { RuleIcon } from "@/components/ui/RuleIcon";
import { MapPin } from "lucide-react";

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
                <div className="mb-3 text-accent-light">
                  <RuleIcon name={rule.icon} size={26} />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-2">
                  {rule.title}
                </h3>
                <p className="font-sans text-base text-muted">{rule.description}</p>
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

      {/* Was dich erwartet */}
      <div className="mx-auto max-w-3xl mb-20">
        <FadeUp className="text-center mb-10">
          <h2 className="font-display text-4xl font-light text-cream">
            Was dich erwartet
          </h2>
        </FadeUp>
        <div className="space-y-4">
          <FadeUp delay={60}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                Der Kreis
              </h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Jeder Abend beginnt und endet mit einem gemeinsamen Kreis. Der
                Eröffnungskreis setzt die Intention — der Abschlusskreis schließt
                den Raum. Kein Wort zu viel. Nur Präsenz.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                Der Altar
              </h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                Im Raum gibt es einen Altar — ein stiller Ort zum Sitzen,
                Innehalten und Kontemplieren. Für alle, die eine Pause vom Tanz
                brauchen, ohne den Raum zu verlassen.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={180}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                Matten & Kissen
              </h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                An den Seiten des Raums liegen Matten und Kissen. Du kannst dich
                jederzeit hinlegen, strecken oder einfach beobachten. Alle Körper
                und alle Arten zu sein sind willkommen.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Unser Raum */}
      <div className="mx-auto max-w-3xl mb-20">
        <FadeUp className="text-center mb-10">
          <h2 className="font-display text-4xl font-light text-cream">
            Unser Raum
          </h2>
        </FadeUp>
        <FadeUp delay={100}>
          <div className="rounded-2xl border border-accent/20 bg-white/5 p-8">
            <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
              {venue.name} · {venue.neighborhood}
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              Ecstatic Dance Leipzig tanzt im ZiMMT — einem der ungewöhnlichsten
              Orte der Stadt. Eine ehemalige Wälzlagerfabrik, verwandelt in ein
              Zentrum für immersive Medienkunst mit einem 3D-Audiosystem aus 36
              Lautsprechern — eines der wenigen seiner Art in ganz Deutschland.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-6">
              Das ist keine Diskothek. Kein Bar. Es ist ein Raum, der dafür
              geschaffen wurde, dass Klang und Körper sich wirklich begegnen.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-accent-light hover:text-cream transition-colors"
              >
                <MapPin size={14} strokeWidth={1.5} />
                {venue.address}
              </a>
              <span className="text-white/20">·</span>
              <a
                href={venue.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-sans text-sm text-muted hover:text-cream transition-colors"
              >
                zimmt.net ↗
              </a>
            </div>
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
