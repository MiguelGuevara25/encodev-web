export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 md:px-10 py-8 flex justify-between items-center">
      <span className="font-extrabold text-2xl tracking-tighter text-white">
        ENCODEV.
      </span>
      <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
        <a
          href="#proyectos"
          className="hover:text-brand-orange transition-colors"
        >
          Proyectos
        </a>
        <a
          href="#servicios"
          className="hover:text-brand-orange transition-colors"
        >
          Servicios
        </a>
        {/* <a
          href="#academia"
          className="hover:text-brand-orange transition-colors"
        >
          Academia
        </a> */}
        <a
          href="#testimonios"
          className="hover:text-brand-orange transition-colors"
        >
          Testimonios
        </a>
        <a
          href="#contacto"
          className="hover:text-brand-orange transition-colors"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}
