import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { artists } from "@/lib/config";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/ui/FadeUp";

export async function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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
  "live-musician": "Live-Musiker",
  facilitator: "Facilitator",
  "sound-healer": "Sound Healer",
};

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={artist.image ?? "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&q=80&fit=crop"}
          alt={artist.name}
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/10" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-12">
          <div className="mx-auto max-w-4xl">
            <Badge variant="accent" className="mb-4">
              {roleLabel[artist.role] ?? artist.role}
            </Badge>
            <h1 className="font-display text-5xl sm:text-6xl font-light text-cream mb-1">
              {artist.name}
            </h1>
            <p className="font-sans text-sm text-muted">{artist.origin}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-16">
        <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <FadeUp>
              <p className="font-sans text-base text-muted leading-relaxed">
                {artist.longBio ?? artist.bio}
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <div>
                <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
                  Genres & Stile
                </p>
                <div className="flex flex-wrap gap-2">
                  {artist.genres.map((g) => (
                    <Badge key={g} variant="muted">
                      {g}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={150}>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
                <p className="font-sans text-xs text-accent-light uppercase tracking-widest">
                  Links
                </p>
                {artist.instagram && (
                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-sans text-sm text-muted hover:text-cream transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                )}
                {"website" in artist && artist.website && (
                  <a
                    href={artist.website as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-sans text-sm text-muted hover:text-cream transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    Website
                  </a>
                )}
              </div>

              <Link
                href="/kuenstler"
                className="block text-center font-sans text-sm text-muted hover:text-cream transition-colors py-2"
              >
                ← Alle Künstler
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
