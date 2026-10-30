"use client";

import { useState } from "react";
import { trackLeadGenerated } from "@/lib/analytics";
import { Toast, ToastType } from "@/components/ui/Toast";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    gradeInterest: "Preescolar Bilingüe",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al enviar la solicitud.");
      }

      // Track conversion event in GTM / dataLayer
      trackLeadGenerated({
        lead_type: "admissions_contact_form",
        grade_interest: formData.gradeInterest,
        source: "website_home_contact",
      });

      setSubmitted(true);
      setToast({
        message: data.message || "Solicitud de información enviada con éxito. Nuestro personal se contactará con usted a la brevedad.",
        type: "success",
      });

      setFormData({
        parentName: "",
        studentName: "",
        email: "",
        phone: "",
        gradeInterest: "Preescolar Bilingüe",
        message: "",
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Ocurrió un error inesperado.";
      setToast({
        message: errorMessage,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="w-full bg-[#f7f9fb] py-20 lg:py-24 relative overflow-hidden">
      <Toast
        message={toast?.message || null}
        type={toast?.type}
        onClose={() => setToast(null)}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Información de Contacto & Admisiones */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#3b5692] block">
              Inscripciones Ciclo 2027 - 2028 · Cupo Limitado
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold leading-tight">
              Inicia el viaje hacia la cima con tu familia.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Agenda una sesión informativa personalizada o recorrido por nuestras instalaciones en León, Guanajuato. Nuestro equipo docente resolverá todas tus inquietudes.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="material-symbols-outlined text-[24px] text-[#3b5692] shrink-0 mt-0.5">
                  location_on
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{SITE_CONFIG.campus}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}, Gto. CP {SITE_CONFIG.address.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="material-symbols-outlined text-[24px] text-[#25D366] shrink-0">
                  chat
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">WhatsApp Admisiones Directo</h4>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-slate-900 font-semibold"
                  >
                    {SITE_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="material-symbols-outlined text-[24px] text-[#E5A93C] shrink-0">
                  call
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Teléfono Escolar</h4>
                  <p className="text-xs text-slate-600">{SITE_CONFIG.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Registro Seguro */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200/80 relative">
              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200/80 text-center flex flex-col items-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-[36px]">check_circle</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      Solicitud de información enviada con éxito
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto font-body leading-relaxed">
                      Muchas gracias por comunicarse con Instituto Everest. Nuestro personal se contactará con usted a la brevedad para brindarle atención personalizada y resolver todas sus dudas.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20acabo%20de%20enviar%20mi%20solicitud%20en%20el%20sitio%20web%20y%20deseo%20atención%20inmediata`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-all shadow-md hover:scale-105 active:scale-95"
                    >
                      <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.37 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" fill="#25D366" />
                        <path d="M17.52 14.33C17.22 14.18 15.75 13.45 15.48 13.35C15.21 13.25 15.01 13.2 14.81 13.5C14.61 13.79 14.04 14.46 13.87 14.66C13.7 14.86 13.53 14.88 13.23 14.73C12.93 14.58 11.97 14.27 10.84 13.26C9.96 12.47 9.36 11.5 9.19 11.2C9.02 10.9 9.17 10.74 9.32 10.59C9.45 10.46 9.61 10.25 9.76 10.08C9.91 9.9 9.96 9.78 10.06 9.58C10.16 9.38 10.11 9.21 10.04 9.06C9.96 8.91 9.37 7.46 9.12 6.86C8.88 6.28 8.64 6.36 8.46 6.35H7.9C7.7 6.35 7.37 6.42 7.1 6.72C6.83 7.02 6.06 7.74 6.06 9.2C6.06 10.66 7.12 12.07 7.27 12.27C7.42 12.47 9.36 15.47 12.33 16.75C13.04 17.06 13.59 17.24 14.02 17.38C14.73 17.61 15.38 17.57 15.9 17.49C16.47 17.41 17.66 16.77 17.91 16.07C18.16 15.37 18.16 14.78 18.08 14.66C18 14.53 17.82 14.48 17.52 14.33Z" fill="white" />
                      </svg>
                      <span>Atención inmediata WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          parentName: "",
                          studentName: "",
                          email: "",
                          phone: "",
                          gradeInterest: "Preescolar Bilingüe",
                          message: "",
                        });
                      }}
                      className="px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-headline text-2xl font-bold text-slate-900 mb-1">
                      Solicitar Información Personalizada
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Completa tus datos y te responderemos en menos de 24 horas hábiles.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Nombre del Padre / Tutor *
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Ej. Roberto Martínez"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b5692] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Nombre del Aspirante
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Ej. Sofía Martínez"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b5692] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b5692] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                    >
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="477 123 4567"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b5692] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="gradeInterest"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Nivel de Interés *
                  </label>
                  <select
                    id="gradeInterest"
                    value={formData.gradeInterest}
                    onChange={(e) => setFormData({ ...formData, gradeInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b5692] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Maternal (1 a 3 Años)">Maternal (1 a 3 Años)</option>
                    <option value="Preescolar Bilingüe (3 a 6 Años)">Preescolar Bilingüe (3 a 6 Años)</option>
                    <option value="Primaria STEAM (6 a 12 Años)">Primaria STEAM (6 a 12 Años)</option>
                    <option value="Horario Extendido (Hasta 6:00 PM)">Horario Extendido (Hasta 6:00 PM)</option>
                    <option value="Programa AMCO / Academias">Programa AMCO / Academias</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Mensaje o Preguntas (Opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos si deseas agendar visita presencial o requieres información sobre costos y becas."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b5692] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl text-white font-bold text-sm sm:text-base shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "rgb(218, 71, 74)",
                    boxShadow: "rgba(218, 71, 74, 0.4) 0px 8px 24px",
                  }}
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Procesando solicitud...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      <span>Enviar Solicitud de Admisiones</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}
