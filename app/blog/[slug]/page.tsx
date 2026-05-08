import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static placeholder — wird durch MDX ersetzt, sobald konfiguriert
const posts: Record<
  string,
  { title: string; date: string; description: string; content: string; tags: string[]; keywords?: string[] }
> = {
  "was-ist-ecstatic-dance": {
    title: "Was ist Ecstatic Dance? Ein vollständiger Leitfaden",
    date: "2026-04-15",
    description:
      "Ecstatic Dance ist keine Tanzstunde — es ist eine Praxis der Freiheit. Was es ist, woher es kommt und warum immer mehr Menschen in Leipzig tanzen.",
    keywords: ["ecstatic dance Leipzig", "was ist ecstatic dance", "conscious dance", "tanzen ohne alkohol"],
    tags: ["ecstatic dance", "conscious dance", "grundlagen"],
    content: `Ecstatic Dance ist eine Praxis der freien Bewegung, die Anfang der 2000er Jahre auf Hawaii entstand und sich inzwischen in über 50 Ländern verbreitet hat. Die Prämisse ist einfach, aber kraftvoll: Musik + Freiheit + Präsenz = Transformation.

Anders als beim konventionellen Tanzen gibt es keine Schritte zu lernen, keine Choreografien zu befolgen, keine richtige oder falsche Art, sich zu bewegen. Der einzige Lehrer bist du selbst. Der Körper weiß, was er braucht — man muss ihm nur die Erlaubnis geben, sich auszudrücken.

Die drei Schlüssel des Ecstatic Dance sind: sorgfältig ausgewählte Musik, die die emotionale Reise führt; ein sicherer, urteilsfreier Raum, in dem alle willkommen sind; und die fünf Grundregeln (barfuß, kein Sprechen auf der Tanzfläche, kein Alkohol oder Drogen, kein Handy, mit Respekt).

In Leipzig gehen wir mit dem einzigartigen Merkmal des Live-Didgeridoos von Oscar Silva einen Schritt weiter — er eröffnet jede Session mit ancestralem Klang.`,
  },
  "didgeridoo-heilklang": {
    title: "Didgeridoo: Das älteste Instrument der Welt und seine Heilwirkung",
    date: "2026-04-22",
    description:
      "Das Didgeridoo erzeugt Frequenzen, die tief in den Körper eindringen. Was Kreisatmung und Oberton mit Sound Healing zu tun haben.",
    keywords: ["didgeridoo Leipzig", "didgeridoo sound healing", "kreisatmung", "klangheilung"],
    tags: ["didgeridoo", "sound healing", "musik"],
    content: `Das Didgeridoo ist eines der ältesten Instrumente der Welt — es hat über 40.000 Jahre Geschichte in den Kulturen der australischen Ureinwohner. Doch über seine Geschichte hinaus liegt seine Magie im Klang: tiefe Frequenzen, die direkt mit dem parasympathischen Nervensystem resonieren.

Wenn du ein Didgeridoo live hörst, kommt der Klang nicht nur bei deinen Ohren an — du spürst ihn in der Brust, im Bauch, in den Knochen. Diese physische Vibration hat dokumentierte Wirkungen: Sie senkt Cortisol, aktiviert den Vagusnerv und erleichtert Zustände tiefer Entspannung und emotionaler Öffnung.

Im Kontext des Ecstatic Dance dient das Didgeridoo von Oscar Silva als Eingangsportal. Bevor die Musik des DJs beginnt, bereitet der Klang des Didgeridoos Körper und Geist auf bewusste Bewegung vor.`,
  },
  "didgeridoo-und-ich": {
    title: "Warum ich 2007 aufgehört habe, Noten zu lernen",
    date: "2026-05-08",
    description:
      "Ich spiele Didgeridoo seit 2007 — nicht weil ich Musik studiert habe, sondern weil ein Instrument mich gerufen hat. Eine Geschichte aus Lima, Cusco und Leipzig.",
    keywords: ["didgeridoo lernen Leipzig", "oscar silva didgeridoo", "didgeridoo cusco", "ash dargan"],
    tags: ["musik", "didgeridoo", "geschichte"],
    content: `Ich habe Didgeridoo nie in einer Schule gelernt.

2007 in Lima — einer Stadt, die niemals schläft, niemals schweigt — hörte ich zum ersten Mal diesen Klang. Nicht auf einer Bühne. Auf der Straße. Ein Rohr aus Holz, das klang wie die Erde selbst atmet.

Ich wusste sofort: Das ist meins. Nicht weil ich es spielen konnte. Sondern weil es mich rief.

Die ersten Jahre spielte ich in Lima mit Manongo Mujica und Corina Bartra — zwei Künstler, die mich gelehrt haben, dass Musik keine Performance ist. Sie ist ein Dienst. Du dienst dem Raum. Du dienst den Menschen. Du dienst dem Moment.

Irgendwann reichte Lima nicht mehr. Zu viel Lärm. Zu wenig Stille. Ich reiste durch Lateinamerika — auf der Suche nach Klängen, die kein Buch kennt.

Und dann die Berge.

Ich zog nach Sacsayhuamán, nahe Cusco, auf 3.500 Meter. Inka-Ruinen. Andenwind. Sonnenuntergänge, die dich stumm machen. Dort lernte ich das Schweigen zwischen den Tönen kennen.

2017 begegnete ich Ash Dargan beim Qente Festival in Cusco. Qente — das ist Quechua für Kolibri. Klein, schnell, präzise. Ein Tier, das weiß, wo es hingehört.

Ash sagte mir etwas, das ich nie vergessen werde: "Spiel nicht das Instrument. Lass das Instrument dich spielen."

Seitdem ist meine Praxis anders. Ich lerne nicht mehr Techniken. Ich höre zu.

Heute lebe ich in Leipzig. Jeden Dienstag öffne ich den Raum im ZiMMT mit meinem Didgeridoo — und manchmal frage ich mich, wie ein Rohr aus Holz Menschen zum Weinen, zum Lachen, zum Tanzen bringen kann.

Ich habe keine Antwort. Aber ich spiele weiter.

Oscar Silva · Leipzig, Mai 2026`,
  },
  "zehnerkarte-lohnt-sich": {
    title: "Zehnerkarte Ecstatic Dance Leipzig — Lohnt sie sich wirklich?",
    date: "2026-04-29",
    description:
      "Ein ehrlicher Vergleich: Abendkasse 18€ vs Zehnerkarte 10€ pro Abend. Wann lohnt sich die Karte — und wann nicht.",
    keywords: ["zehnerkarte ecstatic dance", "ecstatic dance Leipzig preis", "conscious dance Leipzig"],
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
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecstaticdanceleipzig.de";
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${base}/blog/${slug}` },
  };
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
