import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

function formatPrice(cents: number): string {
  return (cents / 100).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });
}

export default async function ProductoPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-4xl">
        <Button href="/tienda" variant="ghost" size="sm" className="mb-8">
          ← Volver a la tienda
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="rounded-2xl border border-white/10 bg-white/5 h-80 flex items-center justify-center">
            <span className="font-display text-6xl text-cream/20">
              {product.category === "rapé"
                ? "🌿"
                : product.category === "música"
                ? "🎵"
                : "✨"}
            </span>
          </div>

          {/* Details */}
          <div>
            <div className="flex gap-2 mb-4">
              <Badge variant="muted">{product.category}</Badge>
              {product.digital && <Badge variant="accent">Descarga digital</Badge>}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-light text-cream mb-4">
              {product.name}
            </h1>
            <p className="font-sans text-sm text-muted leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="mb-8">
              <span className="font-display text-4xl text-gold">
                {formatPrice(product.price)}
              </span>
              {product.digital && (
                <span className="font-sans text-xs text-muted ml-3">
                  descarga inmediata
                </span>
              )}
            </div>

            {product.inStock ? (
              <Button
                href={`/api/checkout?productId=${product.id}`}
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                {product.digital ? "Comprar y descargar" : "Añadir al carrito"}
              </Button>
            ) : (
              <div className="text-center py-4 rounded-full border border-white/20 text-muted font-sans text-sm">
                Sin stock temporalmente
              </div>
            )}

            <p className="font-sans text-xs text-muted/60 text-center mt-4">
              Pago seguro via Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
