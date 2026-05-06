import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static placeholder — wird durch MDX ersetzt, sobald konfiguriert
const posts: Record<
  string,
  { title: string; date: string; content: string; tags: string[] }
> = {
  "was-ist-ecstatic-dance": {
    title: "Was ist Ecstatic Dance? Ein vollständiger Leitfaden",
    date: "2026-04-15",
    tags: ["ecstatic dance", "conscious dance", "grundlagen"],
    content: `Ecstatic Dance ist eine Praxis der freien Bewegung, die Anfang der 2000er Jahre auf Hawaii entstand und sich inzwischen in über 50 Ländern verbreitet hat. Die Prämisse ist einfach, aber kraftvoll: Musik + Freiheit + Präsenz = Transformation.

Anders als beim konventionellen Tanzen gibt es keine Schritte zu lernen, keine Choreografien zu befolgen, keine richtige oder falsche Art, sich zu bewegen. Der einzige Lehrer bist du selbst. Der Körper weiß, was er braucht — man muss ihm nur die Erlaubnis geben, sich auszudrücken.

Die drei Schlüssel des Ecstatic Dance sind: sorgfältig ausgewählte Musik, die die emotionale Reise führt; ein sicherer, urteilsfreier Raum, in dem alle willkommen sind; und die fünf Grundregeln (barfuß, kein Sprechen auf der Tanzfläche, kein Alkohol oder Drogen, kein Handy, mit Respekt).

In Leipzig gehen wir mit dem einzigartigen Merkmal des Live-Didgeridoos von Oscar Silva einen Schritt weiter — er eröffnet jede Session mit ancestralem Klang.`,
  },
  "didgeridoo-heilklang": {
    title: "Das Didgeridoo als Heilklang-Instrument",
    date: "2026-04-22",
    tags: ["didgeridoo", "sound healing", "musik"],
    content: `Das Didgeridoo ist eines der ältesten Instrumente der Welt — es hat über 40.000 Jahre Geschichte in den Kulturen der australischen Ureinwohner. Doch über seine Geschichte hinaus liegt seine Magie im Klang: tiefe Frequenzen, die direkt mit dem parasympathischen Nervensystem resonieren.

Wenn du ein Didgeridoo live hörst, kommt der Klang nicht nur bei deinen Ohren an — du spürst ihn in der Brust, im Bauch, in den Knochen. Diese physische Vibration hat dokumentierte Wirkungen: Sie senkt Cortisol, aktiviert den Vagusnerv und erleichtert Zustände tiefer Entspannung und emotionaler Öffnung.

Im Kontext des Ecstatic Dance dient das Didgeridoo von Oscar Silva als Eingangsportal. Bevor die Musik des DJs beginnt, bereitet der Klang des Didgeridoos Körper und Geist auf bewusste Bewegung vor.`,
  },
  "zehnerkarte-lohnt-sich": {
    title: "Lohnt sich die Zehnerkarte?",
    date: "2026-04-29",
    tags: ["zehnerkarte", "preise", "praktisches"],
    content: `Ein ehrlicher Vergleich: An der Abendkasse zahlst du 15 €, im Vorverkauf 12 €, als Early Bird 8 €. Mit der Zehnerkarte kommst du auf 10 € pro Abend — für alle 10 Eintritte.

Das klingt nach einem kleinen Unterschied, aber über ein Jahr gesehen ergibt sich folgendes Bild: Wer zweimal im Monat kommt, spart gegenüber dem Vorverkauf rund 48 € pro Jahr — und das ganz ohne Stress, jeweils Tickets kaufen zu müssen.

Die Zehnerkarte ist außerdem 2 Jahre gültig und an keine festen Termine gebunden. Du kaufst sie einmal und nutzt sie, wann du willst. Ideal für alle, die regelmäßig tanzen wollen, aber nicht jeden Dienstag kommen können.

Und der vielleicht wichtigste Punkt: Mit der Zehnerkarte kommst du in den richtigen Modus. Du bist nicht mehr Gast — du bist Teil der Community.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <div className="pt-28 pb-24 px-4">
      <div className="mx-auto max-w-3xl">
        <Button href="/blog" variant="ghost" size="sm" className="mb-8">
          ← Zurück zum Blog
        </Button>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs text-muted/60 uppercase tracking-widest"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-light text-cream mb-4">
          {post.title}
        </h1>
        <time className="font-sans text-sm text-muted block mb-12">
          {new Date(post.date).toLocaleDateString("de-DE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>

        <div className="space-y-5">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="font-sans text-sm text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Button href="/veranstaltungen" size="md">
            Nächste Events ansehen →
          </Button>
        </div>
      </div>
    </div>
  );
}
