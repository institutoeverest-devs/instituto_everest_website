"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function MaternalHero() {
  return (
    <section
      id="hero-maternal"
      className="relative w-full min-h-[640px] lg:min-h-[740px] overflow-hidden flex items-center justify-center pt-28 pb-20 lg:pt-36 lg:pb-28"
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

      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 relative z-10 my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Lado Izquierdo: Copy y CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Breadcrumb / Tag badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-sm border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F6D448] animate-pulse" />
              <span className="text-xs sm:text-sm text-white font-bold tracking-wide">
                Niveles Educativos • De 1 a 3 Años
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline text-[38px] sm:text-[48px] lg:text-[56px] text-white tracking-tight leading-[1.12] font-bold">
              Maternal Instituto Everest
              <br />
              <span className="italic text-[#F6D448]">Primeros pasos con amor,</span>{" "}
              <span className="italic text-white/95">seguridad y asombro.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-slate-100/90 max-w-xl leading-relaxed font-normal">
              Primeras experiencias de aprendizaje en un ambiente seguro, afectivo y altamente estimulante. Acompañamos el neurodesarrollo temprano, la psicomotricidad guiada, el apego seguro y las primeras conexiones bilingües con la calidez de{" "}
              <strong className="text-white font-bold">Sol Everest</strong> y la ternura de nuestros personajes institucionales.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-4 pt-2 w-full">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20una%20visita%20guiada%20a%20Maternal%20en%20Instituto%20Everest%20León`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white font-bold text-sm sm:text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
                style={{
                  backgroundColor: "rgb(218, 71, 74)",
                  boxShadow: "rgba(218, 71, 74, 0.45) 0px 8px 24px",
                }}
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                Agendar Visita a Maternal
              </a>

              <Link
                href="#pilares-maternal"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white font-bold text-sm sm:text-base transition-all duration-300 hover:bg-white/20 bg-white/10 border border-white/30 backdrop-blur-md shadow-sm shrink-0"
              >
                <span className="material-symbols-outlined text-[20px] text-[#F6D448]">
                  description
                </span>
                Conocer Plan Maternal
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-white/90 font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#F6D448]">
                  verified_user
                </span>
                <span>Personal Pediátrico & Docente Calificado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#F6D448]">
                  music_note
                </span>
                <span>Música Curricular Diaria</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-white">
                  alarm
                </span>
                <span>Horario Extendido hasta 6:00 PM</span>
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
            <div className="relative w-full max-w-md mx-auto">
              {/* Contenedor de la foto principal */}
              <div className="w-full h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-800 relative group">
                <Image
                  alt="Niños en Maternal Instituto Everest explorando área sensorial y psicomotricidad"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv22vsS_tksxGdKTCU8_tp_KwTRVHi5K_JQS70rF5iT8-ArJVGVxHySZiAMVtxdtG03yQKSeZqrsqKkzh8n3w1MWtDXMDaL0FVG3yrniouEAO-kzjSRQAqcjF4QS-FXYvSTfmTp0ZbCOKw4GIKsghX8DMKBGfMyo1MtX99MJ5EmvqaPY-BsHlFhJpIkiHeW6wEjXcvNApHFWffpl2Z5lyXWVXRrGcunWSPBz0LUedlETTIfIbM2rp1"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F6D448] text-slate-900 inline-block mb-1 shadow-sm">
                    Campus León · Área Exclusiva
                  </span>
                  <p className="text-sm font-semibold text-white/95">
                    Aulas adaptadas a escala infantil con piso amortiguado y luz natural.
                  </p>
                </div>
              </div>

              {/* Personaje Flotante 1: Sol Everest */}
              <div className="absolute -top-7 -left-7 w-28 h-28 rounded-2xl bg-white shadow-2xl p-2 border border-slate-100 flex flex-col items-center justify-center animate-gentle-float">
                <Image
                  alt="Sol Everest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABqvUS6YHXmTvX2lXmFVN5o49AR-TOGpIlkvvcpCbubvlCKuSTlRUyo4c_mpf9nNLq9roE1jBeYi9AQGqpQjUFYz65hJSkPj8g6vFec1Fao5nqfTXSwxtkipBW6Xk92uR0qo6tPuQ_kfmuysx2Cp9N6G2bqO0qQPfYiHroPv8XzwmtksBxY8uGbmSifBmcPdz4ng6qizZJ90UesL2_08hIpr6Pt4zXVGJYF7BRhMN8S5WO780Iou_3G1EPkTKVlTJ1wA"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-[11px] font-bold text-slate-800 -mt-1">Sol Everest</span>
              </div>

              {/* Personaje Flotante 2: Nube Everest */}
              <div
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-white shadow-2xl p-2 border border-slate-100 flex flex-col items-center justify-center animate-gentle-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Image
                  alt="Nube Everest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs6OQM42L6HoaYsv0XCk4wUgHZft7ccO_kI3Y5k3Hcr2n1viwiRjEVeHzwnsDhlk740XHlNFH_1g2fS77tIYF33h4Az1igh3dcGo5o1wiriyfQ6_yOv_bBuEpoJ0tWZEASh3_pSBkrKaQr_pTr0L0VJ-rne58rk-11IlyM7N4fHN8z_6sSHEPdcvWEuLKIchI4H_9KzEKCm8YRKfHskDuYDsuPEE03iOn8DZgyITdkaGcGnjqPqPtP_a-zs6pPftG52Q"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-[11px] font-bold text-slate-800 -mt-1">Nube Everest</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
