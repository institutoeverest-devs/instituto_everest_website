"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function MaternalHero() {
  return (
    <section
      id="hero-maternal"
      className="relative w-full overflow-hidden flex items-center justify-center pt-28 pb-14 sm:pt-32 lg:pt-28 lg:pb-12"
      style={{
        background: "linear-gradient(135deg, #345f9c 0%, #3b5692 45%, #546fac 100%)",
      }}
    >
      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 25%, rgba(246, 212, 72, 0.22) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(255, 255, 255, 0.12) 0%, transparent 50%)",
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-white/10" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-[#F6D448]/15" />

      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6 md:gap-6 lg:gap-10 items-center">
          {/* Lado Izquierdo: Copy y CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 lg:col-span-7 flex flex-col items-start text-left space-y-3 sm:space-y-3.5 md:space-y-3 lg:space-y-4"
          >
            {/* Headline */}
            <h1 className="font-headline text-[26px] xs:text-[28px] sm:text-[32px] md:text-[26px] lg:text-[34px] xl:text-[38px] text-white tracking-tight leading-[1.16] lg:leading-[1.18] font-bold">
              Maternal Instituto Everest
              <br />
              <span className="italic text-[#F6D448]">Primeros pasos con amor,</span>{" "}
              <span className="italic text-white/95">seguridad y asombro.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-sm sm:text-[15px] md:text-[12.5px] lg:text-[15px] text-slate-100/95 max-w-xl leading-relaxed font-normal">
              Primeras experiencias de aprendizaje en un ambiente seguro, afectivo y altamente estimulante. Acompañamos el neurodesarrollo temprano, la psicomotricidad guiada, el apego seguro y las primeras conexiones bilingües con la calidez de{" "}
              <strong className="text-white font-bold">Sol Everest</strong> y la ternura de nuestros personajes institucionales.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-3 lg:gap-4 pt-1 w-full">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20una%20visita%20guiada%20a%20Maternal%20en%20Instituto%20Everest%20León`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 md:px-3.5 md:py-2 lg:px-6 lg:py-3 rounded-xl text-white font-bold text-xs sm:text-sm md:text-xs lg:text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
                style={{
                  backgroundColor: "rgb(218, 71, 74)",
                  boxShadow: "rgba(218, 71, 74, 0.45) 0px 8px 24px",
                }}
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">calendar_month</span>
                <span>Agendar Visita a Maternal</span>
              </a>

              <Link
                href="#pilares-maternal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 md:px-3.5 md:py-2 lg:px-6 lg:py-3 rounded-xl text-white font-bold text-xs sm:text-sm md:text-xs lg:text-sm transition-all duration-300 hover:bg-white/20 bg-white/10 border border-white/30 backdrop-blur-md shadow-sm shrink-0"
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#F6D448]">
                  description
                </span>
                <span>Conocer Plan Maternal</span>
              </Link>
            </div>
          </motion.div>

          {/* Lado Derecho: Foto principal con personajes flotantes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-5 relative flex items-center justify-center w-full px-2 sm:px-0"
          >
            <div className="relative w-full max-w-sm lg:max-w-[340px] xl:max-w-[360px] mx-auto">
              {/* Contenedor de la foto principal */}
              <div className="w-full h-[280px] xs:h-[300px] sm:h-[340px] md:h-[320px] lg:h-[310px] xl:h-[330px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-800 relative group">
                <Image
                  alt="Niños en Maternal Instituto Everest explorando área sensorial y psicomotricidad"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv22vsS_tksxGdKTCU8_tp_KwTRVHi5K_JQS70rF5iT8-ArJVGVxHySZiAMVtxdtG03yQKSeZqrsqKkzh8n3w1MWtDXMDaL0FVG3yrniouEAO-kzjSRQAqcjF4QS-FXYvSTfmTp0ZbCOKw4GIKsghX8DMKBGfMyo1MtX99MJ5EmvqaPY-BsHlFhJpIkiHeW6wEjXcvNApHFWffpl2Z5lyXWVXRrGcunWSPBz0LUedlETTIfIbM2rp1"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Personaje Flotante 1: Sol Everest */}
              <div className="absolute -top-3 left-1 md:-top-3.5 md:-left-3.5 lg:-top-3.5 lg:-left-3.5 w-16 h-16 sm:w-18 sm:h-18 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-2xl bg-white shadow-xl p-1.5 border border-slate-100 flex flex-col items-center justify-center animate-gentle-float z-20">
                <Image
                  alt="Sol Everest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABqvUS6YHXmTvX2lXmFVN5o49AR-TOGpIlkvvcpCbubvlCKuSTlRUyo4c_mpf9nNLq9roE1jBeYi9AQGqpQjUFYz65hJSkPj8g6vFec1Fao5nqfTXSwxtkipBW6Xk92uR0qo6tPuQ_kfmuysx2Cp9N6G2bqO0qQPfYiHroPv8XzwmtksBxY8uGbmSifBmcPdz4ng6qizZJ90UesL2_08hIpr6Pt4zXVGJYF7BRhMN8S5WO780Iou_3G1EPkTKVlTJ1wA"
                  width={48}
                  height={48}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 object-contain"
                />
                <span className="text-[8px] sm:text-[9px] md:text-[9px] font-bold text-slate-800 -mt-0.5">Sol Everest</span>
              </div>

              {/* Personaje Flotante 2: Nube Everest */}
              <div
                className="absolute -bottom-3 right-1 md:-bottom-3.5 md:-right-3.5 lg:-bottom-3.5 lg:-right-3.5 w-16 h-16 sm:w-18 sm:h-18 md:w-18 md:h-18 lg:w-18 lg:h-18 rounded-2xl bg-white shadow-xl p-1.5 border border-slate-100 flex flex-col items-center justify-center animate-gentle-float z-20"
                style={{ animationDelay: "1.5s" }}
              >
                <Image
                  alt="Nube Everest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs6OQM42L6HoaYsv0XCk4wUgHZft7ccO_kI3Y5k3Hcr2n1viwiRjEVeHzwnsDhlk740XHlNFH_1g2fS77tIYF33h4Az1igh3dcGo5o1wiriyfQ6_yOv_bBuEpoJ0tWZEASh3_pSBkrKaQr_pTr0L0VJ-rne58rk-11IlyM7N4fHN8z_6sSHEPdcvWEuLKIchI4H_9KzEKCm8YRKfHskDuYDsuPEE03iOn8DZgyITdkaGcGnjqPqPtP_a-zs6pPftG52Q"
                  width={48}
                  height={48}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 object-contain"
                />
                <span className="text-[8px] sm:text-[9px] md:text-[9px] font-bold text-slate-800 -mt-0.5">Nube Everest</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
