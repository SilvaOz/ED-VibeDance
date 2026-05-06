import Link from "next/link";
import Image from "next/image";
import type { Artist } from "@/types";
import { Badge } from "./Badge";

interface ArtistCardProps {
  artist: Artist;
}

const roleLabel: Record<Artist["role"], string> = {
  dj: "DJ",
  "live-musician": "Músico en Vivo",
  facilitator: "Facilitador",
  healer: "Sound Healer",
};

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link
      href={`/artistas/${artist.slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-400 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(107,79,160,0.2)] hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/20 to-dark">
        {artist.image ? (
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-accent/30 border border-accent/40 flex items-center justify-center">
              <span className="font-display text-3xl text-cream">{artist.name[0]}</span>
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />

        {/* Role badge on image */}
        <div className="absolute top-4 right-4">
          <Badge variant="accent">{roleLabel[artist.role]}</Badge>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-2xl font-semibold text-cream mb-0.5 group-hover:text-accent-light transition-colors">
          {artist.name}
        </h3>
        <p className="font-sans text-xs text-muted uppercase tracking-widest mb-3">
          {artist.origin}
        </p>
        <p className="font-sans text-sm text-muted/80 leading-relaxed line-clamp-2 mb-4">
          {artist.bio}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {artist.genres.slice(0, 3).map((genre) => (
            <Badge key={genre} variant="muted" className="text-[10px]">
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
