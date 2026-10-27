"use client";

import { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Center testimonial

  const prev = () => {
    setActiveIndex((prevIdx) => (prevIdx > 0 ? prevIdx - 1 : TESTIMONIALS.length - 1));
  };

  const next = () => {
    setActiveIndex((prevIdx) => (prevIdx < TESTIMONIALS.length - 1 ? prevIdx + 1 : 0));
  };

  return (
    <section id="testimonios" className="w-full py-20 lg:py-24 overflow-hidden bg-[#E7EAEE]">
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
          <div className="relative w-full h-[450px] flex items-center justify-center">
            {/* Card 1 */}
            <div
              className="absolute z-0 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                width: "320px",
                height: "370px",
                left: "max(-30px, calc(50% - 660px))",
                transform: "rotate(-8deg)",
                transformOrigin: "center",
              }}
            >
              <div
                className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
                style={{ backgroundColor: "#E7EAEE", clipPath: "circle(70% at 0% 0%)" }}
              />
              <div className="space-y-4 pt-1 z-10">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-black/10 shadow-sm ml-auto mr-0">
                  <Image
                    alt={TESTIMONIALS[0].author}
                    src={TESTIMONIALS[0].avatar}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[15px] text-slate-800 leading-snug font-medium pt-2">
                  &ldquo;{TESTIMONIALS[0].quote}&rdquo;
                </p>
              </div>
              <div className="text-left border-t border-slate-100 pt-3 z-10">
                <p className="text-[13px] text-slate-500 font-semibold italic">
                  - {TESTIMONIALS[0].author}, {TESTIMONIALS[0].role}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="absolute z-10 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                width: "320px",
                height: "370px",
                left: "calc(50% - 370px)",
                transform: "rotate(-4deg)",
                transformOrigin: "center",
              }}
            >
              <div
                className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
                style={{ backgroundColor: "#E7EAEE", clipPath: "circle(70% at 0% 0%)" }}
              />
              <div className="space-y-4 pt-1 z-10">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-black/10 shadow-sm ml-auto mr-0">
                  <Image
                    alt={TESTIMONIALS[1].author}
                    src={TESTIMONIALS[1].avatar}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[15px] text-slate-800 leading-snug font-medium pt-2">
                  &ldquo;{TESTIMONIALS[1].quote}&rdquo;
                </p>
              </div>
              <div className="text-left border-t border-slate-100 pt-3 z-10">
                <p className="text-[13px] text-slate-500 font-semibold italic">
                  - {TESTIMONIALS[1].author}, {TESTIMONIALS[1].role}
                </p>
              </div>
            </div>

            {/* Card 3 (Center Highlight) */}
            <div
              className="absolute z-20 text-white p-7 shadow-2xl flex flex-col justify-between rounded-3xl overflow-hidden border border-white/20 transition-all duration-300 hover:scale-105"
              style={{
                width: "350px",
                height: "410px",
                left: "calc(50% - 175px)",
                backgroundColor: "#546FAC",
              }}
            >
              <div
                className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
                style={{ backgroundColor: "#E7EAEE", clipPath: "circle(70% at 0% 0%)" }}
              />
              <div className="space-y-4 pt-1 z-10">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/60 shadow-md ml-auto mr-0">
                  <Image
                    alt={TESTIMONIALS[2].author}
                    src={TESTIMONIALS[2].avatar}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[17px] text-white font-bold leading-snug tracking-tight pt-2">
                  &ldquo;{TESTIMONIALS[2].quote}&rdquo;
                </p>
              </div>
              <div className="text-left border-t border-white/20 pt-3 z-10">
                <p className="text-[14px] text-white/90 italic font-medium">
                  - {TESTIMONIALS[2].author}, {TESTIMONIALS[2].role}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="absolute z-10 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                width: "320px",
                height: "370px",
                left: "calc(50% + 50px)",
                transform: "rotate(4deg)",
                transformOrigin: "center",
              }}
            >
              <div
                className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
                style={{ backgroundColor: "#E7EAEE", clipPath: "circle(70% at 0% 0%)" }}
              />
              <div className="space-y-4 pt-1 z-10">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-black/10 shadow-sm ml-auto mr-0">
                  <Image
                    alt={TESTIMONIALS[3].author}
                    src={TESTIMONIALS[3].avatar}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[15px] text-slate-800 leading-snug font-medium pt-2">
                  &ldquo;{TESTIMONIALS[3].quote}&rdquo;
                </p>
              </div>
              <div className="text-left border-t border-slate-100 pt-3 z-10">
                <p className="text-[13px] text-slate-500 font-semibold italic">
                  - {TESTIMONIALS[3].author}, {TESTIMONIALS[3].role}
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="absolute z-0 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                width: "320px",
                height: "370px",
                right: "max(-30px, calc(50% - 660px))",
                transform: "rotate(8deg)",
                transformOrigin: "center",
              }}
            >
              <div
                className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
                style={{ backgroundColor: "#E7EAEE", clipPath: "circle(70% at 0% 0%)" }}
              />
              <div className="space-y-4 pt-1 z-10">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-black/10 shadow-sm ml-auto mr-0">
                  <Image
                    alt={TESTIMONIALS[4].author}
                    src={TESTIMONIALS[4].avatar}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[15px] text-slate-800 leading-snug font-medium pt-2">
                  &ldquo;{TESTIMONIALS[4].quote}&rdquo;
                </p>
              </div>
              <div className="text-left border-t border-slate-100 pt-3 z-10">
                <p className="text-[13px] text-slate-500 font-semibold italic">
                  - {TESTIMONIALS[4].author}, {TESTIMONIALS[4].role}
                </p>
              </div>
            </div>
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
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Testimonio siguiente"
                  className="w-9 h-9 rounded-full bg-[#3b5692] text-white flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center justify-center gap-8 mt-10">
          <button
            type="button"
            onClick={prev}
            aria-label="Testimonio anterior"
            className="text-slate-800 hover:text-[#3b5692] transition-colors focus:outline-none flex items-center justify-center p-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[32px]">arrow_back</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Testimonio siguiente"
            className="text-slate-800 hover:text-[#3b5692] transition-colors focus:outline-none flex items-center justify-center p-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[32px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
