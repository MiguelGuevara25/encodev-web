"use client";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  plan: string;
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      plan: "",
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Formulario de contacto enviado:", data);
    alert("Mensaje enviado correctamente. Te responderemos en menos de 48 h.");
    reset();
  };

  return (
    <section
      id="formulario"
      className="px-6 md:px-10 py-32 bg-brand-white border-t border-brand-navy/10 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-sky mb-6 flex items-center gap-3">
            <span className="w-12 h-px bg-brand-sky" />
            Formulario
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-6">
            Cuéntanos tu <span className="text-brand-orange italic">idea</span>.
          </h2>
          <p className="text-brand-navy/60 leading-relaxed">
            Respondemos en menos de 48 h con próximos pasos y un rango de
            inversión claro. Sin humo, sin plantillas.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:col-span-7 space-y-6"
        >
          <div>
            <label
              htmlFor="plan"
              className="block font-mono text-[10px] uppercase tracking-[0.25em] text-brand-navy/60 mb-2"
            >
              Paquete de interés
            </label>

            <select
              {...register("plan", { required: true })}
              className="w-full px-4 py-3 rounded-xl bg-white border border-brand-navy/15 focus:border-brand-navy outline-none transition-colors"
            >
              <option value="">Aún no lo tengo claro</option>
              <option value="Desde">Desde · USD 600 – 1.500</option>
              <option value="Recomendado">
                Recomendado · USD 1.500 – 4.500
              </option>
              <option value="Premium">Premium · USD 4.500 – 15.000+</option>
            </select>
            {errors.plan && (
              <p className="text-xs text-brand-orange">
                Este campo es obligatorio
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="name"
              className="block font-mono text-[10px] uppercase tracking-[0.25em] text-brand-navy/60 mb-2"
            >
              Nombre
            </label>
            <input
              {...register("name", { required: true })}
              className={`w-full px-4 py-3 rounded-xl bg-white border border-brand-navy/15 focus:border-brand-navy outline-none transition-colors`}
            />
            {errors.name && (
              <p className="text-xs text-brand-orange">
                Este campo es obligatorio
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-mono text-[10px] uppercase tracking-[0.25em] text-brand-navy/60 mb-2"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              maxLength={255}
              className={`w-full px-4 py-3 rounded-xl bg-white border border-brand-navy/15 focus:border-brand-navy outline-none transition-colors`}
            />
            {errors.email && (
              <p className="text-xs text-brand-orange">
                Este campo es obligatorio
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-[10px] uppercase tracking-[0.25em] text-brand-navy/60 mb-2"
            >
              Mensaje
            </label>
            <textarea
              {...register("message", { required: true })}
              rows={5}
              maxLength={2000}
              className={`w-full px-4 py-3 rounded-xl bg-white border border-brand-navy/15 focus:border-brand-navy outline-none transition-colors resize-none`}
            />
            {errors.message && (
              <p className="text-xs text-brand-orange">
                Este campo es obligatorio
              </p>
            )}
            <div className="flex justify-between mt-2">
              {/* <span className="text-xs text-brand-navy/40 tabular-nums">
                {form.message.length}/2000
              </span> */}
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-orange transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
