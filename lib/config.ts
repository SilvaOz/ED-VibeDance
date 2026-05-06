import type { Artist, Event, Product } from "@/types";

// ─── Venue ────────────────────────────────────────────────────────────────────

export const venue = {
  name: "ZiMMT Leipzig",
  fullName: "ZiMMT — Zentrum für immersive Medienkunst, Musik und Technologie",
  address: "Torgauer Straße 80, 04318 Leipzig",
  neighborhood: "Leipzig-Reudnitz",
  url: "https://zimmt.net",
  mapsUrl: "https://maps.google.com/?q=Torgauer+Straße+80,+04318+Leipzig",
  description: "Immersives Kunstzentrum · 3D-Audiosystem mit 36 Lautsprechern",
  longDescription:
    "ZiMMT ist eine frühere Wälzlagerfabrik in Leipzig-Reudnitz, die zu einem Zentrum für immersive Medienkunst, Musik und Technologie umgewandelt wurde. Über 50 Kreative arbeiten auf 3.000 m². Das 3D-Audiosystem mit 36 Lautsprechern gehört zu den wenigen seiner Art in ganz Deutschland.",
  badge: "3D-Sound · 36 Lautsprecher",
  accessible: true,
} as const;

// ─── Site info ───────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "VibraDance",
  fullName: "Ecstatic Dance Leipzig",
  domain: "ecstaticdanceleipzig.de",
  tagline: "Conscious Dance · Didgeridoo Live · Sacred Sound",
  description:
    "Die authentischste Ecstatic-Dance-Erfahrung in Leipzig. Didgeridoo live + DJ, kein Alkohol, keine Drogen, barfuß — nur Musik, Bewegung und echte Verbindung.",
  instagram: "https://instagram.com/staticdanceleipzig",
  telegram: "https://t.me/ecstaticdanceleipzig",
  email: "hola@ecstaticdanceleipzig.de",
  eventDay: "Jeden Dienstag, 18:00 – 21:00 Uhr, Leipzig",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecstaticdanceleipzig.de",
} as const;

// ─── Regeln des Ecstatic Dance ───────────────────────────────────────────────

export const rules = [
  {
    icon: "🦶",
    title: "Barfuß",
    description: "Verbindung mit dem Boden und dem gegenwärtigen Moment.",
  },
  {
    icon: "🤫",
    title: "Kein Sprechen auf der Tanzfläche",
    description: "Wir treten in einen meditativen Zustand. Der Körper spricht.",
  },
  {
    icon: "🚫",
    title: "Kein Alkohol, keine Drogen",
    description: "Das natürliche High reicht aus. Vollständige Präsenz.",
  },
  {
    icon: "📵",
    title: "Handyfrei",
    description: "Volle Präsenz. Du erlebst den Moment — du filmst ihn nicht.",
  },
  {
    icon: "🙏",
    title: "Respekt",
    description: "Ein sicherer Raum für alle Körper und Ausdrucksformen.",
  },
  {
    icon: "✨",
    title: "Authentizität",
    description: "Bewege dich so, wie du fühlst. Es gibt keine richtigen oder falschen Schritte.",
  },
] as const;

// ─── Veranstaltungsformat ─────────────────────────────────────────────────────

export const eventSchedule = [
  { time: "18:00", label: "Einlass" },
  { time: "18:15", label: "Eröffnungsritual + erste Didgeridoo-Klänge" },
  { time: "18:30", label: "Ecstatic Dance: Didgeridoo Live + La Lvcha" },
  { time: "20:30", label: "Sound Healing / Ausklang" },
  { time: "21:00", label: "Ende" },
] as const;

// ─── Veranstaltungen ──────────────────────────────────────────────────────────

export const events: Event[] = [
  {
    id: "evt-001",
    slug: "ecstatic-dance-leipzig-12-mai-2026",
    date: "2026-05-12T18:00:00",
    title: "Ecstatic Dance Leipzig",
    subtitle: "Sound & Dance Ritual mit La Lvcha",
    dj: "La Lvcha",
    liveAct: "Oscar Silva (Didgeridoo)",
    venue: "ZiMMT Leipzig",
    address: "Torgauer Straße 80, 04318 Leipzig",
    image: "/banner-ecstatic-dance.png",
    price: {
      presale: 18,
      door: 18,
    },
    capacity: 60,
    soldOut: false,
    description:
      "Ecstatic Dance schafft einen offenen Raum, um durch Musik und Bewegung aus dem Alltag auszusteigen und wieder in Verbindung mit dem eigenen Körper zu kommen. Die kolumbianische DJ und Klangkünstlerin La Lvcha gestaltet eine vielschichtige Klangreise, die elektronische Musik mit globalen Rhythmen verbindet und zum freien Tanzen einlädt.",
    tags: [
      "ecstatic dance",
      "didgeridoo",
      "conscious dance",
      "Leipzig",
      "sound healing",
    ],
  },
  {
    id: "evt-002",
    slug: "ecstatic-dance-leipzig-19-mai-2026",
    date: "2026-05-19T18:00:00",
    title: "Ecstatic Dance Leipzig",
    subtitle: "Sound & Dance Ritual mit La Lvcha",
    dj: "La Lvcha",
    liveAct: "Oscar Silva (Didgeridoo)",
    venue: "ZiMMT Leipzig",
    address: "Torgauer Straße 80, 04318 Leipzig",
    image: "/banner-ecstatic-dance.png",
    price: {
      presale: 18,
      door: 18,
    },
    capacity: 60,
    soldOut: false,
    description:
      "Ecstatic Dance schafft einen offenen Raum, um durch Musik und Bewegung aus dem Alltag auszusteigen und wieder in Verbindung mit dem eigenen Körper zu kommen. Die kolumbianische DJ und Klangkünstlerin La Lvcha gestaltet eine vielschichtige Klangreise, die elektronische Musik mit globalen Rhythmen verbindet und zum freien Tanzen einlädt.",
    tags: [
      "ecstatic dance",
      "vollmond",
      "didgeridoo",
      "Leipzig",
      "sound healing",
    ],
  },
  {
    id: "evt-003",
    slug: "ecstatic-dance-leipzig-26-mai-2026",
    date: "2026-05-26T18:00:00",
    title: "Ecstatic Dance Leipzig",
    subtitle: "Sound & Dance Ritual mit La Lvcha",
    dj: "La Lvcha",
    liveAct: "Oscar Silva (Didgeridoo)",
    venue: "ZiMMT Leipzig",
    address: "Torgauer Straße 80, 04318 Leipzig",
    image: "/banner-ecstatic-dance.png",
    price: {
      presale: 18,
      door: 18,
    },
    capacity: 60,
    soldOut: false,
    description:
      "Ecstatic Dance schafft einen offenen Raum, um durch Musik und Bewegung aus dem Alltag auszusteigen und wieder in Verbindung mit dem eigenen Körper zu kommen. Die kolumbianische DJ und Klangkünstlerin La Lvcha gestaltet eine vielschichtige Klangreise, die elektronische Musik mit globalen Rhythmen verbindet und zum freien Tanzen einlädt.",
    tags: ["ecstatic dance", "tribal", "didgeridoo", "Leipzig"],
  },
];

// ─── Künstler ─────────────────────────────────────────────────────────────────

export const artists: Artist[] = [
  {
    id: "artist-001",
    slug: "oscar-silva",
    name: "Oscar Silva",
    role: "live-musician",
    origin: "Peru / Leipzig",
    bio: "Didgeridoo-Meister mit Wurzeln im Heiligen Tal Perus. Er öffnet den Raum mit ancestralem Klang, der den Körper zur Bewegung einlädt.",
    longBio:
      "Oscar Silva wurde in den Höhen des Heiligen Tals Perus geboren und lebt heute in Leipzig. Seine Beziehung zum Didgeridoo geht weit über das Instrument hinaus: Es ist eine Praxis der Präsenz, der Kreisatmung und der Verbindung mit der Erde. Jeden Dienstag öffnet sein Klang das Portal des Ecstatic Dance.",
    instagram: "https://instagram.com/oscarsilva",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&q=80&fit=crop",
    genres: [
      "Didgeridoo",
      "Sound Healing",
      "Ritualmusik",
      "Schamanisch",
      "Ambient",
    ],
  },
  {
    id: "artist-002",
    slug: "la-lvcha",
    name: "La Lvcha",
    role: "dj",
    origin: "Kolumbien / Leipzig",
    bio: "Kolumbianische DJ und Klangkünstlerin. Ihre vielschichtigen Klangreisen verbinden elektronische Musik mit globalen Rhythmen und laden zum freien Tanzen ein.",
    longBio:
      "La Lvcha ist eine kolumbianische DJ und Klangkünstlerin, die an der Schnittstelle zwischen afrolateinischer Tradition und elektronischer Avantgarde lebt. Ihre Sets sind Klangzeremonien — sie mischt keine Songs, sie erschafft Journeys. Als Resident-DJ von Ecstatic Dance Leipzig im ZiMMT ist sie die musikalische Architektin jedes Dienstags.",
    website: "https://lalvcha.com",
    instagram: "https://instagram.com/lalvcha",
    image:
      "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&auto=format&q=80&fit=crop",
    genres: [
      "Tropical Clubbing",
      "Afrolateinisch",
      "Ritual House",
      "Organic Electronic",
    ],
  },
];

// ─── Produkte (deaktiviert — nur Events) ─────────────────────────────────────

export const products: Product[] = [
  {
    id: "prod-001",
    slug: "rape-amazonico-artesanal",
    name: "Handgefertigtes Amazonas-Rapé",
    description:
      "Zeremonielle Mischung aus Mapacho-Tabak und heiligen Amazonaspflanzen. Mit Intention zubereitet — für energetische Reinigung und mentale Klarheit.",
    price: 2500,
    currency: "eur",
    category: "rapé",
    inStock: true,
    digital: false,
  },
  {
    id: "prod-002",
    slug: "meditation-musik-432hz",
    name: "Meditationsmusik 432Hz (Download)",
    description:
      "Digitales Album. Didgeridoo-Aufnahmen bei 432Hz — der Frequenz des Universums. Für Meditation, Yoga, Tiefenentspannung und innere Ausrichtung.",
    price: 1000,
    currency: "eur",
    category: "música" as "música",
    inStock: true,
    digital: true,
  },
];

// ─── Zehnerkarte ──────────────────────────────────────────────────────────────

interface ComparisonItem {
  label: string;
  price: number;
  highlight?: boolean;
}

export const zehnerkarte: {
  price: number;
  pricePerNight: number;
  validMonths: number;
  description: string;
  comparison: ComparisonItem[];
} = {
  price: 100,
  pricePerNight: 10,
  validMonths: 24,
  description:
    "10 Eintritte nach Belieben nutzen. Kein festes Datum, 2 Jahre gültig. Du erhältst deine physische Karte beim ersten Event.",
  comparison: [
    { label: "Abendkasse", price: 18 },
    { label: "Zehnerkarte", price: 10, highlight: true },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    question: "Muss ich tanzen können?",
    answer:
      "Nein. Beim Ecstatic Dance gibt es keine richtigen oder falschen Schritte. Dein einziger Lehrer bist du selbst. Alle Körper sind willkommen.",
  },
  {
    question: "Was soll ich mitbringen?",
    answer:
      "Bequeme Kleidung zum Bewegen, Wasser und Lust zum Erkunden. Bitte keinen Alkohol, keine Drogen und keine starken Parfüms. Wir tanzen barfuß.",
  },
  {
    question: "Kann ich zu spät kommen?",
    answer:
      "Der Einlass beginnt um 18:00 Uhr. Das Event endet um 21:00 Uhr. Bitte sei pünktlich — der Raum öffnet gemeinsam.",
  },
  {
    question: "Was ist die Zehnerkarte?",
    answer:
      "Ein Gutschein für 10 Eintritte für 100 € (10 € pro Abend). Gültig 2 Jahre ab Kauf. Du kannst sie an jedem Dienstag nutzen, ohne festes Datum.",
  },
  {
    question: "Kann ich alleine kommen?",
    answer:
      "Absolut. Die meisten Menschen kommen alleine. Der Raum ist so gestaltet, dass du dich zuerst mit dir selbst verbindest — und von dort aus authentisch mit anderen.",
  },
  {
    question: "Gibt es körperliche Anforderungen?",
    answer:
      "Keine. Du kannst dich sanft, intensiv, sitzend oder liegend bewegen. Menschen aller Altersgruppen und Fähigkeiten sind willkommen.",
  },
] as const;

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Was ist ED?", href: "/was-ist" },
  { label: "Events", href: "/veranstaltungen" },
  { label: "Künstler", href: "/kuenstler" },
  { label: "Zehnerkarte", href: "/zehnerkarte" },
  { label: "Blog", href: "/blog" },
  { label: "Community", href: "/community" },
] as const;
