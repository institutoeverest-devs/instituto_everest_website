"use client";

import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

export type PillarType = {
  id: number;
  num: string;
  callout: string;
  title: string;
  description: string;
  quote: string;
  bullets: string[];
  contentPosition: "l" | "r";
  badgeColor: string;
  image: string;
  icon: string;
  cardCaption: string;
};

const PILLARS: PillarType[] = [
  {
    id: 1,
    num: "01",
    callout: "Bilingüismo Vivencial",
    title: "Adquisición Natural del Inglés AMCO",
    description:
      "Los estudiantes piensan, dialogan y resuelven retos directamente en inglés sin traducción mental mecánica, desarrollando fluidez comunicativa y seguridad desde Kínder 1.",
    quote:
      "«Un segundo idioma que se adquiere con naturalidad, emoción y alegría.»",
    badgeColor: "#557EBD",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1X2YcarXyd2DSZwLIt1QZ0ZTAMbIqJGHBYLky2M-IlYBQVC2fG25YiKz9hGsiDAJPhvPKVV4qDUw-PXyfn7aXvaZhdvuUItpHkKKnGDYOuk1MIB_azPtdiH8TNQEdbDrQXteycAwqMk5Y0t6wfjZ2cqOPs9R0cCPn4ESeu38Ce-6x9kH3mJ93EkdFFaypbwK7PJxCD3yHx-8dE2VSxPXsFoPBG8qXW6avBYvRvLSqeofXTLwWt4gcHJtg",
    icon: "translate",
    cardCaption:
      "Inmersión Bilingüe AMCO · Fluidez comunicativa y pensamiento global",
    bullets: [
      "Inmersión curricular total desde Kínder 1",
      "Fonética activa, storytelling y debate reflexivo",
      "Certificaciones internacionales oficiales",
    ],
    contentPosition: "l",
  },
  {
    id: 2,
    num: "02",
    callout: "Cultura STEAM & IMPACT IA",
    title: "Robótica, Código y Criterio Ético Digital",
    description:
      "Formamos creadores conscientes de tecnología. Con robótica educativa y el programa IMPACT de AMCO, los alumnos abordan la IA con discernimiento humano y pensamiento computacional.",
    quote:
      "«Tecnología con propósito para resolver retos del mundo real.»",
    badgeColor: "#DA474A",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Wg91R-_7d_4UpoQBmWkLnpxDrUs4-GRc3wotLoVx2uVwZoW5OXZLeN_pJmFZfLALOnvh2VcHpFG5X1BAm6FJHhV8Axlpsq-zEgfaIBDV4V712pv88NY8yRbhbuSwD0lPWvJ2pIP1wrG5yEJkl-nCfEL56Z48o_j0T5nsy52tt7Da0qv6F411ASwHM_c-ZkpN-5JbNVDOBDN2idE0tcwuAhXS_uHTnhA3d2dauzB6jU_AmecP95BhteEbI",
    icon: "smart_toy",
    cardCaption:
      "Laboratorio STEAM & Robótica · Pensamiento maker y ética digital",
    bullets: [
      "Laboratorio vivencial con kits de robótica y código",
      "Programa IMPACT AMCO exclusivo en Primaria",
      "Comprensión de sesgos y uso ético de la IA",
    ],
    contentPosition: "r",
  },
  {
    id: 3,
    num: "03",
    callout: "Sensibilidad Estética",
    title: "Música Curricular: Orquesta y Expresión",
    description:
      "Materia troncal indispensable que potencia las conexiones neuronales, la concentración y la disciplina armónica a través del ensamble orquestal escolar y la lectura de partituras.",
    quote:
      "«La música educa la mente y afina el corazón para convivir.»",
    badgeColor: "#8EB674",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
    icon: "music_note",
    cardCaption:
      "Orquesta Escolar Curricular · Sensibilidad, ritmo y oído armónico",
    bullets: [
      "Ensamble instrumental escolar y coro curricular",
      "Lectura musical, rítmica y educación auditiva",
      "Conciertos que fortalecen la seguridad escénica",
    ],
    contentPosition: "l",
  },
  {
    id: 4,
    num: "04",
    callout: "Carácter & Bienestar Físico",
    title: "Taekwondo Curricular y Formación Socioemocional",
    description:
      "Equilibrio integral de cuerpo y mente. Inculcamos principios de respeto, autocontrol, resiliencia física y canalización sana de emociones acompañados de las mascotas Everest.",
    quote:
      "«La verdadera fuerza es la serenidad ante cada desafío.»",
    badgeColor: "#E5A93C",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5blRNUoZKhPY7vR8rhoNG3Ld3KbZsLZ65E2y-N3V0TCYuaU7H6sqLQ2gB5LCEPN2ldjDXW-e_2rmgIBZM41dE5QFhX3s9k9lR6zsMrFZaGKJQfWwbixKSUqBCMRisepVdjmiWMsROQsVh00VB1butn1cBmi__bSYmtVP6KFOOvVD1-YCe-9qolR-b7KWZAAHUTIgVQB0wjtY4SGituyVJXWBC1Z2HkORldGHD2SO39D2QfjH58n5Akh8fkFe78UAdYA",
    icon: "sports_kabaddi",
    cardCaption:
      "Taekwondo y Psicomotricidad · Disciplina, respeto y autocontrol",
    bullets: [
      "Taekwondo formativo impartido por instructores certificados",
      "Psicomotricidad fina y gruesa estructurada por nivel",
      "Acompañamiento socioemocional y disciplina positiva",
    ],
    contentPosition: "r",
  },
];

export function NosotrosPilaresFilosofia() {
  return (
    <section className="py-16 sm:py-24 bg-[#f7f9fb] relative overflow-visible">
      {/* Header de la Sección */}
      <div className="text-center max-w-3xl mx-auto space-y-4 px-4 pb-8 sm:pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1128] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#F6D448]" />
          <span>Los 4 Ejes Formativos de Instituto Everest</span>
        </div>

        <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#0A1128] tracking-tight leading-tight">
          Una Pedagogía que Equilibra Mente, Alma y Cuerpo
        </h2>

        <p className="text-slate-600 font-body text-base sm:text-lg leading-relaxed">
          Nuestro modelo integra áreas tradicionalmente dispersas en un currículo unificado donde la tecnología, el inglés, las artes y el deporte convergen armónicamente.
        </p>
      </div>

      {/* Componente Swap Column Features */}
      <SwapColumnFeatures />
    </section>
  );
}

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState<PillarType>(PILLARS[0]);

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Sticky Sliding Image Display on Desktop */}
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[calc(100vh-6.5rem)] hidden md:block" />

      {/* Sequential Content Blocks con suficiente recorrido para que el texto anterior salga por completo antes del cambio */}
      {PILLARS.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
        />
      ))}
    </div>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: PillarType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-20 lg:top-24 z-10 hidden h-[calc(100vh-6.5rem)] w-full items-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 30,
        }}
        className="h-fit w-full md:w-[48%] lg:w-[46%] p-3 sm:p-4"
      >
        <PillarFeatureCard featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<PillarType>>;
  featureInView: PillarType;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // Se define un margen estricto al centro para que el texto anterior haya salido por completo antes de que se dispare el cambio
  const isInView = useInView(ref, {
    margin: "-32% 0px -32% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView, featureInView, setFeatureInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-[125vh] items-center"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      {/* Columna de Texto: compacta y balanceada para no sobrepasar la altura de la imagen */}
      <div className="flex flex-col justify-center w-full md:w-[46%] lg:w-[44%] px-4 py-8 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="space-y-3.5 max-w-md"
        >
          {/* Badge & Number */}
          <div className="flex items-center gap-2.5">
            <span
              className="font-headline text-2xl sm:text-3xl font-extrabold"
              style={{ color: featureInView.badgeColor }}
            >
              {featureInView.num}.
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800"
              style={{
                backgroundColor: `${featureInView.badgeColor}18`,
                border: `1px solid ${featureInView.badgeColor}44`,
              }}
            >
              {featureInView.callout}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-headline text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0A1128] leading-snug">
            {featureInView.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-body">
            {featureInView.description}
          </p>

          {/* Quote Compact Callout */}
          <div
            className="pl-3 py-1.5 border-l-2 italic text-slate-700 text-xs font-headline leading-relaxed bg-white/80 rounded-r-xl border-slate-300 shadow-xs"
            style={{ borderLeftColor: featureInView.badgeColor }}
          >
            {featureInView.quote}
          </div>

          {/* Bullets */}
          <ul className="space-y-1.5 pt-0.5">
            {featureInView.bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                className="flex items-center gap-2 text-xs text-slate-700 font-medium"
              >
                <span
                  className="material-symbols-outlined text-[16px] shrink-0"
                  style={{ color: featureInView.badgeColor }}
                >
                  check_circle
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mobile visual card displayed inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="mt-6 block md:hidden"
        >
          <PillarFeatureCard featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const PillarFeatureCard = ({ featureInView }: { featureInView: PillarType }) => {
  return (
    <div className="relative h-[340px] sm:h-[380px] lg:h-[400px] xl:h-[420px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-[#0A1128] group">
      <AnimatePresence mode="wait">
        <motion.div
          key={featureInView.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            alt={featureInView.title}
            src={featureInView.image}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
            priority={featureInView.id === 1}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Top Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md text-white border border-white/25"
              style={{ backgroundColor: `${featureInView.badgeColor}EE` }}
            >
              <span className="material-symbols-outlined text-[15px]">
                {featureInView.icon}
              </span>
              <span>{featureInView.callout}</span>
            </span>
          </div>

          {/* Step Pill */}
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold">
              {featureInView.num} / 04
            </span>
          </div>

          {/* Bottom Caption */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-10 space-y-1">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-[#F6D448] block">
              {featureInView.num}. EJE FORMATIVO EVEREST
            </span>
            <p className="font-headline text-sm sm:text-base font-bold leading-snug drop-shadow-md">
              {featureInView.cardCaption}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
