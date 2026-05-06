import type { Metadata } from "next";
import { artists } from "@/lib/config";
import { ArtistCard } from "@/components/ui/ArtistCard";

export const metadata: Metadata = {
  title: "Artistas",
  description:
    "Los artistas de Ecstatic Dance Leipzig — Oscar Silva (Didgeridoo) y La Lvcha (DJ residente). Sonido en vivo y baile consciente cada martes.",
};

export default function ArtistasPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
            Colectivo
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-cream mb-4">
            Los <span className="italic text-accent-light">artistas</span>
          </h1>
          <p className="font-sans text-base text-muted max-w-xl mx-auto">
            El sonido de Ecstatic Dance Leipzig nace de la fusión entre el didgeridoo
            ancestral y la electrónica ritual contemporánea.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}
