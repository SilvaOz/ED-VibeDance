import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Ecstatic Dance Leipzig.",
};

export default function DatenschutzPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl font-light text-cream mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 font-sans text-sm text-muted leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-cream mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-cream mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">2. Verantwortliche Stelle</h2>
            <p>
              Oscar Silva
              <br />
              VibraDance / Ecstatic Dance Leipzig
              <br />
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
            <h2 className="font-display text-xl text-cream mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-cream mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">4. Zahlungsabwicklung (Stripe)</h2>
            <p>
              Für die Abwicklung von Zahlungen nutzen wir den Dienst Stripe. Stripe ist
              ein Zahlungsdienstleister, der Kreditkarten- und andere Zahlungen abwickelt.
              Die Datenschutzerklärung von Stripe finden Sie unter stripe.com/de/privacy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser
              Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
