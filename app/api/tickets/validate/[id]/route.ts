import { NextRequest, NextResponse } from "next/server";
import { getTicket, updateTicket } from "@/lib/ticket-store";
import type { Ticket } from "@/types";

export const dynamic = "force-dynamic";

function isAuthorized(request: NextRequest): boolean {
  const adminSecret = process.env.ADMIN_PASSWORD;
  if (!adminSecret) return false;
  return request.headers.get("x-admin-token") === adminSecret;
}

// GET — returns ticket info (used by scanner and public ticket page)
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const ticket = await getTicket(id);
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  const { email: _email, qrDataUrl: _qr, ...safeTicket } = ticket;
  return NextResponse.json(safeTicket);
}

// PATCH — mark as used or punch (admin only)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const ticket = await getTicket(id);
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  const { action } = (await request.json()) as { action: "use" | "punch" };

  if (action === "use") {
    if (ticket.status === "used") {
      return NextResponse.json({ error: "Ticket already used" }, { status: 409 });
    }
    ticket.status = "used";
    ticket.usedAt = new Date().toISOString();
  } else if (action === "punch") {
    if (ticket.type !== "zehnerkarte") {
      return NextResponse.json({ error: "Not a zehnerkarte" }, { status: 400 });
    }
    const used = ticket.usedPunches ?? 0;
    const total = ticket.totalPunches ?? 10;
    if (used >= total) {
      return NextResponse.json({ error: "No punches remaining" }, { status: 409 });
    }
    ticket.usedPunches = used + 1;
    if (ticket.usedPunches >= total) {
      ticket.status = "used";
    }
  } else {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  await updateTicket(ticket);

  const { email: _email, qrDataUrl: _qr, ...safeTicket } = ticket;
  return NextResponse.json(safeTicket);
}
