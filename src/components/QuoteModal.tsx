"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

type QuoteFormValues = {
  name: string;
  contact: string;
  projectType: string;
  description: string;
  budget: string;
};

const WHATSAPP_NUMBER = "519311300017";

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    defaultValues: {
      name: "",
      contact: "",
      projectType: "",
      description: "",
      budget: "",
    },
  });

  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  if (!open) return null;

  const onSubmit = (data: QuoteFormValues) => {
    const message =
      "*SOLICITUD DE COTIZACIÓN - ENCODEV*\n\n" +
      `*Nombre / Empresa:* ${data.name || "-"}\n` +
      `*Contacto (Teléfono/Correo):* ${data.contact || "-"}\n` +
      `*Tipo de proyecto:* ${data.projectType || "-"}\n` +
      `*Presupuesto aproximado:* ${data.budget || "A definir"}\n\n` +
      `*¿Qué necesita resolver?*\n${data.description || "-"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-brand-navy/70 backdrop-blur-[2px]"
        onClick={handleClose}
      />
      <div className="relative w-full max-w-xl bg-brand-white rounded-2xl shadow-[0_40px_120px_-60px_rgba(37,75,94,0.9)] overflow-hidden flex flex-col max-h-[90dvh]">
        <div className="flex items-start justify-between px-6 sm:px-10 pt-8 sm:pt-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-3 flex items-center gap-3">
              <span className="w-10 h-px bg-brand-sky" />
              Solicitar cotización
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Cuéntanos tu proyecto
            </h3>
            <p className="mt-2 text-sm sm:text-base text-brand-navy/60 max-w-md">
              Con estos datos te hacemos una primera evaluación y te respondemos en menos de 48 horas.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="ml-4 mt-1 text-brand-navy/40 hover:text-brand-navy transition-colors"
            aria-label="Cerrar"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto">
          {!sent ? (
            <form onSubmit={handleSubmit(onSubmit)} className="px-6 sm:px-10 pb-8 sm:pb-10 mt-8 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/70">
                  Nombre y apellido / Empresa
                </label>
                <input
                  {...register("name", { required: true })}
                  placeholder="Ej. Juan Pérez / Mi Empresa SAC"
                  className="w-full px-4 py-3 rounded-xl border border-brand-navy/10 focus:border-brand-orange/80 focus:outline-none focus:ring-2 focus:ring-brand-orange/10 transition-colors text-brand-navy placeholder:text-brand-navy/40"
                />
                {errors.name && (
                  <p className="text-xs text-brand-orange">Este campo es obligatorio</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/70">
                  Teléfono o correo
                </label>
                <input
                  {...register("contact", { required: true })}
                  placeholder="Ej. +51 999 999 999 o nombre@empresa.com"
                  className="w-full px-4 py-3 rounded-xl border border-brand-navy/10 focus:border-brand-orange/80 focus:outline-none focus:ring-2 focus:ring-brand-orange/10 transition-colors text-brand-navy placeholder:text-brand-navy/40"
                />
                {errors.contact && (
                  <p className="text-xs text-brand-orange">Este campo es obligatorio</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/70">
                  Tipo de proyecto
                </label>
                <select
                  {...register("projectType", { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-navy/10 focus:border-brand-orange/80 focus:outline-none focus:ring-2 focus:ring-brand-orange/10 transition-colors text-brand-navy"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="Sistemas a medida">Sistemas a medida</option>
                  <option value="Automatización & IA">Automatización & IA</option>
                  <option value="Capacitación & Mentoría Tech">Capacitación & Mentoría Tech</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.projectType && (
                  <p className="text-xs text-brand-orange">Este campo es obligatorio</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/70">
                  Presupuesto aproximado (opcional)
                </label>
                <select
                  {...register("budget")}
                  className="w-full px-4 py-3 rounded-xl border border-brand-navy/10 focus:border-brand-orange/80 focus:outline-none focus:ring-2 focus:ring-brand-orange/10 transition-colors text-brand-navy"
                >
                  <option value="">A definir</option>
                  <option value="< S/ 2,000">&lt; S/ 2,000</option>
                  <option value="S/ 2,000 - S/ 5,000">S/ 2,000 - S/ 5,000</option>
                  <option value="S/ 5,000 - S/ 10,000">S/ 5,000 - S/ 10,000</option>
                  <option value="> S/ 10,000">&gt; S/ 10,000</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/70">
                  ¿Qué necesitas? Cuéntanos el problema a resolver
                </label>
                <textarea
                  {...register("description", { required: true })}
                  rows={5}
                  placeholder="Ej. Necesito un sistema para controlar ventas, inventario y reportes. Quisiera automatizar X proceso..."
                  className="w-full px-4 py-3 rounded-xl border border-brand-navy/10 focus:border-brand-orange/80 focus:outline-none focus:ring-2 focus:ring-brand-orange/10 transition-colors text-brand-navy placeholder:text-brand-navy/40 resize-none"
                />
                {errors.description && (
                  <p className="text-xs text-brand-orange">Este campo es obligatorio</p>
                )}
              </div>

              <div className="flex flex-col gap-4 pt-2">
                <p className="text-xs text-brand-navy/50 text-center">
                  Al enviar, se abrirá WhatsApp con la solicitud lista para enviar.
                </p>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-orange transition-colors duration-300 text-center"
                >
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          ) : (
            <div className="px-6 sm:px-10 pb-8 sm:pb-10 mt-8 space-y-6">
              <div className="rounded-2xl border border-brand-navy/8 bg-brand-white p-6 sm:p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33334 11L9.91668 13.5833L14.6667 8.83334M20.1667 11C20.1667 16.0626 16.0626 20.1667 11 20.1667C5.9374 20.1667 1.83334 16.0626 1.83334 11C1.83334 5.9374 5.9374 1.83334 11 1.83334C16.0626 1.83334 20.1667 5.9374 20.1667 11Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-brand-navy">
                  ¡Solicitud enviada!
                </h4>
                <p className="mt-2 text-brand-navy/60 max-w-md mx-auto">
                  Ya se abrió WhatsApp con tu solicitud lista. Te responderemos en menos de 48 horas con un presupuesto claro.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleClose}
                  className="w-full px-8 py-4 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-orange transition-colors duration-300"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    setSent(false);
                    reset();
                  }}
                  className="w-full px-8 py-4 border border-brand-navy/15 font-bold rounded-full hover:border-brand-navy transition-colors text-brand-navy"
                >
                  Enviar otra solicitud
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
