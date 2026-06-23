"use client"

export default function Footer() {
  const WHATSAPP_URL =
    "https://wa.me/000000000000?text=Hola%20Encodev%2C%20quiero%20un%20presupuesto%20para%20mi%20proyecto.";
  const CALENDAR_URL = "https://calendly.com/encodev/30min";

  type CtaSource = "hero" | "footer_cta" | "nav";
  function trackCta(channel: "whatsapp" | "calendar", source: CtaSource) {
    const payload = { event: "cta_click", channel, source, ts: Date.now() };
    // dataLayer para GTM / GA4 si está disponible
    const w = window as unknown as { dataLayer?: unknown[] };
    if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
  }

  return (
    <footer className="bg-brand-navy text-white px-6 md:px-10 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2">
            <span className="font-extrabold text-3xl tracking-tighter">
              ENCODEV.
            </span>
            <p className="text-white/50 mt-4 max-w-sm leading-relaxed">
              Estudio boutique de desarrollo web y formación. Código que enseña.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange mb-4">
              Navegación
            </p>
            <ul className="space-y-2 text-white/70">
              <li>
                <a
                  href="#proyectos"
                  className="hover:text-brand-orange transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-brand-orange transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#academia"
                  className="hover:text-brand-orange transition-colors"
                >
                  Academia
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-brand-orange transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange mb-4">
              Contacto
            </p>
            <ul className="space-y-2 text-white/70 font-mono text-sm">
              <li>
                <a
                  href="mailto:hola@encodev.pro"
                  className="hover:text-brand-orange transition-colors"
                >
                  hola@encodev.pro
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCta("whatsapp", "nav")}
                  className="hover:text-brand-orange transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCta("calendar", "nav")}
                  className="hover:text-brand-orange transition-colors"
                >
                  Agendar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-white/10 text-xs font-mono text-white/40">
          <p>© 2026 Encodev. Todos los derechos reservados.</p>
          <p className="uppercase tracking-[0.25em]">
            Hecho con código, no con plantillas
          </p>
        </div>
      </div>
    </footer>
  );
}
