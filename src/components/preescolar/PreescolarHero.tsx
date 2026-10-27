"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function PreescolarHero() {
  return (
    <section className="relative w-full min-h-[700px] lg:h-[760px] overflow-hidden bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        {/* Columna Izquierda con Imagen de Fondo y Copy Principal */}
        <div className="relative w-full h-[520px] lg:h-full overflow-hidden flex flex-col justify-end pt-28 pb-14 px-6 sm:px-10 lg:px-14 z-10">
          <Image
            alt="Preschool hands-on exploration and play"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WnjnAAqxww6xqK8GFdCTlqGHCW98swCrss2JAD-1tt19BDvZChqC9eNxZ5gtxjqrxLyS0ZiYrWs1g7RwKM6Y0sIY99lU_ofJPpXk1JoyqJ2yME18XZDPOQgvh_qBq5aBhT7dPB0-ZB3y7AyNoBkoPDZtn8eSg0Q-dzgj3C_F-GsV9_rspYD7RIYJxBj-DWIq1Q8Gi-sxlXQNU6vUdNZbnw7iQqG9uBCjV1kv5zwrEUZObcuOSlkqUqqwU"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35 z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 flex flex-col items-start space-y-5 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/30 bg-white/20 backdrop-blur-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F6D448] animate-pulse" />
              <span className="text-xs sm:text-sm text-white font-bold tracking-wide">
                Preescolar Bilingüe AMCO · Kínder 1, 2 y 3 (3 a 6 Años)
              </span>
            </div>

            <h1 className="font-headline text-[34px] sm:text-[44px] md:text-[50px] text-white tracking-tight leading-tight font-bold drop-shadow-md">
              Preescolar Instituto Everest
            </h1>

            <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed drop-shadow-sm">
              Fomentamos el pensamiento crítico, la resolución de retos cotidianos, la inmersión bilingüe natural AMCO y el asombro científico a través de la indagación activa en un entorno seguro, cálido y bicultural.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-3.5 pt-2 w-full">
              <Link
                href="#ruta-pedagogica"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-white text-xs sm:text-sm transition-all duration-300 hover:bg-white/30 bg-white/20 border border-white/40 shadow-md backdrop-blur-md font-bold shrink-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] text-[#F6D448]">
                  description
                </span>
                <span>Conocer Ruta Pedagógica</span>
              </Link>

              <Link
                href="#areas-desarrollo"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-white text-xs sm:text-sm transition-all duration-300 hover:bg-white/30 bg-white/10 border border-white/25 shadow-md backdrop-blur-md font-semibold shrink-0 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] text-white">
                  explore
                </span>
                <span>Áreas Clave de Desarrollo</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Columna Derecha con Segunda Imagen y Mini Preview Card */}
        <div className="relative w-full h-[480px] lg:h-full overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-white/15">
          <Image
            alt="Modern bright pre-kindergarten classroom"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/35 z-10" />

          <div className="relative z-20 flex items-start justify-between w-full pt-16 lg:pt-20" />

          <div className="relative z-20 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 w-full">
            <div className="text-white max-w-sm">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F6D448] text-slate-900 inline-block mb-1.5 shadow-sm">
                Campus León · Instalaciones Preescolar
              </span>
              <p className="text-sm font-semibold text-white/95">
                Aulas bilingües con estaciones modulares de experimentación activa.
              </p>
            </div>

            {/* Mini preview card */}
            <div className="w-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 bg-slate-900 shrink-0 group hover:scale-105 transition-all duration-300 hidden md:block">
              <div className="relative h-24 w-full">
                <Image
                  alt="Hands-on exploration at preschool"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WEkywM1dCUfkQw6IGGd8loUL6ZUijoufDtn0AC6ILxPQ765AbYxGd8wL88ijzhKcVoThfcADutSzyzovJoIDg-NfjuP55ep2o2RY9AmUZMYOuDqp7gKh0eDQ2eS7OohYj9KXfX1FjzxgRicBooSrZsL91D3vP_TQ9uov97pJj2Fo6fRRd4i_sDmaX3mfTHXQde1t5zZlYCMagLclui2N6lyeCpCIdKn1iSwTmfycqMficONqhB1ixux1Y"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F6D448] block">
                    STEAM Lab
                  </span>
                  <span className="text-xs font-bold block leading-tight text-white">
                    Indagación y Ciencia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
