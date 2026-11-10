"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function NosotrosDocentesFamilia() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card0 = container.children[0] as HTMLElement | null;
    const card1 = container.children[1] as HTMLElement | null;
    if (!card0) return;
    const step = card1 ? card1.offsetLeft - card0.offsetLeft : card0.offsetWidth + 16;
    const current = Math.round(container.scrollLeft / step);
    if (current !== activeIdx && current >= 0 && current < commitments.length) {
      setActiveIdx(current);
    }
  }, [activeIdx, commitments.length]);

  const scrollToCard = useCallback((idx: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    const targetCard = cards[idx] as HTMLElement | undefined;
    if (targetCard) {
      isProgrammaticScroll.current = true;
      setActiveIdx(idx);
      const targetLeft = targetCard.offsetLeft - (container.clientWidth - targetCard.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 450);
    }
  }, []);

  const handlePrev = () => {
    scrollToCard(Math.max(0, activeIdx - 1));
  };

  const handleNext = () => {
    scrollToCard(Math.min(commitments.length - 1, activeIdx + 1));
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-10 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto space-y-12 sm:space-y-14 lg:space-y-16 relative z-10">
        
        {/* Editorial Split Header - permanece una a lado de la otra en menos de 1024px */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="md:col-span-7 space-y-4 sm:space-y-4.5 lg:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DA474A]/10 text-[#cb3c40] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
              <span>El Corazón de Nuestro Colegio</span>
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0A1128] tracking-tight leading-snug">
              Docentes con Vocación y una Alianza Indestructible con las Familias
            </h2>

            <p className="text-slate-600 font-body text-xs sm:text-sm lg:text-base leading-relaxed">
              En Instituto Everest sabemos que las mejores instalaciones y el método más innovador carecen de sentido sin el calor humano. Por eso seleccionamos maestras y maestros que no solo enseñan asignaturas, sino que inspiran vidas, cultivan la autoestima infantil y hacen equipo con los padres de familia.
            </p>
          </div>

          <div className="md:col-span-5 relative mt-4 md:mt-0">
            <div className="relative mx-auto w-full max-w-[250px] sm:max-w-[290px] md:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl border border-slate-200 aspect-[4/4.5] md:aspect-[4/5] group"
              >
                <Image
                  alt="Docente de Instituto Everest acompañando a sus alumnos"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVvrbLN7EgxsHGZRtIdzyX6ASHPXoDiC-xoW0eMg7A-GSQ6Z_dr-Jjw_Cd_gpwJYShkU0z4xlgRGXGoFncZkxHmvCuiynreCTYK9RCx8QqITC5mI6JrqD8K-X0OuktAdLAq_DJSwMdLX1VUHVnZML1kGqs5zf6Q8dpIKdgdwLIlaP87dT0dLGVCkSrKIGje_lQgY_cb0VlOdN2ipm6zhy3R8ntoUcZeU8tbmbqbd2gfMGw9GQpyuSTGf2tRFBacBjHdg"
                  fill
                  sizes="(max-width: 768px) 290px, (max-width: 1024px) 42vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 md:bottom-5 md:left-5 md:right-5 text-white space-y-0.5 md:space-y-1">
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider md:tracking-widest text-[#F6D448]">
                    COMUNIDAD EDUCATIVA LEÓN
                  </span>
                  <p className="font-headline text-sm sm:text-base md:text-lg font-bold leading-tight">
                    Vocación, paciencia y alegría en cada clase.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE (<md): Carrusel idéntico al de personajes de Home */}
        {/* ======================================================== */}
        <div className="block md:hidden space-y-3 pt-2">
          {/* Swipeable Carousel Reel with Snap & Peek */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 py-3 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {commitments.map((c, i) => {
              const isActive = i === activeIdx;
              return (
                <article
                  key={i}
                  onClick={() => scrollToCard(i)}
                  className={`w-[80vw] max-w-[290px] shrink-0 snap-center snap-always rounded-3xl p-6 bg-white border shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[220px] ${
                    isActive
                      ? "shadow-xl border-[#557EBD]/50 ring-2 ring-offset-2 ring-[#557EBD]/30 scale-[1.01]"
                      : "border-slate-200/80 opacity-90"
                  }`}
                  style={{ scrollSnapStop: "always" }}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#557EBD]/10 border border-[#557EBD]/20 text-[#3b5692] flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-headline text-base font-bold text-[#0A1128] leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed font-body">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Carousel Controls: Arrows & Indicators */}
          <div className="flex items-center justify-between pt-1 px-2 max-w-xs mx-auto">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIdx === 0}
              aria-label="Anterior"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                activeIdx === 0
                  ? "opacity-30 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5">
              {commitments.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Ver compromiso ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIdx
                      ? "w-6 bg-[#557EBD]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIdx === commitments.length - 1}
              aria-label="Siguiente"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                activeIdx === commitments.length - 1
                  ? "opacity-30 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TABLET & DESKTOP (>=md): Grid Layout                     */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
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
