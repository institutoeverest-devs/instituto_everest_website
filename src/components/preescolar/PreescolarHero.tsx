"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function PreescolarHero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 md:h-[540px] lg:h-[612px] min-h-[500px]">
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 w-full h-full">
        {/* Columna Izquierda con Imagen de Fondo y Copy Principal */}
        <div className="md:col-span-7 lg:col-span-7 relative w-full h-[520px] xs:h-[540px] sm:h-[560px] md:h-full lg:h-full flex flex-col justify-end pt-24 xs:pt-28 pb-8 sm:pb-10 lg:pb-12 px-5 sm:px-8 lg:px-8 xl:px-12 z-10">
          <Image
            alt="Preschool hands-on exploration and play"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WnjnAAqxww6xqK8GFdCTlqGHCW98swCrss2JAD-1tt19BDvZChqC9eNxZ5gtxjqrxLyS0ZiYrWs1g7RwKM6Y0sIY99lU_ofJPpXk1JoyqJ2yME18XZDPOQgvh_qBq5aBhT7dPB0-ZB3y7AyNoBkoPDZtn8eSg0Q-dzgj3C_F-GsV9_rspYD7RIYJxBj-DWIq1Q8Gi-sxlXQNU6vUdNZbnw7iQqG9uBCjV1kv5zwrEUZObcuOSlkqUqqwU"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 flex flex-col items-start space-y-3 sm:space-y-3.5 lg:space-y-4 max-w-xl w-full"
          >
            <h1 className="font-headline text-[26px] xs:text-[28px] sm:text-4xl md:text-[28px] lg:text-[42px] text-white tracking-tight leading-tight font-bold drop-shadow-md">
              Preescolar Instituto Everest
            </h1>

            <p className="text-xs xs:text-sm md:text-[13px] lg:text-[15px] text-white/95 font-medium leading-relaxed drop-shadow-sm max-w-lg">
              Fomentamos el pensamiento crítico, la resolución de retos cotidianos, la inmersión bilingüe natural AMCO y el asombro científico a través de la indagación activa en un entorno seguro, cálido y bicultural.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-start gap-2.5 sm:gap-3 lg:gap-3.5 pt-1 w-full">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20una%20visita%20guiada%20a%20Preescolar%20en%20Instituto%20Everest%20León`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-4 sm:py-2.5 md:px-3.5 md:py-2.5 lg:px-5 lg:py-3 rounded-xl text-white font-bold text-xs sm:text-sm md:text-xs lg:text-[13.5px] xl:text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-center whitespace-nowrap"
                style={{
                  backgroundColor: "rgb(218, 71, 74)",
                  boxShadow: "rgba(218, 71, 74, 0.45) 0px 8px 24px",
                }}
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">calendar_month</span>
                <span>
                  Agendar Visita <span className="inline md:hidden lg:inline">Preescolar</span>
                </span>
              </a>

              <Link
                href="#ruta-pedagogica"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-4 sm:py-2.5 md:px-3.5 md:py-2.5 lg:px-5 lg:py-3 rounded-xl text-white font-bold text-xs sm:text-sm md:text-xs lg:text-[13.5px] xl:text-sm transition-all duration-300 hover:bg-white/30 bg-white/20 border border-white/40 shadow-md backdrop-blur-md cursor-pointer text-center whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#F6D448]">
                  description
                </span>
                <span>
                  Conocer Plan <span className="inline md:hidden lg:inline">Preescolar</span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Columna Derecha con Segunda Imagen (visible en tablet y desktop) */}
        <div className="hidden md:block md:col-span-5 lg:col-span-5 relative w-full h-full overflow-hidden border-t md:border-t-0 md:border-l border-white/15">
          <Image
            alt="Modern bright pre-kindergarten classroom"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20 z-10" />
        </div>
      </div>
    </section>
  );
}
