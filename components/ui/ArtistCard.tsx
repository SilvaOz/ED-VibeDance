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
      className="group block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(107,79,160,0.15)]"
    >
      {/* Avatar placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-dark flex items-center justify-center overflow-hidden">
        {artist.image ? (
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-accent/30 border border-accent/40 flex items-center justify-center">
            <span className="font-display text-3xl text-cream">
              {artist.name[0]}
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-xl font-semibold text-cream group-hover:text-accent-light transition-colors">
            {artist.name}
          </h3>
          <Badge variant="accent">{roleLabel[artist.role]}</Badge>
        </div>
        <p className="font-sans text-xs text-muted uppercase tracking-widest mb-3">
          {artist.origin}
        </p>
        <p className="font-sans text-sm text-muted/80 leading-relaxed line-clamp-3">
          {artist.bio}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
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
