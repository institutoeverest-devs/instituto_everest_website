"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface AreaItem {
  id: string;
  pillLabel: string;
  emoji: string;
  headerBg: string;
  icon: string;
  iconWrapper: string;
  title: string;
  titleClass: string;
  quote: string;
  quoteClass: string;
  desc: string;
}

const AREAS: AreaItem[] = [
  {
    id: "lectoescritura",
    pillLabel: "Lectoescritura",
    emoji: "📖",
    headerBg: "#557EBD",
    icon: "menu_book",
    iconWrapper: "bg-white text-[#557EBD]",
    title: "Lectoescritura & Fonética",
    titleClass: "text-white",
    quote: "«Palabras que despiertan su propia voz en dos idiomas desde el primer día.»",
    quoteClass: "text-white/90",
    desc: "Inmersión bilingüe activa y metodología AMCO implementada desde 1º de Preescolar (Kínder 1), desarrollando fonética natural, cuentacuentos y comprensión auditiva continua sin traducción mental.",
  },
  {
    id: "logica",
    pillLabel: "Lógica",
    emoji: "🔢",
    headerBg: "#F6D448",
    icon: "calculate",
    iconWrapper: "bg-slate-900 text-[#F6D448]",
    title: "Lógica & Razonamiento",
    titleClass: "text-slate-900",
    quote: "«Comprendiendo el mundo a través de la exploración concreta.»",
    quoteClass: "text-slate-800",
    desc: "Material concreto estructurado para clasificación, seriación matemática, nociones espaciales y resolución intuitiva de problemas.",
  },
  {
    id: "ciencia",
    pillLabel: "Ciencia STEAM",
    emoji: "🔬",
    headerBg: "#2DB362",
    icon: "science",
    iconWrapper: "bg-white text-[#2DB362]",
    title: "Exploración Científica",
    titleClass: "text-white",
    quote: "«Pequeños científicos formulando grandes preguntas.»",
    quoteClass: "text-white/90",
    desc: "Aulas equipadas para ensamblaje de engranes, laboratorio sensorial, botánica con lupas y comprensión experimental de causa y efecto.",
  },
  {
    id: "psicomotricidad",
    pillLabel: "Psicomotricidad",
    emoji: "🏃",
    headerBg: "#E9A25E",
    icon: "sports_gymnastics",
    iconWrapper: "bg-white text-[#E9A25E]",
    title: "Psicomotricidad & Deporte",
    titleClass: "text-white",
    quote: "«Coordinación, equilibrio y disciplina formativa.»",
    quoteClass: "text-white/90",
    desc: "Circuitos motores especializados, equilibrio consciente, orientación espacial, atletismo infantil y formación marcial en Taekwondo.",
  },
  {
    id: "arte",
    pillLabel: "Arte & Música",
    emoji: "🎨",
    headerBg: "#546FAC",
    icon: "palette",
    iconWrapper: "bg-white text-[#546FAC]",
    title: "Sensibilidad Artística",
    titleClass: "text-white",
    quote: "«Expresión libre, texturas y apreciación artística y musical.»",
    quoteClass: "text-white/90",
    desc: "Clases formales de música curricular desde 1º de Preescolar (1 sesión semanal) mediante estimulación auditiva, rítmica y vocal, sin manejo de instrumentos musicales. Pintura de caballete y modelado con arcilla.",
  },
  {
    id: "emocional",
    pillLabel: "Inteligencia Emocional",
    emoji: "❤️",
    headerBg: "#DA474A",
    icon: "volunteer_activism",
    iconWrapper: "bg-white text-[#DA474A]",
    title: "Inteligencia Emocional",
    titleClass: "text-white",
    quote: "«Creciendo con empatía, gratitud y liderazgo ético.»",
    quoteClass: "text-white/90",
    desc: "Educación del carácter, autorregulación asertiva con Nube Everest, cultivo de la amistad, respeto mutuo y gratitud comunitaria.",
  },
];

export function PreescolarAreas() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll the active pill into view horizontally without edge clipping
  useEffect(() => {
    const activePill = pillRefs.current[activeIdx];
    if (activePill && pillsContainerRef.current) {
      activePill.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIdx]);

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card0 = container.children[0] as HTMLElement | null;
    const card1 = container.children[1] as HTMLElement | null;
    if (!card0) return;
    const step = card1 ? card1.offsetLeft - card0.offsetLeft : card0.offsetWidth + 24;
    const current = Math.round(container.scrollLeft / step);
    if (current !== activeIdx && current >= 0 && current < AREAS.length) {
      setActiveIdx(current);
    }
  }, [activeIdx]);

  const scrollToArea = useCallback((idx: number) => {
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
    scrollToArea(Math.max(0, activeIdx - 1));
  };

  const handleNext = () => {
    scrollToArea(Math.min(AREAS.length - 1, activeIdx + 1));
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-[#f2f4f6] py-14 sm:py-18 lg:py-24" id="areas-desarrollo">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <span
            className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full text-white shadow-xs inline-block"
            style={{ backgroundColor: "rgb(84, 111, 172)" }}
          >
            Formación de Excelencia
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight">
            Áreas Clave de Desarrollo & Aprendizaje Experiencial
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
            Seis dimensiones formativas donde cada niña y niño despliega su potencial mediante el descubrimiento activo y la excelencia curricular.
          </p>
        </div>

        {/* Quick Area Selector Pills */}
        <div
          ref={pillsContainerRef}
          className="w-full overflow-x-auto no-scrollbar pb-2 mb-3 sm:mb-4"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 w-max mx-auto px-4">
            {AREAS.map((area, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={area.id}
                  ref={(el) => {
                    pillRefs.current[idx] = el;
                  }}
                  type="button"
                  onClick={() => scrollToArea(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "shadow-md scale-105 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs"
                  }`}
                  style={{
                    backgroundColor: isActive ? area.headerBg : undefined,
                    color: isActive && area.id === "logica" ? "#0f172a" : undefined,
                  }}
                >
                  <span className="text-sm">{area.emoji}</span>
                  <span>{area.pillLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Swipeable Carousel Reel with Snap & Peek */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {AREAS.map((area, idx) => {
            const isActive = idx === activeIdx;

            return (
              <article
                key={area.id}
                onClick={() => scrollToArea(idx)}
                className={`w-[84vw] max-w-[320px] sm:w-[340px] sm:max-w-[350px] md:w-[350px] md:max-w-[360px] lg:w-[380px] lg:max-w-[400px] shrink-0 snap-center rounded-3xl overflow-hidden shadow-md bg-white border border-slate-200/80 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "shadow-2xl ring-2 ring-offset-2 ring-[#557EBD]/50 scale-[1.01]"
                    : "opacity-90 hover:opacity-100 hover:shadow-xl"
                }`}
                style={{ scrollSnapStop: "always" }}
              >
                {/* Header Colored Block */}
                <div
                  className="p-5 sm:p-6 lg:p-7 relative"
                  style={{ backgroundColor: area.headerBg }}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div
                      className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center shadow-lg shrink-0 ${area.iconWrapper}`}
                    >
                      <span className="material-symbols-outlined text-[26px] sm:text-[28px]">
                        {area.icon}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`font-headline text-[20px] sm:text-[22px] font-bold leading-snug ${area.titleClass}`}
                    >
                      {area.title}
                    </h3>
                    <p className={`text-xs italic mt-1 ${area.quoteClass}`}>
                      {area.quote}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 bg-white space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                    {area.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Carousel Controls: Arrows & Indicators */}
        <div className="flex items-center justify-between pt-4 px-2 max-w-sm mx-auto">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIdx === 0}
            aria-label="Área anterior"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
              activeIdx === 0
                ? "opacity-30 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-1.5">
            {AREAS.map((a, idx) => (
              <button
                key={a.id}
                type="button"
                onClick={() => scrollToArea(idx)}
                aria-label={`Ver área ${a.title}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIdx
                    ? "w-7 bg-[#557EBD]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeIdx === AREAS.length - 1}
            aria-label="Área siguiente"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
              activeIdx === AREAS.length - 1
                ? "opacity-30 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
