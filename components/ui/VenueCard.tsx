import { venue } from "@/lib/config";

export function VenueCard() {
  return (
    <div className="rounded-2xl border border-accent/20 bg-white/5 backdrop-blur-sm p-8">
      <div className="flex items-center gap-2 mb-5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent-light shrink-0"
          aria-hidden="true"
        >
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em]">
          Wo
        </p>
      </div>

      <h3 className="font-display text-2xl font-light text-cream mb-1">
        {venue.name}
      </h3>
      <p className="font-sans text-sm text-muted mb-1">{venue.address}</p>
      <p className="font-sans text-xs text-muted/60 mb-4">
        {venue.neighborhood}
      </p>

      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/25 bg-accent/10 font-sans text-xs text-accent-light mb-5">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
        {venue.badge}
      </span>

      <p className="font-sans text-sm text-muted leading-relaxed mb-6">
        {venue.longDescription}
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-accent/40 bg-accent/15 text-cream font-sans text-sm hover:bg-accent/25 transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Anfahrt
        </a>
        <a
          href={venue.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-muted font-sans text-sm hover:text-cream hover:border-white/30 transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          zimmt.net ↗
        </a>
      </div>
    </div>
  );
}
