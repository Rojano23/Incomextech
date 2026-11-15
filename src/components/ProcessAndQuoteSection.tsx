import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import {
  CONTACT_INFO,
  PROCESS_STEPS,
  SERVICES,
} from '@/src/data/incomexData';

interface ContactSectionProps {
  preselectedService: string;
}

interface FormState {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  servicio: string;
  detalles: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  detalles?: string;
}

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="scroll-mt-16 border-b border-slate-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            Metodología de ejecución
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-wrap:balance]">
            Proceso de requerimiento y entrega de proyecto
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Cada proyecto sigue una secuencia estructurada para asegurar el levantamiento técnico preciso y la entrega sin desviaciones.
          </p>
        </div>

        {/* 4-Step Connected Horizontal Stepper */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-sky-700 tabular-nums">
                    Paso {item.step}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden text-xs font-medium text-slate-400 lg:inline"
                    >
                      →
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ preselectedService }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: preselectedService || SERVICES[0].title,
    detalles: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, servicio: preselectedService }));
      setSubmitted(false);
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.nombre.trim().length < 3) {
      nextErrors.nombre = 'Ingresa tu nombre completo (mínimo 3 caracteres).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Ingresa un correo electrónico válido.';
    }
    const digitsOnly = form.telefono.replace(/\D/g, '');
    if (digitsOnly.length < 8 || digitsOnly.length > 15) {
      nextErrors.telefono = 'Ingresa un teléfono válido de 8 a 15 dígitos.';
    }
    if (form.detalles.trim().length < 20) {
      nextErrors.detalles =
        'Describe brevemente tu requerimiento (mínimo 20 caracteres).';
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(`Contacto — ${form.servicio}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmpresa: ${form.empresa || 'No especificada'}\nCorreo: ${form.email}\nTeléfono: ${form.telefono}\nServicio: ${form.servicio}\n\nDetalles del proyecto:\n${form.detalles}`
    );
    return `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const buildWhatsappHref = () => {
    const text = encodeURIComponent(
      `Hola INCOMEX-TECH, soy ${form.nombre}${
        form.empresa ? ` de ${form.empresa}` : ''
      }. Me interesa información sobre: ${form.servicio}. Detalles: ${form.detalles}`
    );
    return `${CONTACT_INFO.whatsappHref}?text=${text}`;
  };

  return (
    <section id="contacto" className="scroll-mt-16 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 rounded-2xl border border-slate-200 bg-[#0B1221] p-6 text-white sm:p-10 lg:grid-cols-12">
          {/* Left info column */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-wide text-sky-300">
                Atención directa de ingeniería
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
                Contacto
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Comparte el alcance de tu planta, terminal o sistema y nuestro equipo de ingeniería se pondrá en contacto para atender tu solicitud.
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-slate-800 pt-6 text-sm">
              <a
                href={CONTACT_INFO.phoneHref}
                className="flex items-center gap-3 text-slate-200 transition-colors hover:text-sky-300"
              >
                <Phone className="h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                <span>Teléfono: {CONTACT_INFO.phoneDisplay}</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 transition-colors hover:text-sky-300"
              >
                <MessageSquare className="h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                <span>WhatsApp: {CONTACT_INFO.whatsappDisplay}</span>
              </a>

              <div className="space-y-2 pt-1">
                {CONTACT_INFO.emails.map((item) => (
                  <a
                    key={item.address}
                    href={`mailto:${item.address}`}
                    className="flex items-start gap-3 text-slate-200 transition-colors hover:text-sky-300"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" aria-hidden="true" />
                    <span className="leading-snug">
                      <span className="block text-xs text-slate-400">{item.role}</span>
                      <span>{item.address}</span>
                    </span>
                  </a>
                ))}
              </div>

              <p className="pt-2 text-xs leading-relaxed text-slate-400">
                {CONTACT_INFO.hoursWeek} · {CONTACT_INFO.hoursSat}
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-xl border border-slate-800 bg-white p-6 text-slate-900 sm:p-7 lg:col-span-7">
            {submitted ? (
              <div className="flex h-full flex-col justify-center py-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                  Mensaje listo para envío
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Registramos tus datos para <strong className="font-semibold text-slate-900">{form.servicio}</strong>. Puedes enviar tu solicitud de inmediato a <strong className="font-semibold text-slate-900">{CONTACT_INFO.email}</strong> o por WhatsApp (<strong className="font-semibold text-slate-900">{CONTACT_INFO.whatsappDisplay}</strong>) con el resumen ya redactado.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Enviar por correo
                  </a>
                  <a
                    href={buildWhatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                  >
                    <MessageSquare className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                    Enviar por WhatsApp
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm((prev) => ({ ...prev, detalles: '' }));
                  }}
                  className="mt-5 self-start text-xs font-semibold text-sky-700 hover:underline cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quote-nombre"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Nombre completo *
                    </label>
                    <input
                      id="quote-nombre"
                      type="text"
                      value={form.nombre}
                      onChange={(e) => {
                        setForm({ ...form, nombre: e.target.value });
                        if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                      }}
                      placeholder="Ing. Carlos Mendoza"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-xs font-medium text-red-600">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-empresa"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Empresa u organización
                    </label>
                    <input
                      id="quote-empresa"
                      type="text"
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      placeholder="Terminal / Planta Industrial"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Correo electrónico *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="nombre@empresa.com"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs font-medium text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-telefono"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Teléfono de contacto *
                    </label>
                    <input
                      id="quote-telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => {
                        setForm({ ...form, telefono: e.target.value });
                        if (errors.telefono)
                          setErrors({ ...errors, telefono: undefined });
                      }}
                      placeholder="227 688 1019"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-xs font-medium text-red-600">
                        {errors.telefono}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quote-servicio"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="quote-servicio"
                    value={form.servicio}
                    onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-sky-600 focus:outline-none"
                  >
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quote-detalles"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Detalles técnicos del requerimiento *
                  </label>
                  <textarea
                    id="quote-detalles"
                    rows={3}
                    value={form.detalles}
                    onChange={(e) => {
                      setForm({ ...form, detalles: e.target.value });
                      if (errors.detalles)
                        setErrors({ ...errors, detalles: undefined });
                    }}
                    placeholder="Indica ubicación de la planta, tipo de sistema o normativa requerida (mínimo 20 caracteres)."
                    className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"
                  />
                  {errors.detalles && (
                    <p className="mt-1 text-xs font-medium text-red-600">
                      {errors.detalles}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 cursor-pointer"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Enviar mensaje de contacto
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
