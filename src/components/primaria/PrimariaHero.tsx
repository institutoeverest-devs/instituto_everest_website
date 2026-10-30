"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function PrimariaHero() {
  const cards = [
    {
      title: "100% Inmersión Bilingüe AMCO",
      desc: "Fluidez oral y pensamiento sin traducción mental mecánica.",
      badge: "Bilingüismo AMCO",
      badgeBg: "bg-[#557EBD]/90",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1VO1ILPSwD8_9SmTF-7xbOohmLZIjN977Oz-9m9rImzQQ7O3g27XSVAncjdu8l92pMGVuQXrdXHUyLRUqRsMK13rY3wHFQ1rcs8kEiq49zIoFFDT7VplxhSpIMmBl59uRDn6GyjFRsUk9dMJQ2AHqI5SJNu07DGGN-VJKDAO5IpJ-np1E1s4DuzhHXD6Llcrp_eBDkhhYk_QANQCACIj_wCIK_eczGT76inqzRkC91BzWiv0NxDyH1hDfY",
    },
    {
      title: "Música Curricular Habitual",
      desc: "Ensamble orquestal, rítmica y lectura de partituras.",
      badge: "Diario en Horario Escolar",
      badgeBg: "bg-[#DA474A]/90",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
    },
    {
      title: "Programa IMPACT IA",
      desc: "Alfabetización digital y criterio ético ante la IA.",
      badge: "Exclusivo 4.º a 6.º",
      badgeBg: "bg-[#48A9A6]/90",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1Wg91R-_7d_4UpoQBmWkLnpxDrUs4-GRc3wotLoVx2uVwZoW5OXZLeN_pJmFZfLALOnvh2VcHpFG5X1BAm6FJHhV8Axlpsq-zEgfaIBDV4V712pv88NY8yRbhbuSwD0lPWvJ2pIP1wrG5yEJkl-nCfEL56Z48o_j0T5nsy52tt7Da0qv6F411ASwHM_c-ZkpN-5JbNVDOBDN2idE0tcwuAhXS_uHTnhA3d2dauzB6jU_AmecP95BhteEbI",
    },
    {
      title: "Formación Integral & Taekwondo",
      desc: "Valores, carácter y desarrollo socioemocional.",
      badge: "Cuerpo & Mente",
      badgeBg: "bg-[#E5A93C]/95 text-slate-900",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1VO1ILPSwD8_9SmTF-7xbOohmLZIjN977Oz-9m9rImzQQ7O3g27XSVAncjdu8l92pMGVuQXrdXHUyLRUqRsMK13rY3wHFQ1rcs8kEiq49zIoFFDT7VplxhSpIMmBl59uRDn6GyjFRsUk9dMJQ2AHqI5SJNu07DGGN-VJKDAO5IpJ-np1E1s4DuzhHXD6Llcrp_eBDkhhYk_QANQCACIj_wCIK_eczGT76inqzRkC91BzWiv0NxDyH1hDfY",
    },
  ];

  return (
    <section
      className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-8 sm:pt-24 lg:pt-24 sm:pb-10 px-4 sm:px-6 lg:px-10 overflow-hidden text-white"
      id="hero-primaria"
    >
      {/* Background Image with Dark Cinematic Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Estudiantes de Primaria en ambiente colaborativo y moderno"
          src="https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
      </div>

      {/* Central Hero Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[1140px] mx-auto text-center mt-2 sm:mt-4 px-6 sm:px-12 py-7 sm:py-9 space-y-4 sm:space-y-5 rounded-3xl backdrop-blur-md"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.28)",
          background: "rgba(0, 0, 0, 0.22)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-xs mx-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] animate-pulse" />
          <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
            EDUCACIÓN PRIMARIA (6 A 12 AÑOS / 1° A 6° GRADO)
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-headline text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-xl max-w-4xl mx-auto">
          Primaria Instituto Everest
        </h1>

        {/* Subtitle & Note */}
        <div className="max-w-3xl mx-auto space-y-2.5">
          <p className="font-headline italic text-slate-100 text-lg sm:text-2xl font-normal leading-relaxed drop-shadow-md">
            Consolidación de aprendizajes académicos acompañados de inglés, tecnología, pensamiento crítico, creatividad, música y formación integral.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 italic opacity-90 leading-relaxed max-w-xl mx-auto font-body">
            * Cada nivel educativo cuenta con metodologías activas, horarios balanceados, talleres artísticos y un proceso de admisión cercano y personalizado.
          </p>
        </div>

        {/* Action Buttons: Agendar Visita & Conocer Plan */}
        <div className="pt-2 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20una%20visita%20guiada%20a%20Primaria%20en%20Instituto%20Everest%20León`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white text-xs sm:text-sm font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap cursor-pointer"
            style={{
              backgroundColor: "rgb(218, 71, 74)",
              boxShadow: "rgba(218, 71, 74, 0.45) 0px 8px 24px",
            }}
          >
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            <span>Agendar Visita Primaria</span>
          </a>

          <Link
            href="#ia-impact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white text-xs sm:text-sm transition-all duration-300 hover:bg-white/30 bg-white/20 border border-white/40 shadow-md backdrop-blur-md font-bold shrink-0 whitespace-nowrap cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] text-[#F6D448]">menu_book</span>
            <span>Conocer Plan Primaria</span>
          </Link>
        </div>
      </motion.div>

      {/* 4 Lower Feature Cards */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto mt-8 sm:mt-10 lg:mt-12">
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase drop-shadow-sm">
              Diferenciadores Clave de Primaria
            </span>
          </div>
          <span className="text-xs text-slate-200 hidden sm:inline-block font-medium">
            Metodología, Artes y Formación de Vanguardia
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative h-60 sm:h-64 rounded-2xl overflow-hidden shadow-xl border border-white/20 group hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                alt={card.title}
                src={card.image}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute top-3 left-3 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm text-white border border-white/20 shadow-xs ${card.badgeBg}`}
                >
                  {card.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="font-headline text-[19px] sm:text-[20px] font-bold text-white leading-tight mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed font-body">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
