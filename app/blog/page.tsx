import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel über Ecstatic Dance, bewusstes Tanzen, Sound Healing und bewusstes Leben in Leipzig.",
};

const placeholderPosts = [
  {
    slug: "didgeridoo-und-ich",
    title: "Warum ich 2007 aufgehört habe, Noten zu lernen",
    excerpt:
      "Ich spiele Didgeridoo seit 2007. Nicht weil ich Musik studiert habe — sondern weil ein Instrument mich gerufen hat.",
    date: "2026-05-08",
    tag: "Musik",
  },
  {
    slug: "was-ist-ecstatic-dance",
    title: "Was ist Ecstatic Dance?",
    excerpt:
      "Eine Praxis freier Bewegung, bei der kein Schritt falsch ist. Erfahre, wie Ecstatic Dance entstand und was es von anderen Tanzformen unterscheidet.",
    date: "2026-04-15",
    tag: "Grundlagen",
  },
  {
    slug: "didgeridoo-heilklang",
    title: "Didgeridoo: Das Instrument der Heilung",
    excerpt:
      "Das älteste Blasinstrument der Welt erzeugt Klänge, die direkt in den Körper eindringen. Wie Kreisatmung und Oberton den Raum transformieren.",
    date: "2026-04-01",
    tag: "Musik",
  },
  {
    slug: "zehnerkarte-lohnt-sich",
    title: "Lohnt sich die Zehnerkarte?",
    excerpt:
      "Ein ehrlicher Vergleich aller Preisoptionen — und warum die Zehnerkarte nicht nur die günstigste, sondern auch die bewussteste Wahl ist.",
    date: "2026-03-20",
    tag: "Praktisches",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-4">
      <div className="mx-auto max-w-4xl">
        <FadeUp className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-4">
            Wissen & Inspiration
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-6">
            Blog
          </h1>
          <p className="font-sans text-base text-muted max-w-xl mx-auto leading-relaxed">
            Hintergründe, Praxis und Geschichten aus der Welt des bewussten
            Tanzens.
          </p>
        </FadeUp>

        <div className="space-y-6">
          {placeholderPosts.map((post, i) => (
            <FadeUp key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs text-accent-light uppercase tracking-widest">
                    {post.tag}
                  </span>
                  <span className="text-white/20">·</span>
                  <time className="font-sans text-xs text-muted">
                    {new Date(post.date).toLocaleDateString("de-DE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="font-display text-2xl font-light text-cream mb-3 group-hover:text-accent-light transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="font-sans text-xs text-accent-light mt-5">
                  Weiterlesen →
                </p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
