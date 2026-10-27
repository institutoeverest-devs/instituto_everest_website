"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-0 right-0 mx-auto w-[94%] max-w-[1280px] z-50 transition-all duration-300 backdrop-blur-md rounded-2xl ${
        scrolled
          ? "bg-[#0A1128]/85 border border-white/20 shadow-2xl"
          : "bg-white/15 border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      }`}
    >
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#F6D448] rounded-xl p-1"
          aria-label="Ir a inicio de Instituto Everest León"
        >
          <div className="p-1.5 rounded-xl bg-white/95 shadow-sm flex items-center justify-center">
            <Image
              alt="Instituto Everest León Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE6pr2NCPvAinEcdFjDryfeAMXxrSKLzRXl3mKqIJFDH6_yK3KQVnn9wyAamh63Yjjvec0siQbaevmxrQbaIdGIU0AnrFCdf7yac9f_PubscNv99V32dGYttOvSNREjgNAuqrGs_AfT8gjT3cIqMXGQwDwHWLnlJdKFhPfK-8lK6TXwKZ2BuX6IfM0sBq2Xwu1aeOQhLNO37k0Krow0sh32oBLX72sAmhZiTKzCo5MkkBHOiRdSXato60kfGUeXdVDgg"
              width={36}
              height={32}
              style={{ width: "auto" }}
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-[19px] sm:text-[21px] font-bold text-white tracking-tight drop-shadow-sm leading-tight">
              Instituto Everest
            </span>
            <span className="text-[11px] text-white/90 hidden sm:inline-block font-medium tracking-wide">
              León · Guanajuato
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-6"
          aria-label="Navegación principal"
        >
          <Link
            aria-current="page"
            className="transition-colors text-white font-bold drop-shadow-sm pb-1 border-b-2 border-[#F6D448] text-sm"
            href="#hero"
          >
            Inicio
          </Link>

          {/* Dropdown Niveles Educativos */}
          <div className="relative group py-2">
            <button
              className="flex items-center gap-1 text-sm font-semibold text-white/90 group-hover:text-white transition-colors drop-shadow-sm focus:outline-none"
              aria-haspopup="true"
            >
              <span>Niveles Educativos</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180">
                expand_more
              </span>
            </button>
            <div className="absolute left-0 top-full pt-2 w-52 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/40 flex flex-col gap-1 text-slate-800">
                <Link
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-100/80 transition-colors"
                  href="/maternal"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F6D448]" />
                  <span>Maternal (1 a 3 años)</span>
                </Link>
                <Link
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-100/80 transition-colors"
                  href="/preescolar"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#557EBD]" />
                  <span>Preescolar Bilingüe (3 a 6 años)</span>
                </Link>
                <Link
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-100/80 transition-colors"
                  href="/primaria"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8EB674]" />
                  <span>Primaria (1° a 6° Grado)</span>
                </Link>
                <Link
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-100/80 transition-colors"
                  href="/#niveles-educativos"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#546FAC]" />
                  <span>Horario Extendido (6 PM)</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown Nuestro Colegio */}
          <div className="relative group py-2">
            <button
              className="flex items-center gap-1 text-sm font-semibold text-white/90 group-hover:text-white transition-colors drop-shadow-sm focus:outline-none"
              aria-haspopup="true"
            >
              <span>Nuestro colegio</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180">
                expand_more
              </span>
            </button>
            <div className="absolute left-0 top-full pt-2 w-48 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/40 flex flex-col gap-1 text-slate-800">
                <Link
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-100/80 transition-colors"
                  href="/#footer-everest"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    school
                  </span>
                  <span>Campus León</span>
                </Link>
                <Link
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-100/80 transition-colors"
                  href="/#testimonios"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    diversity_3
                  </span>
                  <span>Comunidad de Familias</span>
                </Link>
              </div>
            </div>
          </div>

          <Link
            className="text-sm font-semibold text-white/90 hover:text-white transition-colors drop-shadow-sm"
            href="/galeria"
          >
            Galería
          </Link>

          <Link
            className="text-sm font-semibold text-white/90 hover:text-white transition-colors drop-shadow-sm"
            href="/contacto"
          >
            Contacto
          </Link>
        </nav>

        {/* Action Button & Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            href="/contacto"
            style={{
              backgroundColor: "rgb(218, 71, 74)",
              boxShadow: "rgba(218, 71, 74, 0.4) 0px 4px 14px",
            }}
          >
            Admisiones 2025
          </Link>

          <button
            type="button"
            className="xl:hidden p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F6D448]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-white/20 bg-[#0A1128]/95 backdrop-blur-2xl px-6 py-6 rounded-b-2xl flex flex-col gap-4 text-white overflow-hidden"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
            >
              Inicio
            </Link>
            <Link
              href="/#embajadores"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
            >
              5 Embajadores del Aprendizaje
            </Link>
            <Link
              href="/#ruta-crecimiento"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
            >
              Ruta Integral de Crecimiento
            </Link>
            <Link
              href="/maternal"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10 flex items-center justify-between"
            >
              <span>Maternal (1 a 3 años)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#F6D448] text-slate-900 font-bold">Nuevo</span>
            </Link>
            <Link
              href="/preescolar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10 flex items-center justify-between"
            >
              <span>Preescolar Bilingüe (3 a 6 años)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#557EBD] text-white font-bold">AMCO</span>
            </Link>
            <Link
              href="/primaria"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10 flex items-center justify-between"
            >
              <span>Primaria Bilingüe (1° a 6° Grado)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#8EB674] text-white font-bold">IMPACT IA</span>
            </Link>
            <Link
              href="/#niveles-educativos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
            >
              Horario Extendido (6 PM)
            </Link>
            <Link
              href="/#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
            >
              La Voz de Nuestra Comunidad
            </Link>
            <Link
              href="/galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold border-b border-white/10"
            >
              Galería
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-semibold text-[#F6D448]"
            >
              Agendar Visita Personalizada (Contacto)
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
