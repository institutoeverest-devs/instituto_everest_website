"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { EDUCATIONAL_LEVELS } from "@/lib/constants";

export function NivelesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      const cardWidth = 320;
      trackRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="niveles-educativos" className="w-full bg-[#f2f4f6] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-headline text-lg sm:text-xl text-[#191c1e] font-semibold tracking-tight">
              Conoce nuestros
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[46px] text-[#3b5692] font-bold tracking-tight mt-1">
              Niveles Educativos & Programas
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Formación integral bilingüe con identidad propia. Donde tus sueños alcanzan la cima y aquí crecemos juntos.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Ver nivel anterior"
              className="w-12 h-12 rounded-full bg-white hover:bg-slate-100 shadow-md flex items-center justify-center text-[#3b5692] transition-all hover:scale-105 active:scale-95 border border-slate-200 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Ver siguiente nivel"
              className="w-12 h-12 rounded-full bg-[#3b5692] hover:bg-[#345f9c] text-white shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 w-full overflow-x-auto pb-6 pt-2 scroll-smooth snap-x no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {EDUCATIONAL_LEVELS.map((item) => {
              const href =
                item.id === "maternal"
                  ? "/maternal"
                  : item.id === "preescolar"
                  ? "/preescolar"
                  : item.id === "primaria"
                  ? "/primaria"
                  : "#contacto";

              return (
                <Link
                  key={item.id}
                  href={href}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-60px)/4)] shrink-0 relative rounded-3xl p-6 flex flex-col justify-between min-h-[380px] shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden snap-start cursor-pointer block text-left"
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.textColor,
                  }}
                >
                {/* Decorative cut-out corner */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 bg-[#f2f4f6] rounded-bl-3xl pointer-events-none"
                  style={{ clipPath: "circle(70% at 100% 0%)" }}
                />

                {/* Top: Icon/Image + Age Badge */}
                <div className="w-full flex items-center justify-between z-10">
                  <div className="w-24 h-24 flex items-center justify-center p-2 rounded-2xl bg-white/30 backdrop-blur-md shadow-sm">
                    {item.image ? (
                      <Image
                        alt={item.title}
                        src={item.image}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    ) : (
                      <span className="material-symbols-outlined text-[48px] text-white">
                        {item.icon}
                      </span>
                    )}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/15 text-inherit">
                    {item.age}
                  </span>
                </div>

                {/* Bottom: Info & Feature */}
                <div className="mt-4 z-10">
                  <h3 className="font-headline text-2xl font-bold tracking-tight mb-1 text-inherit">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold italic opacity-90 leading-tight mb-3">
                    {item.tagline}
                  </p>

                  <div className="pt-3 flex items-center justify-between border-t border-current/15">
                    <span className="text-[11px] font-bold tracking-wide uppercase opacity-85">
                      {item.feature}
                    </span>
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1.5 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
