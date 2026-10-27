"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { PILLARS } from "@/lib/constants";

export function PilaresSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const activePillar = PILLARS[activeIdx];

  const scrollToPillar = useCallback((idx: number) => {
    if (!scrollerRef.current) return;
    const cardHeight = 375 + 24; // height + gap
    scrollerRef.current.scrollTo({
      top: idx * cardHeight,
      behavior: "smooth",
    });
    setActiveIdx(idx);
  }, []);

  const handleScroll = () => {
    if (!scrollerRef.current) return;
    const scrollTop = scrollerRef.current.scrollTop;
    const cardHeight = 375 + 24;
    const current = Math.round(scrollTop / cardHeight);
    if (current !== activeIdx && current >= 0 && current < PILLARS.length) {
      setActiveIdx(current);
    }
  };

  return (
    <section
      id="pilares-showcase"
      className="w-full bg-white text-[#191c1e] py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#3b5692]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#d6e3ff]/30 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LADO IZQUIERDO: Títulos sincronizados e indicadores */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#546fac]/10 border border-[#546fac]/20 w-fit backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b5692] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#3b5692]">
                {activePillar.badge}
              </span>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase font-bold text-[#345f9c] tracking-widest block transition-colors duration-300">
                {activePillar.category}
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-slate-900 font-bold leading-tight transition-all duration-300">
                {activePillar.title}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed transition-all duration-300 min-h-[96px]">
              {activePillar.desc}
            </p>

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

            {/* Quote badge box */}
            <div className="p-4 rounded-2xl bg-[#f2f4f6] border border-slate-200/80 space-y-1.5">
              <span className="font-headline text-[15px] text-[#3b5692] font-bold block">
                «{activePillar.quote}»
              </span>
              <p className="text-xs text-slate-600 italic leading-snug">
                {activePillar.subquote}
              </p>
            </div>
          </div>

          {/* LADO DERECHO: Tarjetas con scroll interno fluido */}
          <div className="lg:col-span-7">
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
              data-lenis-prevent
              className="h-[530px] overflow-y-auto pr-2 flex flex-col gap-6 scroll-smooth snap-y snap-mandatory rounded-3xl custom-scrollbar"
            >
              {PILLARS.map((pillar, idx) => (
                <article
                  key={pillar.id}
                  onClick={() => scrollToPillar(idx)}
                  className="w-full h-[375px] shrink-0 rounded-3xl bg-slate-900 border border-slate-200/50 shadow-xl overflow-hidden relative group snap-start cursor-pointer"
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
