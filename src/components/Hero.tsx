export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-6 flex items-center gap-3">
          <span className="w-12 h-px bg-brand-sky" />
          Desarrollo digital &amp; formación
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-extrabold leading-[0.85] tracking-tighter mb-12">
          CÓDIGO <br />
          <span className="text-brand-orange">QUE</span> ENSEÑA.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <p className="text-xl md:text-2xl text-brand-navy/70 max-w-md leading-relaxed">
            Diseñamos páginas web y sistemas a medida con precisión técnica, y
            formamos a la próxima generación de desarrolladores con visión de
            negocio.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-8 py-4 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-orange transition-colors duration-300"
            >
              Iniciar proyecto
            </a>
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
  );
}
