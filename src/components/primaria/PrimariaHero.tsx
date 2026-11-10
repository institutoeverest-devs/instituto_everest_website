"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function PrimariaHero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cards = [
    {
      id: "bilinguismo",
      pillLabel: "Bilingüismo",
      emoji: "🇬🇧",
      title: "100% Inmersión Bilingüe AMCO",
      desc: "Fluidez oral y pensamiento sin traducción mental mecánica.",
      badge: "Bilingüismo AMCO",
      badgeBg: "bg-[#557EBD]/90",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1VO1ILPSwD8_9SmTF-7xbOohmLZIjN977Oz-9m9rImzQQ7O3g27XSVAncjdu8l92pMGVuQXrdXHUyLRUqRsMK13rY3wHFQ1rcs8kEiq49zIoFFDT7VplxhSpIMmBl59uRDn6GyjFRsUk9dMJQ2AHqI5SJNu07DGGN-VJKDAO5IpJ-np1E1s4DuzhHXD6Llcrp_eBDkhhYk_QANQCACIj_wCIK_eczGT76inqzRkC91BzWiv0NxDyH1hDfY",
    },
    {
      id: "musica",
      pillLabel: "Música",
      emoji: "🎵",
      title: "Música Curricular Habitual",
      desc: "Expresión musical, rítmica y lectura de partituras.",
      badge: "Diario en Horario Escolar",
      badgeBg: "bg-[#DA474A]/90",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
    },
    {
      id: "impact-ia",
      pillLabel: "IMPACT IA",
      emoji: "🤖",
      title: "Programa IMPACT IA",
      desc: "Alfabetización digital y criterio ético ante la IA.",
      badge: "Exclusivo 4.º a 6.º",
      badgeBg: "bg-[#48A9A6]/90",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1Wg91R-_7d_4UpoQBmWkLnpxDrUs4-GRc3wotLoVx2uVwZoW5OXZLeN_pJmFZfLALOnvh2VcHpFG5X1BAm6FJHhV8Axlpsq-zEgfaIBDV4V712pv88NY8yRbhbuSwD0lPWvJ2pIP1wrG5yEJkl-nCfEL56Z48o_j0T5nsy52tt7Da0qv6F411ASwHM_c-ZkpN-5JbNVDOBDN2idE0tcwuAhXS_uHTnhA3d2dauzB6jU_AmecP95BhteEbI",
    },
    {
      id: "deporte",
      pillLabel: "Taekwondo",
      emoji: "🥋",
      title: "Formación Integral & Taekwondo",
      desc: "Valores, carácter y desarrollo socioemocional.",
      badge: "Cuerpo & Mente",
      badgeBg: "bg-[#E5A93C]/95 text-slate-900",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1VO1ILPSwD8_9SmTF-7xbOohmLZIjN977Oz-9m9rImzQQ7O3g27XSVAncjdu8l92pMGVuQXrdXHUyLRUqRsMK13rY3wHFQ1rcs8kEiq49zIoFFDT7VplxhSpIMmBl59uRDn6GyjFRsUk9dMJQ2AHqI5SJNu07DGGN-VJKDAO5IpJ-np1E1s4DuzhHXD6Llcrp_eBDkhhYk_QANQCACIj_wCIK_eczGT76inqzRkC91BzWiv0NxDyH1hDfY",
    },
  ];

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardEl = container.firstElementChild as HTMLElement | null;
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 14; // card width + gap
    const current = Math.round(container.scrollLeft / cardWidth);
    if (current !== activeIdx && current >= 0 && current < cards.length) {
      setActiveIdx(current);
    }
  }, [activeIdx, cards.length]);

  const scrollToCard = useCallback((idx: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const items = container.children;
    if (items[idx]) {
      isProgrammaticScroll.current = true;
      setActiveIdx(idx);
      (items[idx] as HTMLElement).scrollIntoView({
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
    scrollToCard(Math.max(0, activeIdx - 1));
  };

  const handleNext = () => {
    scrollToCard(Math.min(cards.length - 1, activeIdx + 1));
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <section
        className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-screen flex flex-col justify-center lg:justify-between pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-24 lg:pb-10 px-4 sm:px-6 lg:px-10 overflow-hidden text-white"
        id="hero-primaria"
      >
        {/* Background Image with Dark Cinematic Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Estudiantes de Primaria en ambiente colaborativo y moderno"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        </div>

        {/* Central Hero Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-[1140px] mx-auto text-center mt-2 sm:mt-4 px-6 sm:px-12 py-7 sm:py-9 space-y-4 sm:space-y-5 rounded-3xl backdrop-blur-md"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.28)",
            background: "rgba(0, 0, 0, 0.22)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Main Title */}
          <h1 className="font-headline text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-xl max-w-4xl mx-auto">
            Primaria Instituto Everest
          </h1>

          {/* Subtitle & Note */}
          <div className="max-w-3xl mx-auto space-y-2.5">
            <p className="font-headline italic text-slate-100 text-lg sm:text-2xl font-normal leading-relaxed drop-shadow-md">
              Consolidación de aprendizajes académicos acompañados de inglés, tecnología, pensamiento crítico, creatividad, música y formación integral.
            </p>
            <p className="hidden sm:block text-xs sm:text-sm text-slate-300 italic opacity-90 leading-relaxed max-w-xl mx-auto font-body">
              * Cada nivel educativo cuenta con metodologías activas, horarios balanceados, talleres artísticos y un proceso de admisión cercano y personalizado.
            </p>
          </div>

          {/* Action Buttons: Agendar Visita & Conocer Plan */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20una%20visita%20guiada%20a%20Primaria%20en%20Instituto%20Everest%20León`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white text-xs sm:text-sm font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap cursor-pointer text-center"
              style={{
                backgroundColor: "rgb(218, 71, 74)",
                boxShadow: "rgba(218, 71, 74, 0.45) 0px 8px 24px",
              }}
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>Agendar Visita Primaria</span>
            </a>

            <Link
              href="#ia-impact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white text-xs sm:text-sm transition-all duration-300 hover:bg-white/30 bg-white/20 border border-white/40 shadow-md backdrop-blur-md font-bold shrink-0 whitespace-nowrap cursor-pointer text-center"
            >
              <span className="material-symbols-outlined text-[20px] text-[#F6D448]">menu_book</span>
              <span>Conocer Plan Primaria</span>
            </Link>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* DESKTOP (>=1024px): 4 Lower Feature Cards inside Hero    */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative z-10 w-full max-w-[1280px] mx-auto mt-8 lg:mt-12">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]" />
              <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase drop-shadow-sm">
                Diferenciadores Clave de Primaria
              </span>
            </div>
            <span className="text-xs text-slate-200 font-medium">
              Metodología, Artes y Formación de Vanguardia
            </span>
          </div>

          <div className="grid grid-cols-4 gap-4 lg:gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative h-60 sm:h-64 rounded-2xl overflow-hidden shadow-xl border border-white/20 group hover:scale-[1.02] transition-transform duration-300"
              >
                <Image
                  alt={card.title}
                  src={card.image}
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm text-white border border-white/20 shadow-xs ${card.badgeBg}`}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="font-headline text-[19px] sm:text-[20px] font-bold text-white leading-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed font-body">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SEPARATED SECTION: <1024px (Mobile & Tablet)             */}
      {/* Separada del hero para evitar que la imagen se alargue   */}
      {/* ======================================================== */}
      <section
        id="diferenciadores-primaria"
        className="block lg:hidden w-full bg-[#0E1726] py-10 sm:py-14 px-4 sm:px-6 relative text-white border-t border-white/10"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-6 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]" />
              <h2 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase drop-shadow-sm">
                Diferenciadores Clave de Primaria
              </h2>
            </div>
            <span className="text-xs text-slate-300 hidden sm:inline-block font-medium">
              Metodología, Artes y Formación de Vanguardia
            </span>
          </div>

          {/* MOBILE (<768px): Modern Carousel with Snap & Peek */}
          <div className="block md:hidden space-y-3">
            {/* Quick Selector Pills */}
            <div className="flex items-center justify-start gap-1.5 overflow-x-auto no-scrollbar pb-1 px-1 w-full">
              {cards.map((card, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => scrollToCard(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#E5A93C] text-slate-950 shadow-md scale-105"
                        : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
                    }`}
                  >
                    <span>{card.emoji}</span>
                    <span>{card.pillLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Swipeable Carousel Reel with Snap & Peek */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 py-2 no-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {cards.map((card, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <article
                    key={card.id}
                    onClick={() => scrollToCard(idx)}
                    className={`w-[78vw] max-w-[290px] shrink-0 snap-center snap-always rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 relative h-60 cursor-pointer ${
                      isActive
                        ? "border-white/50 ring-2 ring-[#E5A93C]/60 scale-[1.02]"
                        : "border-white/20 opacity-80"
                    }`}
                    style={{ scrollSnapStop: "always" }}
                  >
                    <Image
                      alt={card.title}
                      src={card.image}
                      fill
                      sizes="290px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm text-white border border-white/20 shadow-xs ${card.badgeBg}`}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                      <h3 className="font-headline text-[18px] font-bold text-white leading-tight mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-200 leading-relaxed font-body">
                        {card.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Carousel Controls: Arrows & Indicators */}
            <div className="flex items-center justify-between pt-1 px-2 max-w-xs mx-auto">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIdx === 0}
                aria-label="Tarjeta anterior"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                  activeIdx === 0
                    ? "opacity-30 cursor-not-allowed bg-white/10 border-white/10 text-white/40"
                    : "bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm active:scale-95"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>

              {/* Pagination Indicators */}
              <div className="flex items-center gap-1.5">
                {cards.map((card, idx) => (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => scrollToCard(idx)}
                    aria-label={`Ver ${card.pillLabel}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIdx
                        ? "w-6 bg-[#E5A93C]"
                        : "w-2 bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeIdx === cards.length - 1}
                aria-label="Tarjeta siguiente"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                  activeIdx === cards.length - 1
                    ? "opacity-30 cursor-not-allowed bg-white/10 border-white/10 text-white/40"
                    : "bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm active:scale-95"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* TABLET (768px - 1023px): 2-Column Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-4 sm:gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative h-60 sm:h-64 rounded-2xl overflow-hidden shadow-xl border border-white/20 group hover:scale-[1.01] transition-transform duration-300"
              >
                <Image
                  alt={card.title}
                  src={card.image}
                  fill
                  sizes="50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm text-white border border-white/20 shadow-xs ${card.badgeBg}`}
                  >
                    {card.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="font-headline text-[19px] sm:text-[20px] font-bold text-white leading-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed font-body">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
