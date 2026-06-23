"use client";

import { useState } from "react";
import Starts from "./Starts";

const testimonials = [
  {
    quote:
      "Encodev nos entregó un sistema interno a medida que reemplazó tres herramientas distintas. La diferencia en productividad fue inmediata.",
    name: "María Fernanda López",
    role: "Operaciones · Nexus Group",
    result: "−40% tiempo operativo",
    rating: 5,
  },
  {
    quote:
      "La página nueva no solo se ve increíble, también convierte. Pasamos de una plantilla genérica a algo que realmente representa la marca.",
    name: "Andrés Rivera",
    role: "Fundador · Lumina Retail",
    result: "×2.3 conversión",
    rating: 5,
  },
  {
    quote:
      "Las mentorías 1 a 1 me llevaron de tutoriales sueltos a publicar mi primer proyecto real en producción. Acompañamiento muy honesto.",
    name: "Camila Vega",
    role: "Dev Junior · Programa de formación",
    result: "Primer empleo dev",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const go = (n: number) => setIndex(((n % total) + total) % total);
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
        </div>

        <article
          key={t.name}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start border-t border-brand-navy/10 pt-12"
        >
          <div className="md:col-span-2">
            <Starts rating={t.rating} />
            <blockquote className="mt-8 text-2xl md:text-4xl font-extrabold leading-[1.15] tracking-tight text-brand-navy">
              <span className="text-brand-orange">“</span>
              {t.quote}
              <span className="text-brand-orange">”</span>
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold">
                {t.name
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-navy/50 mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          </div>

          <aside className="md:border-l md:border-brand-navy/10 md:pl-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-sky mb-3">
              Resultado clave
            </p>
            <p className="text-4xl md:text-5xl font-extrabold text-brand-orange tracking-tighter leading-none">
              {t.result}
            </p>
            <p className="mt-6 text-sm text-brand-navy/60 leading-relaxed">
              Caso real de colaboración. Métricas compartidas con autorización
              del cliente.
            </p>
          </aside>
        </article>

        <div className="flex gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`h-1 transition-all rounded-full ${
                i === index
                  ? "w-12 bg-brand-navy"
                  : "w-6 bg-brand-navy/15 hover:bg-brand-navy/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
