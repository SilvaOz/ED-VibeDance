import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatIsSection } from "@/components/home/WhatIsSection";
import { DieReiseSection } from "@/components/home/DieReiseSection";
import { NextEventsSection } from "@/components/home/NextEventsSection";
import { ZehnerkartePromo } from "@/components/home/ZehnerkartePromo";
import { FAQSection } from "@/components/home/FAQSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Ecstatic Dance Leipzig — Conscious Dance · Didgeridoo Live",
  description:
    "Jeden Dienstag in Leipzig: Ecstatic Dance mit Didgeridoo live, DJ La Lvcha und Sound Healing. Kein Alkohol, barfuß, bewusste Bewegung im ZiMMT.",
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <DieReiseSection />
      <NextEventsSection />
      <ZehnerkartePromo />
      <FAQSection />
      <CommunitySection />
    </>
  );
}
