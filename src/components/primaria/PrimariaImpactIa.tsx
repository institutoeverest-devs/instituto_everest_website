"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMG_PADDING = 16;
const LAB_BG_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1Wg91R-_7d_4UpoQBmWkLnpxDrUs4-GRc3wotLoVx2uVwZoW5OXZLeN_pJmFZfLALOnvh2VcHpFG5X1BAm6FJHhV8Axlpsq-zEgfaIBDV4V712pv88NY8yRbhbuSwD0lPWvJ2pIP1wrG5yEJkl-nCfEL56Z48o_j0T5nsy52tt7Da0qv6F411ASwHM_c-ZkpN-5JbNVDOBDN2idE0tcwuAhXS_uHTnhA3d2dauzB6jU_AmecP95BhteEbI";

export function PrimariaImpactIa() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax subtle background scale
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Pantalla 1: Título e introducción (Asciende y desaparece al hacer scroll)
  const screen1Y = useTransform(scrollYProgress, [0, 0.42], [0, -160]);
  const screen1Opacity = useTransform(scrollYProgress, [0, 0.32], [1, 0]);

  // Pantalla 2: Criterio Ético & Pilares (Asciende suavemente y se estabiliza visible 100%)
  const screen2Y = useTransform(scrollYProgress, [0.24, 0.48], [70, 0]);
  const screen2Opacity = useTransform(scrollYProgress, [0.25, 0.44], [0, 1]);

  return (
    <section
      className="relative text-white overflow-visible pt-4 pb-12 sm:pb-16"
      id="ia-impact"
      style={{ backgroundColor: "#546FAC" }}
    >
      <div
        style={{
          paddingLeft: IMG_PADDING,
          paddingRight: IMG_PADDING,
        }}
        className="w-full"
      >
        {/* Track de Scroll Parallax */}
        <div ref={containerRef} className="relative h-[220vh] w-full">
          {/* Contenedor Único y Fijo (Sticky) */}
          <div className="sticky top-4 sm:top-6 md:top-8 w-full max-w-[1340px] mx-auto h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] max-h-[840px] min-h-[500px] sm:min-h-[540px] md:min-h-[560px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#0b111e] relative">
            
            {/* Imagen de Fondo con Zoom Parallax */}
            <motion.div
              style={{
                backgroundImage: `url(${LAB_BG_URL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                scale: bgScale,
              }}
              className="absolute inset-0 z-0"
            />

            {/* Gradiente Oscuro Cinemático para legibilidad perfecta */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/95 via-[#0b1329]/88 to-[#0A1128]/95 backdrop-blur-[2px] z-0" />

            {/* CAPA 1: Banner Principal ("Inteligencia Artificial & Innovación: IMPACT de AMCO") */}
            <motion.div
              style={{
                y: screen1Y,
                opacity: screen1Opacity,
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 z-10 pointer-events-none"
            >
              <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center text-center space-y-3.5 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 shadow-lg w-fit">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#E5A93C] animate-pulse" />
                  <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-[#E5A93C]">
                    • INNOVACIÓN EDUCATIVA • IMPACT AMCO
                  </span>
                </div>

                <h2 className="font-headline text-2xl xs:text-3xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-[1.14] drop-shadow-2xl max-w-4xl">
                  Inteligencia Artificial & Innovación: IMPACT de AMCO
                </h2>

                <p className="font-headline italic text-slate-100 text-sm xs:text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed drop-shadow-lg">
                  «Más allá de la moda tecnológica: formamos mentes con criterio ético, curiosidad científica y pensamiento computacional.»
                </p>

                <div className="pt-2 sm:pt-4 flex flex-col items-center gap-1.5 text-slate-300">
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/85">
                    DESPLAZA PARA VER EL PROGRAMA
                  </span>
                  <span className="material-symbols-outlined text-lg sm:text-xl text-[#E5A93C] animate-bounce">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CAPA 2: Información Estructurada (Criterio Ético & 3 Pilares DENTRO del mismo contenedor - 100% visible sin scroll) */}
            <motion.div
              style={{
                y: screen2Y,
                opacity: screen2Opacity,
              }}
              className="absolute inset-0 flex items-center justify-center p-2.5 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 z-20 overflow-hidden"
            >
              <div className="w-full max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 xs:gap-3.5 md:gap-5 lg:gap-8 items-stretch">
                  
                  {/* Lado Izquierdo: Criterio Ético */}
                  <div className="md:col-span-5 flex flex-col justify-between space-y-1.5 xs:space-y-2.5 md:space-y-3 lg:space-y-4">
                    <div className="space-y-0.5 sm:space-y-1">
                      <span className="text-[9.5px] xs:text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#E5A93C] block font-body">
                        INSTITUTO EVEREST · PRIMARIA MAYOR
                      </span>
                      <h3 className="text-base xs:text-xl sm:text-2xl md:text-[22px] lg:text-3xl font-bold text-white font-headline leading-tight">
                        Criterio Ético en la Era Inteligente
                      </h3>
                    </div>

                    <div className="p-2.5 xs:p-4 sm:p-5 md:p-4 lg:p-6 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-center min-h-0 sm:min-h-[110px] md:min-h-[130px]">
                      <span className="material-symbols-outlined text-xl xs:text-3xl sm:text-4xl text-[#E5A93C] opacity-35 absolute top-2 right-2 xs:top-2.5 xs:right-2.5 select-none pointer-events-none">
                        format_quote
                      </span>
                      <p className="font-headline italic text-[11px] xs:text-sm md:text-[13px] lg:text-base xl:text-lg text-white leading-relaxed pr-3 sm:pr-4">
                        «No se trata solamente de aprender a usar Inteligencia Artificial. Se trata de aprender a comprenderla, cuestionarla y utilizarla responsablemente.»
                      </p>
                    </div>
                  </div>

                  {/* Lado Derecho: Educación Tecnológica & 3 Pilares */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-2 xs:space-y-3 md:space-y-3 lg:space-y-4">
                    {/* Tarjeta Superior */}
                    <div className="p-2.5 xs:p-3.5 sm:p-4 md:p-3.5 lg:p-5 rounded-xl xs:rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md space-y-1 xs:space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[9.5px] xs:text-[11px] sm:text-xs font-semibold text-[#E5A93C] border border-[#E5A93C]/30">
                        <span className="material-symbols-outlined text-[12px] sm:text-[14px]">school</span>
                        <span>Exclusivo 4.º a 6.º de Primaria</span>
                      </div>
                      <h4 className="text-xs xs:text-base md:text-sm lg:text-lg font-bold text-white font-headline leading-snug">
                        Educación Tecnológica con Enfoque Humano
                      </h4>
                      <p className="text-[10px] xs:text-xs md:text-[11.5px] lg:text-[12.5px] text-slate-200 leading-relaxed font-body">
                        Los alumnos de <strong>4.º a 6.º de Primaria</strong> abordan la enseñanza y aprendizaje en la era de la IA mediante IMPACT de AMCO, promoviendo alfabetización digital, pensamiento computacional y proyectos maker con sentido social.
                      </p>
                    </div>

                    {/* 3 Pilares Inferiores: 1 columna en móvil (<sm / <390px) para máxima legibilidad, 3 columnas en tablet y desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xs:gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
                      {/* Pilar 1 */}
                      <div className="p-2 xs:p-2.5 sm:p-2.5 lg:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm flex sm:flex-col items-start gap-2.5 sm:gap-1 justify-between">
                        <span className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-[#557EBD] text-white flex items-center justify-center font-bold text-[10px] xs:text-xs shadow-md shrink-0 mt-0.5 sm:mt-0 sm:mb-1">
                          1
                        </span>
                        <div className="flex-1 min-w-0 sm:w-full">
                          <h5 className="text-white font-bold text-[11.5px] xs:text-xs sm:text-[11px] md:text-[11.5px] lg:text-sm leading-tight mb-0.5 sm:mb-1">
                            Alfabetización & Datos
                          </h5>
                          <p className="text-slate-300 text-[10px] xs:text-[10.5px] sm:text-[9.5px] md:text-[10px] lg:text-[11px] leading-snug font-body">
                            Comprensión de sesgos, fuentes de datos y modelos computacionales.
                          </p>
                        </div>
                      </div>

                      {/* Pilar 2 */}
                      <div className="p-2 xs:p-2.5 sm:p-2.5 lg:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm flex sm:flex-col items-start gap-2.5 sm:gap-1 justify-between">
                        <span className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-[#DA474A] text-white flex items-center justify-center font-bold text-[10px] xs:text-xs shadow-md shrink-0 mt-0.5 sm:mt-0 sm:mb-1">
                          2
                        </span>
                        <div className="flex-1 min-w-0 sm:w-full">
                          <h5 className="text-white font-bold text-[11.5px] xs:text-xs sm:text-[11px] md:text-[11.5px] lg:text-sm leading-tight mb-0.5 sm:mb-1">
                            Criterio Ético
                          </h5>
                          <p className="text-slate-300 text-[10px] xs:text-[10.5px] sm:text-[9.5px] md:text-[10px] lg:text-[11px] leading-snug font-body">
                            Discernimiento ante contenidos generativos, privacidad y autoría.
                          </p>
                        </div>
                      </div>

                      {/* Pilar 3 */}
                      <div className="p-2 xs:p-2.5 sm:p-2.5 lg:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm flex sm:flex-col items-start gap-2.5 sm:gap-1 justify-between">
                        <span className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-[#48A9A6] text-slate-950 flex items-center justify-center font-bold text-[10px] xs:text-xs shadow-md shrink-0 mt-0.5 sm:mt-0 sm:mb-1">
                          3
                        </span>
                        <div className="flex-1 min-w-0 sm:w-full">
                          <h5 className="text-white font-bold text-[11.5px] xs:text-xs sm:text-[11px] md:text-[11.5px] lg:text-sm leading-tight mb-0.5 sm:mb-1">
                            Proyectos Maker
                          </h5>
                          <p className="text-slate-300 text-[10px] xs:text-[10.5px] sm:text-[9.5px] md:text-[10px] lg:text-[11px] leading-snug font-body">
                            Creación con robótica y herramientas digitales para resolver retos reales.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
