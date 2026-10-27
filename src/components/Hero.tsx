"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header id="inicio" className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto w-full">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-6 flex items-center gap-3">
            <span className="w-12 h-px bg-brand-sky" />
            Consultora de Tecnología · Soluciones a medida para empresas
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-extrabold leading-[0.95] tracking-tighter mb-10">
            Ingeniería y soluciones tecnológicas{" "}
            <span className="text-brand-orange">para automatizar, integrar y escalar tu negocio</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xl md:text-2xl text-brand-navy/70 max-w-lg leading-relaxed mb-4">
                Desarrollamos sistemas a medida, automatizamos procesos con IA e
                integramos tus herramientas para que tu empresa gane eficiencia y
                tome mejores decisiones.
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
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
