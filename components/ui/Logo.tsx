/**
 * Logo component — dos variantes:
 *  - compact: símbolo inline + texto lado a lado (Navbar)
 *  - full:    SVG completo vertical (Footer, splash)
 */

interface LogoProps {
  variant?: "compact" | "full";
  className?: string;
}

/** Solo el símbolo de ondas concéntricas (viewBox recortado al símbolo) */
function Symbol({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="230 86 220 148"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/* Ondas concéntricas */}
      <ellipse cx="340" cy="158" rx="88" ry="72" fill="none" stroke="#6B4FA0" strokeWidth="1.2" opacity="0.20" />
      <ellipse cx="340" cy="158" rx="74" ry="59" fill="none" stroke="#6B4FA0" strokeWidth="1.5" opacity="0.32" />
      <ellipse cx="340" cy="158" rx="60" ry="47" fill="none" stroke="#6B4FA0" strokeWidth="2"   opacity="0.48" />
      <ellipse cx="340" cy="158" rx="45" ry="35" fill="none" stroke="#6B4FA0" strokeWidth="2.5" opacity="0.68" />
      <ellipse cx="340" cy="158" rx="30" ry="22" fill="none" stroke="#6B4FA0" strokeWidth="3"   opacity="0.88" />

      {/* Punto central */}
      <circle cx="340" cy="158" r="5"   fill="#6B4FA0" opacity="0.95" />
      <circle cx="340" cy="158" r="2.5" fill="#D4A94A" />

      {/* Ondas horizontales izquierda */}
      <path d="M 252 148 Q 262 140 272 148 Q 282 156 292 148" fill="none" stroke="#6B4FA0" strokeWidth="1.8" opacity="0.55" strokeLinecap="round" />
      <path d="M 240 158 Q 252 148 264 158 Q 276 168 288 158" fill="none" stroke="#6B4FA0" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />

      {/* Ondas horizontales derecha */}
      <path d="M 388 148 Q 398 140 408 148 Q 418 156 428 148" fill="none" stroke="#6B4FA0" strokeWidth="1.8" opacity="0.55" strokeLinecap="round" />
      <path d="M 392 158 Q 404 148 416 158 Q 428 168 440 158" fill="none" stroke="#6B4FA0" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ variant = "compact", className = "" }: LogoProps) {
  if (variant === "full") {
    return (
      <div className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/vibradance-logo.svg"
          alt="VibraDance — Ecstatic Dance Leipzig"
          width={280}
          height={174}
          style={{ width: "280px", height: "auto" }}
        />
      </div>
    );
  }

  // Compact: símbolo + texto en línea
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Symbol size={38} />
      <div className="flex flex-col leading-none">
        <span
          className="text-cream"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "22px",
            fontWeight: 300,
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          VIBRA
          <span
            style={{
              fontWeight: 600,
              fontStyle: "italic",
              color: "#8B6FBE",
            }}
          >
            DANCE
          </span>
        </span>
        <span
          className="text-muted"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "9px",
            fontWeight: 300,
            letterSpacing: "0.18em",
            marginTop: "2px",
          }}
        >
          CONSCIOUS DANCE · LEIPZIG
        </span>
      </div>
    </div>
  );
}
