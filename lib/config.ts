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
  email: "hallo@ecstaticdanceleipzig.de",
  eventDay: "Jeden Dienstag, 19:00 – 22:00 Uhr, Leipzig",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecstaticdanceleipzig.de",
} as const;

// ─── Regeln des Ecstatic Dance ───────────────────────────────────────────────

export const rules = [
  {
    icon: "footprints",
    title: "Barfuß",
    description: "Verbindung mit dem Boden und dem gegenwärtigen Moment.",
  },
  {
    icon: "message-square-off",
    title: "Kein Sprechen auf der Tanzfläche",
    description: "Wir treten in einen meditativen Zustand. Der Körper spricht.",
  },
  {
    icon: "ban",
    title: "Kein Alkohol, keine Drogen",
    description: "Das natürliche High reicht aus. Vollständige Präsenz.",
  },
  {
    icon: "smartphone-off",
    title: "Handyfrei",
    description: "Volle Präsenz. Du erlebst den Moment — du filmst ihn nicht.",
  },
  {
    icon: "heart",
    title: "Respekt",
    description: "Ein sicherer Raum für alle Körper und Ausdrucksformen.",
  },
  {
    icon: "sparkles",
    title: "Authentizität",
    description: "Bewege dich so, wie du fühlst. Es gibt keine richtigen oder falschen Schritte.",
  },
] as const;

// ─── Veranstaltungsformat ─────────────────────────────────────────────────────

export const eventSchedule = [
  { time: "19:00", label: "Einlass & Ankommen. Schuhe aus, Handy weg." },
  { time: "19:30", label: "Eröffnungskreis. Oscar Silva öffnet den Raum mit Didgeridoo live." },
  { time: "19:45–21:30", label: "Ecstatic Dance Journey mit DJ La Lvcha." },
  { time: "21:30", label: "Sound Journey & Heilung. Didgeridoo, Handpan, Djembe, Maultrommel, Querflöte." },
  { time: "21:55", label: "Schlusskreis. Gemeinsames Innehalten." },
  { time: "22:00", label: "Ende." },
] as const;

// ─── Veranstaltungen ──────────────────────────────────────────────────────────

export const events: Event[] = [
  {
    id: "evt-001",
    slug: "ecstatic-dance-leipzig-19-mai-2026",
    date: "2026-05-19T19:00:00",
    title: "Ecstatic Dance Leipzig",
    subtitle: "Sound & Dance Ritual mit La Lvcha",
    dj: "La Lvcha",
    liveAct: "Silva Didgeridoo",
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
      "Ecstatic Dance schafft einen offenen Raum, um durch Musik und Bewegung aus dem Alltag auszusteigen und wieder in Verbindung mit dem eigenen Körper zu kommen. La Lvcha führt durch eine vielschichtige Klangreise, die elektronische Musik mit globalen Rhythmen verbindet. Jeder Abend schließt mit einer gemeinsamen Sound Journey — Handpan, Klangschalen, Flöten, Didgeridoo und mehr. Kein Abend ist wie der andere.",
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
    date: "2026-05-19T19:00:00",
    title: "Ecstatic Dance Leipzig",
    subtitle: "Sound & Dance Ritual mit La Lvcha",
    dj: "La Lvcha",
    liveAct: "Silva Didgeridoo",
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
      "Ecstatic Dance schafft einen offenen Raum, um durch Musik und Bewegung aus dem Alltag auszusteigen und wieder in Verbindung mit dem eigenen Körper zu kommen. La Lvcha führt durch eine vielschichtige Klangreise, die elektronische Musik mit globalen Rhythmen verbindet. Jeder Abend schließt mit einer gemeinsamen Sound Journey — Handpan, Klangschalen, Flöten, Didgeridoo und mehr. Kein Abend ist wie der andere.",
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
    date: "2026-05-26T19:00:00",
    title: "Ecstatic Dance Leipzig",
    subtitle: "Sound & Dance Ritual mit La Lvcha",
    dj: "La Lvcha",
    liveAct: "Silva Didgeridoo",
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
      "Ecstatic Dance schafft einen offenen Raum, um durch Musik und Bewegung aus dem Alltag auszusteigen und wieder in Verbindung mit dem eigenen Körper zu kommen. La Lvcha führt durch eine vielschichtige Klangreise, die elektronische Musik mit globalen Rhythmen verbindet. Jeder Abend schließt mit einer gemeinsamen Sound Journey — Handpan, Klangschalen, Flöten, Didgeridoo und mehr. Kein Abend ist wie der andere.",
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
    bio: "Didgeridoo-Meister mit Wurzeln im Heiligen Tal Perus. Gründer und Pionier von VibraDance — einer wachsenden Plattform für bewussten Tanz.",
    longBio:
      "Oscar Silva wurde in Lima geboren — einer Stadt voller Lärm, Bewegung und urbaner Kunst. Doch irgendwann reichte das nicht mehr. Er suchte Stille. Er fand das Didgeridoo.\n\nSeit 2007 spielt er — und je tiefer er in das Instrument eintauchte, desto klarer wurde der Ruf der Natur. Bevor er sich in den Bergen niederließ, reiste er durch Lateinamerika — auf der Suche nach Klängen, die keine Partitur kennen. Indigene Rhythmen, Zeremonialmusik, Straßenklang. Alles wurde Teil seiner Sprache.\n\nIn Lima hatte er bereits an der Seite von Manongo Mujica und Corina Bartra gespielt — zwei der bedeutendsten Klangkünstler Perus. Dann der Ruf der Berge. Er verließ die Stadt und zog in die Höhen von Sacsayhuamán, nahe Cusco, auf 3.500 Meter Höhe. Dort, zwischen Inka-Ruinen und Andenwind, vertiefte er seine Praxis: Kreisatmung als Meditation, Klang als Sprache, Stille als Lehrer.\n\nIn Cusco folgte die Bühne im Teatro del Cusco, gemeinsame Auftritte mit Tania Castro und Lucho Castro, Teilnahme an tibetischen Friedensevents für den Weltfrieden und rituellen Klangzeremonien.\n\n2017 begegnete ihm der australische Didgeridoo-Meister Ash Dargan beim Qente Festival in Cusco — Qente bedeutet auf Quechua \"Kolibri\", Symbol der Freude und des gegenwärtigen Moments. Unter Ash Dargans Anleitung lernte Oscar das Wichtigste: nicht Noten spielen, sondern Geschichten erzählen. Mit Atem. Mit Kreisatmung. Mit Schweigen.\n\nDann Europa. In Frankreich nahm er am legendären Didg to Didg Festival teil — einem der wichtigsten internationalen Didgeridoo-Treffen weltweit. Seitdem expandiert er durch den Kontinent und baut mit VibraDance Leipzig eine lebendige Plattform für bewussten Tanz im DACH-Raum auf.\n\nJeden Dienstag öffnet er den Raum — mit Didgeridoo, Handpan, Djembe, Maultrommel und Querflöte. Kein Abend ist wie der andere.",
    instagram: "https://instagram.com/oscarsilva.music",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&q=80&fit=crop",
    genres: [
      "Didgeridoo",
      "Handpan",
      "Djembe",
      "Maultrommel",
      "Querflöte",
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
      "Die Türen öffnen um 19:00 Uhr und schließen um 19:30 Uhr. Das Event endet um 22:00 Uhr. Bitte sei pünktlich — der Raum beginnt gemeinsam.",
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
