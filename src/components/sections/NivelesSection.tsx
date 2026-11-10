"use client";

import Image from "next/image";
import Link from "next/link";
import { EDUCATIONAL_LEVELS } from "@/lib/constants";

export function NivelesSection() {
  const featuredLevels = EDUCATIONAL_LEVELS.filter((item) =>
    ["maternal", "preescolar", "primaria"].includes(item.id)
  );

  return (
    <section id="niveles-educativos" className="w-full bg-[#f2f4f6] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="font-headline text-2xl sm:text-4xl lg:text-[46px] text-[#3b5692] font-bold tracking-tight">
              Niveles Educativos
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-1.5 sm:mt-2 max-w-xl">
              Formación integral bilingüe con identidad propia. Donde tus sueños alcanzan la cima y aquí crecemos juntos.
            </p>
          </div>
        </div>

        {/* 3 Featured Level Cards Grid: Responsive 1 col en mobile, 3 cols en tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
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
                className="w-full relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[280px] md:min-h-[380px] lg:min-h-[420px] shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group overflow-hidden cursor-pointer block text-left"
                style={{
                  backgroundColor: item.bgColor,
                  color: item.textColor,
                }}
              >
                {/* Decorative cut-out corner */}
                <div
                  className="absolute top-0 right-0 w-14 h-14 md:w-20 md:h-20 bg-[#f2f4f6] rounded-bl-3xl pointer-events-none"
                  style={{ clipPath: "circle(70% at 100% 0%)" }}
                />

                {/* Top: Icon/Image + Age Badge */}
                <div className="w-full flex items-center justify-between z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center p-2 rounded-2xl bg-white/30 backdrop-blur-md shadow-sm shrink-0">
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
                      <span className="material-symbols-outlined text-[32px] md:text-[48px] text-white">
                        {item.icon}
                      </span>
                    )}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/15 text-inherit whitespace-nowrap text-center">
                    {item.age}
                  </span>
                </div>

                {/* Bottom: Info & Feature */}
                <div className="mt-4 sm:mt-6 z-10">
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight mb-1 text-inherit">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold italic opacity-90 leading-tight mb-4">
                    {item.tagline}
                  </p>

                  <div className="pt-3.5 sm:pt-4 flex items-center justify-between border-t border-current/15 gap-1">
                    <span className="text-xs font-bold tracking-wide uppercase opacity-85 leading-tight">
                      {item.feature}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
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
