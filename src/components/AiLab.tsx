const AiLab = () => {
  return (
    <section
      id="ia"
      className="px-6 md:px-10 py-32 bg-brand-white border-t border-brand-navy/10 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-6 flex items-center gap-3">
            <span className="w-12 h-px bg-brand-sky" />
            Laboratorio · IA
          </p>
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-orange/10 text-brand-orange px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            En estudio · aún no es servicio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] wrap-break-words">
            Automatizaciones con{" "}
            <span className="text-brand-orange italic">IA</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7 space-y-8">
            <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed">
              Estamos investigando y practicando a fondo automatizaciones con
              inteligencia artificial: agentes, integraciones con LLMs y flujos
              que conectan tus herramientas para ahorrar horas de trabajo
              manual.
            </p>
            <p className="text-brand-navy/60 leading-relaxed">
              Todavía no lo ofrecemos como un servicio formal, pero vamos por
              buen camino. Cuando esté listo lo lanzaremos aquí. Mientras tanto,
              si tienes una idea concreta podemos explorarla contigo como
              piloto.
            </p>
          </div>
          <ul className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {[
              {
                k: "01",
                t: "Agentes IA",
                d: "Asistentes conectados a tus datos y APIs.",
              },
              {
                k: "02",
                t: "Flujos",
                d: "Automatización entre herramientas y procesos.",
              },
              {
                k: "03",
                t: "LLMs a medida",
                d: "Prompts, RAG y evaluación aplicada.",
              },
            ].map((i) => (
              <li
                key={i.k}
                className="border border-brand-navy/10 rounded-2xl p-5"
              >
                <div className="text-brand-orange font-mono text-xs mb-2">
                  {i.k}
                </div>
                <p className="font-bold">{i.t}</p>
                <p className="text-sm text-brand-navy/60 mt-1 leading-relaxed">
                  {i.d}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AiLab;
