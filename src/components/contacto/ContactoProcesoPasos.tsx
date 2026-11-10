"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

interface StepData {
  number: number;
  color: string;
  badge: string;
  subHeader: string;
  icon: string;
  title: string;
  desc: string;
}

const STEPS: StepData[] = [
  {
    number: 1,
    color: "#DA474A",
    badge: "Activo",
    subHeader: "PASO 01 · ATENCIÓN <24 HRS",
    icon: "edit_note",
    title: "Solicitud de Información y Visita Guiada",
    desc: "Completa el formulario en línea o escríbenos por WhatsApp para recibir folleto oficial, plan bilingüe AMCO, costos de inscripción y agendar una cita personalizada en el campus.",
  },
  {
    number: 2,
    color: "#557EBD",
    badge: "Enfoque Integral",
    subHeader: "PASO 02 · EVALUACIÓN DIAGNÓSTICA",
    icon: "psychology",
    title: "Entrevista y Valoración Integral",
    desc: "Sesión diagnóstica cálida de maduración pedagógica, habilidades socioemocionales y nivel de inglés AMCO con nuestro equipo de psicopedagogía y docentes especialistas.",
  },
  {
    number: 3,
    color: "#2E9F6E",
    badge: "Dictamen Rápido",
    subHeader: "PASO 03 · RESOLUCIÓN Y BIENVENIDA",
    icon: "verified_user",
    title: "Entrega de Resultados y Admisión",
    desc: "Reunión informativa con directores de sección para entrega de resultados, recomendaciones personalizadas y bienvenida oficial a la familia del Instituto Everest.",
  },
  {
    number: 4,
    color: "#E5A93C",
    badge: "Asignación de Grupo",
    subHeader: "PASO 04 · INSCRIPCIÓN FORMAL",
    icon: "celebration",
    title: "Inscripción y Entrega de Expediente",
    desc: "Recepción de documentación oficial, pago de inscripción, entrega de kit de bienvenida y asignación formal de grupo para el ciclo escolar 2027 - 2028.",
  },
];

type DocTab = "maternal" | "preescolar" | "primaria";

export function ContactoProcesoPasos() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeDocTab, setActiveDocTab] = useState<DocTab>("maternal");
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingProgrammatic = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartStep = useRef<number>(1);

  const selectStepMobile = (stepNumber: number) => {
    setActiveStep(stepNumber);
    if (!mobileContainerRef.current) return;
    isScrollingProgrammatic.current = true;
    const container = mobileContainerRef.current;
    const el = document.getElementById(`step-card-mobile-${stepNumber}`);
    if (el) {
      const targetLeft = el.offsetLeft - (container.clientWidth - el.offsetWidth) / 2;
      container.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isScrollingProgrammatic.current = false;
    }, 450);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartStep.current = activeStep;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - endX;
    const diffY = (touchStartY.current ?? endY) - endY;

    // Detect horizontal swipe and move strictly 1 card
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 25) {
      if (diffX > 0) {
        const nextStep = Math.min(touchStartStep.current + 1, STEPS.length);
        selectStepMobile(nextStep);
      } else {
        const prevStep = Math.max(touchStartStep.current - 1, 1);
        selectStepMobile(prevStep);
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleMobileScroll = () => {
    if (isScrollingProgrammatic.current || !mobileContainerRef.current) return;
    const container = mobileContainerRef.current;
    const card = container.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 14;
    let index = Math.round(container.scrollLeft / cardWidth);

    // When touching, lock maximum advance to strictly +/- 1 step
    if (touchStartX.current !== null) {
      const minStep = Math.max(touchStartStep.current - 1, 1);
      const maxStep = Math.min(touchStartStep.current + 1, STEPS.length);
      const stepCandidate = index + 1;
      if (stepCandidate > maxStep) index = maxStep - 1;
      if (stepCandidate < minStep) index = minStep - 1;
    }

    if (index >= 0 && index < STEPS.length && activeStep !== STEPS[index].number) {
      setActiveStep(STEPS[index].number);
    }
  };

  return (
    <section className="w-full py-16 bg-white border-y border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#546FAC] bg-[#546FAC]/10 uppercase tracking-widest mb-3">
            Ruta de Ingreso
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Proceso de Admisión en 4 Pasos Sencillos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-body">
            Diseñamos un proceso humano, ágil y transparente para recibir a tu familia en nuestra comunidad escolar.
          </p>
        </div>

        {/* PROCESO DE ADMISIÓN: DISEÑO CONDICIONAL SEGÚN RESOLUCIÓN */}

        {/* VISTA DESKTOP (>= 1024px): Acordeón Horizontal Interactivo Original */}
        <div className="hidden lg:block w-full max-w-6xl mx-auto py-4">
          <div className="flex flex-row items-stretch gap-4 w-full h-[240px]">
            {STEPS.map((step) => {
              const isActive = activeStep === step.number;

              return (
                <div
                  key={`desktop-${step.number}`}
                  onClick={() => setActiveStep(step.number)}
                  className={`p-6 rounded-2xl flex flex-col justify-between cursor-pointer overflow-hidden transition-[flex,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border ${
                    isActive
                      ? "flex-[3.5] bg-white shadow-[0_20px_45px_-10px_rgba(10,17,40,0.22)] border-slate-300 ring-1 ring-black/5"
                      : "flex-[0.9] bg-white hover:bg-slate-50/90 shadow-md hover:shadow-xl border-slate-200/90"
                  }`}
                  style={{
                    borderTop: `5px solid ${step.color}`,
                  }}
                >
                  {/* Top Bar Indicator */}
                  <div className="w-full flex items-center justify-between mb-2 h-3">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive ? "w-16" : "w-8"
                      }`}
                      style={{ backgroundColor: step.color }}
                    />
                    {isActive && (
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: step.color }}
                      >
                        {step.badge}
                      </span>
                    )}
                  </div>

                  {/* Number & Content Container */}
                  <div
                    className={`flex items-center gap-6 w-full flex-1 overflow-hidden ${
                      !isActive ? "justify-center" : ""
                    }`}
                  >
                    <div className="shrink-0 flex items-center justify-center select-none">
                      <span
                        className="text-7xl xl:text-8xl font-bold font-headline leading-none"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Active Content: Opens horizontally */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`step-active-desktop-${step.number}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25, delay: 0.12, ease: "easeOut" }}
                          className="flex-1 min-w-[300px] max-w-xl py-1 overflow-hidden"
                        >
                          <h3 className="font-headline text-lg font-bold text-slate-900 leading-snug mb-1">
                            {step.title}
                          </h3>
                          <p className="text-[13px] text-slate-600 leading-relaxed font-body">
                            {step.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* VISTA MÓVIL Y TABLET (< 1024px): DISEÑO CREATIVO NO VERTICAL */}
        {/* En Tablet (sm a lg): Grid 2x2 Bento con información completa */}
        {/* En Móvil (< sm): Carrusel horizontal con scroll-snap (lado a lado) + barra de pasos interactiva */}
        <div className="block lg:hidden w-full max-w-6xl mx-auto py-4">
          {/* Barra superior de pasos para navegación rápida */}
          <div className="flex items-center justify-between mb-3.5 px-0.5">
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 w-full sm:w-auto">
              {STEPS.map((step) => {
                const isActive = activeStep === step.number;
                const shortNames = ["Solicitud", "Valoración", "Admisión", "Inscripción"];
                return (
                  <button
                    key={`btn-nav-${step.number}`}
                    type="button"
                    onClick={() => selectStepMobile(step.number)}
                    className={`py-1.5 px-2.5 sm:px-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-1.5 ${
                      isActive
                        ? "bg-white border-slate-300 shadow-md ring-2 ring-black/5"
                        : "bg-slate-50/90 border-slate-200 hover:bg-white text-slate-500"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="font-headline font-extrabold text-xs sm:text-sm"
                        style={{ color: step.color }}
                      >
                        0{step.number}
                      </span>
                      <span className="hidden sm:inline text-[11px] font-semibold text-slate-700">
                        {shortNames[step.number - 1]}
                      </span>
                    </div>
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: isActive ? step.color : "transparent" }}
                    />
                  </button>
                );
              })}
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-slate-400">
              <span className="material-symbols-outlined text-[15px]">grid_view</span>
              <span>4 Pasos</span>
            </div>
          </div>

          {/* Contenedor de Tarjetas: Horizontal Snap en móvil / Grid 2x2 en tablet */}
          <div
            ref={mobileContainerRef}
            onScroll={handleMobileScroll}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "pan-y" }}
            className="flex sm:grid sm:grid-cols-2 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth pb-3 sm:pb-0 no-scrollbar"
          >
            {STEPS.map((step) => {
              const isActive = activeStep === step.number;

              return (
                <div
                  key={`card-mobile-${step.number}`}
                  id={`step-card-mobile-${step.number}`}
                  onClick={() => selectStepMobile(step.number)}
                  className={`w-[86vw] sm:w-auto shrink-0 snap-center snap-always bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md cursor-pointer ${
                    isActive
                      ? "border-slate-300 ring-2 ring-black/5 shadow-md"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                  style={{
                    borderTop: `4px solid ${step.color}`,
                    scrollSnapStop: "always",
                  }}
                >
                  <div>
                    {/* Header: Icono y Número (sin subHeader) */}
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${step.color}15`, color: step.color }}
                      >
                        <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                      </div>
                      <span
                        className="font-headline font-black text-2xl sm:text-3xl leading-none select-none opacity-85"
                        style={{ color: step.color }}
                      >
                        0{step.number}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span
                        className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1.5"
                        style={{ backgroundColor: `${step.color}15`, color: step.color }}
                      >
                        {step.badge}
                      </span>
                      <h3 className="font-headline text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-body">
                      {step.desc}
                    </p>
                  </div>

                  {/* Barra de progreso inferior decorativa */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-medium">Paso {step.number} de 4</span>
                    <div
                      className="h-1.5 rounded-full w-14 overflow-hidden"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: step.color,
                          width: isActive ? "100%" : "30%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicador táctil en móvil */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-2">
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">swipe</span>
              <span>Desliza para ver los 4 pasos</span>
            </span>
          </div>
        </div>

        {/* Documentation Section */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DA474A]/10 text-[#DA474A] border border-[#DA474A]/20 mb-2">
                <span className="material-symbols-outlined text-[15px]">folder_shared</span>
                Requisitos Oficiales
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Documentación Requerida para Inscripción
              </h3>
              <p className="text-sm text-slate-600 mt-1 font-body">
                Revisa los documentos solicitados según el nivel escolar para integrar oportunamente el expediente de tu hijo.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20quisiera%20solicitar%20la%20lista%20de%20documentos%20de%20admisión%20en%20PDF`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#DA474A] hover:bg-[#c93b3e] shadow-xs transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Descargar Checklist PDF</span>
              </a>
            </div>
          </div>

          {/* Selector de Nivel en móvil y tablet (< 1024px): Opciones horizontales ARRIBA de la información */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-6 sm:mb-8 lg:hidden">
            <button
              type="button"
              onClick={() => setActiveDocTab("maternal")}
              className={`p-3 sm:p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer ${
                activeDocTab === "maternal"
                  ? "bg-white border-[#557EBD] shadow-lg ring-2 ring-[#557EBD]/20"
                  : "bg-slate-50/80 border-slate-200/90 hover:bg-white hover:border-slate-300 text-slate-600"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span
                  className={`font-headline text-base sm:text-xl font-bold ${
                    activeDocTab === "maternal" ? "text-[#546FAC]" : "text-slate-800"
                  }`}
                >
                  Maternal
                </span>
                <span
                  className={`w-2.5 h-2.5 rounded-full shrink-0 hidden md:block ${
                    activeDocTab === "maternal" ? "bg-[#546FAC]" : "bg-transparent"
                  }`}
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500">
                1 a 3 años
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveDocTab("preescolar")}
              className={`p-3 sm:p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer ${
                activeDocTab === "preescolar"
                  ? "bg-white border-[#557EBD] shadow-lg ring-2 ring-[#557EBD]/20"
                  : "bg-slate-50/80 border-slate-200/90 hover:bg-white hover:border-slate-300 text-slate-600"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span
                  className={`font-headline text-base sm:text-xl font-bold ${
                    activeDocTab === "preescolar" ? "text-[#546FAC]" : "text-slate-800"
                  }`}
                >
                  Preescolar
                </span>
                <span
                  className={`w-2.5 h-2.5 rounded-full shrink-0 hidden md:block ${
                    activeDocTab === "preescolar" ? "bg-[#546FAC]" : "bg-transparent"
                  }`}
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500">
                K1, K2 y K3
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveDocTab("primaria")}
              className={`p-3 sm:p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer ${
                activeDocTab === "primaria"
                  ? "bg-white border-[#557EBD] shadow-lg ring-2 ring-[#557EBD]/20"
                  : "bg-slate-50/80 border-slate-200/90 hover:bg-white hover:border-slate-300 text-slate-600"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span
                  className={`font-headline text-base sm:text-xl font-bold ${
                    activeDocTab === "primaria" ? "text-[#546FAC]" : "text-slate-800"
                  }`}
                >
                  Primaria
                </span>
                <span
                  className={`w-2.5 h-2.5 rounded-full shrink-0 hidden md:block ${
                    activeDocTab === "primaria" ? "bg-[#546FAC]" : "bg-transparent"
                  }`}
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500">
                1° a 6° Grado
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Tarjeta Azul de Requisitos (Ancho completo en < 1024px, 8 Cols en Desktop) */}
            <div className="w-full lg:col-span-8 bg-[#557EBD] rounded-2xl sm:rounded-3xl shadow-xl lg:shadow-2xl p-4 sm:p-6 lg:p-4">
              <div className="p-5 sm:p-8 rounded-xl border border-white/30 text-white">
                <AnimatePresence mode="wait">
                  {activeDocTab === "maternal" && (
                    <motion.div
                      key="maternal"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
                        <div>
                          <span className="text-xs font-bold tracking-wider uppercase text-[#E5A93C] font-mono">
                            Nivel Inicial
                          </span>
                          <h4 className="font-headline text-2xl font-bold text-white mt-1">
                            Maternal (1 a 3 años)
                          </h4>
                        </div>
                        <span className="hidden md:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                          6 Requisitos
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-3.5 text-sm text-white font-body">
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#E5A93C] text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Acta de nacimiento (original y 2 copias legibles).</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#E5A93C] text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>CURP actualizada (formato reciente RENAPO).</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#E5A93C] text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Cartilla de vacunación al corriente (copia completa).</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#E5A93C] text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Certificado médico pediátrico reciente con grupo sanguíneo.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#E5A93C] text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>4 fotografías tamaño infantil (blanco y negro o color).</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-[#E5A93C] text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Identificación oficial (INE) y comprobante de domicilio de ambos padres.</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {activeDocTab === "preescolar" && (
                    <motion.div
                      key="preescolar"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
                        <div>
                          <span className="text-xs font-bold tracking-wider uppercase text-white font-mono">
                            Bilingüe AMCO
                          </span>
                          <h4 className="font-headline text-2xl font-bold text-white mt-1">
                            Preescolar (K1, K2 y K3)
                          </h4>
                        </div>
                        <span className="hidden md:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                          6 Requisitos
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-3.5 text-sm text-white font-body">
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Acta de nacimiento y CURP certificada de alumno(a).</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Constancia o reporte de evaluación del grado anterior (para K2 y K3).</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Carta de no adeudo y carta de buena conducta del colegio de procedencia.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Certificado médico general con peso, talla y agudeza visual.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>4 fotografías tamaño infantil del menor.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Copia de INE y comprobante de domicilio de padres/tutores.</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {activeDocTab === "primaria" && (
                    <motion.div
                      key="primaria"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
                        <div>
                          <span className="text-xs font-bold tracking-wider uppercase text-white font-mono">
                            Bilingüe STEAM
                          </span>
                          <h4 className="font-headline text-2xl font-bold text-white mt-1">
                            Primaria (1° a 6° Grado)
                          </h4>
                        </div>
                        <span className="hidden md:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                          6 Requisitos
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-3.5 text-sm text-white font-body">
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Boleta oficial SEP del grado anterior y reporte bilingüe/inglés.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Certificado de Preescolar (exclusivo para ingreso a 1° de Primaria).</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Acta de nacimiento y CURP actualizada en formato digital/impreso.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Carta de no adeudo y conducta emitida por la institución previa.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Certificado médico vigente (incluye tipo sanguíneo y alergias).</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-white text-[18px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>Copia de identificación oficial de madre, padre o tutor legal.</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Columna Derecha de Selectores (Solo en Desktop >= 1024px: diseño original) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col justify-center pl-2 lg:pl-6">
              <div className="relative flex flex-col space-y-6 border-l-4 border-slate-200 pl-6">
                <button
                  type="button"
                  onClick={() => setActiveDocTab("maternal")}
                  className={`text-left group transition-all duration-200 font-headline text-2xl sm:text-3xl font-bold relative -ml-[28px] pl-6 border-l-4 cursor-pointer ${
                    activeDocTab === "maternal"
                      ? "text-[#546FAC] border-[#546FAC]"
                      : "text-slate-400 border-transparent hover:text-slate-700"
                  }`}
                >
                  <span className="block">Maternal</span>
                  <span className="text-xs font-body font-medium text-slate-500 block mt-0.5">
                    1 a 3 años
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveDocTab("preescolar")}
                  className={`text-left group transition-all duration-200 font-headline text-2xl sm:text-3xl font-bold relative -ml-[28px] pl-6 border-l-4 cursor-pointer ${
                    activeDocTab === "preescolar"
                      ? "text-[#546FAC] border-[#546FAC]"
                      : "text-slate-400 border-transparent hover:text-slate-700"
                  }`}
                >
                  <span className="block">Preescolar</span>
                  <span className="text-xs font-body font-medium text-slate-500 block mt-0.5">
                    K1, K2 y K3
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveDocTab("primaria")}
                  className={`text-left group transition-all duration-200 font-headline text-2xl sm:text-3xl font-bold relative -ml-[28px] pl-6 border-l-4 cursor-pointer ${
                    activeDocTab === "primaria"
                      ? "text-[#546FAC] border-[#546FAC]"
                      : "text-slate-400 border-transparent hover:text-slate-700"
                  }`}
                >
                  <span className="block">Primaria</span>
                  <span className="text-xs font-body font-medium text-slate-500 block mt-0.5">
                    1° a 6° Grado
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
