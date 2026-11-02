"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AMBASSADORS } from "@/lib/constants";

// Animaciones sutiles y personalizadas para cada embajador
const AMBASSADOR_ANIMATIONS: Record<
  string,
  {
    y: number[];
    x?: number[];
    rotate?: number[];
    scale?: number[];
    duration: number;
  }
> = {
  sol: {
    y: [0, -6, 0],
    rotate: [-2, 2, -2],
    duration: 3.6,
  },
  nube: {
    y: [-5, 3, -5],
    x: [-3, 3, -3],
    duration: 4.4,
  },
  montana: {
    y: [0, -4, 0],
    scale: [1, 1.03, 1],
    duration: 4.8,
  },
  estrella: {
    y: [-6, 3, -6],
    rotate: [3, -3, 3],
    duration: 3.3,
  },
  buho: {
    y: [0, -5, 0],
    rotate: [-2.5, 2.5, -2.5],
    duration: 3.9,
  },
};

export function AmbassadorsSection() {
  return (
    <section id="nosotros" className="w-full bg-white py-20 lg:py-24 scroll-mt-24">
      <div id="embajadores" className="scroll-mt-24" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span
            className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full inline-block"
            style={{
              backgroundColor: "rgb(214, 227, 255)",
              color: "rgb(21, 71, 130)",
            }}
          >
            Acompañamiento Socioemocional
          </span>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#191c1e] tracking-tight">
            Nuestros 5 Embajadores del Aprendizaje
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Cada personaje representa un pilar en el viaje evolutivo de nuestros alumnos, haciendo del aprendizaje un proceso alegre, significativo y con propósito.
          </p>
        </div>

        {/* 5 Cards Grid: Alineados uno al lado del otro */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-3 lg:gap-6 w-full">
          {AMBASSADORS.map((ambassador, idx) => {
            const anim =
              AMBASSADOR_ANIMATIONS[ambassador.id] || {
                y: [0, -5, 0],
                duration: 3.8,
              };

            return (
              <motion.div
                key={ambassador.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center text-center p-1.5 sm:p-3 lg:p-6 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all duration-300 shadow-xs hover:shadow-xl overflow-hidden"
                style={{
                  backgroundColor: ambassador.bgColor,
                  border: `1px solid ${ambassador.borderColor}`,
                }}
              >
                {/* Contenedor del personaje con animación continua flotante */}
                <motion.div
                  className="w-10 h-10 sm:w-16 sm:h-16 lg:w-28 lg:h-28 mb-1 sm:mb-2 lg:mb-3 flex items-center justify-center relative cursor-pointer"
                  animate={{
                    y: anim.y,
                    x: anim.x || 0,
                    rotate: anim.rotate || 0,
                    scale: anim.scale || 1,
                  }}
                  transition={{
                    duration: anim.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.25,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 0,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                >
                  <Image
                    alt={ambassador.name}
                    src={ambassador.image}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm"
                    style={{ mixBlendMode: "multiply" }}
                    loading="lazy"
                  />
                </motion.div>

                <span
                  className="px-1 sm:px-2 lg:px-2.5 py-0.5 rounded-full text-[7px] sm:text-[9px] lg:text-[11px] font-bold mb-1 lg:mb-2 shadow-xs truncate max-w-full block"
                  style={{
                    backgroundColor: ambassador.badgeBg,
                    color: ambassador.badgeColor,
                  }}
                >
                  {ambassador.level}
                </span>

                <h3 className="font-headline text-[10px] sm:text-xs lg:text-xl font-bold text-slate-900 mb-0.5 lg:mb-1 truncate max-w-full">
                  {ambassador.name}
                </h3>

                <p className="hidden sm:block text-[9px] sm:text-[10px] lg:text-sm text-slate-600 leading-tight lg:leading-relaxed line-clamp-2 lg:line-clamp-none">
                  {ambassador.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
