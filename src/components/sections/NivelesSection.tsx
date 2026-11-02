"use client";

import Image from "next/image";
import Link from "next/link";
import { EDUCATIONAL_LEVELS } from "@/lib/constants";

export function NivelesSection() {
  const featuredLevels = EDUCATIONAL_LEVELS.filter((item) =>
    ["maternal", "preescolar", "primaria"].includes(item.id)
  );

  return (
    <section id="niveles-educativos" className="w-full bg-[#f2f4f6] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-2.5 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="font-headline text-base sm:text-xl text-[#191c1e] font-semibold tracking-tight">
              Conoce nuestros
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl lg:text-[46px] text-[#3b5692] font-bold tracking-tight mt-1">
              Niveles Educativos
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1.5 sm:mt-2 max-w-xl">
              Formación integral bilingüe con identidad propia. Donde tus sueños alcanzan la cima y aquí crecemos juntos.
            </p>
          </div>
        </div>

        {/* 3 Featured Level Cards Grid: 3 tarjetas una al lado de otra */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full">
          {featuredLevels.map((item) => {
            const href =
              item.id === "maternal"
                ? "/maternal"
                : item.id === "preescolar"
                ? "/preescolar"
                : "/primaria";

            return (
              <Link
                key={item.id}
                href={href}
                className="w-full relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 lg:p-7 flex flex-col justify-between min-h-[210px] sm:min-h-[320px] lg:min-h-[400px] shadow-sm sm:shadow-md transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl group overflow-hidden cursor-pointer block text-left"
                style={{
                  backgroundColor: item.bgColor,
                  color: item.textColor,
                }}
              >
                {/* Decorative cut-out corner */}
                <div
                  className="absolute top-0 right-0 w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-[#f2f4f6] rounded-bl-xl sm:rounded-bl-2xl lg:rounded-bl-3xl pointer-events-none"
                  style={{ clipPath: "circle(70% at 100% 0%)" }}
                />

                {/* Top: Icon/Image + Age Badge */}
                <div className="w-full flex items-start sm:items-center justify-between z-10 gap-1">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center p-1 sm:p-1.5 lg:p-2 rounded-xl sm:rounded-2xl bg-white/30 backdrop-blur-md shadow-sm shrink-0">
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
                      <span className="material-symbols-outlined text-[20px] sm:text-[36px] lg:text-[48px] text-white">
                        {item.icon}
                      </span>
                    )}
                  </div>

                  <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1 rounded-full text-[8px] sm:text-[10px] lg:text-xs font-bold bg-black/15 text-inherit whitespace-nowrap text-center">
                    {item.age}
                  </span>
                </div>

                {/* Bottom: Info & Feature */}
                <div className="mt-2 sm:mt-4 lg:mt-6 z-10">
                  <h3 className="font-headline text-xs sm:text-xl lg:text-3xl font-bold tracking-tight mb-0.5 sm:mb-1 text-inherit truncate">
                    {item.title}
                  </h3>
                  <p className="hidden sm:block text-xs md:text-sm lg:text-base font-semibold italic opacity-90 leading-tight mb-2 sm:mb-4">
                    {item.tagline}
                  </p>

                  <div className="pt-1.5 sm:pt-3 lg:pt-4 flex items-center justify-between border-t border-current/15 gap-1">
                    <span className="text-[7px] sm:text-[10px] lg:text-xs font-bold tracking-wide uppercase opacity-85 truncate">
                      {item.feature}
                    </span>
                    <span className="material-symbols-outlined text-[13px] sm:text-[18px] lg:text-[22px] group-hover:translate-x-1.5 transition-transform shrink-0">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
