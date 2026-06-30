import Image, { StaticImageData } from "next/image";
import projectHCTSolar from "../assets/img/hct-solar.webp";
import projectGlinseal from "../assets/img/glinseal.webp";
import projectKlandestino from "../assets/img/klandestino.webp";

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
      title: "HCT Solar",
      tag: "Desarrollo Web / Landing Page",
      year: "2026",
      image: projectHCTSolar,
      description:
        "Desarrollo de la página web de HCT Solar, enfocada en tecnología automatizada de limpieza solar fotovoltaica.",
    },
    {
      title: "Glinseal",
      tag: "Desarrollo Web / Landing Page",
      year: "2024",
      image: projectGlinseal,
      description:
        "Desarrollo de la página informativa para Glinseal, sobre su sistema de tracking con seguridad RFID",
    },
    {
      title: "Klandestino Jiu Jitsu",
      tag: "Desarrollo Web / Landing Page",
      year: "2025",
      image: projectKlandestino,
      description:
        "Desarrollo de la página informativa de Klandestino Jiu Jitsu, para ofrecer sus servicios de entrenamiento.",
    },
  ];

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
                className="w-full aspect-16/10 object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
