export default function Services() {
  return (
    <section id="servicios" className="px-6 md:px-10 py-32 bg-brand-white">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-6 flex items-center gap-3">
          <span className="w-12 h-px bg-brand-sky" />
          Servicios
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-20 max-w-3xl">
          Soluciones tecnológicas <span className="text-brand-orange">a medida</span> para empresas.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="text-brand-orange text-4xl font-extrabold font-mono">01</div>
            <h3 className="text-2xl font-bold">Sistemas a Medida</h3>
            <p className="text-brand-navy/60 leading-relaxed">
              Desarrollamos ERP, CRM, paneles de administración y aplicaciones web
              para digitalizar, centralizar y optimizar los procesos clave de tu
              empresa.
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-brand-orange text-4xl font-extrabold font-mono">02</div>
            <h3 className="text-2xl font-bold">Automatización & IA</h3>
            <p className="text-brand-navy/60 leading-relaxed">
              Automatizamos tareas repetitivas con flujos en Make, n8n o a medida.
              Implementamos chatbots inteligentes e integraciones para ahorrar
              tiempo y reducir costos operativos.
            </p>
          </div>
          <div id="academia" className="space-y-6 scroll-mt-24">
            <div className="flex items-center gap-3">
              <div className="text-brand-orange text-4xl font-extrabold font-mono">03</div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-orange/10 text-brand-orange px-2 py-1 rounded-full">
                Próximamente plataforma
              </span>
            </div>
            <h3 className="text-2xl font-bold">Capacitación & Mentoría Tech</h3>
            <p className="text-brand-navy/60 leading-relaxed">
              Formamos a personas y equipos con clases 1 a 1 o grupales, orientadas
              a proyectos reales. Pronto lanzaremos nuestra plataforma con videos,
              ejercicios y seguimiento de avance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
