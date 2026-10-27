"use client";

import { useState } from "react";
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
    desc: "Recepción de documentación oficial, pago de inscripción, entrega de kit de bienvenida y asignación formal de grupo para el ciclo escolar 2025-2026.",
  },
];

type DocTab = "maternal" | "preescolar" | "primaria";

export function ContactoProcesoPasos() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeDocTab, setActiveDocTab] = useState<DocTab>("maternal");

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

        {/* Horizontal Steps Accordion */}
        <div className="w-full max-w-6xl mx-auto py-4">
          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-4 h-auto md:h-[220px] w-full">
            {STEPS.map((step) => {
              const isActive = activeStep === step.number;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`p-5 sm:p-6 rounded-2xl flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-500 ease-in-out border border-slate-100 ${
                    isActive
                      ? "md:flex-[2.8] bg-white shadow-xl"
                      : "md:flex-[0.8] bg-slate-50/80 hover:bg-white shadow-xs"
                  }`}
                  style={{
                    borderTop: `4px solid ${step.color}`,
                  }}
                >
                  {/* Top Bar Indicator */}
                  <div className="w-full flex items-center justify-between mb-2 h-2">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive ? "w-16" : "w-8"
                      }`}
                      style={{ backgroundColor: step.color }}
                    />
                    {isActive && (
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: step.color }}
                      >
                        {step.badge}
                      </span>
                    )}
                  </div>

                  {/* Number & Content Container */}
                  <div className="flex items-center gap-4 sm:gap-6 w-full flex-1 overflow-hidden">
                    <div className="shrink-0 flex items-center justify-center select-none">
                      <span
                        className="text-6xl sm:text-7xl md:text-8xl font-bold font-headline transition-all duration-300 leading-none"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Details: Only visible when active on Desktop, always visible on mobile */}
                    <div
                      className={`flex-1 max-w-xl transition-all duration-350 overflow-hidden ${
                        isActive ? "opacity-100 translate-x-0" : "hidden md:hidden opacity-0 max-w-0"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span
                          className="material-symbols-outlined text-[18px]"
                          style={{ color: step.color }}
                        >
                          {step.icon}
                        </span>
                        <span
                          className="text-[11px] font-bold uppercase tracking-wider"
                          style={{ color: step.color }}
                        >
                          {step.subHeader}
                        </span>
                      </div>
                      <h3 className="font-headline text-base sm:text-lg font-bold text-slate-900 leading-snug mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-md font-body">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Card: Blue container with requirements list */}
            <div className="lg:col-span-8 bg-[#557EBD] rounded-2xl shadow-2xl p-4">
              <div className="p-6 sm:p-8 rounded-xl border border-white/30 text-white">
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
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                          6 Requisitos
                        </span>
                      </div>
                      <ul className="space-y-3.5 text-sm text-white font-body">
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
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                          6 Requisitos
                        </span>
                      </div>
                      <ul className="space-y-3.5 text-sm text-white font-body">
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
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                          6 Requisitos
                        </span>
                      </div>
                      <ul className="space-y-3.5 text-sm text-white font-body">
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

            {/* Right Side: Tab Switchers */}
            <div className="lg:col-span-4 flex flex-col justify-center pl-2 lg:pl-6">
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
