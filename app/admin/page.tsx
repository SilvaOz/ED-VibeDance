"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface TicketInfo {
  id: string;
  type: "event" | "zehnerkarte";
  name: string;
  status: "active" | "used" | "expired";
  eventTitle?: string;
  eventDate?: string;
  totalPunches?: number;
  usedPunches?: number;
  validUntil?: string;
}

type ScanState = "idle" | "loading" | "success" | "error";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState(false);

  const [scanState, setScanState] = useState<ScanState>("idle");
  const [ticket, setTicket] = useState<TicketInfo | null>(null);
  const [scanError, setScanError] = useState("");
  const [redeeming, setRedeeming] = useState(false);
  const [redeemDone, setRedeemDone] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [manualId, setManualId] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const scannerRef = useRef<{ stop: () => void } | null>(null);
  const lastScannedRef = useRef<string>("");

  // Retrieve stored auth on mount
  useEffect(() => {
    const stored = sessionStorage.getItem("admin_authed");
    if (stored === "1") setAuthed(true);
  }, []);

  function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    // We test the password by making an API call with it as the token
    // If it returns a 401 on a known-invalid path, we know it's wrong.
    // We just store it for use in API calls; the real auth check happens there.
    // For the local check, we store in session.
    if (password.trim()) {
      sessionStorage.setItem("admin_authed", "1");
      sessionStorage.setItem("admin_token", password.trim());
      setAuthed(true);
    } else {
      setAuthError(true);
    }
  }

  const getToken = () => sessionStorage.getItem("admin_token") ?? "";

  const fetchTicket = useCallback(async (id: string) => {
    if (id === lastScannedRef.current) return;
    lastScannedRef.current = id;

    setScanState("loading");
    setTicket(null);
    setScanError("");
    setRedeemDone(false);

    try {
      const res = await fetch(`/api/tickets/validate/${id}`);
      if (!res.ok) {
        setScanState("error");
        setScanError(res.status === 404 ? "Ticket nicht gefunden" : "Fehler beim Laden");
        return;
      }
      const data: TicketInfo = await res.json();
      setTicket(data);
      setScanState("success");
    } catch {
      setScanState("error");
      setScanError("Verbindungsfehler");
    }
  }, []);

  useEffect(() => {
    if (!authed) return;

    let stopped = false;

    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (stopped) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }

        // Dynamically import @zxing/browser to avoid SSR issues
        const { BrowserQRCodeReader } = await import("@zxing/browser");
        if (stopped) return;

        const codeReader = new BrowserQRCodeReader();
        if (videoRef.current) {
          const controls = await codeReader.decodeFromVideoElement(
            videoRef.current,
            (result) => {
              if (result) {
                const text = result.getText();
                // Extract ticket ID from URL or use directly
                const match = text.match(/\/ticket\/([\w_-]+)$/);
                const ticketId = match ? match[1] : text;
                fetchTicket(ticketId);
              }
            }
          );
          scannerRef.current = controls;
        }
      } catch (err) {
        if (!stopped) {
          setCameraError("Kamera nicht verfügbar. Bitte ID manuell eingeben.");
          console.error("Camera error:", err);
        }
      }
    }

    startCamera();

    return () => {
      stopped = true;
      scannerRef.current?.stop();
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, [authed, fetchTicket]);

  async function handleRedeem() {
    if (!ticket) return;
    setRedeeming(true);
    const action = ticket.type === "zehnerkarte" ? "punch" : "use";
    try {
      const res = await fetch(`/api/tickets/validate/${ticket.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": getToken(),
        },
        body: JSON.stringify({ action }),
      });
      if (res.status === 401) {
        alert("Falsches Admin-Passwort. Bitte neu einloggen.");
        sessionStorage.removeItem("admin_authed");
        setAuthed(false);
        return;
      }
      if (!res.ok) {
        const data = await res.json();
        setScanError(data.error ?? "Fehler beim Einlösen");
      } else {
        const updated: TicketInfo = await res.json();
        setTicket(updated);
        setRedeemDone(true);
      }
    } catch {
      setScanError("Verbindungsfehler beim Einlösen");
    } finally {
      setRedeeming(false);
    }
  }

  function handleReset() {
    lastScannedRef.current = "";
    setTicket(null);
    setScanState("idle");
    setScanError("");
    setRedeemDone(false);
    setManualId("");
  }

  // ── Login screen ─────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-xs">
          <div className="text-center mb-8">
            <p className="font-sans text-xs text-gold uppercase tracking-[0.3em] mb-2">Admin</p>
            <h1 className="font-display text-3xl font-light text-cream">Einlass-Scanner</h1>
          </div>
          <form onSubmit={handleAuth} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="block font-sans text-xs text-muted uppercase tracking-widest mb-2">
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setAuthError(false); }}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-sm text-cream placeholder:text-muted/40 focus:outline-none focus:border-accent/60 transition-colors"
                autoFocus
              />
              {authError && (
                <p className="font-sans text-xs text-red-400 mt-1">Passwort eingeben</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-light text-cream font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Einloggen
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Scanner screen ────────────────────────────────────────────────────────────
  const remaining = ticket
    ? ticket.type === "zehnerkarte"
      ? (ticket.totalPunches ?? 10) - (ticket.usedPunches ?? 0)
      : null
    : null;

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">Admin</p>
            <h1 className="font-display text-2xl font-light text-cream">Scanner</h1>
          </div>
          <button
            onClick={() => { sessionStorage.removeItem("admin_authed"); setAuthed(false); }}
            className="font-sans text-xs text-muted/50 hover:text-muted transition-colors"
          >
            Abmelden
          </button>
        </div>

        {/* Camera viewfinder */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black mb-4 aspect-square">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted
          />
          {/* Scan overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-48 border-2 border-gold/60 rounded-2xl" />
          </div>
          {cameraError && (
            <div className="absolute inset-0 flex items-center justify-center bg-dark/80 px-6 text-center">
              <p className="font-sans text-xs text-muted">{cameraError}</p>
            </div>
          )}
        </div>

        {/* Manual entry */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={manualId}
            onChange={(e) => setManualId(e.target.value)}
            placeholder="Ticket-ID manuell eingeben"
            className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 font-sans text-sm text-cream placeholder:text-muted/40 focus:outline-none focus:border-accent/60 transition-colors font-mono"
          />
          <button
            onClick={() => manualId.trim() && fetchTicket(manualId.trim())}
            className="bg-white/10 hover:bg-white/15 text-cream px-4 py-2.5 rounded-xl font-sans text-sm transition-colors"
          >
            OK
          </button>
        </div>

        {/* Result card */}
        {scanState === "loading" && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="inline-block w-8 h-8 border-2 border-muted/30 border-t-accent rounded-full animate-spin mb-3" />
            <p className="font-sans text-sm text-muted">Ticket wird geprüft…</p>
          </div>
        )}

        {scanState === "error" && (
          <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-6 text-center">
            <p className="text-3xl mb-2">✗</p>
            <p className="font-sans font-semibold text-red-400 mb-1">Ticket ungültig</p>
            <p className="font-sans text-sm text-muted">{scanError}</p>
            <button onClick={handleReset} className="mt-4 font-sans text-xs text-muted/60 hover:text-muted underline">
              Erneut scannen
            </button>
          </div>
        )}

        {scanState === "success" && ticket && (
          <div
            className={[
              "rounded-2xl border p-6",
              ticket.status === "used"
                ? "border-red-500/40 bg-red-500/10"
                : "border-green-500/40 bg-green-500/10",
            ].join(" ")}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-2xl mb-1">{ticket.status === "used" ? "✗" : "✓"}</p>
                <p
                  className={[
                    "font-sans font-semibold text-lg",
                    ticket.status === "used" ? "text-red-400" : "text-green-400",
                  ].join(" ")}
                >
                  {ticket.status === "used"
                    ? ticket.type === "zehnerkarte"
                      ? "Keine Eintritte mehr"
                      : "Bereits eingelöst"
                    : "Ticket gültig"}
                </p>
              </div>
              <button onClick={handleReset} className="font-sans text-xs text-muted/50 hover:text-muted transition-colors">
                Neu
              </button>
            </div>

            <div className="space-y-2 mb-5">
              <div>
                <p className="font-sans text-xs text-muted uppercase tracking-widest">Name</p>
                <p className="font-sans text-sm text-cream">{ticket.name}</p>
              </div>
              <div>
                <p className="font-sans text-xs text-muted uppercase tracking-widest">Typ</p>
                <p className="font-sans text-sm text-cream">
                  {ticket.type === "zehnerkarte" ? "Zehnerkarte" : "Einzelticket"}
                </p>
              </div>
              {ticket.type === "zehnerkarte" && (
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-widest">Eintritte</p>
                  <p className="font-sans text-sm text-cream">
                    {remaining} von {ticket.totalPunches ?? 10} verbleibend
                  </p>
                </div>
              )}
              <div>
                <p className="font-sans text-xs text-muted uppercase tracking-widest">ID</p>
                <p className="font-sans text-xs text-gold font-mono">{ticket.id}</p>
              </div>
            </div>

            {ticket.status !== "used" && !redeemDone && (
              <button
                onClick={handleRedeem}
                disabled={redeeming}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white font-semibold px-4 py-3 rounded-full transition-colors text-sm"
              >
                {redeeming ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Wird eingelöst…
                  </>
                ) : ticket.type === "zehnerkarte" ? (
                  "Eintritt entwerten ●"
                ) : (
                  "Einlösen ✓"
                )}
              </button>
            )}

            {redeemDone && (
              <div className="text-center py-2">
                <p className="font-sans text-sm font-semibold text-green-400">
                  {ticket.type === "zehnerkarte"
                    ? `Eintritt entwertet — noch ${remaining} verbleibend`
                    : "Eingelöst ✓"}
                </p>
              </div>
            )}

            {scanError && (
              <p className="font-sans text-xs text-red-400 mt-2 text-center">{scanError}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
