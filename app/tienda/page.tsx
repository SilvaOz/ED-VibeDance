import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/config";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Tienda de Ecstatic Dance Leipzig — rapé amazónico artesanal, música de meditación 432Hz y más.",
};

function formatPrice(cents: number): string {
  return (cents / 100).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  });
}

export default function TiendaPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
            Artículos
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-cream mb-4">
            <span className="italic text-accent-light">Tienda</span>
          </h1>
          <p className="font-sans text-base text-muted max-w-lg mx-auto">
            Productos curados por Oscar Silva: medicina de plantas, música sagrada y
            artesanía con intención.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/tienda/${product.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-accent/30 hover:shadow-[0_0_30px_rgba(107,79,160,0.15)] transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-accent/10 to-dark flex items-center justify-center">
                <span className="font-display text-4xl text-cream/20">
                  {product.category === "rapé"
                    ? "🌿"
                    : product.category === "música"
                    ? "🎵"
                    : "✨"}
                </span>
              </div>

              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  <Badge variant="muted">{product.category}</Badge>
                  {product.digital && <Badge variant="accent">Digital</Badge>}
                  {!product.inStock && <Badge variant="muted">Sin stock</Badge>}
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-2 group-hover:text-accent-light transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans text-xs text-muted leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-gold">
                    {formatPrice(product.price)}
                  </span>
                  <span className="font-sans text-xs text-accent-light group-hover:text-cream transition-colors">
                    Ver producto →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
