import Image from "next/image";
import { zehnerkarte } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

const PROMO_IMAGE =
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&q=80&fit=crop";

export function ZehnerkartePromo() {
  return (
    <section className="py-8 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="relative rounded-2xl overflow-hidden border border-accent/20">
            <div className="absolute inset-0">
              <Image
                src={PROMO_IMAGE}
                alt="Zehnerkarte — Ecstatic Dance Leipzig"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/60" />
            </div>
            <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-gold/15 blur-[100px] pointer-events-none" />

            <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-14 lg:px-16">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                <div className="flex-1 max-w-xl">
                  <p className="font-sans text-xs text-gold uppercase tracking-[0.3em] mb-4">
                    Bester Preis garantiert
                  </p>
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4">
                    Zehnerkarte —{" "}
                    <em className="not-italic italic text-gold">10 Abende, 100 €</em>
                  </h2>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-6 max-w-md">
                    {zehnerkarte.description} Nur{" "}
                    <strong className="text-cream">10 € pro Abend</strong>. Über
                    30 % Ersparnis gegenüber der Abendkasse.
                  </p>
                  <Button href="/zehnerkarte" variant="gold" size="lg">
                    Zehnerkarte kaufen
                  </Button>
                </div>

                <div className="w-full lg:w-auto">
                  <div className="rounded-xl border border-white/15 bg-dark/70 backdrop-blur-sm overflow-hidden min-w-[220px]">
                    {zehnerkarte.comparison.map((item) => (
                      <div
                        key={item.label}
                        className={[
                          "flex items-center justify-between px-6 py-4 border-b border-white/8 last:border-0",
                          item.highlight ? "bg-gold/10" : "",
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
                            "font-display text-xl ml-10",
                            item.highlight
                              ? "text-gold font-semibold"
                              : "text-muted/60 line-through",
                          ].join(" ")}
                        >
                          {item.price} €
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
