"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GROWTH_STAGES } from "@/lib/constants";

const DURATION_MS = 20000;

export function RutaCrecimiento() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goToStage = useCallback((stageIdx: number) => {
    setCurrentStage(stageIdx);
    setCycleKey((k) => k + 1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentStage((prev) => (prev + 1) % GROWTH_STAGES.length);
    setCycleKey((k) => k + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentStage((prev) => (prev - 1 + GROWTH_STAGES.length) % GROWTH_STAGES.length);
    setCycleKey((k) => k + 1);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - endX;
    const diffY = (touchStartY.current ?? endY) - endY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const stage = GROWTH_STAGES[currentStage];
  const isBlue = stage.theme === "blue";

  return (
    <section id="ruta-crecimiento" className="w-full bg-[#f7f9fb] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* LADO IZQUIERDO: Títulos y loaders */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#3b5692] block mb-2">
                Metodología Pedagógica & Evolución
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold tracking-tight leading-tight">
                Ruta Integral de Crecimiento
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Un continuum educativo estructurado que acompaña la maduración neurológica y emocional en cada fase escolar, desde la estimulación temprana hasta la autonomía y el liderazgo global.
            </p>

            {/* Selector de Píldoras para Móvil y Tablet (< 1024px) */}
            <div className="flex lg:hidden items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar pb-1 px-1 w-full">
              {GROWTH_STAGES.map((s, idx) => {
                const isActive = idx === currentStage;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => goToStage(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#3b5692] text-white shadow-md scale-105"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">{s.icon}</span>
                    <span>{s.shortLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Segmented Loader Bars (Desktop >= 1024px) */}
            <div className="hidden lg:block pt-2 space-y-4">
              <div className="grid grid-cols-4 gap-2.5 w-full">
                {GROWTH_STAGES.map((s, idx) => {
                  const isPast = idx < currentStage;
                  const isCurrent = idx === currentStage;

                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goToStage(idx)}
                      className="group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3b5692] rounded-full"
                      aria-label={`Ir a la etapa ${s.shortLabel}`}
                    >
                      <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden relative">
                        {isPast && (
                          <div className="w-full h-full bg-[#546FAC] rounded-full" />
                        )}
                        {isCurrent && (
                          <div
                            key={`rc-bar-${currentStage}-${cycleKey}`}
                            onAnimationEnd={handleNext}
                            className="w-full h-full bg-[#546FAC] rounded-full origin-left"
                            style={{
                              animation: `fillProgressLinear ${DURATION_MS}ms linear forwards`,
                              animationPlayState: isPaused ? "paused" : "running",
                              transformOrigin: "left",
                            }}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Indicadores de etapa debajo */}
              <div className="grid grid-cols-4 gap-2 text-left pt-1">
                {GROWTH_STAGES.map((s, idx) => {
                  const isActive = idx === currentStage;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goToStage(idx)}
                      className={`text-left text-xs font-semibold transition-colors focus:outline-none flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? "text-[#3b5692] font-bold"
                          : "text-slate-500 hover:text-[#3b5692]"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px] shrink-0">
                        {s.icon}
                      </span>
                      <span>{s.shortLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Tarjeta dinámica con márgenes laterales y bordes redondeados en todas las vistas */}
          <div className="lg:col-span-7 w-full mx-auto max-w-2xl lg:max-w-none">
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: "pan-y" }}
              className={`relative rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between shadow-2xl border select-none ${
                isBlue
                  ? "bg-[#546FAC] text-white border-white/20"
                  : "bg-white text-slate-900 border-slate-200/80"
              }`}
            >
              {/* Header de la tarjeta */}
              <div
                className={`flex items-center justify-end pb-5 border-b transition-colors duration-300 shrink-0 ${
                  isBlue ? "border-white/20" : "border-slate-200"
                }`}
              >
                <div
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 transition-all duration-300"
                  style={{
                    backgroundColor: stage.badgeBg,
                    color: stage.badgeColor,
                  }}
                >
                  <span className="material-symbols-outlined text-[18px] animate-gentle-float">
                    auto_awesome
                  </span>
                  <span>{stage.badge}</span>
                </div>
              </div>

              {/* Contenido animado con soporte swipe táctil y drag */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={stage.id}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_e, { offset, velocity }) => {
                    if (offset.x < -30 || velocity.x < -200) {
                      handleNext();
                    } else if (offset.x > 30 || velocity.x > 200) {
                      handlePrev();
                    }
                  }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="py-4 sm:py-5 space-y-4 flex-1 flex flex-col justify-center cursor-grab active:cursor-grabbing"
                >
                  <blockquote
                    className={`font-headline text-[19px] sm:text-[22px] lg:text-[24px] font-semibold italic leading-relaxed ${
                      isBlue ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {stage.quote}
                  </blockquote>

                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isBlue ? "text-white/95" : "text-slate-600"
                    }`}
                  >
                    {stage.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Footer de la tarjeta */}
              <div
                className={`pt-5 border-t flex items-center justify-between transition-colors duration-300 shrink-0 ${
                  isBlue ? "border-white/20" : "border-slate-200"
                }`}
              >
                <div className="flex flex-col pr-2 min-w-0">
                  <span
                    className={`font-headline text-base sm:text-lg font-bold ${
                      isBlue ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {stage.author}
                  </span>
                  <span
                    className={`text-xs sm:text-sm ${
                      isBlue ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {stage.role}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {/* Flechas de navegación para desktop en el footer */}
                  <div className="hidden lg:flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Etapa anterior"
                      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 active:scale-95 cursor-pointer ${
                        isBlue
                          ? "bg-white/15 border-white/30 text-white hover:bg-white/25"
                          : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[19px]">chevron_left</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Etapa siguiente"
                      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 active:scale-95 cursor-pointer ${
                        isBlue
                          ? "bg-white/15 border-white/30 text-white hover:bg-white/25"
                          : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[19px]">chevron_right</span>
                    </button>
                  </div>

                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-all duration-300 ${
                      isBlue ? "bg-white/20 text-white" : "bg-slate-100 text-[#3b5692]"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[26px] sm:text-[28px] animate-gentle-float">
                      {stage.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles de navegación e indicador interactivo en móvil y tablet */}
            <div className="flex lg:hidden flex-col items-center pt-4 pb-2 px-3 max-w-sm mx-auto space-y-2">
              <div className="flex items-center justify-between w-full">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Etapa anterior"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-700 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer hover:bg-slate-50"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>

                <div className="flex items-center gap-0.5">
                  {GROWTH_STAGES.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goToStage(idx)}
                      aria-label={`Ir a etapa ${s.shortLabel}`}
                      className="min-w-[36px] min-h-[36px] flex items-center justify-center p-1 cursor-pointer"
                    >
                      <span
                        className={`h-2 rounded-full transition-all duration-300 block ${
                          idx === currentStage
                            ? "w-8 bg-[#3b5692]"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Etapa siguiente"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-700 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer hover:bg-slate-50"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <span className="material-symbols-outlined text-[14px]">swipe</span>
                <span>Desliza para explorar etapas (0{currentStage + 1} / 0{GROWTH_STAGES.length})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
