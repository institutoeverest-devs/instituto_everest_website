"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function MaternalHero() {
  return (
    <section
      id="hero-maternal"
      className="relative w-full overflow-hidden flex items-center justify-center pt-28 pb-14 sm:pt-32 lg:pt-32 lg:pb-16"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Lado Izquierdo: Copy y CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-3.5 sm:space-y-4"
          >
            {/* Breadcrumb / Tag badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full shadow-sm border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F6D448] animate-pulse" />
              <span className="text-xs sm:text-[13px] text-white font-bold tracking-wide">
                Niveles Educativos • De 1 a 3 Años
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.14] font-bold">
              Maternal Instituto Everest
              <br />
              <span className="italic text-[#F6D448]">Primeros pasos con amor,</span>{" "}
              <span className="italic text-white/95">seguridad y asombro.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-100/90 max-w-xl leading-relaxed font-normal">
              Primeras experiencias de aprendizaje en un ambiente seguro, afectivo y altamente estimulante. Acompañamos el neurodesarrollo temprano, la psicomotricidad guiada, el apego seguro y las primeras conexiones bilingües con la calidez de{" "}
              <strong className="text-white font-bold">Sol Everest</strong> y la ternura de nuestros personajes institucionales.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 pt-1 w-full">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20una%20visita%20guiada%20a%20Maternal%20en%20Instituto%20Everest%20León`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-white font-bold text-xs sm:text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
                style={{
                  backgroundColor: "rgb(218, 71, 74)",
                  boxShadow: "rgba(218, 71, 74, 0.45) 0px 8px 24px",
                }}
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Agendar Visita a Maternal</span>
              </a>

              <Link
                href="#pilares-maternal"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-white font-bold text-xs sm:text-sm transition-all duration-300 hover:bg-white/20 bg-white/10 border border-white/30 backdrop-blur-md shadow-sm shrink-0"
              >
                <span className="material-symbols-outlined text-[18px] text-[#F6D448]">
                  description
                </span>
                <span>Conocer Plan Maternal</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs text-white/90 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-[#F6D448]">
                  verified_user
                </span>
                <span>Personal Calificado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-[#F6D448]">
                  music_note
                </span>
                <span>Música Curricular Diaria</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-white">
                  alarm
                </span>
                <span>Horario Extendido</span>
              </div>
            </div>
          </motion.div>

          {/* Lado Derecho: Foto principal con personajes flotantes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm lg:max-w-md mx-auto">
              {/* Contenedor de la foto principal */}
              <div className="w-full h-[320px] sm:h-[360px] lg:h-[390px] xl:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-800 relative group">
                <Image
                  alt="Niños en Maternal Instituto Everest explorando área sensorial y psicomotricidad"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv22vsS_tksxGdKTCU8_tp_KwTRVHi5K_JQS70rF5iT8-ArJVGVxHySZiAMVtxdtG03yQKSeZqrsqKkzh8n3w1MWtDXMDaL0FVG3yrniouEAO-kzjSRQAqcjF4QS-FXYvSTfmTp0ZbCOKw4GIKsghX8DMKBGfMyo1MtX99MJ5EmvqaPY-BsHlFhJpIkiHeW6wEjXcvNApHFWffpl2Z5lyXWVXRrGcunWSPBz0LUedlETTIfIbM2rp1"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#F6D448] text-slate-900 inline-block mb-1 shadow-sm">
                    Campus León · Área Exclusiva
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                    Aulas adaptadas a escala infantil con piso amortiguado y luz natural.
                  </p>
                </div>
              </div>

              {/* Personaje Flotante 1: Sol Everest */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white shadow-xl p-1.5 border border-slate-100 flex flex-col items-center justify-center animate-gentle-float">
                <Image
                  alt="Sol Everest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABqvUS6YHXmTvX2lXmFVN5o49AR-TOGpIlkvvcpCbubvlCKuSTlRUyo4c_mpf9nNLq9roE1jBeYi9AQGqpQjUFYz65hJSkPj8g6vFec1Fao5nqfTXSwxtkipBW6Xk92uR0qo6tPuQ_kfmuysx2Cp9N6G2bqO0qQPfYiHroPv8XzwmtksBxY8uGbmSifBmcPdz4ng6qizZJ90UesL2_08hIpr6Pt4zXVGJYF7BRhMN8S5WO780Iou_3G1EPkTKVlTJ1wA"
                  width={48}
                  height={48}
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
                />
                <span className="text-[10px] font-bold text-slate-800 -mt-0.5">Sol Everest</span>
              </div>

              {/* Personaje Flotante 2: Nube Everest */}
              <div
                className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white shadow-xl p-1.5 border border-slate-100 flex flex-col items-center justify-center animate-gentle-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Image
                  alt="Nube Everest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs6OQM42L6HoaYsv0XCk4wUgHZft7ccO_kI3Y5k3Hcr2n1viwiRjEVeHzwnsDhlk740XHlNFH_1g2fS77tIYF33h4Az1igh3dcGo5o1wiriyfQ6_yOv_bBuEpoJ0tWZEASh3_pSBkrKaQr_pTr0L0VJ-rne58rk-11IlyM7N4fHN8z_6sSHEPdcvWEuLKIchI4H_9KzEKCm8YRKfHskDuYDsuPEE03iOn8DZgyITdkaGcGnjqPqPtP_a-zs6pPftG52Q"
                  width={48}
                  height={48}
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
                />
                <span className="text-[10px] font-bold text-slate-800 -mt-0.5">Nube Everest</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
