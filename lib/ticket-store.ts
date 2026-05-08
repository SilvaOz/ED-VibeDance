/**
 * Ticket storage abstraction.
 * - Production / Vercel: requires UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
 * - Local dev fallback: JSON file at .ticket-store-dev.json (shared across workers)
 */
import type { Ticket } from "@/types";

const TTL_2_YEARS = 60 * 60 * 24 * 365 * 2;

function isRedisConfigured(): boolean {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? "";
  return url.startsWith("https://") && !url.includes("YOUR_DB");
}

// ─── File-based dev store ─────────────────────────────────────────────────────

function devStorePath(): string {
  const { join } = require("path") as typeof import("path");
  return join(process.cwd(), ".ticket-store-dev.json");
}

function readDevStore(): Record<string, Ticket> {
  try {
    const { readFileSync, existsSync } = require("fs") as typeof import("fs");
    const p = devStorePath();
    if (!existsSync(p)) return {};
    return JSON.parse(readFileSync(p, "utf-8")) as Record<string, Ticket>;
  } catch {
    return {};
  }
}

function writeDevStore(store: Record<string, Ticket>): void {
  try {
    const { writeFileSync } = require("fs") as typeof import("fs");
    writeFileSync(devStorePath(), JSON.stringify(store, null, 2));
  } catch (e) {
    console.error("[ticket-store] Could not write dev store:", e);
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function saveTicket(ticket: Ticket): Promise<void> {
  if (isRedisConfigured()) {
    const { redis } = await import("./redis");
    await redis.set(`ticket:${ticket.id}`, JSON.stringify(ticket), { ex: TTL_2_YEARS });
  } else {
    console.warn("[ticket-store] Redis not configured — using file store (dev only)");
    const store = readDevStore();
    store[ticket.id] = ticket;
    writeDevStore(store);
  }
}

export async function getTicket(id: string): Promise<Ticket | null> {
  if (isRedisConfigured()) {
    const { redis } = await import("./redis");
    const raw = await redis.get<string>(`ticket:${id}`);
    if (!raw) return null;
    return typeof raw === "string" ? JSON.parse(raw) : raw;
  } else {
    return readDevStore()[id] ?? null;
  }
}

export async function updateTicket(ticket: Ticket): Promise<void> {
  if (isRedisConfigured()) {
    const { redis } = await import("./redis");
    const createdAt = new Date(ticket.createdAt).getTime();
    const expiresAt = createdAt + 2 * 365 * 24 * 60 * 60 * 1000;
    const remainingSecs = Math.max(1, Math.floor((expiresAt - Date.now()) / 1000));
    await redis.set(`ticket:${ticket.id}`, JSON.stringify(ticket), { ex: remainingSecs });
  } else {
    const store = readDevStore();
    store[ticket.id] = ticket;
    writeDevStore(store);
  }
}
