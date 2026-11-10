"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PILLARS } from "@/lib/constants";

export function PilaresSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const isMobileProgrammatic = useRef(false);
  const mobileScrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileTouchStartX = useRef<number | null>(null);
  const mobileTouchStartY = useRef<number | null>(null);
  const mobileTouchStartIdx = useRef<number>(0);

  const activePillar = PILLARS[activeIdx];

  const scrollToPillar = useCallback((idx: number) => {
    if (!scrollerRef.current) return;
    const firstCard = scrollerRef.current.firstElementChild as HTMLElement | null;
    const cardHeight = firstCard ? firstCard.offsetHeight + 24 : 399;
    isProgrammaticRef.current = true;
    setActiveIdx(idx);

    scrollerRef.current.scrollTo({
      top: idx * cardHeight,
      behavior: "smooth",
    });

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticRef.current = false;
    }, 600);
  }, []);

  const scrollToMobileCard = useCallback((idx: number) => {
    if (!mobileScrollerRef.current) return;
    const container = mobileScrollerRef.current;
    const items = container.children;
    if (items[idx]) {
      isMobileProgrammatic.current = true;
      setActiveIdx(idx);
      const cardEl = items[idx] as HTMLElement;
      const targetLeft = cardEl.offsetLeft - (container.clientWidth - cardEl.offsetWidth) / 2;
      container.scrollTo({ left: targetLeft, behavior: "smooth" });
      if (mobileScrollTimeout.current) clearTimeout(mobileScrollTimeout.current);
      mobileScrollTimeout.current = setTimeout(() => {
        isMobileProgrammatic.current = false;
      }, 450);
    }
  }, []);

  const handleMobileTouchStart = (e: React.TouchEvent) => {
    mobileTouchStartIdx.current = activeIdx;
    mobileTouchStartX.current = e.touches[0].clientX;
    mobileTouchStartY.current = e.touches[0].clientY;
  };

  const handleMobileTouchEnd = (e: React.TouchEvent) => {
    if (mobileTouchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = mobileTouchStartX.current - endX;
    const diffY = (mobileTouchStartY.current ?? endY) - endY;

    // Detect horizontal swipe and advance strictly by 1 card
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 25) {
      if (diffX > 0) {
        const nextIdx = Math.min(mobileTouchStartIdx.current + 1, PILLARS.length - 1);
        selectPillar(nextIdx);
      } else {
        const prevIdx = Math.max(mobileTouchStartIdx.current - 1, 0);
        selectPillar(prevIdx);
      }
    }
    mobileTouchStartX.current = null;
    mobileTouchStartY.current = null;
  };

  const handleMobileScroll = useCallback(() => {
    if (isMobileProgrammatic.current || !mobileScrollerRef.current) return;
    const container = mobileScrollerRef.current;
    const cardEl = container.firstElementChild as HTMLElement | null;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 14;
    let current = Math.round(container.scrollLeft / cardWidth);

    // Limit index change to strictly +/- 1 while touch is active
    if (mobileTouchStartX.current !== null) {
      if (current > mobileTouchStartIdx.current + 1) current = mobileTouchStartIdx.current + 1;
      if (current < mobileTouchStartIdx.current - 1) current = mobileTouchStartIdx.current - 1;
    }

    if (current !== activeIdx && current >= 0 && current < PILLARS.length) {
      setActiveIdx(current);
    }
  }, [activeIdx]);

  const selectPillar = useCallback(
    (idx: number) => {
      setActiveIdx(idx);
      scrollToPillar(idx);
      scrollToMobileCard(idx);
    },
    [scrollToPillar, scrollToMobileCard]
  );

  const handleScroll = () => {
    if (isProgrammaticRef.current || !scrollerRef.current) return;
    const scrollTop = scrollerRef.current.scrollTop;
    const firstCard = scrollerRef.current.firstElementChild as HTMLElement | null;
    const cardHeight = firstCard ? firstCard.offsetHeight + 24 : 399;
    const current = Math.round(scrollTop / cardHeight);
    if (current !== activeIdx && current >= 0 && current < PILLARS.length) {
      setActiveIdx(current);
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIdx > 0 ? activeIdx - 1 : PILLARS.length - 1;
    selectPillar(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIdx < PILLARS.length - 1 ? activeIdx + 1 : 0;
    selectPillar(nextIdx);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (mobileScrollTimeout.current) clearTimeout(mobileScrollTimeout.current);
    };
  }, []);

  return (
    <section
      id="pilares-showcase"
      className="w-full bg-white text-[#191c1e] py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#3b5692]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#d6e3ff]/30 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        {/* ======================================================== */}
        {/* MOBILE (< md / < 768px): Mejor UI/UX con Carrusel & Snap */}
        {/* ======================================================== */}
        <div className="block md:hidden space-y-4">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto space-y-1.5 mb-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#345f9c]">
              Ventajas Everest · Formación de Vanguardia
            </span>
            <h2 className="font-headline text-2xl font-bold text-slate-900 tracking-tight">
              Pilares que Marcan la Diferencia
            </h2>
          </div>

          {/* Stepper Tabs Selector (Horizontal Pills) */}
          <div className="flex items-center justify-start gap-1.5 overflow-x-auto no-scrollbar pb-1 px-1">
            {PILLARS.map((p, bIdx) => {
              const isActive = bIdx === activeIdx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => selectPillar(bIdx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#3b5692] text-white shadow-md scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span className="text-[11px] opacity-80">0{bIdx + 1}</span>
                  <span>{p.shortTitle.replace(/^\d+\.\s*/, "")}</span>
                </button>
              );
            })}
          </div>

          {/* Carrusel Deslizable con Snap & Peek (Mejor UX móvil) */}
          <div
            ref={mobileScrollerRef}
            onScroll={handleMobileScroll}
            onTouchStart={handleMobileTouchStart}
            onTouchEnd={handleMobileTouchEnd}
            className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 py-2 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              touchAction: "pan-y",
            }}
          >
            {PILLARS.map((p, idx) => {
              const isActive = idx === activeIdx;
              return (
                <article
                  key={p.id}
                  onClick={() => selectPillar(idx)}
                  className={`w-[82vw] max-w-[305px] shrink-0 snap-center snap-always rounded-3xl overflow-hidden border transition-all duration-300 bg-white flex flex-col justify-between cursor-pointer min-h-[360px] ${
                    isActive
                      ? "shadow-2xl border-[#3b5692]/40 ring-2 ring-[#3b5692]/20 scale-[1.01]"
                      : "shadow-md border-slate-200/80 opacity-90"
                  }`}
                  style={{ scrollSnapStop: "always" }}
                >
                  {/* Foto Superior Limpia (Sin textos ni iconos encima) */}
                  <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
                    <Image
                      alt={p.cardTitle}
                      src={p.image}
                      fill
                      sizes="305px"
                      className="object-cover"
                      style={{ objectPosition: "center 30%" }}
                    />
                  </div>

                  {/* Cuerpo Narrativo */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start space-y-2">
                    <span className="text-[10px] uppercase font-bold text-[#345f9c] tracking-widest block">
                      {p.category}
                    </span>
                    <h3 className="font-headline text-lg font-bold text-slate-900 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-body">
                      {p.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Controles de Navegación Móvil */}
          <div className="flex flex-col items-center pt-2 space-y-1.5 max-w-xs mx-auto">
            <div className="flex items-center justify-between w-full">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Pilar anterior"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-700 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer hover:bg-slate-50"
              >
                <span className="material-symbols-outlined text-[19px]">chevron_left</span>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {PILLARS.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => selectPillar(idx)}
                    aria-label={`Ver ${p.shortTitle}`}
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
                aria-label="Pilar siguiente"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-700 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer hover:bg-slate-50"
              >
                <span className="material-symbols-outlined text-[19px]">chevron_right</span>
              </button>
            </div>

            <span className="text-[11px] text-slate-400 font-medium">
              Desliza horizontalmente para explorar (0{activeIdx + 1} / 04)
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TABLET (md to lg / 768px - 1023px): Lado a Lado          */}
        {/* ======================================================== */}
        <div className="hidden md:block lg:hidden space-y-6">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto space-y-2 mb-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#345f9c]">
              Ventajas Everest · Formación de Vanguardia
            </span>
            <h2 className="font-headline text-3xl font-bold text-slate-900 tracking-tight">
              Pilares que Marcan la Diferencia
            </h2>
          </div>

          {/* Stepper Tabs Selector (Horizontal Pills) */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {PILLARS.map((p, bIdx) => {
              const isActive = bIdx === activeIdx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => selectPillar(bIdx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#3b5692] text-white shadow-md scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span className="text-[11px] opacity-80">0{bIdx + 1}</span>
                  <span>{p.shortTitle.replace(/^\d+\.\s*/, "")}</span>
                </button>
              );
            })}
          </div>

          {/* Card LADO A LADO (Foto Izquierda + Contenido Derecha) */}
          <div className="bg-white rounded-3xl p-5 md:py-6 md:pr-7 md:pl-2.5 shadow-xl border border-slate-200/80">
            <div className="grid grid-cols-12 gap-5 md:gap-6 items-center">
              {/* Lado Izquierdo: Foto más cercana a la orilla izquierda */}
              <div className="col-span-5 relative h-[360px] md:h-[390px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      alt={activePillar.cardTitle}
                      src={activePillar.image}
                      fill
                      sizes="450px"
                      className="object-cover"
                      style={{ objectPosition: "center 30%" }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Lado Derecho: Contenido */}
              <div className="col-span-7 flex flex-col justify-between space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-3.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-bold text-[#345f9c] tracking-widest block">
                        {activePillar.category}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        0{activeIdx + 1} / 04
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl font-bold text-slate-900 leading-tight">
                      {activePillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {activePillar.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Controles Tablet */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Pilar anterior"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>

                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {PILLARS.map((p, idx) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => selectPillar(idx)}
                        aria-label={`Ver ${p.shortTitle}`}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === activeIdx
                            ? "w-8 bg-[#3b5692]"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Pilar siguiente"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP (lg and above): Side-by-Side Dual-Track Showcase */}
        {/* ======================================================== */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LADO IZQUIERDO: Títulos sincronizados e indicadores */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2">
            {/* Panel de texto dinámico con transición suave sin saltos */}
            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="space-y-5"
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#546fac]/10 border border-[#546fac]/20 w-fit backdrop-blur-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3b5692] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3b5692]">
                      {activePillar.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase font-bold text-[#345f9c] tracking-widest block">
                      {activePillar.category}
                    </span>
                    <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-slate-900 font-bold leading-tight">
                      {activePillar.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed min-h-[80px]">
                    {activePillar.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stepper Tabs */}
            <div className="pt-4 space-y-4 border-t border-slate-200">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="text-slate-900 font-bold tracking-wider">
                  0{activeIdx + 1} / 04
                </span>
                <span className="text-[11px] uppercase tracking-widest text-slate-400">
                  Desplaza para explorar
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2.5 w-full">
                {PILLARS.map((p, bIdx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => scrollToPillar(bIdx)}
                    className="group text-left cursor-pointer focus:outline-none"
                  >
                    <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full bg-[#3b5692] transition-all duration-300"
                        style={{ width: bIdx <= activeIdx ? "100%" : "0%" }}
                      />
                    </div>
                    <span
                      className={`text-[11px] mt-1.5 block transition-colors ${
                        bIdx === activeIdx
                          ? "font-bold text-[#3b5692]"
                          : "font-semibold text-slate-500 group-hover:text-[#3b5692]"
                      }`}
                    >
                      {p.shortTitle}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Tarjetas con scroll interno fluido */}
          <div className="lg:col-span-7">
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
              data-lenis-prevent
              className="h-[430px] sm:h-[480px] lg:h-[530px] overflow-y-auto pr-2 flex flex-col gap-6 scroll-smooth snap-y snap-mandatory rounded-3xl custom-scrollbar"
            >
              {PILLARS.map((pillar, idx) => (
                <article
                  key={pillar.id}
                  onClick={() => scrollToPillar(idx)}
                  className="w-full h-[320px] sm:h-[375px] shrink-0 rounded-3xl bg-slate-900 border border-slate-200/50 shadow-xl overflow-hidden relative group snap-start cursor-pointer"
                >
                  <Image
                    alt={pillar.cardTitle}
                    src={pillar.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 650px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ objectPosition: "center 30%" }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 pointer-events-none" />

                  {/* Header overlay */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 text-slate-900 backdrop-blur-md shadow-md">
                      {pillar.pill}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-md backdrop-blur-md">
                      <span className={`material-symbols-outlined text-[20px] ${pillar.iconColor}`}>
                        {pillar.icon}
                      </span>
                    </span>
                  </div>

                  {/* Footer overlay */}
                  <div className="absolute bottom-5 left-6 right-6 text-white pointer-events-none">
                    <h3 className="font-headline text-xl sm:text-2xl font-bold drop-shadow-md text-white mb-1">
                      {pillar.cardTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/95 drop-shadow-sm font-medium">
                      {pillar.cardSubtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
