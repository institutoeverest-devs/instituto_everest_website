"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function NosotrosCampusComunidad() {
  const spaces = [
    {
      title: "Laboratorio STEAM & Robótica",
      desc: "Espacio equipado con kits de robótica educativa, bloques de construcción, circuitos electrónicos y herramientas maker donde la teoría se convierte en proyectos reales.",
      tag: "Innovación Tecnológica",
      icon: "smart_toy",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
    },
    {
      title: "Salón de Música & Orquesta Infantil",
      desc: "Aula acústicamente diseñada con instrumentos de cuerda, viento y percusión para el ensamble orquestal curricular y el desarrollo del oído armónico.",
      tag: "Arte Curricular",
      icon: "music_note",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
    },
    {
      title: "Patios Deportivos & Áreas Recreativas",
      desc: "Zonas de juego protegidas y diferenciadas por edad (Maternal, Preescolar y Primaria) que garantizan recreos seguros, activos y llenos de socialización.",
      tag: "Vida Activa",
      icon: "sports_soccer",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB5blRNUoZKhPY7vR8rhoNG3Ld3KbZsLZ65E2y-N3V0TCYuaU7H6sqLQ2gB5LCEPN2ldjDXW-e_2rmgIBZM41dE5QFhX3s9k9lR6zsMrFZaGKJQfWwbixKSUqBCMRisepVdjmiWMsROQsVh00VB1butn1cBmi__bSYmtVP6KFOOvVD1-YCe-9qolR-b7KWZAAHUTIgVQB0wjtY4SGituyVJXWBC1Z2HkORldGHD2SO39D2QfjH58n5Akh8fkFe78UAdYA",
    },
    {
      title: "Aulas Bilingües Interactivas",
      desc: "Salones climatizados con excelente iluminación natural, proyectores interactivos y estaciones de lectura que facilitan la inmersión activa AMCO.",
      tag: "Inmersión Total",
      icon: "tv_gen",
      image:
        "https://lh3.googleusercontent.com/aida/AEtjO1VO1ILPSwD8_9SmTF-7xbOohmLZIjN977Oz-9m9rImzQQ7O3g27XSVAncjdu8l92pMGVuQXrdXHUyLRUqRsMK13rY3wHFQ1rcs8kEiq49zIoFFDT7VplxhSpIMmBl59uRDn6GyjFRsUk9dMJQ2AHqI5SJNu07DGGN-VJKDAO5IpJ-np1E1s4DuzhHXD6Llcrp_eBDkhhYk_QANQCACIj_wCIK_eczGT76inqzRkC91BzWiv0NxDyH1hDfY",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-[#f7f9fb] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#557EBD]/10 border border-[#557EBD]/20 text-[#3b5692] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">domain</span>
              <span>{SITE_CONFIG.campus} · León, Guanajuato</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#0A1128] tracking-tight leading-tight">
              Instalaciones Pensadas para Despertar el Potencial Infantil
            </h2>

            <p className="text-slate-600 font-body text-base sm:text-lg leading-relaxed">
              Cada rincón de nuestro colegio está diseñado bajo estándares de seguridad, higiene, estimulación visual armónica y ergonomía adaptada a cada nivel escolar.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1 shrink-0 max-w-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <span className="material-symbols-outlined text-[18px] text-[#DA474A]">location_on</span>
              <span>{SITE_CONFIG.address.street}</span>
            </div>
            <p className="text-xs text-slate-500 font-body">
              {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}, Gto.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spaces.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md">
                  <span className="material-symbols-outlined text-[15px] text-[#3b5692]">
                    {item.icon}
                  </span>
                  <span>{item.tag}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#0A1128] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#3b5692]">
                  <span>Campus Seguro con Acceso Controlado</span>
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

