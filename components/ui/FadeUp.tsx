"use client";

import { useEffect, useRef, useState } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setVisible(true);

    // Safety fallback: always show after 1.5s
    const safetyTimer = setTimeout(show, 1500 + delay);

    // Immediate check: already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const mountTimer = setTimeout(show, delay);
      return () => {
        clearTimeout(mountTimer);
        clearTimeout(safetyTimer);
      };
    }

    // Scroll-based reveal
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms ease-out ${delay}ms, transform 700ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
