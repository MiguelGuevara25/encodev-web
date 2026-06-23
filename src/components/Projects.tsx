import Image, { StaticImageData } from "next/image";
import projectNexus from "../assets/img/image.png";

interface Project {
  title: string;
  tag: string;
  year: string;
  image: StaticImageData;
  description: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Nexus Intelligence",
      tag: "Sistema a medida / UI & UX",
      year: "2024",
      image: projectNexus,
      description:
        "Dashboard de inteligencia de datos para equipos comerciales. Reportes en tiempo real e integraciones a medida.",
    },
    {
      title: "Lumina Retail",
      tag: "E-Commerce / Página web",
      year: "2024",
      image: projectNexus,
      description:
        "Tienda online minimalista con catálogo dinámico, carrito persistente y checkout optimizado para conversión.",
    },
    {
      title: "Encodev Learn",
      tag: "Formación / Mentoría 1 a 1",
      year: "2025",
      image: projectNexus,
      description:
        "Programa de enseñanza personalizado en desarrollo web. Próximamente: plataforma propia con videos y ejercicios.",
    },
  ];

  return (
    <section id="proyectos" className="py-32 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter italic">
            Vitrina.
          </h2>
          <p className="font-mono text-brand-sky text-sm pb-2">
            [{String(projects.length).padStart(2, "0")} Seleccionados]
          </p>
        </div>
      </div>

      <div
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-6 md:px-10 scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((p) => (
          <article
            key={p.title}
            className="group snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[42%]"
          >
            <div className="overflow-hidden rounded-2xl mb-6 bg-brand-navy/40">
              <Image
                src={p.image}
                alt={`${p.title} — ${p.tag}`}
                width={1600}
                height={1000}
                loading="lazy"
                className="w-full aspect-16/10 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex justify-between items-start gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-brand-sky font-mono text-xs uppercase tracking-widest mb-3">
                  {p.tag}
                </p>
                <p className="text-white/60 leading-relaxed max-w-md">
                  {p.description}
                </p>
              </div>
              <span className="text-brand-orange font-bold font-mono shrink-0">
                {p.year}
              </span>
            </div>
          </article>
        ))}
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
