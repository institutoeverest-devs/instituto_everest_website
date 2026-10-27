"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AMBASSADORS } from "@/lib/constants";

export function AmbassadorsSection() {
  return (
    <section id="embajadores" className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span
            className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full inline-block"
            style={{
              backgroundColor: "rgb(214, 227, 255)",
              color: "rgb(21, 71, 130)",
            }}
          >
            Acompañamiento Socioemocional
          </span>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#191c1e] tracking-tight">
            Nuestros 5 Embajadores del Aprendizaje
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Cada personaje representa un pilar en el viaje evolutivo de nuestros alumnos, haciendo del aprendizaje un proceso alegre, significativo y con propósito.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {AMBASSADORS.map((ambassador, idx) => (
            <motion.div
              key={ambassador.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl"
              style={{
                backgroundColor: ambassador.bgColor,
                border: `1px solid ${ambassador.borderColor}`,
              }}
            >
              <div className="w-28 h-28 mb-3 flex items-center justify-center relative">
                <Image
                  alt={ambassador.name}
                  src={ambassador.image}
                  width={112}
                  height={112}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ mixBlendMode: "multiply" }}
                  loading="lazy"
                />
              </div>

              <span
                className="px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-2 shadow-xs"
                style={{
                  backgroundColor: ambassador.badgeBg,
                  color: ambassador.badgeColor,
                }}
              >
                {ambassador.level}
              </span>

              <h3 className="font-headline text-xl font-bold text-slate-900 mb-1">
                {ambassador.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {ambassador.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
