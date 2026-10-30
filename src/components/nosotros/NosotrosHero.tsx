"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function NosotrosHero() {
  const trustPills = [
    { text: "Bilingüismo AMCO 100% Curricular", icon: "translate", color: "#557EBD" },
    { text: "Música & Orquesta Escolar", icon: "music_note", color: "#8EB674" },
    { text: "Laboratorio STEAM & Robótica", icon: "smart_toy", color: "#DA474A" },
    { text: "Horario Extendido hasta 6:00 PM", icon: "schedule", color: "#E5A93C" },
  ];

  const highlights = [
    {
      title: "Campus La Alameda",
      desc: "Instalaciones seguras y protegidas en Calle Luis Cabrera no. 104, León.",
      icon: "domain",
      color: "#557EBD",
    },
    {
      title: "+20 Años de Trayectoria",
      desc: "Comunidad consolidada formando líderes bilingües con sólidos principios.",
      icon: "workspace_premium",
      color: "#F6D448",
    },
    {
      title: "100% Docentes Certificados",
      desc: "Equipo capacitado en metodologías activas AMCO, neuroeducación y SEP.",
      icon: "school",
      color: "#DA474A",
    },
    {
      title: "Alianza con las Familias",
      desc: "Trato personalizado donde cada niño es conocido por su nombre e historia.",
      icon: "favorite",
      color: "#8EB674",
    },
  ];

  return (
    <section
      id="hero-nosotros"
      className="relative w-full pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-[#f8fafd] via-[#f1f4f9] to-[#f8fafd] overflow-hidden"
    >
      {/* Decorative Background Lighting Gradients */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-[#557EBD]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#F6D448]/12 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1280px] mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Main Split: Editorial Narrative (Left) + Photo Mosaic (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-6 space-y-4 sm:space-y-4.5"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A1128] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F6D448] animate-pulse" />
              <span>NUESTRA HISTORIA & COMUNIDAD · DESDE 2004</span>
            </div>

            {/* Headline: Proporción balanceada y tipografía controlada */}
            <h1 className="font-headline text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0A1128] tracking-tight leading-[1.2]">
              Donde la excelencia académica y el afecto seguro caminan juntos
            </h1>

            {/* Subtitle */}
            <p className="font-headline italic text-slate-700 text-base sm:text-lg leading-relaxed">
              «Donde tus sueños alcanzan la cima y aquí crecemos juntos: formamos mentes con criterio, curiosidad científica y corazón noble.»
            </p>

            {/* Paragraph */}
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-body">
              En <strong>Instituto Everest León</strong> formamos seres humanos íntegros, seguros de sí mismos y bilingües de forma natural bajo la metodología AMCO, impulsados por la innovación STEAM, música orquestal diaria y una formación socioemocional basada en virtudes.
            </p>

            {/* Trust Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {trustPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs sm:text-sm font-semibold text-slate-800"
                >
                  <span
                    className="material-symbols-outlined text-[17px] shrink-0"
                    style={{ color: pill.color }}
                  >
                    {pill.icon}
                  </span>
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20conocer%20m%C3%A1s%20sobre%20Instituto%20Everest%20Le%C3%B3n%20y%20agendar%20una%20visita`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white text-xs sm:text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                style={{
                  backgroundColor: "rgb(218, 71, 74)",
                  boxShadow: "rgba(218, 71, 74, 0.4) 0px 6px 20px",
                }}
              >
                <span className="material-symbols-outlined text-[19px]">calendar_month</span>
                <span>Agendar Recorrido Familiar</span>
              </a>

              <Link
                href="#mision-vision"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-slate-800 text-xs sm:text-sm font-bold bg-white border border-slate-200/90 shadow-xs hover:bg-slate-50 transition-all duration-300 shrink-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[19px] text-[#557EBD]">explore</span>
                <span>Explorar Filosofía</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Fotografía posicionada más arriba y proporcionada */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-900 group">
                <Image
                  alt="Estudiantes en ambiente colaborativo de Instituto Everest León"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
                
                {/* Overlay Caption on Main Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#F6D448] block">
                    VIDA ESCOLAR · CAMPUS LA ALAMEDA
                  </span>
                  <p className="font-headline text-xs sm:text-sm font-bold leading-snug">
                    Un espacio seguro donde cada niño florece a su propio ritmo.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: Top Left */}
              <div className="absolute -top-4 -left-3 sm:-left-5 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/90 flex items-center gap-2.5 z-20 max-w-[200px] sm:max-w-[220px]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F6D448]/20 text-[#855700] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                </div>
                <div>
                  <span className="font-headline text-base sm:text-lg font-extrabold text-[#0A1128] block leading-none">
                    +20 Años
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold leading-tight block">
                    Formando líderes en León
                  </span>
                </div>
              </div>

              {/* Floating Stat Card 2: Bottom Right */}
              <div className="absolute -bottom-4 -right-3 sm:-right-5 p-2.5 sm:p-3 rounded-2xl bg-[#0A1128] text-white shadow-xl border border-white/20 flex items-center gap-2.5 z-20 max-w-[210px] sm:max-w-[230px]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#DA474A]/25 text-[#ff8a8c] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </div>
                <div>
                  <span className="font-headline text-base sm:text-lg font-extrabold text-white block leading-none">
                    100% Calidez
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium leading-tight block">
                    Acompañamiento cercano
                  </span>
                </div>
              </div>

              {/* Small Secondary Peek Card: Bottom Left Overlap */}
              <div className="hidden sm:flex absolute -bottom-7 left-4 p-2 rounded-2xl bg-white shadow-md border border-slate-200 z-10 items-center gap-2">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0">
                  <Image
                    alt="Música y orquesta escolar"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pr-2 text-left">
                  <span className="text-[9px] font-bold text-[#557EBD] uppercase tracking-wider block">
                    Curricular
                  </span>
                  <span className="text-xs font-bold text-slate-800 block">
                    Orquesta Escolar
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-4 border-t border-slate-200/80">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-sm transition-all duration-300 space-y-1.5 group"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${item.color}15`,
                  color: item.color === "#F6D448" ? "#946300" : item.color,
                }}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline text-sm sm:text-base font-bold text-[#0A1128]">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed font-body">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
