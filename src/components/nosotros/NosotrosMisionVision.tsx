"use client";

import React from "react";
import { motion } from "framer-motion";

export function NosotrosMisionVision() {
  const values = [
    {
      name: "Integridad & Ética",
      desc: "Inculcamos coherencia entre lo que se piensa, se dice y se hace, tanto en el aula como en la vida digital.",
      icon: "verified_user",
      color: "#557EBD",
    },
    {
      name: "Alegría de Aprender",
      desc: "La curiosidad activa y el asombro son el motor natural para descubrir el mundo sin miedos ni límites.",
      icon: "mood",
      color: "#F6D448",
    },
    {
      name: "Empatía & Fraternidad",
      desc: "Comunidad donde cada estudiante se siente escuchado, valorado y motivado a cuidar de los demás.",
      icon: "diversity_1",
      color: "#DA474A",
    },
    {
      name: "Perseverancia & Carácter",
      desc: "Enseñamos a abrazar los desafíos paso a paso con resiliencia, disciplina y orgullo por el esfuerzo.",
      icon: "hiking",
      color: "#8EB674",
    },
    {
      name: "Innovación con Sentido",
      desc: "Usamos la tecnología, el inglés y la robótica para crear soluciones que generen bienestar en la sociedad.",
      icon: "lightbulb",
      color: "#48A9A6",
    },
    {
      name: "Alianza Familiar",
      desc: "La escuela y el hogar caminan juntos: la confianza mutua es el cimiento de la felicidad infantil.",
      icon: "handshake",
      color: "#E9A25E",
    },
  ];

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
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F6D448] shadow-md">
                  <span className="material-symbols-outlined text-3xl">flag</span>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#F6D448]/20 border border-[#F6D448]/30 text-[#F6D448] text-xs font-bold uppercase tracking-widest">
                  Nuestra Misión
                </span>
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white leading-tight">
                Inspirar y formar integralmente a cada estudiante en un ambiente de afecto y rigor constructivo
              </h3>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-body">
                Desarrollamos el <strong>pensamiento crítico</strong>, la <strong>fluidez bilingüe natural AMCO</strong>, la <strong>creatividad científica STEAM</strong> y la <strong>sensibilidad artística</strong> en un entorno seguro y personalizado, guiando a niñas y niños a descubrir sus talentos con confianza y alegría para transformar positivamente su entorno.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Bilingüismo AMCO</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Afecto Seguro</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Pensamiento STEAM</span>
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">Ética en la Acción</span>
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

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#557EBD]/10 border border-[#557EBD]/25 flex items-center justify-center text-[#3b5692] shadow-sm">
                  <span className="material-symbols-outlined text-3xl">visibility</span>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#557EBD]/10 border border-[#557EBD]/20 text-[#3b5692] text-xs font-bold uppercase tracking-widest">
                  Nuestra Visión
                </span>
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#0A1128] leading-tight">
                Ser la comunidad educativa bilingüe de referencia en León y la región Bajío
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
                Reconocida por la calidez de su comunidad escolar, la vanguardia metodológica de sus docentes y la solidez ética y emocional de sus egresados: jóvenes seguros de sí mismos, capaces de comunicarse con fluidez en cualquier escenario global y preparados para liderar con sabiduría en la era de la inteligencia artificial.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-8 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
              <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Liderazgo Bajío</span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Innovación Pedagógica</span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Criterio Ético Digital</span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Excelencia Humana</span>
            </div>
          </motion.div>

        </div>

        {/* Core Values Grid */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#557EBD] block">
              CIMIENTO FORMATIVO
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#0A1128]">
              Los Valores que Guían Cada Jornada Escolar
            </h3>
            <p className="text-slate-600 text-sm sm:text-base font-body">
              No se memorizan en un pizarrón: se experimentan en el juego, el diálogo cotidiano, el deporte y el trabajo en equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 space-y-3 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${v.color}18`,
                    color: v.color,
                  }}
                >
                  <span className="material-symbols-outlined text-2xl">{v.icon}</span>
                </div>
                <h4 className="font-headline text-lg font-bold text-[#0A1128]">
                  {v.name}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-body">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

