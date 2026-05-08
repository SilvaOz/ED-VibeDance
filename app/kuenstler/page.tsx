import type { Metadata } from "next";
import { artists } from "@/lib/config";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Künstler — Oscar Silva & La Lvcha",
  description:
    "Oscar Silva spielt Didgeridoo seit 2007 — von Lima über Sacsayhuamán bis Leipzig. La Lvcha bringt afrolateinische Rhythmen auf die Tanzfläche.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecstaticdanceleipzig.de"}/kuenstler` },
};

export default function KuenstlerPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-4">
            Die Menschen dahinter
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-6">
            Unsere{" "}
            <em className="not-italic italic text-accent-light">Künstler</em>
          </h1>
          <p className="font-sans text-base text-muted max-w-xl mx-auto leading-relaxed">
            Jeder Dienstag entsteht durch die Verbindung zweier Klangreisen —
            Didgeridoo und DJ.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {artists.map((artist, i) => (
            <FadeUp key={artist.id} delay={i * 120}>
              <ArtistCard artist={artist} />
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
