"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function InitialLoader() {
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return true;
    try {
      if (sessionStorage.getItem("everest_seen_intro") === "1") return true;
    } catch {
      // ignore
    }
    return /bot|googlebot|crawler|spider|robot|crawling|lighthouse|speed insights|ptst|headlesschrome/i.test(
      navigator.userAgent
    ) || Boolean(navigator.webdriver);
  });

  useEffect(() => {
    if (isFinished) return;

    try {
      sessionStorage.setItem("everest_seen_intro", "1");
    } catch {
      // storage unavailable
    }

    // Lock scroll while loader is visible
    document.body.style.overflow = "hidden";

    // Duration to display brand entrance before lifting the curtain
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      document.body.style.overflow = "";
    }, 450);

    // Remove from DOM after curtain animation finishes
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
    }, 950);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, [isFinished]);

  if (isFinished) return null;

  const initialPath = "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z";
  const targetPath = "M 0 0 L 100 0 L 100 0 Q 50 -35 0 0 Z";

  return (
    <div
      id="initial-loader"
      className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden"
      style={{
        pointerEvents: isExiting ? "none" : "auto",
      }}
    >
      {/* Curved SVG Curtain (Deep Everest Blue) */}
      <motion.div
        className="absolute inset-0 w-full h-full text-[#0A1128]"
        initial={{ y: 0 }}
        animate={{ y: isExiting ? "-100%" : 0 }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.1,
        }}
      >
        <svg
          className="w-full h-full text-[#0A1128]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d={initialPath}
            animate={{ d: isExiting ? targetPath : initialPath }}
            transition={{
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            }}
            fill="currentColor"
          />
        </svg>

        {/* Ambient radial glow behind the logo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(52, 95, 156, 0.38) 0%, rgba(10, 17, 40, 0) 70%)",
          }}
        />
      </motion.div>

      {/* Center Brand Elements */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -28, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center z-10"
          >
            {/* Large Prominent Logo (Without glass card container) */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-5 flex items-center justify-center"
            >
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                <Image
                  alt="Instituto Everest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE6pr2NCPvAinEcdFjDryfeAMXxrSKLzRXl3mKqIJFDH6_yK3KQVnn9wyAamh63Yjjvec0siQbaevmxrQbaIdGIU0AnrFCdf7yac9f_PubscNv99V32dGYttOvSNREjgNAuqrGs_AfT8gjT3cIqMXGQwDwHWLnlJdKFhPfK-8lK6TXwKZ2BuX6IfM0sBq2Xwu1aeOQhLNO37k0Krow0sh32oBLX72sAmhZiTKzCo5MkkBHOiRdSXato60kfGUeXdVDgg"
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                />
              </div>
            </motion.div>

            {/* School Motto */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-xl mx-auto mt-1"
            >
              <p className="font-headline italic text-base sm:text-lg lg:text-xl text-blue-100/90 font-normal tracking-wide drop-shadow-sm">
                «{SITE_CONFIG.tagline}»
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

