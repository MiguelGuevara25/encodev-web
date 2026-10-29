"use client";

import { useState } from "react";
import Starts from "./Starts";
import { TestimonialWP } from "../interface";

interface Props {
  testimonials: TestimonialWP[];
}

export default function TestimonialsCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const go = (n: number) => {
    if (total === 0) return;
    setIndex(((n % total) + total) % total);
  };

  const t = testimonials[index];

  return (
    <section
      id="testimonios"
      className="px-6 md:px-10 py-32 bg-brand-white border-t border-brand-navy/10 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-6 flex items-center gap-3">
              <span className="w-12 h-px bg-brand-sky" />
              Testimonios &amp; casos
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter max-w-3xl">
              Lo que dicen quienes{" "}
              <span className="text-brand-orange italic">ya confiaron</span>.
            </h2>
          </div>

          {total > 0 && (
            <div className="flex items-center gap-3 font-mono text-xs text-brand-navy/50">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Testimonio anterior"
                className="w-11 h-11 rounded-full border border-brand-navy/15 hover:border-brand-navy hover:bg-brand-navy hover:text-white transition-colors flex items-center justify-center"
              >
                ←
              </button>

              <span className="tabular-nums">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Siguiente testimonio"
                className="w-11 h-11 rounded-full border border-brand-navy/15 hover:border-brand-navy hover:bg-brand-navy hover:text-white transition-colors flex items-center justify-center"
              >
                →
              </button>
            </div>
          )}
        </div>

        {t &&
          (() => {
            const {
              cargoCliente,
              descripcion,
              empresaCliente,
              nombreCliente,
              resultadoClave,
              testimonio,
              valoracion,
            } = t.camposTestimonios;

            return (
              <article
                key={t.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start border-t border-brand-navy/10 pt-12"
              >
                <div className="md:col-span-2">
                  <Starts rating={valoracion} />

                  <blockquote className="mt-8 text-2xl md:text-4xl font-extrabold leading-[1.15] tracking-tight text-brand-navy">
                    <span className="text-brand-orange">“</span>
                    {testimonio}
                    <span className="text-brand-orange">”</span>
                  </blockquote>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold">
                      {nombreCliente
                        .split(" ")
                        .filter(Boolean)
                        .map((s) => s[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div>
                      <p className="font-bold">{nombreCliente}</p>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-navy/50 mt-1">
                        {cargoCliente} · {empresaCliente}
                      </p>
                    </div>
                  </div>
                </div>

                <aside className="md:border-l md:border-brand-navy/10 md:pl-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-sky mb-3">
                    Resultado clave
                  </p>

                  <p className="text-4xl md:text-5xl font-extrabold text-brand-orange tracking-tighter leading-none">
                    {resultadoClave}
                  </p>

                  <p className="mt-6 text-sm text-brand-navy/60 leading-relaxed">
                    {descripcion}
                  </p>
                </aside>
              </article>
            );
          })()}

        {total === 0 && (
          <p className="text-brand-navy/60">
            Todavía no hay testimonios disponibles.
          </p>
        )}

        {total > 1 && (
          <div className="flex gap-2 mt-12">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-1 transition-all rounded-full ${
                  i === index
                    ? "w-12 bg-brand-navy cursor-not-allowed"
                    : "w-6 bg-brand-navy/15 hover:bg-brand-navy/40 cursor-pointer"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
