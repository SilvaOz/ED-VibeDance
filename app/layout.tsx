import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ecstatic Dance Leipzig — Conscious Dance · Didgeridoo Live",
    template: "%s | Ecstatic Dance Leipzig",
  },
  description:
    "Ecstatic Dance jeden Dienstag in Leipzig. Didgeridoo live, kein Alkohol, barfuß — bewusste Bewegung im ZiMMT Leipzig-Reudnitz.",
  keywords: [
    "ecstatic dance Leipzig",
    "conscious dance Leipzig",
    "tanzen ohne alkohol Leipzig",
    "sound healing Leipzig",
    "didgeridoo live Leipzig",
    "barfuß tanzen Leipzig",
    "bewusstes tanzen Leipzig",
    "ecstatic dance Deutschland",
    "VibraDance Leipzig",
    "ZiMMT Leipzig",
  ],
  authors: [{ name: "Oscar Silva", url: "https://instagram.com/oscarsilva.music" }],
  creator: "Oscar Silva — VibraDance",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    siteName: "Ecstatic Dance Leipzig",
    title: "Ecstatic Dance Leipzig — Conscious Dance · Didgeridoo Live",
    description:
      "Ecstatic Dance jeden Dienstag in Leipzig. Didgeridoo live, kein Alkohol, barfuß — bewusste Bewegung im ZiMMT.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecstatic Dance Leipzig — VibraDance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecstatic Dance Leipzig",
    description:
      "Conscious Dance · Didgeridoo Live · Sacred Sound. Jeden Dienstag in Leipzig.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const COMING_SOON = process.env.COMING_SOON === "true";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {!COMING_SOON && <Navbar />}
        <main className="flex-1">{children}</main>
        {!COMING_SOON && <Footer />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventSeries",
              name: "Ecstatic Dance Leipzig",
              description:
                "Wöchentlicher Ecstatic Dance mit Didgeridoo live und DJ La Lvcha im ZiMMT Leipzig.",
              url: siteConfig.url,
              organizer: {
                "@type": "Person",
                name: "Oscar Silva",
                url: `${siteConfig.url}/artistas/oscar-silva`,
              },
              location: {
                "@type": "Place",
                name: "ZiMMT Leipzig",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Torgauer Straße 80",
                  addressLocality: "Leipzig",
                  postalCode: "04318",
                  addressCountry: "DE",
                },
              },
              eventSchedule: {
                "@type": "Schedule",
                repeatFrequency: "P1W",
                byDay: "Tuesday",
                startTime: "19:00",
                endTime: "22:00",
              },
              offers: {
                "@type": "Offer",
                price: "18",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
