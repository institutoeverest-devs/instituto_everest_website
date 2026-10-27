"use client";

import { motion, AnimatePresence } from "framer-motion";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string | null;
  type?: ToastType;
  onClose: () => void;
}

export function Toast({ message, type = "success", onClose }: ToastProps) {
  if (!message) return null;

  const bgStyles = {
    success: "bg-emerald-600 text-white border-emerald-500",
    error: "bg-[#DA474A] text-white border-red-500",
    info: "bg-[#3b5692] text-white border-blue-500",
  }[type];

  const icons = {
    success: "check_circle",
    error: "error",
    info: "info",
  }[type];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed top-6 right-6 z-[100] max-w-md pointer-events-auto"
        role="alert"
        aria-live="assertive"
      >
        <div
          className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border ${bgStyles}`}
        >
          <span className="material-symbols-outlined text-[24px] shrink-0">
            {icons}
          </span>
          <p className="text-sm font-medium leading-snug flex-1">{message}</p>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Cerrar notificación"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
