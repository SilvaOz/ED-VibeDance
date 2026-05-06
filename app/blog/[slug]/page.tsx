import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static placeholder — will be replaced by MDX when configured
const posts: Record<
  string,
  { title: string; date: string; content: string; tags: string[] }
> = {
  "que-es-ecstatic-dance": {
    title: "¿Qué es el Ecstatic Dance? Una guía completa",
    date: "2026-04-15",
    tags: ["ecstatic dance", "conscious dance", "introducción"],
    content: `El Ecstatic Dance es una práctica de movimiento libre que nació en Hawaii a principios de los 2000 y se ha expandido a más de 50 países. La premisa es simple pero poderosa: música + libertad + presencia = transformación.

A diferencia del baile convencional, no hay pasos que aprender, no hay coreografías que seguir, no hay forma correcta o incorrecta de moverse. El único maestro eres tú mismo. El cuerpo sabe lo que necesita — solo hay que darle permiso para expresarse.

Las tres claves del Ecstatic Dance son: música cuidadosamente seleccionada que guía el viaje emocional, un espacio seguro sin juicios donde todos son bienvenidos, y las cinco reglas básicas (descalzos, sin palabras en la pista, sin alcohol ni drogas, sin teléfono, con respeto).

En Leipzig, llevamos este formato un paso más allá con el diferencial único del didgeridoo en vivo de Oscar Silva, que abre cada sesión con sonido ancestral.`,
  },
  "didgeridoo-sound-healing": {
    title: "El didgeridoo como herramienta de sanación",
    date: "2026-04-22",
    tags: ["didgeridoo", "sound healing", "música"],
    content: `El didgeridoo es uno de los instrumentos más antiguos del mundo — tiene más de 40.000 años de historia en las culturas aborígenes australianas. Pero más allá de su historia, su magia radica en el sonido que produce: frecuencias profundas que resuenan directamente con el sistema nervioso parasimpático.

Cuando escuchas un didgeridoo en vivo, el sonido no solo llega a tus oídos — lo sientes en el pecho, en el abdomen, en los huesos. Esta vibración física tiene efectos documentados: reduce el cortisol, activa el nervio vago, facilita estados de relajación profunda y apertura emocional.

En el contexto del Ecstatic Dance, el didgeridoo de Oscar Silva sirve como portal de entrada. Antes de que la música del DJ comience, el sonido del didgeridoo prepara el cuerpo y la mente para el movimiento consciente.`,
  },
  "ecstatic-dance-leipzig-guia": {
    title: "Guía para tu primera noche de Ecstatic Dance en Leipzig",
    date: "2026-04-29",
    tags: ["Leipzig", "primer evento", "guía"],
    content: `Si es tu primera vez, es completamente normal sentir algo de nerviosismo. El Ecstatic Dance es diferente a cualquier otro espacio de baile que hayas visitado. Pero eso es exactamente lo que lo hace especial.

Qué traer: ropa cómoda con la que puedas moverte libremente, una botella de agua, y calcetines para el camino (bailamos descalzos). No traigas perfumes fuertes ni alcohol.

Cómo llegar: Studio Bewegungsraum, Karl-Liebknecht-Str. 42, 04107 Leipzig. Tranvía línea 10 o 11, parada Hohe Straße. Las puertas abren a las 19:30, cierran a las 19:45 en punto.

Qué esperar: cuando entres, habrá un espacio tranquilo para dejar tus cosas y descalzarte. A las 20:00 comenzamos con el ritual de apertura y las primeras notas de didgeridoo. La journey dura hasta las 22:00, seguida de sound healing. Puedes moverte como sientas — intenso, suave, sin moverse. Todo es válido.`,
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
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-3xl">
        <Button href="/blog" variant="ghost" size="sm" className="mb-8">
          ← Volver al blog
        </Button>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="font-sans text-xs text-muted/60 uppercase tracking-widest">
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-light text-cream mb-4">
          {post.title}
        </h1>
        <time className="font-sans text-sm text-muted block mb-12">
          {new Date(post.date).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>

        <div className="prose-content space-y-5">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="font-sans text-sm text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Button href="/eventos" size="md">
            Ver próximos eventos →
          </Button>
        </div>
      </div>
    </div>
  );
}
