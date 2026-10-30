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
  const screen1Y = useTransform(scrollYProgress, [0, 0.45], [0, -180]);
  const screen1Opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  // Pantalla 2: Criterio Ético & Pilares (Asciende y se estabiliza dentro del MISMO contenedor)
  const screen2Y = useTransform(scrollYProgress, [0.25, 0.58], [160, 0]);
  const screen2Opacity = useTransform(scrollYProgress, [0.26, 0.5], [0, 1]);

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
        <div ref={containerRef} className="relative h-[230vh] w-full">
          {/* Contenedor Único y Fijo (Sticky) */}
          <div className="sticky top-5 sm:top-8 w-full max-w-[1340px] mx-auto h-[calc(100vh-2.5rem)] sm:h-[calc(100vh-4rem)] max-h-[860px] min-h-[580px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#0b111e] relative">
            
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
              <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 shadow-lg w-fit">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E5A93C]">
                    • INNOVACIÓN EDUCATIVA • IMPACT AMCO
                  </span>
                </div>

                <h2 className="font-headline text-3xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.14] drop-shadow-2xl max-w-4xl">
                  Inteligencia Artificial & Innovación: IMPACT de AMCO
                </h2>

                <p className="font-headline italic text-slate-100 text-base sm:text-xl lg:text-2xl max-w-3xl leading-relaxed drop-shadow-lg">
                  «Más allá de la moda tecnológica: formamos mentes con criterio ético, curiosidad científica y pensamiento computacional.»
                </p>

                <div className="pt-4 sm:pt-6 flex flex-col items-center gap-2 text-slate-300">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/85">
                    DESPLAZA PARA VER EL PROGRAMA
                  </span>
                  <span className="material-symbols-outlined text-xl text-[#E5A93C] animate-bounce">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CAPA 2: Información Estructurada (Criterio Ético & 3 Pilares DENTRO del mismo contenedor) */}
            <motion.div
              style={{
                y: screen2Y,
                opacity: screen2Opacity,
              }}
              className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 lg:p-12 z-20 overflow-y-auto lg:overflow-hidden"
            >
              <div className="w-full max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
                  
                  {/* Lado Izquierdo: Criterio Ético */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">
                    <div className="space-y-1.5">
                      <span className="text-xs uppercase font-bold tracking-widest text-[#E5A93C] block font-body">
                        INSTITUTO EVEREST · PRIMARIA MAYOR
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-headline leading-tight">
                        Criterio Ético en la Era Inteligente
                      </h3>
                    </div>

                    <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-center">
                      <span className="material-symbols-outlined text-4xl text-[#E5A93C] opacity-40 absolute top-3 right-3 select-none pointer-events-none">
                        format_quote
                      </span>
                      <p className="font-headline italic text-base sm:text-lg lg:text-xl text-white leading-relaxed pr-4">
                        «No se trata solamente de aprender a usar Inteligencia Artificial. Se trata de aprender a comprenderla, cuestionarla y utilizarla responsablemente.»
                      </p>
                    </div>
                  </div>

                  {/* Lado Derecho: Educación Tecnológica & 3 Pilares */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                    {/* Tarjeta Superior */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md space-y-2.5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E5A93C] border border-[#E5A93C]/30">
                        <span className="material-symbols-outlined text-[15px]">school</span>
                        <span>Exclusivo 4.º a 6.º de Primaria</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white font-headline">
                        Educación Tecnológica con Enfoque Humano
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body">
                        Los alumnos de <strong>4.º, 5.º y 6.º de Primaria</strong> abordan la enseñanza y el aprendizaje en la era de la IA mediante IMPACT de AMCO, promoviendo alfabetización digital, pensamiento computacional y proyectos maker orientados al bienestar social.
                      </p>
                    </div>

                    {/* 3 Pilares Inferiores */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
                      {/* Pilar 1 */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm space-y-2 flex flex-col justify-between">
                        <div>
                          <span className="w-7 h-7 rounded-full bg-[#557EBD] text-white flex items-center justify-center font-bold text-xs shadow-md mb-2">
                            1
                          </span>
                          <h5 className="text-white font-bold text-sm sm:text-base leading-snug">
                            Alfabetización & Datos
                          </h5>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed font-body">
                          Comprensión de sesgos, fuentes de datos y modelos computacionales.
                        </p>
                      </div>

                      {/* Pilar 2 */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm space-y-2 flex flex-col justify-between">
                        <div>
                          <span className="w-7 h-7 rounded-full bg-[#DA474A] text-white flex items-center justify-center font-bold text-xs shadow-md mb-2">
                            2
                          </span>
                          <h5 className="text-white font-bold text-sm sm:text-base leading-snug">
                            Criterio Ético
                          </h5>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed font-body">
                          Discernimiento ante contenidos generativos, privacidad y autoría.
                        </p>
                      </div>

                      {/* Pilar 3 */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-sm space-y-2 flex flex-col justify-between">
                        <div>
                          <span className="w-7 h-7 rounded-full bg-[#48A9A6] text-slate-950 flex items-center justify-center font-bold text-xs shadow-md mb-2">
                            3
                          </span>
                          <h5 className="text-white font-bold text-sm sm:text-base leading-snug">
                            Proyectos Maker
                          </h5>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed font-body">
                          Creación con robótica y herramientas digitales para resolver retos reales.
                        </p>
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
