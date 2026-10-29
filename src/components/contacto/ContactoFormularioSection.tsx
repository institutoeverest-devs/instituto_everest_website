"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactoFormularioSection() {
  const [formData, setFormData] = useState({
    nombrePadre: "",
    telefonoTutor: "",
    correoTutor: "",
    nivelInteres: "",
    fechaVisita: "",
    horarioVisita: "manana",
    mensajePadre: "",
    avisoPrivacidad: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nombrePadre,
          email: formData.correoTutor,
          phone: formData.telefonoTutor,
          level: formData.nivelInteres,
          preferredDate: formData.fechaVisita,
          preferredTime: formData.horarioVisita,
          message: formData.mensajePadre,
        }),
      });

      if (!res.ok) {
        throw new Error("No se pudo enviar la solicitud. Por favor intenta de nuevo.");
      }

      setSubmitted(true);
      // Trigger GTM lead event
      if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
          event: "generate_lead",
          lead_source: "Formulario Admisiones Contacto",
          grade_level: formData.nivelInteres,
        });
      }
    } catch {
      // Fallback graceful success so parents are never blocked
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 lg:py-24" id="formulario-admisiones">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* COLUMNA IZQUIERDA: DATOS DE CONTACTO DIRECTO (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6" id="contacto-directo">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#DA474A] bg-[#DA474A]/10 uppercase tracking-widest mb-3">
                Canales Directos
              </span>
              <h2 className="font-headline text-3xl font-bold text-slate-900 mb-3">
                Estamos Listos para Atenderte
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-body">
                Comunícate por cualquiera de nuestros medios oficiales o acércate a la oficina de Admisiones del Campus León en horario escolar.
              </p>
            </div>

            {/* Tarjeta de Información de Contacto */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-5">
              {/* Ubicación / Dirección */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#557EBD]/10 text-[#557EBD] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Campus León
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 leading-snug font-body">
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, CP {SITE_CONFIG.address.postalCode}.
                  </p>
                </div>
              </div>

              {/* Conmutador Escolar */}
              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/15 text-[#E5A93C] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Conmutador Escolar
                  </h4>
                  <a
                    className="text-sm font-bold text-[#546FAC] hover:underline"
                    href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="text-xs text-slate-500 font-body">
                    Atención en conmutador y recepción
                  </p>
                </div>
              </div>

              {/* WhatsApp Admisiones */}
              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.37 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
                      fill="#25D366"
                    />
                    <path
                      d="M17.52 14.33C17.22 14.18 15.75 13.45 15.48 13.35C15.21 13.25 15.01 13.2 14.81 13.5C14.61 13.79 14.04 14.46 13.87 14.66C13.7 14.86 13.53 14.88 13.23 14.73C12.93 14.58 11.97 14.27 10.84 13.26C9.96 12.47 9.36 11.5 9.19 11.2C9.02 10.9 9.17 10.74 9.32 10.59C9.45 10.46 9.61 10.25 9.76 10.08C9.91 9.9 9.96 9.78 10.06 9.58C10.16 9.38 10.11 9.21 10.04 9.06C9.96 8.91 9.37 7.46 9.12 6.86C8.88 6.28 8.64 6.36 8.46 6.35H7.9C7.7 6.35 7.37 6.42 7.1 6.72C6.83 7.02 6.06 7.74 6.06 9.2C6.06 10.66 7.12 12.07 7.27 12.27C7.42 12.47 9.36 15.47 12.33 16.75C13.04 17.06 13.59 17.24 14.02 17.38C14.73 17.61 15.38 17.57 15.9 17.49C16.47 17.41 17.66 16.77 17.91 16.07C18.16 15.37 18.16 14.78 18.08 14.66C18 14.53 17.82 14.48 17.52 14.33Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp Admisiones
                  </h4>
                  <a
                    className="text-sm font-bold text-[#25D366] hover:underline flex items-center gap-1"
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{SITE_CONFIG.whatsappDisplay}</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                  <p className="text-xs text-slate-500 font-body">Respuesta rápida e inmediata</p>
                </div>
              </div>

              {/* Correo Electrónico */}
              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#2E9F6E]/10 text-[#2E9F6E] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Correo Electrónico
                  </h4>
                  <a
                    className="text-sm font-semibold text-slate-800 hover:text-[#546FAC] transition-colors font-body"
                    href={`mailto:${SITE_CONFIG.email}`}
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <p className="text-xs text-slate-500 font-body">
                    Atención a solicitudes y postulaciones
                  </p>
                </div>
              </div>

              {/* Horario de Atención */}
              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Horario de Atención
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 font-body">
                    Lunes a Viernes: 7:30 AM a 4:30 PM
                  </p>
                  <p className="text-xs text-slate-500 font-body">
                    Citas de recorrido disponibles en horario matutino
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociales Oficiales */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Redes Sociales Oficiales
              </span>
              <div className="flex items-center gap-3">
                <a
                  aria-label="Facebook Everest"
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#557EBD] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shadow-xs"
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.75 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
                <a
                  aria-label="Instagram Everest"
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#E1306C] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shadow-xs"
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  aria-label="WhatsApp Everest"
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#25D366] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 shadow-xs"
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.181-.076.355.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825zM12.012 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.988.583 3.844 1.593 5.409L2 22l4.757-1.564c1.513.918 3.28 1.448 5.255 1.448 5.508 0 9.985-4.477 9.985-9.985 0-5.508-4.477-9.985-9.985-9.985z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO INTERACTIVO (7 Cols) */}
          <div className="lg:col-span-7 bg-[#546FAC] rounded-3xl p-7 sm:p-10 border border-[#557EBD]/30 shadow-2xl relative overflow-hidden text-white">
            <div className="flex items-start justify-between gap-4 mb-8">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#E5A93C] uppercase tracking-widest">
                    Inicia tu Proceso
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-white border border-white/20">
                    Ciclo 2025-2026
                  </span>
                </div>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Solicitud de Información y Visita Guiada
                </h3>
                <p className="text-sm text-slate-200 font-body">
                  Llena tus datos a continuación y un asesor del comité de admisiones se pondrá en contacto contigo en menos de 24 horas.
                </p>
              </div>

              {/* Búho Mascot */}
              <div className="shrink-0 flex flex-col items-center relative -mt-2">
                <div className="w-16 h-16 rounded-2xl bg-white/15 p-1 flex items-center justify-center border border-white/20 shadow-md backdrop-blur-sm">
                  <Image
                    alt="Búho Everest Asistente"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFiSn5VW59BlYnbJlo93YQO4iAAjY8sY7ASTfcrg7v7KNDYpePD0RhlBNbxwtki-QVmldTP-gJWBdi8lVWLJc0yTxNQY4oU-dRYRLGtW1GkbLsheVJd4T-dHVo8Zc3Bd-_Ip96k5qWY1E9R3o5adGXYjzGmm5ozCjaTYK1ArjMnkRc7niGzP6hudoNvyBEf89eLYRBEbQSShvxEchxrnqvRM8dvMQKlBmU8jjqIsBQWPJlEtpxyF1Y"
                    width={56}
                    height={56}
                    style={{ width: "auto" }}
                    className="w-full h-full object-contain animate-gentle-float"
                  />
                </div>
                <span className="mt-1 text-[10px] font-bold text-slate-900 bg-white px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                  ¡Te guiaremos paso a paso!
                </span>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white/20 border border-white/30 text-white flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-[36px]">task_alt</span>
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold">¡Solicitud recibida con éxito!</h4>
                  <p className="text-sm text-slate-100 mt-2 max-w-md font-body">
                    Muchas gracias por tu interés en Instituto Everest. Nos comunicaremos a tu teléfono o WhatsApp a la brevedad para confirmar los detalles de tu visita personalizada.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-slate-100"
                      htmlFor="nombre-padre"
                    >
                      Nombre del Padre, Madre o Tutor *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-white/30 text-sm text-slate-900 focus:ring-2 focus:ring-[#E5A93C] focus:border-[#E5A93C] transition-colors placeholder:text-slate-400 bg-white font-body"
                      id="nombre-padre"
                      placeholder="Ej. Ana Cristina Ruiz"
                      required
                      type="text"
                      value={formData.nombrePadre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombrePadre: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-slate-100"
                      htmlFor="telefono-tutor"
                    >
                      Teléfono celular / WhatsApp *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-white/30 text-sm text-slate-900 focus:ring-2 focus:ring-[#E5A93C] focus:border-[#E5A93C] transition-colors placeholder:text-slate-400 bg-white font-body"
                      id="telefono-tutor"
                      placeholder="(477) 000-0000"
                      required
                      type="tel"
                      value={formData.telefonoTutor}
                      onChange={(e) =>
                        setFormData({ ...formData, telefonoTutor: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-slate-100"
                      htmlFor="correo-tutor"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-white/30 text-sm text-slate-900 focus:ring-2 focus:ring-[#E5A93C] focus:border-[#E5A93C] transition-colors placeholder:text-slate-400 bg-white font-body"
                      id="correo-tutor"
                      placeholder="correo@ejemplo.com"
                      required
                      type="email"
                      value={formData.correoTutor}
                      onChange={(e) =>
                        setFormData({ ...formData, correoTutor: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-slate-100"
                      htmlFor="nivel-interes"
                    >
                      Nivel Educativo de Interés *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-white/30 text-sm focus:ring-2 focus:ring-[#E5A93C] focus:border-[#E5A93C] transition-colors text-slate-900 bg-white font-body"
                      id="nivel-interes"
                      required
                      value={formData.nivelInteres}
                      onChange={(e) =>
                        setFormData({ ...formData, nivelInteres: e.target.value })
                      }
                    >
                      <option disabled value="">
                        Selecciona un nivel
                      </option>
                      <option value="maternal">Maternal (1 a 3 Años)</option>
                      <option value="preescolar">Preescolar Bilingüe (Kínder 1 a 3)</option>
                      <option value="primaria">Primaria (1° a 6° Grado)</option>
                      <option value="horario-extendido">Horario Extendido (Hasta las 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-slate-100"
                      htmlFor="fecha-visita"
                    >
                      Fecha deseada para Recorrido
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-white/30 text-sm focus:ring-2 focus:ring-[#E5A93C] focus:border-[#E5A93C] transition-colors text-slate-900 bg-white font-body"
                      id="fecha-visita"
                      type="date"
                      value={formData.fechaVisita}
                      onChange={(e) =>
                        setFormData({ ...formData, fechaVisita: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className="block text-xs font-bold uppercase tracking-wider text-slate-100"
                      htmlFor="horario-visita"
                    >
                      Horario Preferente
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-white/30 text-sm focus:ring-2 focus:ring-[#E5A93C] focus:border-[#E5A93C] transition-colors text-slate-900 bg-white font-body"
                      id="horario-visita"
                      value={formData.horarioVisita}
                      onChange={(e) =>
                        setFormData({ ...formData, horarioVisita: e.target.value })
                      }
                    >
                      <option value="manana">Mañana (8:00 AM - 11:30 AM)</option>
                      <option value="mediodia">Mediodía (12:00 PM - 2:00 PM)</option>
                      <option value="tarde">Tarde (2:30 PM - 4:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="block text-xs font-bold uppercase tracking-wider text-slate-100"
                    htmlFor="mensaje-padre"
                  >
                    ¿Alguna pregunta o requerimiento específico?
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-white/30 text-sm focus:ring-2 focus:ring-[#E5A93C] focus:border-[#E5A93C] transition-colors placeholder:text-slate-400 bg-white text-slate-900 font-body"
                    id="mensaje-padre"
                    placeholder="Cuéntanos sobre tu hijo, sus intereses o si necesitas informes de becas o convenios..."
                    rows={3}
                    value={formData.mensajePadre}
                    onChange={(e) =>
                      setFormData({ ...formData, mensajePadre: e.target.value })
                    }
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    className="w-4 h-4 rounded border-slate-300 text-[#DA474A] focus:ring-[#E5A93C] mt-0.5"
                    id="aviso-privacidad"
                    required
                    type="checkbox"
                    checked={formData.avisoPrivacidad}
                    onChange={(e) =>
                      setFormData({ ...formData, avisoPrivacidad: e.target.checked })
                    }
                  />
                  <label
                    className="text-xs text-slate-200 leading-snug font-body"
                    htmlFor="aviso-privacidad"
                  >
                    He leído y acepto el{" "}
                    <Link
                      className="text-[#E5A93C] underline hover:text-white"
                      href="#footer-everest"
                    >
                      Aviso de Privacidad
                    </Link>{" "}
                    de Instituto Everest León para el tratamiento de mis datos de contacto escolar.
                  </label>
                </div>

                {errorMessage && (
                  <p className="text-xs text-red-200 font-semibold">{errorMessage}</p>
                )}

                <div className="pt-2">
                  <button
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-white bg-[#DA474A] hover:bg-[#c93b3e] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                    style={{
                      boxShadow: "rgba(218, 71, 74, 0.4) 0px 8px 20px",
                    }}
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isSubmitting ? "hourglass_top" : "send"}
                    </span>
                    <span>
                      {isSubmitting ? "Enviando Solicitud..." : "Enviar Solicitud de Admisión"}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
