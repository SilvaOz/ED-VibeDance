import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Ecstatic Dance Leipzig / VibraDance.",
};

export default function ImpressumPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl font-light text-cream mb-10">
          Impressum
        </h1>

        <div className="space-y-8 font-sans text-sm text-muted leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-cream mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Oscar Silva
              <br />
              VibraDance / Ecstatic Dance Leipzig
              <br />
              Leipzig, Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent-light hover:text-cream transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">
              Verantwortlich für den Inhalt
            </h2>
            <p>Oscar Silva</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
              10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
              oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
