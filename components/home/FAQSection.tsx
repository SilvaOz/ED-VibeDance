"use client";

import { useState } from "react";
import { faqs } from "@/lib/config";

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
    <div className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-200 hover:border-white/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white/5 hover:bg-white/8 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-light text-cream pr-4">
          {question}
        </span>
        <span
          className={[
            "flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-muted transition-all duration-300",
            isOpen ? "rotate-45 border-accent/40 text-accent-light bg-accent/10" : "",
          ].join(" ")}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={[
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0",
        ].join(" ")}
      >
        <p className="font-sans text-sm text-muted leading-relaxed px-6 py-5 border-t border-white/5">
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
        <div className="text-center mb-12">
          <p className="font-sans text-xs text-accent-light uppercase tracking-[0.25em] mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-cream">
            Todo lo que{" "}
            <span className="italic text-accent-light">necesitas saber</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
