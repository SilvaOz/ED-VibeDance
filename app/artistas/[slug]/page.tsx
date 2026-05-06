import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { artists } from "@/lib/config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) return {};
  return {
    title: artist.name,
    description: artist.bio,
  };
}

const roleLabel: Record<string, string> = {
  dj: "DJ",
  "live-musician": "Músico en Vivo",
  facilitator: "Facilitador",
  healer: "Sound Healer",
};

export default async function ArtistaPage({ params }: PageProps) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) notFound();

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-4xl">
        <Button href="/artistas" variant="ghost" size="sm" className="mb-8">
          ← Volver a artistas
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              {/* Avatar */}
              <div className="h-64 bg-gradient-to-br from-accent/20 to-dark flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-accent/30 border border-accent/40 flex items-center justify-center">
                  <span className="font-display text-4xl text-cream">
                    {artist.name[0]}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <Badge variant="accent" className="mb-3">
                  {roleLabel[artist.role]}
                </Badge>
                <h1 className="font-display text-2xl font-semibold text-cream mb-1">
                  {artist.name}
                </h1>
                <p className="font-sans text-xs text-muted uppercase tracking-widest mb-4">
                  {artist.origin}
                </p>

                <div className="flex flex-col gap-2">
                  {artist.website && (
                    <a
                      href={artist.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-accent-light hover:text-cream transition-colors"
                    >
                      Website →
                    </a>
                  )}
                  {artist.instagram && (
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-muted hover:text-cream transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                  {artist.soundcloud && (
                    <a
                      href={artist.soundcloud}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-muted hover:text-cream transition-colors"
                    >
                      SoundCloud
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <p className="font-sans text-sm text-muted leading-relaxed mb-6">
              {artist.longBio ?? artist.bio}
            </p>

            <div className="mb-8">
              <h2 className="font-display text-2xl font-light text-cream mb-4">
                Géneros
              </h2>
              <div className="flex flex-wrap gap-2">
                {artist.genres.map((genre) => (
                  <Badge key={genre} variant="muted">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            <Button href="/eventos" size="md">
              Ver próximos eventos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
