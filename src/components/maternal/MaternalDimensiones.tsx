import Image from "next/image";

export function MaternalDimensiones() {
  const dimensions = [
    {
      title: "Académica & Sensorial",
      icon: "psychology",
      iconBg: "#557EBD",
      desc: "Mesas sensoriales con texturas táctiles no estructuradas, discriminación de formas y colores, y pre-lectoescritura fonética interactiva.",
    },
    {
      title: "Social & Convivencia",
      icon: "diversity_1",
      iconBg: "#F2B23E",
      desc: "Juego cooperativo guiado, rondas infantiles, aprender a compartir y esperar turnos en un clima de alegría, respeto y empatía temprana.",
    },
    {
      title: "Creativa & Artística",
      icon: "palette",
      iconBg: "#2DB362",
      desc: "Taller de pintura dactilar no tóxica, masas sensoriales caseras, modelado orgánico y experimentación auditiva con instrumentos musicales.",
    },
    {
      title: "Física & Psicomotriz",
      icon: "directions_run",
      iconBg: "#E9A25E",
      desc: "Circuitos de gateo acolchados, rampas seguras, túneles, control postural y ejercicios vestibulares guiados por especialistas infantiles.",
    },
    {
      title: "Emocional & Autonomía Guiada",
      icon: "sentiment_satisfied",
      iconBg: "#DA474A",
      desc: "Acompañamiento amoroso en el retiro del pañal, hábitos de higiene independientes y autonomía en el comedor adaptado.",
    },
  ];

  return (
    <section className="w-full bg-[#f2f4f6] py-14 sm:py-18 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16 space-y-2.5 sm:space-y-3">
          <span
            className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full text-white shadow-xs"
            style={{ backgroundColor: "rgb(218, 71, 74)" }}
          >
            Formación Integral en Maternal
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight">
            Buscamos Desarrollar Todas sus Capacidades
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            En Instituto Everest creemos firmemente que la educación en la primera infancia debe nutrir cada dimensión del ser humano con amor, rigor pedagógico y asombro constante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Lado Visual con Métricas Flotantes */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <Image
                alt="Aula Sensorial y Psicomotricidad Maternal Everest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvtQ1oo2CLKosbJMoa4ZRkypxHtyXe1LR25_bmY1NE5fNai_ibxgGrNoH6Harw0TmFSupxUXxz4Bl5du7oT2qynTb2LpGSQORR_g-SBmuxaWPmZGrrGZzigHrkGjIYqwdpe6z0UyyLipJKABlOcyhNeRhfzR6PEywFTN8A0qifHuWGVPKiB_HGKho6o8YnoLZcieARbdQgcag768uGfxFfm-4yP-l7Ljs2HHpqvRFCeOBGZ89wtLFD"
                width={640}
                height={520}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="w-full h-[290px] xs:h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Tarjeta Flotante 1: Ratio 1:4 (Desktop/Tablet) */}
            <div className="hidden sm:flex absolute -top-4 -left-4 lg:-top-5 lg:-left-5 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-200/80 items-center gap-3.5 max-w-xs animate-gentle-float z-10">
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                style={{ backgroundColor: "#557EBD" }}
              >
                <span className="material-symbols-outlined text-[22px] sm:text-[24px]">group</span>
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Ratio Pedagógico
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 leading-tight block">
                  1 Titular + 2 Asistentes
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#2DB362]">
                  Atención personalizada
                </span>
              </div>
            </div>

            {/* Tarjeta Flotante 2: Cuidado Amoroso (Desktop/Tablet) */}
            <div
              className="hidden sm:flex absolute -bottom-4 -right-4 lg:-bottom-5 lg:-right-5 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-200/80 items-center gap-3.5 max-w-xs animate-gentle-float z-10"
              style={{ animationDelay: "1.5s" }}
            >
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                style={{ backgroundColor: "#DA474A" }}
              >
                <span className="material-symbols-outlined text-[22px] sm:text-[24px]">favorite</span>
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Cuidado Cálido
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 leading-tight block">
                  Acompañamiento 100%
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600">
                  Vínculo seguro y respetuoso
                </span>
              </div>
            </div>

            {/* Tarjetas de Métricas en Móvil (debajo de la foto) */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 mt-3 sm:hidden">
              <div className="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                  style={{ backgroundColor: "#557EBD" }}
                >
                  <span className="material-symbols-outlined text-[20px]">group</span>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Ratio Pedagógico
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-tight block">
                    1 Titular + 2 Asistentes
                  </span>
                  <span className="text-[10px] font-semibold text-[#2DB362]">
                    Personalizada
                  </span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-2xl shadow-xs border border-slate-200/80 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                  style={{ backgroundColor: "#DA474A" }}
                >
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Cuidado Cálido
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-tight block">
                    Acompañamiento 100%
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600">
                    Vínculo seguro
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: 5 Ejes Editoriales */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-3.5">
            {dimensions.map((dim) => (
              <div
                key={dim.title}
                className="p-3.5 sm:p-4 md:p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex items-start gap-3 sm:gap-4"
              >
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                  style={{ backgroundColor: dim.iconBg }}
                >
                  <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
                    {dim.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{dim.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {dim.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
