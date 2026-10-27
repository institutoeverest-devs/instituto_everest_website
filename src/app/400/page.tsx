import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Error 400 · Solicitud No Válida | Instituto Everest León",
  description: "La solicitud enviada no pudo ser procesada. Regresa al inicio o comunícate con el equipo de Instituto Everest León.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Error400Page() {
  return (
    <div className="relative min-h-[85vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#557EBD]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F6D448]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#DA474A]/10 text-[#DA474A] border border-[#DA474A]/25 mb-6 shadow-xs">
          <span className="material-symbols-outlined text-[18px]">warning</span>
          <span>Código de Estado: HTTP 400 · Solicitud Incorrecta</span>
        </div>

        {/* Big Stylized Numeric Display */}
        <div className="relative mb-6">
          <span className="font-headline text-8xl sm:text-9xl md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#0A1128] via-[#3b5692] to-[#DA474A] leading-none select-none tracking-tight">
            400
          </span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#F6D448] rounded-full shadow-sm" />
        </div>

        {/* Heading & Explanation */}
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          La solicitud no pudo ser procesada
        </h1>

        <p className="font-body text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
          Parece que la petición recibida por el servidor contiene parámetros o sintaxis no reconocidos. Te recomendamos verificar el enlace o volver a navegar por las áreas de nuestro colegio.
        </p>

        {/* Quick Action Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#DA474A] hover:bg-[#c93b3e] shadow-lg shadow-[#DA474A]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[19px]">home</span>
            <span>Volver al Inicio</span>
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0A1128] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[19px]">mail</span>
            <span>Contacto y Citas</span>
          </Link>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20tuve%20un%20error%20400%20al%20navegar%20en%20el%20sitio%20web`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.181-.076.355.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825zM12.012 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.988.583 3.844 1.593 5.409L2 22l4.757-1.564c1.513.918 3.28 1.448 5.255 1.448 5.508 0 9.985-4.477 9.985-9.985 0-5.508-4.477-9.985-9.985-9.985z" />
            </svg>
            <span>Asistencia WhatsApp</span>
          </a>
        </div>

        {/* Quick Link Cards to Key Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left pt-6 border-t border-slate-200/80">
          <Link
            href="/maternal"
            className="p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/70 shadow-xs transition-colors flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#F6D448] shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-800">Maternal</span>
              <span className="text-[11px] text-slate-500">1 a 3 años</span>
            </div>
          </Link>

          <Link
            href="/preescolar"
            className="p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/70 shadow-xs transition-colors flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#557EBD] shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-800">Preescolar AMCO</span>
              <span className="text-[11px] text-slate-500">3 a 6 años</span>
            </div>
          </Link>

          <Link
            href="/primaria"
            className="p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/70 shadow-xs transition-colors flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#8EB674] shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-800">Primaria STEAM</span>
              <span className="text-[11px] text-slate-500">1° a 6° grado</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
