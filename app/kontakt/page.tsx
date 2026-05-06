import type { Metadata } from "next";
import { KontaktForm } from "./KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Ecstatic Dance Leipzig — Fragen, Kooperationen und Pressearbeit.",
};

export default function KontaktPage() {
  return <KontaktForm />;
}
