import Image from "next/image";

export function MaternalDimensiones() {
  const dimensions = [
    {
      title: "Académica & Sensorial",
      badge: "AMCO Early",
      badgeBg: "bg-slate-100",
      badgeText: "text-[#557EBD]",
      icon: "psychology",
      iconBg: "#557EBD",
      desc: "Mesas sensoriales con texturas táctiles no estructuradas, discriminación de formas y colores, y pre-lectoescritura fonética interactiva.",
    },
    {
      title: "Social & Convivencia",
      badge: "Vínculo Positivo",
      badgeBg: "bg-[#FEF9E7]",
      badgeText: "text-slate-800",
      icon: "diversity_1",
      iconBg: "#F2B23E",
      desc: "Juego cooperativo guiado, rondas infantiles, aprender a compartir y esperar turnos en un clima de alegría, respeto y empatía temprana.",
    },
    {
      title: "Creativa & Artística",
      badge: "Exploración Libre",
      badgeBg: "bg-[#F1F8ED]",
      badgeText: "text-[#2DB362]",
      icon: "palette",
      iconBg: "#2DB362",
      desc: "Taller de pintura dactilar no tóxica, masas sensoriales caseras, modelado orgánico y experimentación auditiva con instrumentos orquestales.",
    },
    {
      title: "Física & Psicomotriz",
      badge: "Gimnasio Blando",
      badgeBg: "bg-[#FFF6EC]",
      badgeText: "text-[#E9A25E]",
      icon: "directions_run",
      iconBg: "#E9A25E",
      desc: "Circuitos de gateo acolchados, rampas seguras, túneles, control postural y ejercicios vestibulares guiados por especialistas infantiles.",
    },
    {
      title: "Emocional & Autonomía Guiada",
      badge: "Respeto & Ternura",
      badgeBg: "bg-[#ffdad8]",
      badgeText: "text-[#DA474A]",
      icon: "sentiment_satisfied",
      iconBg: "#DA474A",
      desc: "Acompañamiento amoroso en el retiro del pañal, hábitos de higiene independientes y autonomía en el comedor adaptado.",
    },
  ];

  return (
    <section className="w-full bg-[#f2f4f6] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span
            className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full text-white shadow-xs"
            style={{ backgroundColor: "rgb(218, 71, 74)" }}
          >
            Formación Integral en Maternal
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight">
            Buscamos Desarrollar Todas sus Capacidades
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            En Instituto Everest creemos firmemente que la educación en la primera infancia debe nutrir cada dimensión del ser humano con amor, rigor pedagógico y asombro constante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Lado Visual con Métricas Flotantes */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <Image
                alt="Aula Sensorial y Psicomotricidad Maternal Everest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvtQ1oo2CLKosbJMoa4ZRkypxHtyXe1LR25_bmY1NE5fNai_ibxgGrNoH6Harw0TmFSupxUXxz4Bl5du7oT2qynTb2LpGSQORR_g-SBmuxaWPmZGrrGZzigHrkGjIYqwdpe6z0UyyLipJKABlOcyhNeRhfzR6PEywFTN8A0qifHuWGVPKiB_HGKho6o8YnoLZcieARbdQgcag768uGfxFfm-4yP-l7Ljs2HHpqvRFCeOBGZ89wtLFD"
                width={640}
                height={520}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="w-full h-[460px] md:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-900 inline-block mb-2 shadow-xs bg-[#F2B23E]">
                  Aulas Diseñadas a Escala Infantil
                </span>
                <p className="text-sm md:text-base font-semibold text-white/95 leading-snug">
                  Pisos amortiguados de impacto, luz natural y estaciones modulares de exploración continua.
                </p>
              </div>
            </div>

            {/* Tarjeta Flotante 1: Ratio 1:4 */}
            <div className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3.5 max-w-xs animate-gentle-float">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                style={{ backgroundColor: "#557EBD" }}
              >
                <span className="material-symbols-outlined text-[24px]">group</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Ratio Pedagógico
                </span>
                <span className="text-base font-bold text-slate-900 leading-tight block">
                  1 Titular + 2 Asistentes
                </span>
                <span className="text-[11px] font-semibold text-[#2DB362]">
                  Atención personalizada
                </span>
              </div>
            </div>

            {/* Tarjeta Flotante 2: Cuidado Amoroso */}
            <div
              className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3.5 max-w-xs animate-gentle-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                style={{ backgroundColor: "#DA474A" }}
              >
                <span className="material-symbols-outlined text-[24px]">favorite</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Cuidado Cálido
                </span>
                <span className="text-base font-bold text-slate-900 leading-tight block">
                  Acompañamiento 100%
                </span>
                <span className="text-[11px] font-semibold text-slate-600">
                  Vínculo seguro y respetuoso
                </span>
              </div>
            </div>
          </div>

          {/* Lado Derecho: 5 Ejes Editoriales */}
          <div className="lg:col-span-6 space-y-3.5">
            {dimensions.map((dim) => (
              <div
                key={dim.title}
                className="p-4 md:p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                  style={{ backgroundColor: dim.iconBg }}
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {dim.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-base">{dim.title}</h3>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${dim.badgeBg} ${dim.badgeText}`}
                    >
                      {dim.badge}
                    </span>
                  </div>
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
