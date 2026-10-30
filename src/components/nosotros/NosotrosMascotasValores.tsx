"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AMBASSADORS } from "@/lib/constants";

export function NosotrosMascotasValores() {
  const [selectedId, setSelectedId] = useState(AMBASSADORS[0].id);
  const activeMascot = AMBASSADORS.find((m) => m.id === selectedId) || AMBASSADORS[0];

  const mascotDetails: Record<
    string,
    {
      etapa: string;
      virtudPrincipal: string;
      enElAula: string;
      frase: string;
    }
  > = {
    sol: {
      etapa: "Maternal (1 a 3 Años)",
      virtudPrincipal: "Ternura, Apego Seguro & Confianza",
      enElAula:
        "Sol acompaña los primeros pasos fuera de casa. Enseña a compartir con alegría, a expresar emociones sin miedo y a sentir que el aula es un espacio tan amoroso y cálido como el hogar.",
      frase: "«Cada pequeño paso merece un rayo de sol y un abrazo seguro.»",
    },
    nube: {
      etapa: "Preescolar Bilingüe (Kínder 1 a 3)",
      virtudPrincipal: "Curiosidad, Fonética & Fluidez",
      enElAula:
        "Nube vuela libre por la imaginación de los niños. Les enseña a escuchar y pronunciar el inglés con naturalidad lúdica, fomentando el asombro científico, el amor por los libros y la empatía mutua.",
      frase: "«Aprender en dos idiomas es tan liviano y mágico como jugar con las nubes.»",
    },
    montana: {
      etapa: "Comunidad & Formación del Carácter",
      virtudPrincipal: "Perseverancia, Firmeza & Compañerismo",
      enElAula:
        "Montaña es el símbolo del esfuerzo alegre y la superación personal. Enseña a levantarse cuando algo no sale a la primera, a respetar las reglas y a comprender que la cima se alcanza paso a paso.",
      frase: "«Donde tus sueños alcanzan la cima: la constancia vence cualquier obstáculo.»",
    },
    estrella: {
      etapa: "Primaria Inicial & STEAM",
      virtudPrincipal: "Creatividad, Brillo Personal & Sensibilidad",
      enElAula:
        "Estrella ilumina el talento único de cada alumno en la orquesta infantil, las artes visuales y el laboratorio STEAM. Enseña a colaborar en equipo respetando la luz y las ideas de los demás.",
      frase: "«Todos los niños tienen un talento que merece brillar con luz propia.»",
    },
    buho: {
      etapa: "Primaria Mayor & Liderazgo",
      virtudPrincipal: "Sabiduría, Ética Digital & Pensamiento Crítico",
      enElAula:
        "Búho guía a los estudiantes más grandes en el discernimiento responsable: pensar antes de actuar, debatir con fundamentos sólidos y utilizar la inteligencia artificial como creadores con valores humanos.",
      frase: "«El conocimiento es poderoso cuando se guía por la rectitud y la sabiduría.»",
    },
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-[#0A1128] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#557EBD]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#F6D448]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F6D448] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <span className="material-symbols-outlined text-[16px]">pets</span>
            <span>Inteligencia Socioemocional en el Aula</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Nuestros Embajadores Everest: Virtudes con Rostro y Corazón
          </h2>

          <p className="text-slate-300 font-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            En Instituto Everest los valores no son conceptos abstractos: son compañeros entrañables que guían el crecimiento socioemocional de tus hijos en cada etapa.
          </p>
        </div>

        {/* Mascot Selector Bar */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5">
          {AMBASSADORS.map((mascot) => {
            const isSelected = selectedId === mascot.id;
            return (
              <button
                key={mascot.id}
                type="button"
                onClick={() => setSelectedId(mascot.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-white text-slate-900 shadow-xl scale-105 border-2 border-[#F6D448]"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: mascot.badgeBg }}
                />
                <span>{mascot.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Mascot Feature Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMascot.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-6 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Mascot Illustration with Glow */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div
                  className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-6 flex items-center justify-center shadow-2xl border transition-all duration-500"
                  style={{
                    backgroundColor: activeMascot.bgColor,
                    borderColor: activeMascot.borderColor,
                  }}
                >
                  <Image
                    alt={activeMascot.name}
                    src={activeMascot.image}
                    width={260}
                    height={260}
                    priority
                    className="object-contain drop-shadow-2xl max-h-full"
                  />
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                    style={{
                      backgroundColor: activeMascot.badgeBg,
                      color: activeMascot.badgeColor,
                    }}
                  >
                    {activeMascot.level}
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white">
                    {activeMascot.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F6D448] font-semibold uppercase tracking-wider">
                    {mascotDetails[activeMascot.id]?.etapa}
                  </p>
                </div>
              </div>

              {/* Right Column: Pedagogical Details & Quote */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge Virtud */}
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#F6D448] block">
                    VIRTUD CARDINAL
                  </span>
                  <h4 className="font-headline text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {mascotDetails[activeMascot.id]?.virtudPrincipal}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-body">
                  {mascotDetails[activeMascot.id]?.enElAula}
                </p>

                {/* Mascot Quote Card */}
                <div className="p-6 rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-md relative overflow-hidden">
                  <span className="material-symbols-outlined text-4xl text-[#F6D448] opacity-40 absolute top-3 right-3 select-none pointer-events-none">
                    format_quote
                  </span>
                  <p className="font-headline italic text-base sm:text-lg text-white leading-relaxed pr-6">
                    {mascotDetails[activeMascot.id]?.frase}
                  </p>
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="material-symbols-outlined text-[18px] text-[#F6D448]">
                      verified
                    </span>
                    <span>Validación y contención socioemocional</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="material-symbols-outlined text-[18px] text-[#F6D448]">
                      psychology
                    </span>
                    <span>Refuerzo positivo en el aula y en casa</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

