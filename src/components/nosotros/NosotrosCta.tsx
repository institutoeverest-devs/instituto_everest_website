"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function NosotrosCta() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-[#0A1128] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#557EBD]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#F6D448]/20 blur-3xl pointer-events-none" />

      <div className="max-w-[1140px] mx-auto relative z-10">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 backdrop-blur-xl shadow-2xl text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6D448] text-slate-900 font-bold text-xs uppercase tracking-wider shadow-md mx-auto">
            <span className="material-symbols-outlined text-[16px]">door_open</span>
            <span>Admisiones Abiertas · Ciclo 2027 - 2028</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              Ven a Sentir la Calidez de Instituto Everest en Persona
            </h2>
            <p className="font-headline italic text-slate-200 text-lg sm:text-2xl leading-relaxed">
              «Las mejores decisiones para el futuro de tus hijos se toman caminando por el lugar donde crecerán felices.»
            </p>
            <p className="text-slate-300 font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Agenda un recorrido personalizado por nuestro Campus La Alameda. Conoce a nuestras coordinadoras pedagógicas, visita los laboratorios y resuelve todas tus dudas en un ambiente cercano y sin prisas.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20un%20recorrido%20guiado%20en%20Instituto%20Everest%20Le%C3%B3n`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-white text-sm sm:text-base font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                backgroundColor: "rgb(218, 71, 74)",
                boxShadow: "rgba(218, 71, 74, 0.45) 0px 8px 25px",
              }}
            >
              <span className="material-symbols-outlined text-[22px]">calendar_month</span>
              <span>Agendar Recorrido Familiar</span>
            </a>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-white text-sm sm:text-base font-bold transition-all duration-300 hover:bg-white/30 bg-white/15 border border-white/30 shadow-lg backdrop-blur-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px] text-[#F6D448]">mail</span>
              <span>Solicitar Información y Costos</span>
            </Link>
          </div>

          {/* Bottom Campus Summary */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#F6D448]">location_on</span>
              <span>Calle Luis Cabrera 104, Fracc. La Alameda</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#8EB674]">schedule</span>
              <span>Lunes a Viernes de 7:30 AM a 6:00 PM</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#557EBD]">call</span>
              <span>Tel: 477 433 7732</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

