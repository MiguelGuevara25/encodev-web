"use client";

export default function CTA() {
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
    <section
      id="contacto"
      className="bg-brand-navy text-white px-6 md:px-10 py-32 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-orange mb-6 flex items-center gap-3">
          <span className="w-12 h-px bg-brand-orange" />
          Siguiente paso
        </p>
        <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-10 leading-[0.9]">
          Construyamos algo{" "}
          <span className="text-brand-orange italic">memorable</span>.
        </h2>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed">
          Cuéntanos tu idea y te enviamos un presupuesto claro en menos de 48 h.
          O agenda una llamada de 30 minutos sin compromiso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCta("whatsapp", "footer_cta")}
            data-cta="whatsapp"
            className="group flex items-center justify-between px-8 py-6 bg-brand-orange text-brand-navy font-bold rounded-2xl hover:bg-white transition-colors"
          >
            <span className="flex flex-col items-start">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                Vía WhatsApp
              </span>
              <span className="text-xl">Pedir presupuesto</span>
            </span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCta("calendar", "footer_cta")}
            data-cta="calendar"
            className="group flex items-center justify-between px-8 py-6 border border-white/20 font-bold rounded-2xl hover:border-brand-orange hover:text-brand-orange transition-colors"
          >
            <span className="flex flex-col items-start">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                Calendly · 30 min
              </span>
              <span className="text-xl">Agendar llamada</span>
            </span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
