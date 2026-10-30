import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Error 500 · Error Interno del Servidor | Instituto Everest León",
  description: "Ha ocurrido un error temporal en el servidor. Estamos trabajando para solucionarlo a la brevedad.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Error500Page() {
  return (
    <div className="relative min-h-[85vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#3b5692]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#DA474A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#3b5692]/10 text-[#3b5692] border border-[#3b5692]/25 mb-6 shadow-xs">
          <span className="material-symbols-outlined text-[18px]">dns</span>
          <span>Código de Estado: HTTP 500 · Error Interno del Servidor</span>
        </div>

        {/* Big Stylized Numeric Display */}
        <div className="relative mb-6">
          <span className="font-headline text-8xl sm:text-9xl md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#0A1128] via-[#3b5692] to-[#F6D448] leading-none select-none tracking-tight">
            500
          </span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#DA474A] rounded-full shadow-sm" />
        </div>

        {/* Heading & Explanation */}
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Estamos restableciendo el servicio
        </h1>

        <p className="font-body text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
          Ha ocurrido una incidencia técnica imprevista en nuestro servidor. Nuestro equipo tecnológico y administrativo ya se encuentra trabajando para resolverla de inmediato.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0A1128] hover:bg-[#1a254b] shadow-lg shadow-[#0A1128]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[19px]">home</span>
            <span>Volver al Inicio</span>
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0A1128] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[19px]">support_agent</span>
            <span>Directorio y Contacto</span>
          </Link>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20detecté%20un%20error%20500%20en%20el%20sitio%20web%20del%20Instituto%20Everest`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.181-.076.355.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825zM12.012 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.988.583 3.844 1.593 5.409L2 22l4.757-1.564c1.513.918 3.28 1.448 5.255 1.448 5.508 0 9.985-4.477 9.985-9.985 0-5.508-4.477-9.985-9.985-9.985z" />
            </svg>
            <span>WhatsApp Soporte</span>
          </a>
        </div>

        {/* Campus Information Snippet */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-slate-200/80 shadow-xs max-w-xl mx-auto text-left text-xs text-slate-600 flex items-start gap-3">
          <span className="material-symbols-outlined text-[22px] text-[#557EBD] shrink-0 mt-0.5">
            info
          </span>
          <p className="leading-relaxed">
            Si requieres atención urgente referente a inscripciones o pagos, por favor comunícate a nuestro teléfono <strong>{SITE_CONFIG.phone}</strong> o asiste directamente a nuestras instalaciones en {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, Gto.
          </p>
        </div>
      </div>
    </div>
  );
}
