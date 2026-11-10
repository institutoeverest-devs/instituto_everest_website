"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isInicio = pathname === "/";
  const isGaleria = Boolean(pathname && pathname.startsWith("/galeria"));
  const isNosotros = Boolean(pathname && pathname.startsWith("/nosotros"));
  const isColegio = isGaleria || isNosotros;
  const isNiveles = Boolean(
    pathname &&
      (pathname.startsWith("/maternal") ||
        pathname.startsWith("/preescolar") ||
        pathname.startsWith("/primaria"))
  );
  const isContacto = Boolean(pathname && pathname.startsWith("/contacto"));

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

  const isBlueNavbar = isGaleria || isContacto || isNosotros || scrolled;

  return (
    <header
      className={`fixed left-0 right-0 mx-auto w-[94%] max-w-[1280px] z-50 transition-all duration-300 backdrop-blur-md rounded-2xl ${
        scrolled
          ? "top-2 sm:top-2.5 shadow-2xl"
          : "top-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      } ${
        isBlueNavbar
          ? "bg-[#0A1128]/92 border border-white/20"
          : "bg-white/15 border border-white/30"
      }`}
    >
      <div
        className={`max-w-[1280px] mx-auto px-3.5 sm:px-6 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 ${
          scrolled ? "h-14 sm:h-15" : "h-20"
        }`}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-[#F6D448] rounded-xl p-1 min-w-0 shrink"
          aria-label="Ir a inicio de Instituto Everest León"
        >
          <div
            className={`shrink-0 bg-white/95 shadow-sm flex items-center justify-center transition-all duration-300 ${
              scrolled ? "p-1 rounded-lg" : "p-1.5 rounded-xl"
            }`}
          >
            <Image
              alt="Instituto Everest León Logo"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-6 sm:h-7" : "h-7 sm:h-8"
              }`}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE6pr2NCPvAinEcdFjDryfeAMXxrSKLzRXl3mKqIJFDH6_yK3KQVnn9wyAamh63Yjjvec0siQbaevmxrQbaIdGIU0AnrFCdf7yac9f_PubscNv99V32dGYttOvSNREjgNAuqrGs_AfT8gjT3cIqMXGQwDwHWLnlJdKFhPfK-8lK6TXwKZ2BuX6IfM0sBq2Xwu1aeOQhLNO37k0Krow0sh32oBLX72sAmhZiTKzCo5MkkBHOiRdSXato60kfGUeXdVDgg"
              width={36}
              height={32}
              style={{ width: "auto" }}
              priority
            />
          </div>
          <div className="flex items-center min-w-0">
            <span
              className={`font-headline font-bold text-white tracking-tight drop-shadow-sm leading-tight transition-all duration-300 whitespace-nowrap ${
                scrolled
                  ? "text-[15px] sm:text-[18px]"
                  : "text-[16px] sm:text-[21px]"
              }`}
            >
              Instituto Everest
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-4 xl:gap-6"
          aria-label="Navegación principal"
        >
          {/* Inicio */}
          <div className="relative py-2 flex items-center">
            <Link
              className={`text-sm transition-colors drop-shadow-sm ${
                isInicio
                  ? "text-white font-bold"
                  : "text-white/90 hover:text-white font-semibold"
              }`}
              href="/"
            >
              Inicio
            </Link>
            {isInicio && (
              <motion.span
                layoutId="active-nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F6D448] rounded-full pointer-events-none"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </div>

          {/* Dropdown Nuestro Colegio */}
          <div className="relative group py-2 flex items-center">
            <button
              className={`flex items-center gap-1 text-sm transition-colors drop-shadow-sm focus:outline-none cursor-pointer ${
                isColegio
                  ? "text-white font-bold"
                  : "text-white/90 group-hover:text-white font-semibold"
              }`}
              aria-haspopup="true"
            >
              <span>Nuestro Colegio</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180">
                expand_more
              </span>
            </button>
            {isColegio && (
              <motion.span
                layoutId="active-nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F6D448] rounded-full pointer-events-none"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <div className="absolute left-0 top-full pt-2 w-48 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/40 flex flex-col gap-1 text-slate-800">
                <Link
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors ${
                    isNosotros
                      ? "bg-slate-100 text-primary font-bold"
                      : "text-slate-700 font-semibold hover:text-primary hover:bg-slate-100/80"
                  }`}
                  href="/nosotros"
                >
                  <span className="w-2.5 h-2.5 min-w-[10px] min-h-[10px] shrink-0 rounded-full aspect-square inline-block bg-[#546FAC]" />
                  <span>Nosotros</span>
                </Link>
                <Link
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors ${
                    isGaleria
                      ? "bg-slate-100 text-primary font-bold"
                      : "text-slate-700 font-semibold hover:text-primary hover:bg-slate-100/80"
                  }`}
                  href="/galeria"
                >
                  <span className="w-2.5 h-2.5 min-w-[10px] min-h-[10px] shrink-0 rounded-full aspect-square inline-block bg-[#F6D448]" />
                  <span>Galería</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown Niveles Educativos */}
          <div className="relative group py-2 flex items-center">
            <button
              className={`flex items-center gap-1 text-sm transition-colors drop-shadow-sm focus:outline-none cursor-pointer ${
                isNiveles
                  ? "text-white font-bold"
                  : "text-white/90 group-hover:text-white font-semibold"
              }`}
              aria-haspopup="true"
            >
              <span>Niveles Educativos</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180">
                expand_more
              </span>
            </button>
            {isNiveles && (
              <motion.span
                layoutId="active-nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F6D448] rounded-full pointer-events-none"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <div className="absolute left-0 top-full pt-2 w-44 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/40 flex flex-col gap-1 text-slate-800">
                <Link
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors ${
                    pathname === "/maternal"
                      ? "bg-slate-100 text-primary font-bold"
                      : "text-slate-700 font-semibold hover:text-primary hover:bg-slate-100/80"
                  }`}
                  href="/maternal"
                >
                  <span className="w-2.5 h-2.5 min-w-[10px] min-h-[10px] shrink-0 rounded-full aspect-square inline-block bg-[#F6D448]" />
                  <span>Maternal</span>
                </Link>
                <Link
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors ${
                    pathname === "/preescolar"
                      ? "bg-slate-100 text-primary font-bold"
                      : "text-slate-700 font-semibold hover:text-primary hover:bg-slate-100/80"
                  }`}
                  href="/preescolar"
                >
                  <span className="w-2.5 h-2.5 min-w-[10px] min-h-[10px] shrink-0 rounded-full aspect-square inline-block bg-[#557EBD]" />
                  <span>Preescolar</span>
                </Link>
                <Link
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors ${
                    pathname === "/primaria"
                      ? "bg-slate-100 text-primary font-bold"
                      : "text-slate-700 font-semibold hover:text-primary hover:bg-slate-100/80"
                  }`}
                  href="/primaria"
                >
                  <span className="w-2.5 h-2.5 min-w-[10px] min-h-[10px] shrink-0 rounded-full aspect-square inline-block bg-[#8EB674]" />
                  <span>Primaria</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="relative py-2 flex items-center">
            <Link
              className={`text-sm transition-colors drop-shadow-sm ${
                isContacto
                  ? "text-white font-bold"
                  : "text-white/90 hover:text-white font-semibold"
              }`}
              href="/contacto"
            >
              Contacto
            </Link>
            {isContacto && (
              <motion.span
                layoutId="active-nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F6D448] rounded-full pointer-events-none"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </div>
        </nav>

        {/* Action Button & Mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            className={`hidden lg:inline-flex items-center justify-center rounded-xl text-white font-bold transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer shrink-0 ${
              scrolled
                ? "px-3.5 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-[13px]"
                : "px-4 py-2 xl:px-5 xl:py-2.5 text-xs xl:text-sm"
            }`}
            href="/contacto"
            style={{
              backgroundColor: "rgb(218, 71, 74)",
              boxShadow: "rgba(218, 71, 74, 0.4) 0px 4px 14px",
            }}
          >
            Admisiones 2027 
          </Link>

          <button
            type="button"
            className={`lg:hidden shrink-0 flex items-center justify-center rounded-xl bg-white/20 text-white hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F6D448] ${
              scrolled ? "p-1.5 h-9 w-9" : "p-2 h-10 w-10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span
              className={`material-symbols-outlined transition-all duration-300 ${
                scrolled ? "text-[22px]" : "text-[24px]"
              }`}
            >
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/20 bg-[#0A1128]/95 backdrop-blur-2xl px-5 py-4 rounded-b-2xl flex flex-col gap-3 text-white max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain shadow-2xl"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-base font-semibold border-b border-white/10"
            >
              Inicio
            </Link>
            
            {/* Nuestro Colegio */}
            <div className="py-1.5 border-b border-white/10 flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F6D448]">Nuestro Colegio</span>
              <div className="pl-3 flex flex-col gap-1.5">
                <Link
                  href="/nosotros"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isNosotros
                      ? "text-[#F6D448] font-bold"
                      : "hover:text-[#F6D448]"
                  }`}
                >
                  Nosotros
                </Link>
                <Link
                  href="/galeria"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isGaleria
                      ? "text-[#F6D448] font-bold"
                      : "hover:text-[#F6D448]"
                  }`}
                >
                  Galería
                </Link>
              </div>
            </div>

            {/* Niveles Educativos */}
            <div className="py-1.5 border-b border-white/10 flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F6D448]">Niveles Educativos</span>
              <div className="pl-3 flex flex-col gap-2">
                <Link
                  href="/maternal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium"
                >
                  Maternal
                </Link>
                <Link
                  href="/preescolar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium"
                >
                  Preescolar
                </Link>
                <Link
                  href="/primaria"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium"
                >
                  Primaria
                </Link>
              </div>
            </div>

            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-base font-semibold text-[#F6D448]"
            >
              Contacto
            </Link>

            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 w-full py-2.5 rounded-xl text-center text-white font-bold text-sm shadow-md"
              style={{
                backgroundColor: "rgb(218, 71, 74)",
                boxShadow: "rgba(218, 71, 74, 0.4) 0px 4px 14px",
              }}
            >
              Admisiones 2027
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
