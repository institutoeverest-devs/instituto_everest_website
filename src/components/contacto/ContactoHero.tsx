"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactoHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-24 right-[-5%] w-[450px] h-[450px] rounded-full bg-[#557EBD]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-[-10%] w-[380px] h-[380px] rounded-full bg-[#E5A93C]/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Izquierda: Copy y Acciones */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide bg-[#DA474A]/10 text-[#DA474A] border border-[#DA474A]/20">
                <span className="w-2 h-2 rounded-full bg-[#DA474A] animate-pulse" />
                Ciclo Escolar 2025 - 2026 | Inscripciones Abiertas
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#557EBD]/10 text-[#546FAC] border border-[#557EBD]/20">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                Atención Personalizada
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-200/80 text-slate-700">
                <span className="material-symbols-outlined text-[15px]">location_on</span>
                Campus León, Gto.
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Comienza su Futuro en{" "}
              <span className="text-[#546FAC] italic">Instituto Everest</span>
            </h1>

            <p className="font-headline text-xl sm:text-2xl text-[#557EBD] italic font-medium mb-6">
              &ldquo;Donde tus sueños alcanzan la cima. Aquí crecemos juntos.&rdquo;
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-body">
              Acompañamos a tu familia en cada etapa del proceso de ingreso a Maternal, Preescolar o Primaria. Agenda tu visita guiada personalizada y conoce nuestras instalaciones, metodología bilingüe AMCO y enfoque STEAM en un entorno cálido, seguro y estimulante.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#formulario-admisiones"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#DA474A] hover:bg-[#c93b3e] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                <span>Agendar Recorrido Presencial</span>
              </Link>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20quisiera%20recibir%20información%20sobre%20el%20proceso%20de%20admisión%20en%20Instituto%20Everest%20León`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#546FAC] bg-white hover:bg-slate-50 border border-[#25D366]/40 shadow-xs transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.181-.076.355.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825zM12.012 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.988.583 3.844 1.593 5.409L2 22l4.757-1.564c1.513.918 3.28 1.448 5.255 1.448 5.508 0 9.985-4.477 9.985-9.985 0-5.508-4.477-9.985-9.985-9.985z" />
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 h-[380px] sm:h-[450px]">
              <Image
                alt="Consulta de admisiones y bienvenida a padres de familia en Instituto Everest León"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wd4EVGsOe3B7TDtJAz4a84_tSYRM0FeYyjaJO5yTPJEnFgwQjpniwnr1BMaewBbn5Pk2OJHPnXer3x4MluV09rP4ga9Jch3_XHDRZxj-fq-k9aHF_D4dZ5Dd6ckNH6C2Xd045LYNycRqlkQ3SsvSX9Mp6vNQTp89LyLFUZCnFJM8YlSswJ08P6gw6j_2zf5o5sMnKvSxGqi5JhoQb2_bj7jVuwapgyzN_DKbfu6OMMoDaU2vXXCx8ZTLE"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#557EBD]/10 text-[#546FAC] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <div>
                <p className="font-bold text-xs text-slate-900">Atención Cálida y Guiada</p>
                <p className="text-[11px] text-slate-500">Comité de Admisiones Everest</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
