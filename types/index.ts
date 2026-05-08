export interface EventPrice {
  earlyBird?: number;
  presale: number;
  door: number;
  support?: number;
}

export interface Event {
  id: string;
  slug: string;
  date: string; // ISO 8601
  title: string;
  subtitle?: string;
  dj: string;
  liveAct?: string;
  venue: string;
  address: string;
  price: EventPrice;
  capacity: number;
  soldOut: boolean;
  description: string;
  tags: string[];
  image?: string;
}

export type ArtistRole = "dj" | "live-musician" | "facilitator" | "healer";

export interface Artist {
  id: string;
  slug: string;
  name: string;
  role: ArtistRole;
  origin: string;
  bio: string;
  longBio?: string;
  image?: string;
  instagram?: string;
  soundcloud?: string;
  website?: string;
  genres: string[];
}

export type ProductCategory = "rapé" | "música" | "artesanía" | "experiencia";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number; // en céntimos
  currency: "eur";
  category: ProductCategory;
  inStock: boolean;
  digital?: boolean;
  downloadUrl?: string;
  stripePriceId?: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image?: string;
}

export type TicketType = "event" | "zehnerkarte";
export type TicketStatus = "active" | "used" | "expired";

export interface Ticket {
  id: string;
  type: TicketType;
  name: string;
  email: string;
  createdAt: string;
  status: TicketStatus;
  qrDataUrl: string;
  // Event ticket fields
  eventId?: string;
  eventTitle?: string;
  eventDate?: string;
  usedAt?: string;
  // Zehnerkarte fields
  totalPunches?: number;
  usedPunches?: number;
  validUntil?: string;
}
