"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AMBASSADORS } from "@/lib/constants";

// Animaciones sutiles y personalizadas para cada embajador
const AMBASSADOR_ANIMATIONS: Record<
  string,
  {
    y: number[];
    x?: number[];
    rotate?: number[];
    scale?: number[];
    duration: number;
  }
> = {
  sol: {
    y: [0, -6, 0],
    rotate: [-2, 2, -2],
    duration: 3.6,
  },
  nube: {
    y: [-5, 3, -5],
    x: [-3, 3, -3],
    duration: 4.4,
  },
  montana: {
    y: [0, -4, 0],
    scale: [1, 1.03, 1],
    duration: 4.8,
  },
  estrella: {
    y: [-6, 3, -6],
    rotate: [3, -3, 3],
    duration: 3.3,
  },
  buho: {
    y: [0, -5, 0],
    rotate: [-2.5, 2.5, -2.5],
    duration: 3.9,
  },
};

const MASCOT_PILLS = [
  { id: "sol", label: "Sol", emoji: "☀️" },
  { id: "nube", label: "Nube", emoji: "☁️" },
  { id: "montana", label: "Montaña", emoji: "⛰️" },
  { id: "estrella", label: "Estrella", emoji: "⭐" },
  { id: "buho", label: "Búho", emoji: "🦉" },
];

const MASCOT_VALUES: Record<string, string> = {
  sol: "✦ Apego, Ternura & Confianza",
  nube: "✦ Inmersión Bilingüe Natural",
  montana: "✦ Perseverancia & Valores",
  estrella: "✦ Expresión Creativa STEAM",
  buho: "✦ Liderazgo Ético & Sabiduría",
};

export function AmbassadorsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardEl = container.firstElementChild as HTMLElement | null;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 16; // width + gap
    const current = Math.round(container.scrollLeft / cardWidth);
    if (current !== activeIdx && current >= 0 && current < AMBASSADORS.length) {
      setActiveIdx(current);
    }
  }, [activeIdx]);

  const scrollToMascot = useCallback((idx: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[idx]) {
      isProgrammaticScroll.current = true;
      setActiveIdx(idx);
      (cards[idx] as HTMLElement).scrollIntoView({
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
    scrollToMascot(Math.max(0, activeIdx - 1));
  };

  const handleNext = () => {
    scrollToMascot(Math.min(AMBASSADORS.length - 1, activeIdx + 1));
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <section id="nosotros" className="w-full bg-white py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <div id="embajadores" className="scroll-mt-24" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-3">
          <span
            className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full inline-block"
            style={{
              backgroundColor: "rgb(214, 227, 255)",
              color: "rgb(21, 71, 130)",
            }}
          >
            Acompañamiento Socioemocional
          </span>

          <h2 className="font-headline text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#191c1e] tracking-tight">
            Nuestros 5 Embajadores del Aprendizaje
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
            Cada personaje representa un pilar en el viaje evolutivo de nuestros alumnos, haciendo del aprendizaje un proceso alegre, significativo y con propósito.
          </p>
        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET (<lg): Modern Carousel with Snap & Peek */}
        {/* ======================================================== */}
        <div className="block lg:hidden space-y-3">
          {/* Quick Mascot Selector Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar pb-1 px-1 w-full">
            {AMBASSADORS.map((ambassador, idx) => {
              const isActive = idx === activeIdx;
              const pillMeta = MASCOT_PILLS[idx];
              return (
                <button
                  key={ambassador.id}
                  type="button"
                  onClick={() => scrollToMascot(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "shadow-md scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                  style={{
                    backgroundColor: isActive ? ambassador.badgeBg : undefined,
                    color: isActive ? ambassador.badgeColor : undefined,
                  }}
                >
                  <span className="text-sm">{pillMeta?.emoji}</span>
                  <span>{pillMeta?.label || ambassador.name}</span>
                </button>
              );
            })}
          </div>

          {/* Swipeable Carousel Reel with Peek */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {AMBASSADORS.map((ambassador, idx) => {
              const anim =
                AMBASSADOR_ANIMATIONS[ambassador.id] || {
                  y: [0, -5, 0],
                  duration: 3.8,
                };
              const valuePill = MASCOT_VALUES[ambassador.id];
              const isActive = idx === activeIdx;

              return (
                <article
                  key={ambassador.id}
                  onClick={() => scrollToMascot(idx)}
                  className={`w-[80vw] max-w-[290px] shrink-0 snap-center snap-always rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 shadow-md ${
                    isActive
                      ? "shadow-xl ring-2 ring-offset-2 ring-slate-400/40"
                      : "opacity-85"
                  }`}
                  style={{
                    backgroundColor: ambassador.bgColor,
                    border: `1.5px solid ${ambassador.borderColor}`,
                    scrollSnapStop: "always",
                  }}
                >
                  {/* Contenedor del personaje con animación continua flotante */}
                  <motion.div
                    className="w-24 h-24 mb-3 flex items-center justify-center relative cursor-pointer"
                    animate={{
                      y: anim.y,
                      x: anim.x || 0,
                      rotate: anim.rotate || 0,
                      scale: anim.scale || 1,
                    }}
                    transition={{
                      duration: anim.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.25,
                    }}
                  >
                    <Image
                      alt={ambassador.name}
                      src={ambassador.image}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain select-none pointer-events-none drop-shadow-md"
                      style={{ mixBlendMode: "multiply" }}
                      loading="lazy"
                    />
                  </motion.div>

                  <h3 className="font-headline text-lg sm:text-xl font-bold text-slate-900 mb-1 text-center leading-tight whitespace-normal break-words max-w-full">
                    {ambassador.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[58px]">
                    {ambassador.description}
                  </p>

                  {valuePill && (
                    <div className="mt-3 pt-3 border-t border-black/10 w-full">
                      <span className="text-[11px] font-bold text-slate-700 tracking-wide">
                        {valuePill}
                      </span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Carousel Controls: Arrows & Indicators */}
          <div className="flex items-center justify-between pt-2 px-2 max-w-sm mx-auto">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIdx === 0}
              aria-label="Embajador anterior"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                activeIdx === 0
                  ? "opacity-30 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {AMBASSADORS.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => scrollToMascot(idx)}
                  aria-label={`Ver ${m.name}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIdx
                      ? "w-7 bg-[#3b5692]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIdx === AMBASSADORS.length - 1}
              aria-label="Embajador siguiente"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                activeIdx === AMBASSADORS.length - 1
                  ? "opacity-30 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP (lg and above): 5-Column Grid                    */}
        {/* ======================================================== */}
        <div className="hidden lg:grid grid-cols-5 gap-6 w-full">
          {AMBASSADORS.map((ambassador, idx) => {
            const anim =
              AMBASSADOR_ANIMATIONS[ambassador.id] || {
                y: [0, -5, 0],
                duration: 3.8,
              };

            return (
              <motion.div
                key={ambassador.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 shadow-xs hover:shadow-xl overflow-hidden"
                style={{
                  backgroundColor: ambassador.bgColor,
                  border: `1px solid ${ambassador.borderColor}`,
                }}
              >
                {/* Contenedor del personaje con animación continua flotante */}
                <motion.div
                  className="w-28 h-28 mb-3 flex items-center justify-center relative cursor-pointer"
                  animate={{
                    y: anim.y,
                    x: anim.x || 0,
                    rotate: anim.rotate || 0,
                    scale: anim.scale || 1,
                  }}
                  transition={{
                    duration: anim.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.25,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 0,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                >
                  <Image
                    alt={ambassador.name}
                    src={ambassador.image}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm"
                    style={{ mixBlendMode: "multiply" }}
                    loading="lazy"
                  />
                </motion.div>

                <h3 className="font-headline text-lg sm:text-xl font-bold text-slate-900 mb-1 text-center leading-tight whitespace-normal break-words max-w-full">
                  {ambassador.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {ambassador.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
