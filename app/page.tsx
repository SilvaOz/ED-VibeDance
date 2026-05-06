import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatIsSection } from "@/components/home/WhatIsSection";
import { NextEventsSection } from "@/components/home/NextEventsSection";
import { ZehnerkartePromo } from "@/components/home/ZehnerkartePromo";
import { FAQSection } from "@/components/home/FAQSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — Ecstatic Dance, Didgeridoo en Vivo, Leipzig`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <NextEventsSection />
      <ZehnerkartePromo />
      <FAQSection />
      <CommunitySection />
    </>
  );
}
