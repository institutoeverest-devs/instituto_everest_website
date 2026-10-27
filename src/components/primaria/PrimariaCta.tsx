"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function PrimariaCta() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-10 bg-[#F7F9FB]">
      <div
        className="max-w-[1280px] mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0A192F 0%, #162A4A 60%, #345f9c 100%)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-[#48A9A6]/20" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-[#DA474A]/20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Columna Izquierda: Mensaje y Acciones */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                Inscripciones Abiertas Primaria 2025 - 2026 · Cupo Limitado
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Impulsa el talento y liderazgo de tu hijo en Primaria Everest
            </h2>

            <p className="font-body text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
              Agenda una visita guiada para recorrer nuestras instalaciones, dialogar con el claustro docente y conocer cómo acompañamos cada etapa del desarrollo académico y personal de tu hijo.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold text-white">
                <span className="material-symbols-outlined text-[16px] text-[#E5A93C]">
                  verified
                </span>
                Metodología Bilingüe AMCO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold text-white">
                <span className="material-symbols-outlined text-[16px] text-[#E5A93C]">
                  music_note
                </span>
                Música Curricular Diaria
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold text-white">
                <span className="material-symbols-outlined text-[16px] text-[#E5A93C]">
                  psychology
                </span>
                Programa IMPACT IA
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20un%20recorrido%20personalizado%20para%20Primaria%20en%20Instituto%20Everest%20León`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#DA474A",
                  boxShadow: "0 10px 24px rgba(218, 71, 74, 0.45)",
                }}
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span>Agendar Recorrido Personalizado</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/20 bg-white/10 border border-white/25 backdrop-blur-sm hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>Llamar al Conmutador {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Búho Everest */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative flex items-center justify-center w-full py-4">
              <div className="absolute w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <Image
                alt="Búho Everest - Embajador de Sabiduría y Excelencia Primaria"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdr305AZc30Zq6yJSlu1wDXClCZnjshiwoJ52XJESqQD0iUri0xknBeT-GKMiGZi1kgU3nFLIx3timKyEhAawvcKqZAfZm0jBeJ6qPhz96rGuKOw2Bba9mbUQzY0cHaXL7MEFOevKxUEI5CWODfK31joyXQOI-_r8lXq99xmBxrgLsj2wCtp6pGWJuYCWjHK9WW7NVmB8aa0IYbwRDun5VZbf4te0cIPXQTycwGANSqY7Au6Dax-Qi"
                width={300}
                height={320}
                style={{ width: "auto" }}
                className="w-60 sm:w-68 md:w-72 h-auto max-h-[320px] object-contain drop-shadow-2xl animate-gentle-float hover:scale-105 transition-transform duration-300 relative z-20"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-xs mt-2">
              <span className="material-symbols-outlined text-[16px] text-[#E5A93C]">school</span>
              <span>Búho Everest: Sabiduría, Liderazgo y Carácter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
