"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactoHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32 lg:pt-32 lg:pb-12">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-24 right-[-5%] w-[450px] h-[450px] rounded-full bg-[#557EBD]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-[-10%] w-[380px] h-[380px] rounded-full bg-[#E5A93C]/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Columna Izquierda: Copy y Acciones */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wide bg-[#DA474A]/10 text-[#DA474A] border border-[#DA474A]/20">
                <span className="w-2 h-2 rounded-full bg-[#DA474A] animate-pulse" />
                Ciclo Escolar 2027 - 2028 | Inscripciones Abiertas
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#557EBD]/10 text-[#546FAC] border border-[#557EBD]/20">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Atención Personalizada
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-medium bg-slate-200/80 text-slate-700">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                Campus León, Gto.
              </span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-2 sm:mb-3">
              Comienza su Futuro en{" "}
              <span className="text-[#546FAC] italic">Instituto Everest</span>
            </h1>

            <p className="font-headline text-base sm:text-lg lg:text-xl text-[#557EBD] italic font-medium mb-3 sm:mb-4">
              &ldquo;Donde tus sueños alcanzan la cima. Aquí crecemos juntos.&rdquo;
            </p>

            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed mb-5 sm:mb-6 font-body max-w-xl">
              Acompañamos a tu familia en cada etapa del proceso de ingreso a Maternal, Preescolar o Primaria. Agenda tu visita guiada personalizada y conoce nuestras instalaciones, metodología bilingüe AMCO y enfoque STEAM en un entorno cálido, seguro y estimulante.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#formulario-admisiones"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#DA474A] hover:bg-[#c93b3e] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Agendar Recorrido Presencial</span>
              </Link>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20quisiera%20recibir%20información%20sobre%20el%20proceso%20de%20admisión%20en%20Instituto%20Everest%20León`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#0A1128] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 32 32" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 2C8.268 2 2 8.268 2 16c0 2.505.656 4.945 1.905 7.098L2 30l7.104-1.863A13.938 13.938 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
                    fill="#25D366"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.167 19.822c-.328-.164-1.942-.958-2.243-1.068-.3-.11-.519-.164-.738.164-.219.328-.847 1.068-1.039 1.287-.191.219-.383.246-.711.082-.328-.164-1.385-.51-2.639-1.628-.975-.87-1.633-1.945-1.825-2.273-.191-.328-.02-.505.143-.668.148-.148.328-.383.493-.574.164-.191.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.738-1.778-1.012-2.435-.266-.639-.536-.552-.738-.562l-.63-.01c-.219 0-.574.082-.875.41-.3.328-1.148 1.121-1.148 2.735 0 1.614 1.176 3.173 1.339 3.392.164.219 2.314 3.533 5.607 4.954.783.338 1.395.54 1.872.692.786.25 1.502.215 2.068.13.631-.095 1.942-.793 2.216-1.559.273-.766.273-1.422.191-1.559-.082-.137-.3-.219-.628-.383z"
                    fill="#FFFFFF"
                  />
                </svg>
                <span>WhatsApp Directo</span>
              </a>
            </div>
          </motion.div>

          {/* Columna Derecha: Foto de bienvenida y badge flotante */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 h-[320px] sm:h-[380px] lg:h-[410px] xl:h-[430px]">
              <Image
                alt="Consulta de admisiones y bienvenida a padres de familia en Instituto Everest León"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wd4EVGsOe3B7TDtJAz4a84_tSYRM0FeYyjaJO5yTPJEnFgwQjpniwnr1BMaewBbn5Pk2OJHPnXer3x4MluV09rP4ga9Jch3_XHDRZxj-fq-k9aHF_D4dZ5Dd6ckNH6C2Xd045LYNycRqlkQ3SsvSX9Mp6vNQTp89LyLFUZCnFJM8YlSswJ08P6gw6j_2zf5o5sMnKvSxGqi5JhoQb2_bj7jVuwapgyzN_DKbfu6OMMoDaU2vXXCx8ZTLE"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#557EBD]/10 text-[#546FAC] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">support_agent</span>
              </div>
              <div>
                <p className="font-bold text-[11px] sm:text-xs text-slate-900">Atención Cálida y Guiada</p>
                <p className="text-[10px] text-slate-500">Comité de Admisiones Everest</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
