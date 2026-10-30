"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function NosotrosDocentesFamilia() {
  const commitments = [
    {
      title: "Docentes Certificados AMCO & SEP",
      desc: "Nuestros profesores dominan las metodologías activas y la pedagogía bilingüe de vanguardia, renovando su certificación anualmente.",
      icon: "school",
    },
    {
      title: "Grupos de Atención Personalizada",
      desc: "Mantenemos un ratio balanceado alumno-maestro para que cada niño sea escuchado, comprendido y guiado a su propio ritmo sin masificación.",
      icon: "groups",
    },
    {
      title: "Neuroeducación & Contención Emocional",
      desc: "El equipo directivo y docente está capacitado en neurodesarrollo infantil, gestión asertiva de límites y primeros auxilios con enfoque amoroso.",
      icon: "favorite",
    },
    {
      title: "Escuela para Padres & Comunicación Activa",
      desc: "Sesiones de orientación familiar, bitácoras escolares claras y canales directos para que casa y colegio hablen siempre el mismo idioma.",
      icon: "diversity_3",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto space-y-16 relative z-10">
        
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DA474A]/10 text-[#cb3c40] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
              <span>El Corazón de Nuestro Colegio</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#0A1128] tracking-tight leading-tight">
              Docentes con Vocación y una Alianza Indestructible con las Familias
            </h2>

            <p className="text-slate-600 font-body text-base sm:text-lg leading-relaxed">
              En Instituto Everest sabemos que las mejores instalaciones y el método más innovador carecen de sentido sin el calor humano. Por eso seleccionamos maestras y maestros que no solo enseñan asignaturas, sino que inspiran vidas, cultivan la autoestima infantil y hacen equipo con los padres de familia.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 italic text-slate-800 font-headline text-base sm:text-lg leading-relaxed">
              «Educar es un acto de amor y confianza mutua. Cuando padres y maestros reman en la misma dirección, ningún sueño queda fuera del alcance de los niños.»
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] group"
            >
              <Image
                alt="Docente de Instituto Everest acompañando a sus alumnos"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVvrbLN7EgxsHGZRtIdzyX6ASHPXoDiC-xoW0eMg7A-GSQ6Z_dr-Jjw_Cd_gpwJYShkU0z4xlgRGXGoFncZkxHmvCuiynreCTYK9RCx8QqITC5mI6JrqD8K-X0OuktAdLAq_DJSwMdLX1VUHVnZML1kGqs5zf6Q8dpIKdgdwLIlaP87dT0dLGVCkSrKIGje_lQgY_cb0VlOdN2ipm6zhy3R8ntoUcZeU8tbmbqbd2gfMGw9GQpyuSTGf2tRFBacBjHdg"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F6D448]">
                  COMUNIDAD EDUCATIVA LEÓN
                </span>
                <p className="font-headline text-lg sm:text-xl font-bold leading-tight">
                  Vocación, paciencia y alegría en cada clase.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Pillars of Commitment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {commitments.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 space-y-3 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-[#557EBD]/10 border border-[#557EBD]/20 text-[#3b5692] flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-2xl">{c.icon}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-lg font-bold text-[#0A1128] leading-snug">
                  {c.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-body">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

