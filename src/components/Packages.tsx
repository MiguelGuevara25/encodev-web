const Packages = () => {
  return (
    <section
      id="paquetes"
      className="px-6 md:px-10 py-32 bg-brand-navy text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange mb-6 flex items-center gap-3">
              <span className="w-12 h-px bg-brand-orange" />
              Paquetes &amp; rangos
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Precios <span className="text-brand-orange italic">honestos</span>
              , no exactos.
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm leading-relaxed">
            Cada proyecto es distinto. Estos rangos te dan una idea real del
            ticket antes de hablar. Cotizamos a medida en menos de 48 h.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* {packages.map((p) => {
            const featured = p.featured;
            return (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-8 border transition-colors ${
                  featured
                    ? "bg-brand-orange text-brand-navy border-brand-orange md:-translate-y-4"
                    : "bg-white/5 border-white/10 hover:border-white/30"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-8 text-[10px] font-bold uppercase tracking-[0.25em] bg-brand-navy text-brand-orange px-3 py-1.5 rounded-full">
                    Más elegido
                  </span>
                )}
                <div className="flex items-baseline justify-between mb-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                    {p.tag}
                  </p>
                </div>
                <h3 className="text-3xl font-extrabold tracking-tighter mb-6">{p.name}</h3>
                <div className="mb-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70 mb-2">
                    Rango estimado
                  </p>
                  <p className="text-2xl font-extrabold tracking-tight">
                    {p.priceFrom} <span className="opacity-50">–</span> {p.priceTo}
                  </p>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${featured ? "text-brand-navy/80" : "text-white/70"}`}>
                  {p.scope}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-1 w-4 h-4 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          featured ? "bg-brand-navy text-brand-orange" : "bg-brand-orange/20 text-brand-orange"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={featured ? "text-brand-navy" : "text-white/80"}>{d}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs italic mb-6 ${featured ? "text-brand-navy/70" : "text-white/50"}`}>
                  {p.ideal}
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href="#formulario"
                    onClick={() => {
                      onSelectPlan(p.name);
                      trackCta("form", "packages", p.name);
                    }}
                    className={`w-full text-center px-5 py-3 rounded-full font-bold transition-colors ${
                      featured
                        ? "bg-brand-navy text-white hover:bg-brand-navy/80"
                        : "bg-brand-orange text-brand-navy hover:bg-white"
                    }`}
                  >
                    Pedir presupuesto
                  </a>
                  <a
                    href={calendarUrl(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCta("calendar", "packages", p.name)}
                    className={`w-full text-center px-5 py-3 rounded-full font-bold border transition-colors ${
                      featured
                        ? "border-brand-navy/40 text-brand-navy hover:bg-brand-navy hover:text-white"
                        : "border-white/20 text-white hover:border-brand-orange hover:text-brand-orange"
                    }`}
                  >
                    Agendar llamada
                  </a>
                </div>
              </article>
            );
          })} */}
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 text-center">
          * Rangos referenciales en USD. Cotización final según alcance real del
          proyecto.
        </p>
      </div>
    </section>
  );
};

export default Packages;
