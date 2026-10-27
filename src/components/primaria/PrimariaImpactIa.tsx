"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function PrimariaImpactIa() {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-10 text-white"
      id="ia-impact"
      style={{ backgroundColor: "#546FAC" }}
    >
      <div className="max-w-[1280px] mx-auto space-y-10">
        {/* Banner Visual Cinematográfico */}
        <div className="relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
          <Image
            alt="Alumnos en Laboratorio STEAM e IA Instituto Everest"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Wg91R-_7d_4UpoQBmWkLnpxDrUs4-GRc3wotLoVx2uVwZoW5OXZLeN_pJmFZfLALOnvh2VcHpFG5X1BAm6FJHhV8Axlpsq-zEgfaIBDV4V712pv88NY8yRbhbuSwD0lPWvJ2pIP1wrG5yEJkl-nCfEL56Z48o_j0T5nsy52tt7Da0qv6F411ASwHM_c-ZkpN-5JbNVDOBDN2idE0tcwuAhXS_uHTnhA3d2dauzB6jU_AmecP95BhteEbI"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12 text-white z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/25 w-fit shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E5A93C]">
                INNOVACIÓN EDUCATIVA • IMPACT AMCO
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-xl">
              Inteligencia Artificial & Innovación: IMPACT de AMCO
            </h2>

            <p className="font-headline italic text-slate-100 text-base sm:text-xl max-w-3xl leading-relaxed drop-shadow-md">
              «Más allá de la moda tecnológica: formamos mentes con criterio ético, curiosidad científica y pensamiento computacional.»
            </p>
          </div>
        </div>

        {/* Tarjeta de Contenido Estructurado */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl text-white bg-[#0b111e]/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Lado Izquierdo: Criterio Ético */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-[#E5A93C] block">
                  Instituto Everest · Primaria Mayor
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-headline leading-tight">
                  Criterio Ético en la Era Inteligente
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-xl relative overflow-hidden">
                <span className="material-symbols-outlined text-4xl text-[#E5A93C] opacity-40 absolute top-3 right-3">
                  format_quote
                </span>
                <p className="font-headline italic text-base sm:text-lg text-white leading-relaxed">
                  «No se trata solamente de aprender a usar Inteligencia Artificial. Se trata de aprender a comprenderla, cuestionarla y utilizarla responsablemente.»
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="#seccion-amco"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#557EBD] text-white font-semibold text-xs sm:text-sm shadow-lg hover:bg-[#43679c] hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Conoce el programa IMPACT AMCO</span>
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </Link>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20conocer%20el%20marco%20ético%20y%20tecnológico%20del%20programa%20IMPACT%20en%20Primaria%20Everest`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#DA474A] text-white font-semibold text-xs sm:text-sm shadow-lg hover:bg-[#c93b3e] hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Marco Ético Everest</span>
                  <span className="material-symbols-outlined text-[16px]">download</span>
                </a>
              </div>
            </div>

            {/* Lado Derecho: 3 Pilares */}
            <div className="lg:col-span-7 space-y-5">
              <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E5A93C] border border-[#E5A93C]/30">
                  <span className="material-symbols-outlined text-[14px]">school</span>
                  <span>Exclusivo 4.º a 6.º de Primaria</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white font-headline">
                  Educación Tecnológica con Enfoque Humano
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  Los alumnos de <strong>4.º, 5.º y 6.º de Primaria</strong> abordan la enseñanza y el aprendizaje en la era de la IA mediante IMPACT de AMCO, promoviendo alfabetización digital, pensamiento computacional y proyectos maker orientados al bienestar social.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm space-y-2">
                  <span className="w-7 h-7 rounded-full bg-[#557EBD] text-white flex items-center justify-center font-bold text-xs shadow-md">
                    1
                  </span>
                  <h5 className="text-white font-bold text-sm sm:text-base">Alfabetización & Datos</h5>
                  <p className="text-slate-300 text-xs leading-relaxed font-body">
                    Comprensión de sesgos, fuentes de datos y modelos computacionales.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm space-y-2">
                  <span className="w-7 h-7 rounded-full bg-[#DA474A] text-white flex items-center justify-center font-bold text-xs shadow-md">
                    2
                  </span>
                  <h5 className="text-white font-bold text-sm sm:text-base">Criterio Ético</h5>
                  <p className="text-slate-300 text-xs leading-relaxed font-body">
                    Discernimiento ante contenidos generativos, privacidad y autoría.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm space-y-2">
                  <span className="w-7 h-7 rounded-full bg-[#48A9A6] text-slate-950 flex items-center justify-center font-bold text-xs shadow-md">
                    3
                  </span>
                  <h5 className="text-white font-bold text-sm sm:text-base">Proyectos Maker</h5>
                  <p className="text-slate-300 text-xs leading-relaxed font-body">
                    Creación con robótica y herramientas digitales para resolver retos reales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
