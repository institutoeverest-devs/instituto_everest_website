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
      "Expresión musical orquestal, artes plásticas, laboratorio STEAM y resolución colaborativa de problemas con Estrella Everest.",
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

export function PreescolarRutaPedagogica() {
  const [currentStep, setCurrentStep] = useState(2); // Starts on step 3 (Crea)
  const isPausedRef = useRef(false);

  const nextStep = useCallback(() => {
    if (!isPausedRef.current) {
      setCurrentStep((prev) => (prev + 1) % ROUTE_STEPS.length);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 6000);
    return () => clearInterval(timer);
  }, [nextStep]);

  const stepData = ROUTE_STEPS[currentStep];

  return (
    <section
      className="w-full bg-white py-20 lg:py-24 relative overflow-hidden border-b border-slate-100"
      id="ruta-pedagogica"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Lado Izquierdo: Metodología Pedagógica & Evolución */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#345f9c] block mb-3">
                METODOLOGÍA PEDAGÓGICA & EVOLUCIÓN
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight mb-5">
                Ruta Pedagógica: 4 Etapas del Crecimiento
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-body">
                Un continuum formativo estructurado que acompaña la maduración neurológica y emocional de tu pequeño, guiándolo desde el asombro temprano hasta la confianza reflexiva.
              </p>
            </div>

            {/* Barras de progreso segmentadas interactivas */}
            <div className="pt-4 space-y-4">
              <div className="grid grid-cols-4 gap-2.5 w-full">
                {ROUTE_STEPS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentStep(i)}
                    className="h-2.5 rounded-full bg-slate-200 overflow-hidden cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-[#345f9c]"
                    aria-label={`Ir a la etapa ${i + 1}`}
                  >
                    <div
                      className={`h-full bg-[#345f9c] transition-all duration-300 ${
                        i <= currentStep ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Botones de las 4 etapas */}
              <div className="grid grid-cols-4 gap-2 text-xs font-semibold pt-1">
                {ROUTE_STEPS.map((step, i) => {
                  const isActive = i === currentStep;
                  const isDone = i < currentStep;

                  return (
                    <button
                      key={step.badge}
                      type="button"
                      onClick={() => setCurrentStep(i)}
                      className={`flex items-center gap-1.5 transition-colors text-left cursor-pointer focus:outline-none ${
                        isActive
                          ? "font-bold text-[#345f9c]"
                          : isDone
                          ? "font-semibold text-slate-600 hover:text-[#345f9c]"
                          : "text-slate-400 font-normal hover:text-[#345f9c]"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px] shrink-0">
                        {step.icon}
                      </span>
                      <span className="leading-tight truncate">
                        0{i + 1}. {step.badge.split(" - ")[0].replace("✦ 0" + (i + 1) + ". ", "")}
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
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 h-[520px] max-h-[520px] flex flex-col justify-between p-8 sm:p-10 transition-all duration-500 text-white">
              {/* Imagen de fondo */}
              <Image
                alt="Etapa Preescolar Everest"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-opacity duration-500 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 z-10 pointer-events-none" />

              {/* Header de la tarjeta */}
              <div className="relative z-20 flex items-center justify-between pb-4 border-b border-white/20">
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
                  <span className="text-[12px] font-bold text-white/90 tracking-wider uppercase drop-shadow-sm">
                    Instituto Everest
                  </span>
                </div>

                <div
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md backdrop-blur-md border border-white/20"
                  style={{
                    backgroundColor: stepData.badgeBg,
                    color: stepData.badgeColor,
                  }}
                >
                  {stepData.badge}
                </div>
              </div>

              {/* Contenido animado */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-20 py-6 space-y-3.5"
                >
                  <h3 className="font-headline italic text-[24px] sm:text-[28px] font-bold text-white leading-snug drop-shadow-md">
                    {stepData.quote}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-sm font-body">
                    {stepData.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {stepData.pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/25"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Footer de la tarjeta */}
              <div className="relative z-20 pt-4 border-t border-white/20 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-bold text-white text-base drop-shadow-sm">
                    {stepData.author}
                  </span>
                  <span className="text-xs text-white/80 font-medium drop-shadow-sm">
                    {stepData.role}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    {stepData.icon}
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
