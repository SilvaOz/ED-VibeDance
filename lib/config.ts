import type { Artist, Event, Product } from "@/types";

// ─── Site info ───────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "VibraDance",
  fullName: "Ecstatic Dance Leipzig",
  domain: "ecstaticdanceleipzig.de",
  tagline: "Conscious Dance · Didgeridoo en Vivo · Sacred Sound",
  description:
    "La experiencia de baile consciente más auténtica de Leipzig. Didgeridoo en vivo + DJ, sin alcohol, sin drogas, descalzos — solo música, movimiento y conexión.",
  instagram: "https://instagram.com/staticdanceleipzig",
  telegram: "https://t.me/ecstaticdanceleipzig",
  email: "hola@ecstaticdanceleipzig.de",
  eventDay: "Cada martes, 19:30 Uhr, Leipzig",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecstaticdanceleipzig.de",
} as const;

// ─── Reglas del Ecstatic Dance ───────────────────────────────────────────────

export const rules = [
  {
    icon: "🦶",
    title: "Descalzos",
    description: "Conexión con el suelo y con el momento presente.",
  },
  {
    icon: "🤫",
    title: "Sin palabras en la pista",
    description: "Entramos en estado meditativo. El cuerpo habla.",
  },
  {
    icon: "🚫",
    title: "Sin alcohol ni drogas",
    description: "El natural high es suficiente. Presencia total.",
  },
  {
    icon: "📵",
    title: "Sin teléfono",
    description: "Presencia total. Vives el momento, no lo grabas.",
  },
  {
    icon: "🙏",
    title: "Respeto",
    description: "Espacio seguro para todos los cuerpos y expresiones.",
  },
  {
    icon: "✨",
    title: "Autenticidad",
    description: "Muévete como sientes. No hay pasos correctos o incorrectos.",
  },
] as const;

// ─── Formato del evento ───────────────────────────────────────────────────────

export const eventSchedule = [
  { time: "19:30", label: "Apertura de puertas" },
  { time: "19:45", label: "Cierre de puertas (puntualidad importante)" },
  { time: "20:00", label: "Ritual de apertura + primeras notas de Didgeridoo" },
  { time: "20:15", label: "Ecstatic Dance: Didgeridoo en vivo + DJ (2h)" },
  { time: "22:00", label: "Sound Healing / Live Chillout: cuencos, handpan" },
  { time: "22:30", label: "Cierre y silencio compartido" },
] as const;

// ─── Eventos ─────────────────────────────────────────────────────────────────

export const events: Event[] = [
  {
    id: "evt-001",
    slug: "ecstatic-dance-leipzig-13-mayo-2026",
    date: "2026-05-13T19:30:00",
    title: "Ecstatic Dance Leipzig",
    subtitle: "Didgeridoo en Vivo + La Lvcha",
    dj: "La Lvcha",
    liveAct: "Oscar Silva (Didgeridoo)",
    venue: "Studio Bewegungsraum",
    address: "Karl-Liebknecht-Str. 42, 04107 Leipzig",
    price: {
      earlyBird: 8,
      presale: 12,
      door: 15,
      support: 20,
    },
    capacity: 60,
    soldOut: false,
    description:
      "Una noche de baile consciente, sonido en vivo y presencia total. Oscar Silva abre con didgeridoo ancestral mientras La Lvcha teje una journey de rituales tropicales y electrónica contemporánea.",
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
    slug: "ecstatic-dance-leipzig-20-mayo-2026",
    date: "2026-05-20T19:30:00",
    title: "Ecstatic Dance Leipzig",
    subtitle: "Full Moon Edition",
    dj: "La Lvcha",
    liveAct: "Oscar Silva (Didgeridoo)",
    venue: "Studio Bewegungsraum",
    address: "Karl-Liebknecht-Str. 42, 04107 Leipzig",
    price: {
      earlyBird: 8,
      presale: 12,
      door: 15,
      support: 20,
    },
    capacity: 60,
    soldOut: false,
    description:
      "Edición especial Luna Llena. La energía de la luna amplifica cada movimiento, cada sonido, cada conexión. Una noche para soltar y transformar.",
    tags: [
      "ecstatic dance",
      "full moon",
      "didgeridoo",
      "Leipzig",
      "sound healing",
    ],
  },
  {
    id: "evt-003",
    slug: "ecstatic-dance-leipzig-27-mayo-2026",
    date: "2026-05-27T19:30:00",
    title: "Ecstatic Dance Leipzig",
    subtitle: "Raíces del Sonido",
    dj: "La Lvcha",
    liveAct: "Oscar Silva (Didgeridoo)",
    venue: "Studio Bewegungsraum",
    address: "Karl-Liebknecht-Str. 42, 04107 Leipzig",
    price: {
      earlyBird: 8,
      presale: 12,
      door: 15,
      support: 20,
    },
    capacity: 60,
    soldOut: false,
    description:
      "Un viaje a las raíces del sonido. Didgeridoo australiano, ritmos afrolatinos y electrónica tribal se fusionan en una experiencia que mueve el alma.",
    tags: ["ecstatic dance", "tribal", "didgeridoo", "Leipzig"],
  },
];

// ─── Artistas ─────────────────────────────────────────────────────────────────

export const artists: Artist[] = [
  {
    id: "artist-001",
    slug: "oscar-silva",
    name: "Oscar Silva",
    role: "live-musician",
    origin: "Perú / Leipzig",
    bio: "Maestro de didgeridoo con raíces en el Valle Sagrado de Perú. Facilita el espacio con sonido ancestral que abre el cuerpo al movimiento.",
    longBio:
      "Oscar Silva nació en las alturas del Valle Sagrado peruano y hoy vive y crea en Leipzig. Su relación con el didgeridoo va más allá del instrumento: es una práctica de presencia, de respiración circular y de conexión con la tierra. Cada martes, sus tonos abren el portal del Ecstatic Dance.",
    instagram: "https://instagram.com/oscarsilva",
    genres: [
      "didgeridoo",
      "sound healing",
      "ritual music",
      "shamanic",
      "ambient",
    ],
  },
  {
    id: "artist-002",
    slug: "la-lvcha",
    name: "La Lvcha",
    role: "dj",
    origin: "Leipzig",
    bio: 'DJ residente. "Ritual-inspired tropical clubbing & sonic dance experiences." Fusiona raíces afrolatinas con electrónica contemporánea.',
    longBio:
      "La Lvcha es una artista que habita la intersección entre la tradición afrolatina y la vanguardia electrónica. Sus sets son ceremonias de sonido — no mezcla canciones, construye journeys. Como residente de Ecstatic Dance Leipzig, es la arquitecta musical de cada martes.",
    website: "https://lalvcha.com",
    instagram: "https://instagram.com/lalvcha",
    genres: [
      "tropical clubbing",
      "afrolatino",
      "ritual house",
      "organic electronic",
    ],
  },
];

// ─── Productos ────────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "prod-001",
    slug: "rape-amazonico-artesanal",
    name: "Rapé Amazónico Artesanal",
    description:
      "Mezcla ceremonial de tabaco mapacho y plantas sagradas del Amazonas. Preparado con intención, para la limpieza energética y la claridad mental.",
    price: 2500, // 25€ en céntimos
    currency: "eur",
    category: "rapé",
    inStock: true,
    digital: false,
  },
  {
    id: "prod-002",
    slug: "musica-meditacion-432hz",
    name: "Música de Meditación 432Hz",
    description:
      "Álbum de descarga digital. Grabaciones de didgeridoo a 432Hz — la frecuencia del universo. Para meditación, yoga, descanso profundo y alineación interior.",
    price: 1000, // 10€ en céntimos
    currency: "eur",
    category: "música",
    inStock: true,
    digital: true,
  },
];

// ─── Zehnerkarte ─────────────────────────────────────────────────────────────

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
  price: 100, // €
  pricePerNight: 10,
  validMonths: 24,
  description:
    "10 entradas para usar cuando quieras. Sin fecha fija, válida 2 años. Recibes tu tarjeta física en el primer evento.",
  comparison: [
    { label: "Taquilla", price: 15 },
    { label: "Preventa", price: 12 },
    { label: "Early Bird", price: 8 },
    { label: "Zehnerkarte", price: 10, highlight: true },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    question: "¿Es necesario saber bailar?",
    answer:
      "No. En el Ecstatic Dance no hay pasos correctos o incorrectos. Tu único maestro eres tú mismo. Todos los cuerpos son bienvenidos.",
  },
  {
    question: "¿Qué debo traer?",
    answer:
      "Ropa cómoda para moverte, agua, y ganas de explorar. No traer alcohol, drogas ni perfumes fuertes. Llegamos descalzos.",
  },
  {
    question: "¿Puedo llegar tarde?",
    answer:
      "Las puertas cierran a las 19:45 para proteger el espacio sagrado del evento. Por favor, llega puntual.",
  },
  {
    question: "¿Qué es la Zehnerkarte?",
    answer:
      "Es un bono de 10 entradas por 100€ (10€ por noche). Válida durante 2 años desde la compra. Puedes usarla cualquier martes, sin fecha fija.",
  },
  {
    question: "¿Puedo venir solo/a?",
    answer:
      "Absolutamente. La mayoría de personas vienen solas. El espacio está diseñado para que te conectes contigo mismo primero, y con otros desde esa autenticidad.",
  },
  {
    question: "¿Hay nivel de condición física requerido?",
    answer:
      "Ninguno. Puedes moverte suave, intenso, sentarte, acostarte. El movimiento es tuyo. Personas de todas las edades y capacidades son bienvenidas.",
  },
] as const;

// ─── Navigation ─────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "¿Qué es?", href: "/que-es" },
  { label: "Eventos", href: "/eventos" },
  { label: "Artistas", href: "/artistas" },
  { label: "Zehnerkarte", href: "/zehnerkarte" },
  { label: "Tienda", href: "/tienda" },
  { label: "Blog", href: "/blog" },
  { label: "Comunidad", href: "/comunidad" },
] as const;
