export default function Services() {
  return (
    <section id="servicios" className="px-6 md:px-10 py-32 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-6 flex items-center gap-3">
            <span className="w-12 h-px bg-brand-sky" />
            Servicios
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-20 max-w-3xl">
            Tres formas de trabajar <span className="text-brand-orange">juntos</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="text-brand-orange text-4xl font-extrabold font-mono">01</div>
              <h3 className="text-2xl font-bold">Páginas web</h3>
              <p className="text-brand-navy/60 leading-relaxed">
                Sitios de alto impacto visual diseñados para convertir y destacar en un mercado
                saturado. Performance, SEO y diseño impecable.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-brand-orange text-4xl font-extrabold font-mono">02</div>
              <h3 className="text-2xl font-bold">Sistemas a medida</h3>
              <p className="text-brand-navy/60 leading-relaxed">
                Software escalable que resuelve problemas específicos de tu negocio: paneles
                internos, integraciones, automatizaciones y APIs propias.
              </p>
            </div>
            <div id="academia" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <div className="text-brand-orange text-4xl font-extrabold font-mono">03</div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-orange/10 text-brand-orange px-2 py-1 rounded-full">
                  Próximamente plataforma
                </span>
              </div>
              <h3 className="text-2xl font-bold">Formación</h3>
              <p className="text-brand-navy/60 leading-relaxed">
                Hoy enseñamos en sesiones 1 a 1 y para equipos, con un enfoque práctico orientado a
                proyectos reales. Pronto lanzaremos una plataforma propia con videos, ejercicios y
                seguimiento de avance.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
