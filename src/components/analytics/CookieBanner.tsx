"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackCookieConsent, ConsentPreferences } from "@/lib/analytics";

const COOKIE_STORAGE_KEY = "everest_cookie_consent_v1";

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);
  const [marketingAllowed, setMarketingAllowed] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!stored) {
        // Show after a brief delay so page loads smoothly
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      } else {
        const parsed: ConsentPreferences = JSON.parse(stored);
        trackCookieConsent("custom", parsed);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences: ConsentPreferences = {
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // storage unavailable
    }
    trackCookieConsent("all_accepted", preferences);
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const preferences: ConsentPreferences = {
      functional: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // storage unavailable
    }
    trackCookieConsent("all_rejected", preferences);
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    const preferences: ConsentPreferences = {
      functional: true,
      analytics: analyticsAllowed,
      marketing: marketingAllowed,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      // storage unavailable
    }
    trackCookieConsent("custom", preferences);
    setIsVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-lg z-50 pointer-events-auto"
          role="region"
          aria-label="Consentimiento de cookies"
        >
          <div className="bg-[#0A1128]/95 text-white backdrop-blur-xl border border-white/15 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[24px] text-[#F6D448] shrink-0 mt-0.5">
                cookie
              </span>
              <div className="space-y-1">
                <h3 className="font-bold text-white text-base">
                  Tu privacidad en Instituto Everest
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Utilizamos cookies y tecnologías similares para personalizar tu experiencia, analizar el tráfico y optimizar nuestro acompañamiento educativo de acuerdo con nuestro Aviso de Privacidad.
                </p>
              </div>
            </div>

            {showConfig && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2.5 pt-2 border-t border-white/10"
              >
                <div className="flex items-center justify-between text-xs py-1">
                  <div>
                    <span className="font-semibold text-white block">Técnicas y Funcionales</span>
                    <span className="text-slate-400 text-[11px]">Estrictamente necesarias para el sitio.</span>
                  </div>
                  <span className="text-[#8EB674] font-semibold text-xs">Siempre activas</span>
                </div>

                <div className="flex items-center justify-between text-xs py-1">
                  <div>
                    <span className="font-semibold text-white block">Analíticas y Medición</span>
                    <span className="text-slate-400 text-[11px]">Métricas de navegación para mejorar el servicio.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    className="w-4 h-4 rounded text-[#3b5692] focus:ring-offset-[#0A1128] cursor-pointer"
                    aria-label="Permitir cookies analíticas"
                  />
                </div>

                <div className="flex items-center justify-between text-xs py-1">
                  <div>
                    <span className="font-semibold text-white block">Publicidad y Admisiones</span>
                    <span className="text-slate-400 text-[11px]">Información relevante sobre ciclos escolares.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={marketingAllowed}
                    onChange={(e) => setMarketingAllowed(e.target.checked)}
                    className="w-4 h-4 rounded text-[#3b5692] focus:ring-offset-[#0A1128] cursor-pointer"
                    aria-label="Permitir cookies de marketing"
                  />
                </div>
              </motion.div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowConfig(!showConfig)}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
              >
                {showConfig ? "Ocultar opciones" : "Personalizar"}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                {showConfig ? (
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer"
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleRejectNonEssential}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-300 transition-all cursor-pointer"
                  >
                    Rechazar
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  style={{ backgroundColor: "rgb(218, 71, 74)" }}
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
