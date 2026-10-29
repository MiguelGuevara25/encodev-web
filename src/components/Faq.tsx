"use client";

import { useState } from "react";
import { faqs } from "../data";

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="px-6 md:px-10 py-32 bg-brand-white border-t border-brand-navy/10 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-6 flex items-center gap-3">
          <span className="w-12 h-px bg-brand-sky" />
          Preguntas frecuentes
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-16 max-w-3xl">
          Resolvemos tus <span className="text-brand-orange italic">dudas</span>
          .
        </h2>
        <ul className="divide-y divide-brand-navy/10 border-y border-brand-navy/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="text-lg md:text-2xl font-bold tracking-tight group-hover:text-brand-orange transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-10 h-10 rounded-full border border-brand-navy/15 flex items-center justify-center font-mono text-lg transition-transform ${
                      isOpen
                        ? "rotate-45 bg-brand-navy text-white border-brand-navy"
                        : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-brand-navy/70 leading-relaxed max-w-3xl pr-14">
                      {f.a}
                    </p>
                    {f.list && (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-brand-navy/70">
                        {f.list.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
