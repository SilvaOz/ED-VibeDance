import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre Ecstatic Dance, baile consciente, sound healing y vida consciente en Leipzig.",
};

// Placeholder articles until MDX is configured
const posts = [
  {
    slug: "que-es-ecstatic-dance",
    title: "¿Qué es el Ecstatic Dance? Una guía completa",
    excerpt:
      "El Ecstatic Dance es una práctica de movimiento libre que combina música, comunidad y presencia. Sin coreografías, sin alcohol, sin expectativas.",
    date: "2026-04-15",
    tags: ["ecstatic dance", "conscious dance", "introducción"],
  },
  {
    slug: "didgeridoo-sound-healing",
    title: "El didgeridoo como herramienta de sanación",
    excerpt:
      "El sonido del didgeridoo opera en frecuencias que resuenan con el sistema nervioso. Cómo este instrumento ancestral abre el cuerpo al movimiento.",
    date: "2026-04-22",
    tags: ["didgeridoo", "sound healing", "música"],
  },
  {
    slug: "ecstatic-dance-leipzig-guia",
    title: "Guía para tu primera noche de Ecstatic Dance en Leipzig",
    excerpt:
      "Qué esperar, qué traer, cómo llegar. Todo lo que necesitas saber antes de tu primera sesión de baile consciente con nosotros.",
    date: "2026-04-29",
    tags: ["Leipzig", "primer evento", "guía"],
  },
] as const;

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
            Artículos
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-cream mb-4">
            <span className="italic text-accent-light">Blog</span>
          </h1>
          <p className="font-sans text-base text-muted max-w-lg mx-auto">
            Reflexiones sobre movimiento consciente, sonido y vida auténtica.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[10px] text-muted uppercase tracking-widest"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-2xl font-light text-cream mb-2 group-hover:text-accent-light transition-colors">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <time className="font-sans text-xs text-muted/60">
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span className="font-sans text-xs text-accent-light group-hover:text-cream transition-colors">
                  Leer artículo →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
