import { zehnerkarte } from "@/lib/config";
import { Button } from "@/components/ui/Button";

export function ZehnerkartePromo() {
  return (
    <section className="py-8 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-2xl overflow-hidden border border-accent/30 bg-gradient-to-br from-accent/15 via-dark to-dark">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-gold/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-accent/15 blur-[80px] pointer-events-none" />

          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Left */}
              <div className="flex-1">
                <p className="font-sans text-xs text-gold uppercase tracking-[0.25em] mb-3">
                  Mejor precio garantizado
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-4">
                  Zehnerkarte —{" "}
                  <span className="text-gold italic">10 noches, 100€</span>
                </h2>
                <p className="font-sans text-sm text-muted leading-relaxed max-w-lg">
                  {zehnerkarte.description} Solo 10€ por noche.
                  Más del 30% de ahorro frente a la taquilla.
                </p>
              </div>

              {/* Right — comparison table */}
              <div className="w-full lg:w-auto">
                <div className="rounded-xl border border-white/10 bg-dark/50 overflow-hidden min-w-[220px]">
                  {zehnerkarte.comparison.map((item) => (
                    <div
                      key={item.label}
                      className={[
                        "flex items-center justify-between px-5 py-3 border-b border-white/5 last:border-0",
                        item.highlight
                          ? "bg-gold/10 border-b-gold/20"
                          : "",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "font-sans text-sm",
                          item.highlight ? "text-gold font-semibold" : "text-muted",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>
                      <span
                        className={[
                          "font-display text-lg ml-8",
                          item.highlight ? "text-gold font-semibold" : "text-muted/70",
                        ].join(" ")}
                      >
                        {item.price}€
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <Button href="/zehnerkarte" variant="gold" className="w-full justify-center">
                    Comprar Zehnerkarte
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
