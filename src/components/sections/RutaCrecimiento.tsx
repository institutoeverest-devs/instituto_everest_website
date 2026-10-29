"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GROWTH_STAGES } from "@/lib/constants";

const DURATION_MS = 20000;

export function RutaCrecimiento() {
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const isPausedRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);
  const elapsedBeforePauseRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  const goToStage = useCallback((stageIdx: number) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setCurrentStage(stageIdx);
    setProgress(0);
    startTimeRef.current = null;
    elapsedBeforePauseRef.current = 0;
  }, []);

  useEffect(() => {
    function step(timestamp: number) {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - elapsedBeforePauseRef.current;
      }

      if (!isPausedRef.current) {
        const elapsed = timestamp - startTimeRef.current;
        const currentProgress = Math.min(elapsed / DURATION_MS, 1);
        setProgress(currentProgress);

        if (currentProgress >= 1) {
          setCurrentStage((prev) => (prev + 1) % GROWTH_STAGES.length);
          startTimeRef.current = null;
          elapsedBeforePauseRef.current = 0;
          setProgress(0);
        }
      }

      animFrameRef.current = requestAnimationFrame(step);
    }

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [currentStage]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
    if (startTimeRef.current) {
      elapsedBeforePauseRef.current = performance.now() - startTimeRef.current;
    }
  };

  const handleMouseLeave = () => {
    if (isPausedRef.current) {
      isPausedRef.current = false;
      startTimeRef.current = performance.now() - elapsedBeforePauseRef.current;
    }
  };

  const stage = GROWTH_STAGES[currentStage];
  const isBlue = stage.theme === "blue";

  return (
    <section id="ruta-crecimiento" className="w-full bg-[#f7f9fb] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LADO IZQUIERDO: Títulos y loaders */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#3b5692] block mb-2">
                Metodología Pedagógica & Evolución
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] text-slate-900 font-bold tracking-tight leading-tight">
                Ruta Integral de Crecimiento
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              Un continuum educativo estructurado que acompaña la maduración neurológica y emocional en cada fase escolar, desde la estimulación temprana hasta la autonomía y el liderazgo global.
            </p>

            {/* Segmented Loader Bars */}
            <div className="pt-2 space-y-4">
              <div className="grid grid-cols-4 gap-2.5 w-full">
                {GROWTH_STAGES.map((s, idx) => {
                  let barWidth = "0%";
                  if (idx < currentStage) barWidth = "100%";
                  else if (idx === currentStage) barWidth = `${progress * 100}%`;

                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goToStage(idx)}
                      className="group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3b5692] rounded-full"
                      aria-label={`Ir a la etapa ${s.shortLabel}`}
                    >
                      <div className="w-full h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                        <div
                          className="h-full bg-[#546FAC] transition-all duration-75"
                          style={{ width: barWidth }}
                        />
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
                      <span className="truncate">{s.shortLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Tarjeta dinámica que alterna color */}
          <div className="lg:col-span-7">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`relative rounded-3xl p-8 sm:p-12 transition-all duration-500 h-[490px] sm:h-[460px] flex flex-col justify-between overflow-hidden shadow-2xl ${
                isBlue
                  ? "bg-[#546FAC] text-white border border-white/20"
                  : "bg-white text-slate-900 border border-slate-200/80"
              }`}
            >
              {/* Header de la tarjeta */}
              <div
                className={`flex items-center justify-between pb-5 border-b transition-colors duration-300 shrink-0 ${
                  isBlue ? "border-white/20" : "border-slate-200"
                }`}
              >
                <div className="h-10 sm:h-12 flex items-center">
                  <Image
                    alt="Instituto Everest"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOkPq6MkGFHsGQyq-48qzGcc1Pl05hYD0eF3QxHgw-WUpKAXNMPwQUtf4mXRLehW8QKsmZZH9618RJByzCh9xBNTgCI-3zpJ8opr5gbEBifTc5A8KrqyXubAL3PjLDSEcGtI--OmaSSLSGnbPdRvULUFUgZm7WDdDF2u1DnAI6vBKrQSvWSHu2nZw-qfI1jvMWpT_HfKvn_xGLijj7sIV4VBqGBPJL5dJFz7PpLCF0kFYSVJyLvHRvVPj7qCKvosWotA"
                    width={160}
                    height={48}
                    style={{ width: "auto" }}
                    className={`h-full w-auto object-contain transition-all duration-300 ${
                      isBlue ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>

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

              {/* Contenido animado */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="py-4 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-center overflow-hidden"
                >
                  <blockquote
                    className={`font-headline text-[20px] sm:text-[24px] font-semibold italic leading-snug line-clamp-2 ${
                      isBlue ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {stage.quote}
                  </blockquote>

                  <p
                    className={`text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-2 ${
                      isBlue ? "text-white/90" : "text-slate-600"
                    }`}
                  >
                    {stage.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {stage.chips.map((chip) => (
                      <span
                        key={chip}
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                          isBlue
                            ? "bg-white/20 text-white border-white/25"
                            : "bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
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
                    className={`font-headline text-base sm:text-lg font-bold truncate ${
                      isBlue ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {stage.author}
                  </span>
                  <span
                    className={`text-xs sm:text-sm truncate ${
                      isBlue ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {stage.role}
                  </span>
                </div>

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-all duration-300 ${
                    isBlue ? "bg-white/20 text-white" : "bg-slate-100 text-[#3b5692]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[28px] animate-gentle-float">
                    {stage.icon}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
