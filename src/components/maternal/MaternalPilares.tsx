import Image from "next/image";

export function MaternalPilares() {
  return (
    <section className="w-full bg-[#f2f4f6] py-20 lg:py-24" id="pilares-maternal">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full text-[#546FAC] bg-white shadow-xs border border-slate-200/60">
            Metodología Maternal Everest
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight">
            Pilares Esenciales de Nuestro Maternal
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Inspirado en una formación integral de vanguardia: un entorno planificado milimétricamente para que cada bebé y toddler crezca pleno, seguro y estimulado.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tarjeta Principal Izquierda con Foto Completa y Overlay */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[580px] flex flex-col justify-between p-8 text-white group">
            <Image
              alt="Estimulación Temprana y Neurodesarrollo Maternal"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvpd8NsGUx_lcKnganIvcjRr6uEPQL2ArHu1uF_Ezvxa6jcX7OWDrTjJbvOX9DEZAHK2q6rv_0N7iH-u-zZC7VWLMqRKnLBUE_3sprVJp6IaSAp63QijU4AFZ4J6CJsXJ38d40cgVAEZQi1JIDnUlxQL_QGoA33XeWKpa3CLuQ6xVMePfkvotJGjQ2WLzkc01kvQjQb1xJADYpurfSfk6aF6N7uQ8pqlpfrT63sLe2T5gnAVyP7X4J"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.05) 100%)",
              }}
            />

            {/* Header Badges */}
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold tracking-wide text-white">
                <span className="w-2 h-2 rounded-full animate-pulse bg-[#F2B23E]" />
                <span>Neurodesarrollo & Apego Seguro</span>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold text-slate-900 shadow-md bg-[#F2B23E]">
                1 a 3 Años
              </span>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 space-y-4">
              <div className="inline-block px-3 py-1 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white/90 tracking-wide">
                Campus León · Estimulación Sensorial
              </div>
              <h3 className="font-headline text-[28px] sm:text-[32px] font-bold text-white leading-tight">
                Tu bebé explora y florece con seguridad y confianza.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Acompañamiento especializado en psicomotricidad fina y gruesa, integración sensorial, tono muscular, control postural y balance socioafectivo continuo.
              </p>
              <div className="pt-2 flex items-center justify-between gap-4 border-t border-white/20">
                <span className="text-xs text-white/80 font-semibold tracking-wide">
                  #MaternalEverest 2025
                </span>
              </div>
            </div>
          </div>

          {/* Bento Columna Derecha */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Superior: Música Curricular (Span 2) */}
            <div className="md:col-span-2 rounded-3xl p-8 flex flex-col justify-between shadow-md border border-slate-200/80 bg-white text-slate-900 relative overflow-hidden group min-h-[260px]">
              <div className="flex items-start justify-between gap-4 z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2.5 text-white bg-[#38A169]">
                    <span className="material-symbols-outlined text-[14px]">music_note</span>
                    <span>Diferenciador Exclusivo · Música Curricular</span>
                  </div>
                  <h3 className="font-headline text-[24px] sm:text-[26px] font-bold tracking-tight text-slate-900">
                    Música Curricular desde el Primer Día
                  </h3>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-xs bg-[#557EBD]">
                  Diaria
                </span>
              </div>

              <div className="z-10 my-4 p-4 rounded-2xl border border-slate-100 shadow-xs bg-[#F8F9FC]">
                <blockquote className="text-base sm:text-lg text-slate-800 italic font-medium leading-relaxed font-headline">
                  «La música forma parte de la formación de nuestros alumnos dentro de su horario escolar habitual, no únicamente como una actividad extracurricular.»
                </blockquote>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 z-10 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-[#38A169]" /> Percusiones
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-[#F2B23E]" /> Campanas melódicas
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-[#557EBD]" /> Expresión rítmica
                  </span>
                </div>
              </div>
            </div>

            {/* Card Inferior 1: Inmersión Bilingüe Natural */}
            <div className="rounded-3xl p-7 flex flex-col justify-between shadow-md border border-slate-200/80 bg-white text-slate-900 relative overflow-hidden group min-h-[270px]">
              <div className="flex items-center justify-between mb-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#557EBD]">
                  AMCO Early
                </span>
                <span className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[#557EBD] group-hover:bg-[#557EBD] group-hover:text-white transition-colors text-sm font-bold">
                  ↗
                </span>
              </div>

              <div className="space-y-2 mb-4 z-10">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#557EBD]">
                  <span className="material-symbols-outlined text-[16px]">translate</span>
                  <span>Natural & Orgánico</span>
                </div>
                <h4 className="font-headline text-[21px] font-bold text-slate-900 leading-snug">
                  Inmersión Bilingüe Natural
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  Adquisición espontánea e intuitiva a través de rimas, fonética multisensorial, cuentos interactivos y canciones en inglés durante la rutina diaria.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 z-10">
                <span className="text-slate-500">Fonética Temprana</span>
                <span className="px-2.5 py-1 rounded-full font-bold text-white text-[11px] bg-[#2DB362]">
                  Inglés 100% Lúdico
                </span>
              </div>
            </div>

            {/* Card Inferior 2: Socioemocional & Valores */}
            <div
              className="rounded-3xl p-7 flex flex-col justify-between shadow-md text-white relative overflow-hidden group min-h-[270px]"
              style={{
                background: "linear-gradient(145deg, #246B41 0%, #2B7A4B 60%, #1E5C35 100%)",
              }}
            >
              <div className="flex items-center justify-between mb-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm bg-[#F6D448]">
                  Valores & Autonomía
                </span>
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-[#F6D448] group-hover:text-slate-900 transition-colors text-sm font-bold">
                  ↗
                </span>
              </div>

              <div className="space-y-2 mb-4 z-10">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/90">
                  <span className="material-symbols-outlined text-[16px] text-[#F6D448]">
                    volunteer_activism
                  </span>
                  <span>Acompañamiento Afectivo</span>
                </div>
                <h4 className="font-headline text-[21px] font-bold text-white leading-snug">
                  Socioemocional & Valores
                </h4>
                <p className="text-xs text-white/90 leading-relaxed pt-1">
                  Construcción guiada de autorregulación emocional, hábitos de vida saludables y control de esfínteres en un clima de ternura y confianza absoluta.
                </p>
              </div>

              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-white/90 z-10">
                <span>Hábitos de Vida</span>
                <span className="px-2.5 py-1 rounded-full font-bold text-white text-[11px] bg-white/20 backdrop-blur-sm border border-white/30">
                  Apego Seguro
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
