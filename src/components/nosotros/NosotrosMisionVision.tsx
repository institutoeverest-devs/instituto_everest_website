"use client";

import React from "react";
import { motion } from "framer-motion";

export function NosotrosMisionVision() {
  return (
    <section
      id="mision-vision"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-[#f7f9fb] relative overflow-hidden"
    >
      {/* Subtle decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#557EBD]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F6D448]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#557EBD]/10 border border-[#557EBD]/20 text-[#3b5692] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">psychology_alt</span>
            <span>Propósito y Trascendencia Educativa</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#0A1128] tracking-tight leading-tight">
            Nuestra Razón de Ser y Rumbo hacia la Cima
          </h2>

          <p className="text-slate-600 font-body text-base sm:text-lg leading-relaxed">
            Desde nuestros primeros pasos en León, Guanajuato, hemos consolidado un modelo que equilibra la excelencia académica bilingüe con una formación del carácter fundada en virtudes reales.
          </p>
        </div>

        {/* Dual Cards: Misión & Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Misión */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-10 bg-[#0A1128] text-white shadow-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F6D448]/10 rounded-full blur-2xl group-hover:bg-[#F6D448]/15 transition-all duration-500" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F6D448] shadow-md shrink-0">
                  <span className="material-symbols-outlined text-2xl">flag</span>
                </div>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Nuestra Misión
                </h3>
              </div>

              {/* Oculto en mobile según lo solicitado */}
              <p className="hidden sm:block font-headline text-base sm:text-lg font-semibold text-slate-100 leading-snug">
                Inspirar y formar integralmente a cada estudiante en un ambiente de afecto y rigor constructivo
              </p>

              <p className="text-slate-200 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-body">
                Desarrollamos el <strong>pensamiento crítico</strong>, la <strong>fluidez bilingüe natural AMCO</strong>, la <strong>creatividad científica STEAM</strong> y la <strong>sensibilidad artística</strong> en un entorno seguro y personalizado, guiando a niñas y niños a descubrir sus talentos con confianza y alegría para transformar positivamente su entorno.
              </p>
            </div>
          </motion.div>

          {/* Card Visión */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-10 bg-white text-slate-900 shadow-xl border border-slate-200 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#557EBD]/10 rounded-full blur-2xl group-hover:bg-[#557EBD]/15 transition-all duration-500" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#557EBD]/10 border border-[#557EBD]/25 flex items-center justify-center text-[#3b5692] shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </div>
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#0A1128] tracking-wide">
                  Nuestra Visión
                </h3>
              </div>

              {/* Oculto en mobile según lo solicitado */}
              <p className="hidden sm:block font-headline text-base sm:text-lg font-semibold text-slate-800 leading-snug">
                Ser la comunidad educativa bilingüe de referencia en León y la región Bajío
              </p>

              <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-body">
                Reconocida por la calidez de su comunidad escolar, la vanguardia metodológica de sus docentes y la solidez ética y emocional de sus egresados: jóvenes seguros de sí mismos, capaces de comunicarse con fluidez en cualquier escenario global y preparados para liderar con sabiduría en la era de la inteligencia artificial.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
