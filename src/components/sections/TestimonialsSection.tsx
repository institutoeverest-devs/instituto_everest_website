"use client";

import { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

const CARD_POSITIONS = [
  // Pos 0: Far Left
  {
    left: "max(-30px, calc(50% - 660px))",
    transform: "rotate(-8deg)",
    zIndex: 0,
    width: "320px",
    height: "370px",
    isCenter: false,
    shadow: "shadow-lg",
  },
  // Pos 1: Mid Left
  {
    left: "calc(50% - 370px)",
    transform: "rotate(-4deg)",
    zIndex: 10,
    width: "320px",
    height: "370px",
    isCenter: false,
    shadow: "shadow-xl",
  },
  // Pos 2: Center Highlight
  {
    left: "calc(50% - 175px)",
    transform: "rotate(0deg)",
    zIndex: 20,
    width: "350px",
    height: "410px",
    isCenter: true,
    shadow: "shadow-2xl",
  },
  // Pos 3: Mid Right
  {
    left: "calc(50% + 50px)",
    transform: "rotate(4deg)",
    zIndex: 10,
    width: "320px",
    height: "370px",
    isCenter: false,
    shadow: "shadow-xl",
  },
  // Pos 4: Far Right
  {
    left: "calc(50% + 340px)",
    transform: "rotate(8deg)",
    zIndex: 0,
    width: "320px",
    height: "370px",
    isCenter: false,
    shadow: "shadow-lg",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Center testimonial initially

  const prev = () => {
    setActiveIndex((prevIdx) =>
      prevIdx > 0 ? prevIdx - 1 : TESTIMONIALS.length - 1
    );
  };

  const next = () => {
    setActiveIndex((prevIdx) =>
      prevIdx < TESTIMONIALS.length - 1 ? prevIdx + 1 : 0
    );
  };

  return (
    <section
      id="testimonios"
      className="w-full py-20 lg:py-24 overflow-hidden bg-[#E7EAEE]"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 px-4 sm:px-6">
          <span className="text-xs uppercase font-bold tracking-wider text-[#345f9c]">
            Familias Everest
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#191c1e] mt-1">
            La Voz de Nuestra Comunidad
          </h2>
        </div>

        {/* Desktop Fanned Showcase (lg and above) */}
        <div className="hidden lg:flex relative w-full overflow-hidden items-center justify-center py-6">
          {/* Botón Izquierdo (Lateral) */}
          <button
            type="button"
            onClick={prev}
            aria-label="Testimonio anterior"
            className="absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-[#3b5692] hover:bg-[#2f4675] text-white shadow-2xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[30px]">
              arrow_back
            </span>
          </button>

          {/* Botón Derecho (Lateral) */}
          <button
            type="button"
            onClick={next}
            aria-label="Testimonio siguiente"
            className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-[#3b5692] hover:bg-[#2f4675] text-white shadow-2xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[30px]">
              arrow_forward
            </span>
          </button>

          <div className="relative w-full h-[450px] flex items-center justify-center">
            {TESTIMONIALS.map((item, i) => {
              const pos = (i - activeIndex + 2 + TESTIMONIALS.length) % TESTIMONIALS.length;
              const cfg = CARD_POSITIONS[pos];

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(i)}
                  className={`absolute rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 ease-out ${cfg.shadow} ${
                    cfg.isCenter
                      ? "border border-white/20 text-white hover:scale-105"
                      : "border border-slate-200/80 bg-white text-slate-800 hover:shadow-2xl hover:scale-105"
                  }`}
                  style={{
                    width: cfg.width,
                    height: cfg.height,
                    left: cfg.left,
                    transform: cfg.transform,
                    transformOrigin: "center",
                    zIndex: cfg.zIndex,
                    backgroundColor: cfg.isCenter ? "#546FAC" : "#ffffff",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 pointer-events-none transition-all duration-500"
                    style={{
                      backgroundColor: "#E7EAEE",
                      clipPath: "circle(70% at 0% 0%)",
                      width: cfg.isCenter ? "80px" : "64px",
                      height: cfg.isCenter ? "80px" : "64px",
                    }}
                  />

                  <div className="space-y-4 pt-1 z-10">
                    <div
                      className={`overflow-hidden shadow-sm ml-auto mr-0 rounded-2xl transition-all duration-500 ${
                        cfg.isCenter
                          ? "w-14 h-14 border-2 border-white/60 shadow-md"
                          : "w-12 h-12 border border-black/10"
                      }`}
                    >
                      <Image
                        alt={item.author}
                        src={item.avatar}
                        width={cfg.isCenter ? 56 : 48}
                        height={cfg.isCenter ? 56 : 48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p
                      className={`leading-snug transition-all duration-500 ${
                        cfg.isCenter
                          ? "text-[17px] text-white font-bold tracking-tight pt-2"
                          : "text-[15px] text-slate-800 font-medium pt-2"
                      }`}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div
                    className={`text-left border-t pt-3 z-10 transition-all duration-500 ${
                      cfg.isCenter ? "border-white/20" : "border-slate-100"
                    }`}
                  >
                    <p
                      className={`transition-all duration-500 ${
                        cfg.isCenter
                          ? "text-[14px] text-white/90 italic font-medium"
                          : "text-[13px] text-slate-500 font-semibold italic"
                      }`}
                    >
                      - {item.author}, {item.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Slider (<lg) */}
        <div className="lg:hidden px-4">
          <div className="bg-white rounded-3xl p-7 shadow-xl border border-slate-200/80 max-w-md mx-auto flex flex-col justify-between min-h-[340px]">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-[36px] text-[#3b5692]">
                format_quote
              </span>
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  alt={TESTIMONIALS[activeIndex].author}
                  src={TESTIMONIALS[activeIndex].avatar}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-base text-slate-800 font-medium leading-relaxed mb-6">
              &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
            </p>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-headline font-bold text-slate-900 text-sm">
                  {TESTIMONIALS[activeIndex].author}
                </h4>
                <p className="text-xs text-slate-500">
                  {TESTIMONIALS[activeIndex].role}
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Testimonio anterior"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_back
                  </span>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Testimonio siguiente"
                  className="w-9 h-9 rounded-full bg-[#3b5692] text-white flex items-center justify-center cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
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
