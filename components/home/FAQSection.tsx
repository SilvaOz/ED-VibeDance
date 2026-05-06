"use client";

import { useState } from "react";
import { faqs } from "@/lib/config";
import { FadeUp } from "@/components/ui/FadeUp";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={[
        "rounded-2xl border overflow-hidden transition-all duration-300",
        isOpen ? "border-accent/30 bg-accent/5" : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/3 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display text-xl font-light text-cream pr-6">
          {question}
        </span>
        <span
          className={[
            "flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300",
            isOpen
              ? "border-accent/50 bg-accent/20 text-accent-light rotate-45"
              : "border-white/20 text-muted",
          ].join(" ")}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={[
          "overflow-hidden transition-all duration-400 ease-out",
          isOpen ? "max-h-80" : "max-h-0",
        ].join(" ")}
      >
        <p className="font-sans text-sm text-muted leading-relaxed px-6 pb-6 border-t border-white/5 pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="text-center mb-12">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.3em] mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="font-display text-5xl font-light text-cream">
            Todo lo que{" "}
            <em className="not-italic italic text-accent-light">necesitas saber</em>
          </h2>
        </FadeUp>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FadeUp key={index} delay={index * 50}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
