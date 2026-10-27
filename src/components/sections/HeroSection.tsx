"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[640px] lg:min-h-[720px] overflow-hidden flex items-center justify-center pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Background Video with Poster Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="https://lh3.googleusercontent.com/aida-public/AB6AXuBv22vsS_tksxGdKTCU8_tp_KwTRVHi5K_JQS70rF5iT8-ArJVGVxHySZiAMVtxdtG03yQKSeZqrsqKkzh8n3w1MWtDXMDaL0FVG3yrniouEAO-kzjSRQAqcjF4QS-FXYvSTfmTp0ZbCOKw4GIKsghX8DMKBGfMyo1MtX99MJ5EmvqaPY-BsHlFhJpIkiHeW6wEjXcvNApHFWffpl2Z5lyXWVXRrGcunWSPBz0LUedlETTIfIbM2rp1"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-children-in-a-classroom-raising-their-hands-41481-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-kids-playing-and-learning-in-preschool-classroom-43187-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10, 17, 40, 0.72) 0%, rgba(10, 17, 40, 0.48) 50%, rgba(10, 17, 40, 0.82) 100%)",
        }}
      />
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(246, 212, 72, 0.12)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(85, 126, 189, 0.2)" }}
      />

      {/* Hero Content Container */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start justify-center text-left my-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl flex flex-col items-start text-left space-y-6"
        >
          {/* Badge Inscripciones */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#F6D448" }}
            />
            <span className="text-xs sm:text-sm text-white font-bold tracking-wide">
              Ciclo Escolar 2025 · Inscripciones Abiertas León, Gto.
            </span>
          </div>

          {/* Level Pills */}
          <div className="flex items-center justify-start gap-2 flex-wrap">
            <span
              className="px-3 py-1 rounded-full text-[12px] font-bold text-white uppercase tracking-wider shadow-sm"
              style={{ backgroundColor: "rgb(85, 126, 189)" }}
            >
              Maternal
            </span>
            <span
              className="px-3 py-1 rounded-full text-[12px] font-bold text-white uppercase tracking-wider shadow-sm"
              style={{ backgroundColor: "rgb(142, 182, 116)" }}
            >
              Preescolar Bilingüe
            </span>
            <span
              className="px-3 py-1 rounded-full text-[12px] font-bold text-white uppercase tracking-wider shadow-sm"
              style={{ backgroundColor: "rgb(218, 71, 74)" }}
            >
              Primaria STEAM
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-headline text-[42px] sm:text-[54px] lg:text-[62px] text-white tracking-tight leading-[1.12] drop-shadow-md">
            Donde tus sueños <br />
            <span className="italic" style={{ color: "#F6D448" }}>
              alcanzan la cima.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-white/95 max-w-xl leading-relaxed drop-shadow-sm font-normal">
            En Instituto Everest formamos líderes compasivos, seguros y bilingües. Aquí crecemos juntos con calidez humana, bilingüismo real AMCO e innovación STEAM.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 pt-2 w-full">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20una%20visita%20personalizada%20en%20Instituto%20Everest%20León`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white font-bold text-sm sm:text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-center"
              style={{
                backgroundColor: "rgb(218, 71, 74)",
                boxShadow: "rgba(218, 71, 74, 0.45) 0px 10px 28px",
              }}
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              Agendar Visita Personalizada
            </a>

            <Link
              href="#niveles-educativos"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white font-bold text-sm sm:text-base transition-all duration-300 hover:bg-white/25 backdrop-blur-md cursor-pointer text-center"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "1.5px solid rgba(255, 255, 255, 0.4)",
                textShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px",
              }}
            >
              <span className="material-symbols-outlined text-[20px]">explore</span>
              Conocer Modelo Educativo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
