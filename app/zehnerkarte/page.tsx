import type { Metadata } from "next";
import { zehnerkarte, siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Zehnerkarte — 10 noches por 100€",
  description:
    "Compra la Zehnerkarte de Ecstatic Dance Leipzig: 10 entradas por 100€, válidas durante 2 años. Solo 10€ por noche. Más del 30% de ahorro.",
};

export default function ZehnerKartePage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge variant="gold" className="mb-5">
            Mejor precio garantizado
          </Badge>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-cream mb-4">
            Zehnerkarte
          </h1>
          <p className="font-display text-2xl italic text-gold mb-6">
            10 noches · 100€
          </p>
          <p className="font-sans text-base text-muted max-w-lg mx-auto leading-relaxed">
            {zehnerkarte.description}
          </p>
        </div>

        {/* Main card */}
        <div className="relative rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-dark to-dark overflow-hidden p-8 sm:p-12 mb-10">
          <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-gold/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left — details */}
            <div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-cream mb-0.5">
                      10 entradas incluidas
                    </p>
                    <p className="font-sans text-xs text-muted">
                      Para cualquier martes de Ecstatic Dance Leipzig
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-cream mb-0.5">
                      Válida {zehnerkarte.validMonths} meses
                    </p>
                    <p className="font-sans text-xs text-muted">
                      Desde la fecha de compra. Sin fecha fija.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-cream mb-0.5">
                      Tarjeta física
                    </p>
                    <p className="font-sans text-xs text-muted">
                      Recibes tu tarjeta en el primer evento al que asistas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-cream mb-0.5">
                      Solo 10€ por noche
                    </p>
                    <p className="font-sans text-xs text-muted">
                      Más del 30% de ahorro frente a la taquilla (15€).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — price comparison */}
            <div>
              <div className="rounded-xl border border-white/10 bg-dark/60 overflow-hidden mb-6">
                <div className="px-5 py-3 border-b border-white/10">
                  <p className="font-sans text-xs text-muted uppercase tracking-widest">
                    Comparativa de precios
                  </p>
                </div>
                {zehnerkarte.comparison.map((item) => (
                  <div
                    key={item.label}
                    className={[
                      "flex items-center justify-between px-5 py-4 border-b border-white/5 last:border-0",
                      item.highlight ? "bg-gold/10" : "",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "font-sans text-sm",
                        item.highlight
                          ? "text-gold font-semibold"
                          : "text-muted",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                    <span
                      className={[
                        "font-display text-xl",
                        item.highlight ? "text-gold font-semibold" : "text-muted/70",
                      ].join(" ")}
                    >
                      {item.price}€
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-2">
                <span className="font-display text-5xl font-light text-gold">
                  100€
                </span>
                <p className="font-sans text-xs text-muted mt-1">pago único</p>
              </div>

              <Button
                href="/api/checkout?product=zehnerkarte"
                variant="gold"
                className="w-full justify-center mt-4"
                size="lg"
              >
                Comprar Zehnerkarte
              </Button>
              <p className="font-sans text-xs text-muted/60 text-center mt-3">
                Pago seguro via Stripe
              </p>
            </div>
          </div>
        </div>

        {/* FAQ zehnerkarte */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-light text-cream mb-6">
            Preguntas frecuentes
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "¿Cómo uso la Zehnerkarte?",
                a: "Al llegar al evento, simplemente muéstranos la tarjeta o el email de confirmación en la puerta. Marcamos una entrada.",
              },
              {
                q: "¿Puedo regalarla?",
                a: "Sí. La tarjeta es nominativa pero puede usarla cualquier persona si vienes con ella o nos avisas.",
              },
              {
                q: "¿Qué pasa si no uso todas las entradas?",
                a: "La tarjeta es válida 2 años desde la compra. Si el evento se cancela, te reponemos la entrada para otro martes.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                <p className="font-display text-lg font-light text-cream mb-2">{q}</p>
                <p className="font-sans text-sm text-muted">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
