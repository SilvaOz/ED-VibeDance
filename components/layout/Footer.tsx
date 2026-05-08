import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/config";
import { Logo } from "@/components/ui/Logo";

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-block mb-5 opacity-90 hover:opacity-100 transition-opacity">
              <Logo variant="full" />
            </Link>
            <p className="font-sans text-sm text-muted leading-relaxed mb-5 max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="font-sans text-xs text-muted/70">
              {siteConfig.eventDay}
            </p>
          </div>

          {/* Col 2 — Newsletter */}
          <div>
            <h4 className="font-sans text-xs font-medium text-muted uppercase tracking-widest mb-4">
              Newsletter
            </h4>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              Termine, Neuigkeiten und Inspirationen direkt in dein Postfach.
            </p>
            <form
              method="post"
              target="_blank"
              action="MAILCHIMP_ACTION_URL"
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="deine@email.de"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-sans text-sm text-cream placeholder:text-muted/50 focus:border-accent/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 font-sans text-sm text-accent-light hover:bg-accent/20 hover:border-accent/60 transition-all duration-200"
              >
                Anmelden
              </button>
            </form>
            <p className="font-sans text-xs text-muted/50 mt-2">
              Kein Spam. Jederzeit abmeldbar.
            </p>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <h4 className="font-sans text-xs font-medium text-muted uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-muted hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact + socials */}
          <div>
            <h4 className="font-sans text-xs font-medium text-muted uppercase tracking-widest mb-4">
              Kontakt
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block font-sans text-sm text-muted hover:text-cream transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <h4 className="font-sans text-xs font-medium text-muted uppercase tracking-widest mb-3">
              Community
            </h4>
            <div className="flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent/40 text-muted hover:text-cream transition-all duration-200 text-sm font-sans"
              >
                Instagram
              </a>
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-accent/40 text-muted hover:text-cream transition-all duration-200 text-sm font-sans"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted/60">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs text-muted/60 hover:text-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
