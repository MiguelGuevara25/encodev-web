"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";
import { CLIENT_LOGOS, TRUST_METRICS } from "../data";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        id="inicio"
        className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-6 flex items-center gap-3">
            <span className="w-12 h-px bg-brand-sky" />
            Consultora de Tecnología · Soluciones a medida para empresas
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-extrabold leading-[0.95] tracking-tighter mb-10">
            Ingeniería y soluciones tecnológicas{" "}
            <span className="text-brand-orange">
              para automatizar, integrar y escalar tu negocio
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xl md:text-2xl text-brand-navy/70 max-w-lg leading-relaxed mb-4">
                Desarrollamos sistemas a medida, automatizamos procesos con IA e
                integramos tus herramientas para que tu empresa gane eficiencia
                y tome mejores decisiones.
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-navy/40">
                CÓDIGO QUE ENSEÑA
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setOpen(true)}
                className="px-8 py-4 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-orange transition-colors duration-300"
              >
                Solicitar cotización
              </button>
              <a
                href="#academia"
                className="px-8 py-4 border border-brand-navy/15 font-bold rounded-full hover:border-brand-navy transition-colors"
              >
                Ver academia
              </a>
            </div>
          </div>
        </div>
      </header>

      <section
        aria-label="Métricas de servicio"
        className="border-y border-brand-navy/10 bg-brand-white"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {TRUST_METRICS.map((m) => (
            <div
              key={m.label}
              className="py-10 px-4 text-center border-brand-navy/10 [&:nth-child(n+3)]:border-t md:[&:nth-child(n+2)]:border-l md:[&:nth-child(n+3)]:border-t-0 [&:nth-child(even)]:border-l md:[&:nth-child(n)]:pl-6 md:[&:nth-child(n)]:border-l"
            >
              <div className="text-3xl md:text-5xl font-extrabold font-mono text-brand-orange">
                {m.value}
              </div>
              <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-navy/50">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Logos de clientes — reemplazar con marcas reales */}
      <div
        aria-label="Clientes"
        className="py-6 border-b border-brand-navy/10 bg-brand-white overflow-hidden"
      >
        <div className="animate-marquee flex w-max gap-16 whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em] text-brand-navy/30">
          {[
            ...CLIENT_LOGOS,
            ...CLIENT_LOGOS,
            ...CLIENT_LOGOS,
            ...CLIENT_LOGOS,
          ].map((c, i) => (
            <span key={i} className="flex items-center gap-16">
              {c}
              <span
                className="w-1.5 h-1.5 rounded-full bg-brand-orange/40"
                aria-hidden
              />
            </span>
          ))}
        </div>
      </div>
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
