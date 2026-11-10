"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export function PrimariaPilares() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pilares = [
    {
      id: "lectoescritura",
      pillLabel: "Lectoescritura",
      emoji: "📖",
      headerBg: "#557EBD",
      icon: "menu_book",
      iconColor: "text-[#557EBD]",
      title: "Lectoescritura & Fonética",
      desc: "Inmersión bilingüe activa y metodología AMCO continua, desarrollando fonética natural, vocabulario rico, producción escrita y comprensión profunda sin traducción mental mecánica.",
    },
    {
      id: "logica",
      pillLabel: "Lógica",
      emoji: "🔢",
      headerBg: "#E5A93C",
      icon: "calculate",
      iconColor: "text-[#b47a16]",
      title: "Lógica & Razonamiento",
      desc: "Material concreto estructurado para clasificación, seriación matemática, nociones espaciales y resolución heurística antes de fórmulas mecánicas abstractas.",
    },
    {
      id: "ciencia",
      pillLabel: "Ciencia STEAM",
      emoji: "🔬",
      headerBg: "#2E9F6E",
      icon: "science",
      iconColor: "text-[#2E9F6E]",
      title: "Exploración Científica",
      desc: "Aulas y laboratorios equipados para ensamblaje maker, comprensión experimental de causa y efecto, biología práctica y diseño colaborativo de prototipos.",
    },
    {
      id: "psicomotricidad",
      pillLabel: "Deporte & TKD",
      emoji: "🥋",
      headerBg: "#E9A25E",
      icon: "sports_kabaddi",
      iconColor: "text-[#E9A25E]",
      title: "Psicomotricidad & Deporte",
      desc: "Circuitos motores, atletismo formativo, orientación espacial y formación marcial en Taekwondo para fortalecer carácter, autocontrol, resiliencia y salud corporal.",
    },
    {
      id: "arte",
      pillLabel: "Música & Arte",
      emoji: "🎵",
      headerBg: "#345F9C",
      icon: "music_note",
      iconColor: "text-[#345F9C]",
      title: "Sensibilidad Artística",
      desc: "Formación musical integrada en el horario ordinario con ejecución instrumental, lectura de partituras y práctica auditiva, además de artes plásticas formativas.",
    },
    {
      id: "emocional",
      pillLabel: "Socioemocional",
      emoji: "❤️",
      headerBg: "#DA474A",
      icon: "favorite",
      iconColor: "text-[#DA474A]",
      title: "Inteligencia Emocional",
      desc: "Educación del carácter, autorregulación asertiva con Guías Everest, cultivo de la amistad, respeto mutuo y gratitud comunitaria con acompañamiento tutorial cercano.",
    },
  ];

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardEl = container.firstElementChild as HTMLElement | null;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 14; // card width + gap
    const current = Math.round(container.scrollLeft / cardWidth);
    if (current !== activeIdx && current >= 0 && current < pilares.length) {
      setActiveIdx(current);
    }
  }, [activeIdx, pilares.length]);

  const scrollToCard = useCallback((idx: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const items = container.children;
    if (items[idx]) {
      isProgrammaticScroll.current = true;
      setActiveIdx(idx);
      (items[idx] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
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
    scrollToCard(Math.min(pilares.length - 1, activeIdx + 1));
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white" id="pilares-primaria">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3">
          <span
            className="text-xs uppercase font-bold tracking-widest px-4 py-1.5 rounded-full text-white shadow-xs"
            style={{ backgroundColor: "#546FAC" }}
          >
            Formación Integral & Excelencia Académica
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Pilares de Formación en Primaria Everest
          </h2>
          <p className="font-body text-slate-600 text-base sm:text-lg">
            Una estructura pedagógica balanceada que despierta vocaciones, afianza el carácter y forja mentes analíticas con sentido humanista.
          </p>
        </div>

        {/* ======================================================== */}
        {/* MOBILE (<768px): Carousel with Snap & Peek               */}
        {/* ======================================================== */}
        <div className="block md:hidden space-y-3">
          {/* Quick Selector Pills */}
          <div className="flex items-center justify-start gap-1.5 overflow-x-auto no-scrollbar pb-1 px-1 w-full">
            {pilares.map((pilar, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={pilar.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "shadow-md scale-105 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                  style={{
                    backgroundColor: isActive ? pilar.headerBg : undefined,
                  }}
                >
                  <span className="text-sm">{pilar.emoji}</span>
                  <span>{pilar.pillLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Swipeable Carousel Reel with Snap & Peek */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 py-2 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {pilares.map((pilar, idx) => {
              const isActive = idx === activeIdx;
              return (
                <article
                  key={pilar.id}
                  onClick={() => scrollToCard(idx)}
                  className={`w-[80vw] max-w-[295px] shrink-0 snap-center snap-always rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[250px] ${
                    isActive
                      ? "shadow-xl border-slate-300 ring-2 ring-offset-2 ring-slate-400/40 scale-[1.01]"
                      : "border-slate-200/80 opacity-85 shadow-md"
                  }`}
                  style={{ scrollSnapStop: "always" }}
                >
                  {/* Colored Card Header */}
                  <div
                    className="p-4 relative text-white flex items-center shrink-0 min-h-[72px]"
                    style={{ backgroundColor: pilar.headerBg }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl bg-white shadow-md flex items-center justify-center shrink-0 ${pilar.iconColor}`}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {pilar.icon}
                        </span>
                      </div>
                      <h3 className="font-headline text-[17px] font-bold text-white leading-tight">
                        {pilar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body (60%) */}
                  <div className="p-4 flex-1 flex flex-col justify-center bg-white">
                    <p className="text-xs text-slate-600 leading-relaxed font-body">
                      {pilar.desc}
                    </p>
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
              aria-label="Pilar anterior"
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
              {pilares.map((pilar, idx) => (
                <button
                  key={pilar.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Ver ${pilar.pillLabel}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIdx
                      ? "w-6 bg-[#546FAC]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIdx === pilares.length - 1}
              aria-label="Pilar siguiente"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                activeIdx === pilares.length - 1
                  ? "opacity-30 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TABLET & DESKTOP (>=768px): Grid Layout                  */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1280px] mx-auto">
          {pilares.map((pilar) => (
            <div
              key={pilar.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group min-h-[250px] sm:min-h-[260px]"
            >
              {/* Colored Card Header */}
              <div
                className="p-5 sm:p-6 relative text-white flex items-center shrink-0 min-h-[80px]"
                style={{ backgroundColor: pilar.headerBg }}
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 ${pilar.iconColor}`}
                  >
                    <span className="material-symbols-outlined text-[22px] sm:text-[24px]">
                      {pilar.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg sm:text-[20px] lg:text-[21px] font-bold text-white leading-tight">
                    {pilar.title}
                  </h3>
                </div>
              </div>

              {/* Card Body: Proporción 60% restante */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center bg-white">
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-body">
                  {pilar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
