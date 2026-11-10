"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function NosotrosHero() {
  const highlights = [
    {
      title: "Campus La Alameda",
      desc: "Instalaciones seguras y protegidas en Calle Luis Cabrera no. 104, León.",
      icon: "domain",
      color: "#557EBD",
    },
    {
      title: "+20 Años de Trayectoria",
      desc: "Comunidad consolidada formando líderes bilingües con sólidos principios.",
      icon: "workspace_premium",
      color: "#F6D448",
    },
    {
      title: "100% Docentes Certificados",
      desc: "Equipo capacitado en metodologías activas AMCO, neuroeducación y SEP.",
      icon: "school",
      color: "#DA474A",
    },
    {
      title: "Alianza con las Familias",
      desc: "Trato personalizado donde cada niño es conocido por su nombre e historia.",
      icon: "favorite",
      color: "#8EB674",
    },
  ];

  const [highlightIdx, setHighlightIdx] = useState(0);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const isHighlightProgrammatic = useRef(false);
  const highlightTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleHighlightScroll = useCallback(() => {
    if (isHighlightProgrammatic.current || !highlightsRef.current) return;
    const container = highlightsRef.current;
    const card0 = container.children[0] as HTMLElement | null;
    const card1 = container.children[1] as HTMLElement | null;
    if (!card0) return;
    const step = card1 ? card1.offsetLeft - card0.offsetLeft : card0.offsetWidth + 16;
    const current = Math.round(container.scrollLeft / step);
    if (current !== highlightIdx && current >= 0 && current < highlights.length) {
      setHighlightIdx(current);
    }
  }, [highlightIdx, highlights.length]);

  const scrollToHighlight = useCallback((idx: number) => {
    if (!highlightsRef.current) return;
    const container = highlightsRef.current;
    const cards = container.children;
    const targetCard = cards[idx] as HTMLElement | undefined;
    if (targetCard) {
      isHighlightProgrammatic.current = true;
      setHighlightIdx(idx);
      const targetLeft = targetCard.offsetLeft - (container.clientWidth - targetCard.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
      if (highlightTimeoutRef.current) clearTimeout(highlightTimeoutRef.current);
      highlightTimeoutRef.current = setTimeout(() => {
        isHighlightProgrammatic.current = false;
      }, 450);
    }
  }, []);

  const handlePrevHighlight = () => {
    scrollToHighlight(Math.max(0, highlightIdx - 1));
  };

  const handleNextHighlight = () => {
    scrollToHighlight(Math.min(highlights.length - 1, highlightIdx + 1));
  };

  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current) clearTimeout(highlightTimeoutRef.current);
    };
  }, []);

  return (
    <section
      id="hero-nosotros"
      className="relative w-full pt-32 pb-12 sm:pt-36 sm:pb-14 lg:pt-36 lg:pb-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#f8fafd] via-[#f1f4f9] to-[#f8fafd] overflow-hidden"
    >
      {/* Decorative Background Lighting Gradients */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-[#557EBD]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#F6D448]/12 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1280px] mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Main Split: Título junto a Fotografía alineados a la misma altura */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6 lg:gap-10 items-start">
            {/* Left Column: Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="md:col-span-7 lg:col-span-6 space-y-3.5 sm:space-y-4 md:space-y-4 lg:space-y-4.5"
            >
              {/* Headline */}
              <h1 className="font-headline text-2xl sm:text-3xl md:text-[28px] lg:text-[34px] xl:text-[36px] font-bold text-[#0A1128] tracking-tight leading-[1.2]">
                Donde la excelencia académica y el afecto seguro caminan juntos
              </h1>

              {/* Paragraph */}
              <p className="text-slate-600 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed font-body">
                En <strong>Instituto Everest León</strong> formamos seres humanos íntegros, seguros de sí mismos y bilingües de forma natural bajo la metodología AMCO, impulsados por la innovación STEAM, educación musical diaria y una formación socioemocional basada en virtudes.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20conocer%20m%C3%A1s%20sobre%20Instituto%20Everest%20Le%C3%B3n%20y%20agendar%20una%20visita`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-white text-xs sm:text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                  style={{
                    backgroundColor: "rgb(218, 71, 74)",
                    boxShadow: "rgba(218, 71, 74, 0.4) 0px 6px 20px",
                  }}
                >
                  <span className="material-symbols-outlined text-[18px] sm:text-[19px]">calendar_month</span>
                  <span>Agendar Recorrido Familiar</span>
                </a>

                <Link
                  href="#mision-vision"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-slate-800 text-xs sm:text-sm font-bold bg-white border border-slate-200/90 shadow-xs hover:bg-slate-50 transition-all duration-300 shrink-0 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] sm:text-[19px] text-[#557EBD]">explore</span>
                  <span>Explorar Filosofía</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Fotografía */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="md:col-span-5 lg:col-span-6 relative mt-4 md:mt-0"
            >
              <div className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-none">
                
                {/* Main Photo Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] xl:h-[480px] bg-slate-900 group">
                  <Image
                    alt="Estudiantes en ambiente colaborativo de Instituto Everest León"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 48vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

              </div>
            </motion.div>
          </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET (<lg): Carousel with Snap & Peek         */}
        {/* ======================================================== */}
        <div className="block lg:hidden pt-4 border-t border-slate-200/80 space-y-3">
          <div
            ref={highlightsRef}
            onScroll={handleHighlightScroll}
            className="flex gap-3.5 sm:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 sm:-mx-6 px-4 sm:px-6 py-2 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {highlights.map((item, index) => {
              const isActive = index === highlightIdx;
              return (
                <article
                  key={index}
                  onClick={() => scrollToHighlight(index)}
                  className={`w-[78vw] max-w-[280px] sm:w-[320px] sm:max-w-[340px] shrink-0 snap-center snap-always rounded-3xl p-5 sm:p-6 bg-white border shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[170px] ${
                    isActive
                      ? "shadow-xl border-[#557EBD]/40 ring-2 ring-offset-2 ring-[#557EBD]/30 scale-[1.01]"
                      : "border-slate-200/90 opacity-90"
                  }`}
                  style={{ scrollSnapStop: "always" }}
                >
                  <div className="space-y-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color === "#F6D448" ? "#946300" : item.color,
                      }}
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline text-base sm:text-lg font-bold text-[#0A1128]">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-body mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Carousel Controls: Arrows & Indicators */}
          <div className="flex items-center justify-between pt-1 px-2 max-w-xs mx-auto">
            <button
              type="button"
              onClick={handlePrevHighlight}
              disabled={highlightIdx === 0}
              aria-label="Anterior"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                highlightIdx === 0
                  ? "opacity-30 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5">
              {highlights.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToHighlight(idx)}
                  aria-label={`Ver pilar ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === highlightIdx
                      ? "w-6 bg-[#557EBD]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNextHighlight}
              disabled={highlightIdx === highlights.length - 1}
              aria-label="Siguiente"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                highlightIdx === highlights.length - 1
                  ? "opacity-30 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm active:scale-95"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP (>=lg): 4-Column Grid                            */}
        {/* ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-3.5 sm:gap-4 pt-4 border-t border-slate-200/80">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-sm transition-all duration-300 space-y-1.5 group"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${item.color}15`,
                  color: item.color === "#F6D448" ? "#946300" : item.color,
                }}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline text-sm sm:text-base font-bold text-[#0A1128]">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-body">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
