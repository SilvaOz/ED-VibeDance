"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-dark/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-display text-xl font-semibold text-cream group-hover:text-accent-light transition-colors">
            {siteConfig.name}
          </span>
          <span className="font-sans text-[10px] text-muted tracking-widest uppercase">
            Leipzig
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={[
                  "font-sans text-sm px-3 py-2 rounded-full transition-all duration-200",
                  pathname === link.href
                    ? "text-accent-light bg-accent/10"
                    : "text-muted hover:text-cream hover:bg-white/5",
                ].join(" ")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Button href="/eventos" size="sm" className="hidden md:inline-flex">
            Reservar entrada
          </Button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={[
                "block h-0.5 w-5 bg-cream rounded transition-all duration-300",
                menuOpen ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-5 bg-cream rounded transition-all duration-300",
                menuOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-5 bg-cream rounded transition-all duration-300",
                menuOpen ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-4 pb-6 pt-2 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "font-sans text-sm px-4 py-3 rounded-xl transition-all duration-200",
                pathname === link.href
                  ? "text-accent-light bg-accent/10"
                  : "text-muted hover:text-cream hover:bg-white/5",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Button href="/eventos" className="w-full justify-center">
              Reservar entrada
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
