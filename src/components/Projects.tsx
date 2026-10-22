import Image from "next/image";
import { getProjects } from "../libs/wp";
import { ProyectoWP } from "../interface";

export default async function Projects() {
  const projects: ProyectoWP[] = await getProjects();

  return (
    <section id="proyectos" className="py-32 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter italic">
            Proyectos
          </h2>
          <p className="font-mono text-brand-sky text-sm pb-2">
            [Confiaron en nosotros]
          </p>
        </div>
      </div>

      <div
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-6 md:px-10 scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((p) => {
          const {
            imagenPrincipal: {
              node: { sourceUrl, altText },
            },
            nombreDelCliente,
            tipoDeProyecto,
            descripcionCorta,
            fechaDeEntrega,
          } = p.camposProyecto;

          return (
            <article
              key={p.id}
              className="group snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[42%]"
            >
              <div className="overflow-hidden rounded-2xl mb-6 bg-brand-navy/40">
                <Image
                  src={sourceUrl}
                  alt={`${altText}`}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="w-full aspect-16/10 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex justify-between items-start gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {nombreDelCliente}
                  </h3>
                  <p className="text-brand-sky font-mono text-xs uppercase tracking-widest mb-3">
                    {tipoDeProyecto[0]}
                  </p>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    {descripcionCorta}
                  </p>
                </div>
                <span className="text-brand-orange font-bold font-mono shrink-0">
                  {fechaDeEntrega?.substring(0, 4)}
                </span>
              </div>
            </article>
          );
        })}
        <div className="shrink-0 w-6 md:w-10" aria-hidden />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-6 flex items-center gap-3 text-brand-sky/60 font-mono text-xs uppercase tracking-[0.25em]">
        <span>Desliza</span>
        <span className="flex-1 h-px bg-brand-sky/20" />
        <span>→</span>
      </div>
    </section>
  );
}
