"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface RouteStep {
  badge: string;
  badgeBg: string;
  badgeColor: string;
  quote: string;
  description: string;
  pills: string[];
  author: string;
  role: string;
  icon: string;
}

const ROUTE_STEPS: RouteStep[] = [
  {
    badge: "✦ 01. DESCUBRE - MATERNAL & KÍNDER 1",
    badgeBg: "#eff6ff",
    badgeColor: "#1d4ed8",
    quote: "«El asombro sensorial como primer motor del aprendizaje activo.»",
    description:
      "Aproximación sensitiva y sensorial al entorno. Primeras hipótesis lúdicas mediante juego heurístico y materiales nobles Montessori.",
    pills: ["Juego Heurístico", "Motricidad Fina", "Estimulación Sensorial", "Inmersión Auditiva"],
    author: "Lic. Mariana Cordero",
    role: "Coordinadora de Desarrollo Temprano · Instituto Everest",
    icon: "explore",
  },
  {
    badge: "✦ 02. APRENDE - KÍNDER 2 BILINGÜE",
    badgeBg: "#fef3c7",
    badgeColor: "#b45309",
    quote: "«Adquisición natural del inglés a través del pensamiento y la emoción.»",
    description:
      "Storytelling diario, fonética auditiva dinámica AMCO y asimilación espontánea sin traducción mental, sentando bases de lectoescritura bilingüe.",
    pills: ["AMCO Bilingüe", "Phonics Activo", "Narrativa Oral", "Storytelling Lúdico"],
    author: "Miss Andrea Sullivan",
    role: "Líder del Programa Bilingüe AMCO · Instituto Everest",
    icon: "menu_book",
  },
  {
    badge: "✦ 03. CREA - PREESCOLAR STEAM",
    badgeBg: "#fef2f2",
    badgeColor: "#cb3c40",
    quote: "«Exploración STEAM y expresión artística para convertir ideas en proyectos reales.»",
    description:
      "Expresión musical curricular, artes plásticas, laboratorio STEAM y resolución colaborativa de problemas con Estrella Everest.",
    pills: ["Laboratorio STEAM", "Música Curricular", "Artes Plásticas", "Pensamiento Lógico"],
    author: "Mtra. Sofía Valenzuela",
    role: "Coordinadora Pedagógica Preescolar · Instituto Everest",
    icon: "palette",
  },
  {
    badge: "✦ 04. CRECE - KÍNDER 3 & LIDERAZGO",
    badgeBg: "#f0fdf4",
    badgeColor: "#15803d",
    quote: "«Autonomía, carácter ético y seguridad integral hacia la Primaria.»",
    description:
      "Acompañamiento socioemocional, autorregulación, valores Everest y consolidación de virtudes para dar el paso a Primaria con liderazgo y plenitud.",
    pills: ["Transición Primaria", "Virtudes Everest", "Autorregulación", "Pensamiento Crítico"],
    author: "Lic. Fernando Robledo",
    role: "Director de Formación Integral · Instituto Everest",
    icon: "terrain",
  },
];

const DURATION_MS = 20000;

export function PreescolarRutaPedagogica() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  const goToStep = useCallback((idx: number) => {
    setCurrentStep(idx);
    setCycleKey((k) => k + 1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => (prev + 1) % ROUTE_STEPS.length);
    setCycleKey((k) => k + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentStep((prev) => (prev - 1 + ROUTE_STEPS.length) % ROUTE_STEPS.length);
    setCycleKey((k) => k + 1);
  }, []);

  const stepData = ROUTE_STEPS[currentStep];

  return (
    <section
      className="w-full bg-white py-14 sm:py-18 lg:py-24 relative overflow-hidden border-b border-slate-100"
      id="ruta-pedagogica"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Lado Izquierdo: Metodología Pedagógica & Evolución */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#345f9c] block mb-2 sm:mb-3">
                METODOLOGÍA PEDAGÓGICA & EVOLUCIÓN
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-slate-900 tracking-tight leading-tight mb-3 sm:mb-5">
                Ruta Pedagógica: 4 Etapas del Crecimiento
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl font-body">
                Un continuum formativo estructurado que acompaña la maduración neurológica y emocional de tu pequeño, guiándolo desde el asombro temprano hasta la confianza reflexiva.
              </p>
            </div>

            {/* Barras de progreso segmentadas interactivas */}
            <div className="pt-2 sm:pt-4 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-4 gap-2 sm:gap-2.5 w-full">
                {ROUTE_STEPS.map((_, i) => {
                  const isPast = i < currentStep;
                  const isCurrent = i === currentStep;

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goToStep(i)}
                      className="h-2 sm:h-2.5 rounded-full bg-slate-200 overflow-hidden cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-[#345f9c]"
                      aria-label={`Ir a la etapa ${i + 1}`}
                    >
                      {isPast && (
                        <div className="w-full h-full bg-[#345f9c] rounded-full" />
                      )}
                      {isCurrent && (
                        <div
                          key={`prp-bar-${currentStep}-${cycleKey}`}
                          onAnimationEnd={handleNext}
                          className="w-full h-full bg-[#345f9c] rounded-full origin-left"
                          style={{
                            animation: `fillProgressLinear ${DURATION_MS}ms linear forwards`,
                            animationPlayState: isPaused ? "paused" : "running",
                            transformOrigin: "left",
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Botones de las 4 etapas */}
              <div className="grid grid-cols-4 gap-1 sm:gap-2 text-[11px] sm:text-xs font-semibold pt-1">
                {ROUTE_STEPS.map((step, i) => {
                  const isActive = i === currentStep;
                  const isDone = i < currentStep;
                  const rawName = step.badge.split(" - ")[0].replace("✦ 0" + (i + 1) + ". ", "");
                  const formattedName = rawName.charAt(0) + rawName.slice(1).toLowerCase();

                  return (
                    <button
                      key={step.badge}
                      type="button"
                      onClick={() => goToStep(i)}
                      className={`flex items-center justify-center sm:justify-start gap-1 sm:gap-1.5 transition-colors text-center sm:text-left cursor-pointer focus:outline-none py-1 sm:py-0 ${
                        isActive
                          ? "font-bold text-[#345f9c]"
                          : isDone
                          ? "font-semibold text-slate-600 hover:text-[#345f9c]"
                          : "text-slate-400 font-normal hover:text-[#345f9c]"
                      }`}
                    >
                      {/* En mobile: se oculta el icono */}
                      <span className="hidden sm:inline-block material-symbols-outlined text-[15px] sm:text-[16px] shrink-0">
                        {step.icon}
                      </span>
                      {/* En mobile: solo el nombre de la etapa (Descubre, Aprende, Crea, Crece) sin número */}
                      <span className="sm:hidden leading-tight text-center truncate font-bold">
                        {formattedName}
                      </span>
                      {/* En desktop y tablet: número + nombre completo */}
                      <span className="hidden sm:inline leading-tight">
                        0{i + 1}. {rawName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Lado Derecho: Tarjeta flotante interactiva */}
          <div
            className="lg:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between p-6 sm:p-7 lg:p-8 transition-all duration-500 text-white">
              {/* Imagen de fondo */}
              <Image
                alt="Etapa Preescolar Everest"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-opacity duration-500 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35 z-10 pointer-events-none" />

              {/* Header de la tarjeta */}
              <div className="relative z-20 flex items-center justify-between pb-3 sm:pb-3.5 border-b border-white/20 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md flex items-center justify-center p-1 shadow-sm">
                    <Image
                      alt="Instituto Everest"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Ag3jatczZGX-NDdxAhxeOVMr2iW2RNX65of2LgIjUSPsM8XKlnctv6n8wSuLnMb0OLHVpjpzZO-KgsEa-7rpjoCrTYtptaCi4TdH9itwJkfCLya7eMAOxno37vbprykSxFZGyHpnhEpYDdTAmhCG-IT0ObSJoeLS9H4IToMMajNoCILKgmaz7L8xv7VMaNvSpxA0R5hCLvBkZ51Wlo2-OlpU19Ev5XYvJpdl6zoRMe4cGrcb4Fe68V_1foWgYqwGzA"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] sm:text-[12px] font-bold text-white/90 tracking-wider uppercase drop-shadow-sm">
                    Instituto Everest
                  </span>
                </div>
              </div>

              {/* Contenido animado */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative z-20 py-3 sm:py-4 space-y-2 sm:space-y-3 flex-1 flex flex-col justify-center"
                >
                  <h3 className="font-headline italic text-[18px] sm:text-[21px] lg:text-[22px] font-bold text-white leading-snug drop-shadow-md">
                    {stepData.quote}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-[14.5px] text-white/90 leading-relaxed drop-shadow-sm font-body">
                    {stepData.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Footer de la tarjeta */}
              <div className="relative z-20 pt-3 sm:pt-3.5 border-t border-white/20 flex items-center justify-between shrink-0">
                <div className="flex flex-col pr-2 min-w-0">
                  <span className="font-bold text-white text-sm sm:text-base drop-shadow-sm">
                    {stepData.author}
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/80 font-medium drop-shadow-sm">
                    {stepData.role}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                  {/* Controles de flechas de navegación */}
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Etapa anterior"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Etapa siguiente"
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                    </button>
                  </div>

                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md shrink-0">
                    <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
                      {stepData.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
