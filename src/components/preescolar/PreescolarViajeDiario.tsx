export function PreescolarViajeDiario() {
  const milestones = [
    {
      num: 1,
      time: "08:00 AM",
      timeBg: "bg-blue-100/80 text-[#345f9c]",
      title: "Morning Circle & Reto del Día",
      desc: "Bienvenida bilingüe cálida, revisión del calendario, canciones de activación y formulación de la pregunta detonadora para la investigación.",
      objectiveTitle: "Objetivo del hito:",
      objectiveDesc: "Establecer conexión socioemocional, hábitos de escucha y seguridad en el grupo.",
      circleBg: "bg-[#557EBD] text-white",
      reverse: false,
    },
    {
      num: 2,
      time: "09:30 AM",
      timeBg: "bg-amber-100/80 text-amber-800",
      title: "AMCO Immersion & Storytelling",
      desc: "Taller de vocabulario en contexto con flashcards, proyección interactiva, fonética táctil y dramatización de cuentos guiada por Nube Everest.",
      objectiveTitle: "Objetivo del hito:",
      objectiveDesc: "Inmersión lingüística espontánea con pronunciación clara y desinhibida.",
      circleBg: "bg-[#F6D448] text-slate-900",
      reverse: true,
    },
    {
      num: 3,
      time: "11:00 AM",
      timeBg: "bg-emerald-100/80 text-[#2DB362]",
      title: "Nutrición Guiada & Recreo Activo",
      desc: "Alimentación consciente, modales en la mesa, lavado autónomo de manos y tiempo de juego motor en amplias áreas verdes seguras.",
      objectiveTitle: "Objetivo del hito:",
      objectiveDesc: "Socialización libre, resolución de acuerdos y desarrollo de hábitos de salud.",
      circleBg: "bg-[#2DB362] text-white",
      reverse: false,
    },
    {
      num: 4,
      time: "12:00 PM",
      timeBg: "bg-orange-100/80 text-[#E9A25E]",
      title: "STEAM Lab o Música Orquestal",
      desc: "Alternancia diaria entre experimentación en el laboratorio de robótica inicial / ciencias y ensamble con instrumentos orquestales y campanas.",
      objectiveTitle: "Objetivo del hito:",
      objectiveDesc: "Estimulación bilateral del cerebro, concentración y pensamiento innovador.",
      circleBg: "bg-[#E9A25E] text-white",
      reverse: true,
    },
    {
      num: 5,
      time: "01:30 PM a 06:00 PM",
      timeBg: "bg-red-100/80 text-[#DA474A]",
      title: "Cierre de Jornada & Horario Extendido",
      desc: "Recuento reflexivo del aprendizaje logrado. Horario extendido opcional con comedor institucional supervisado, taekwondo, arte y tareas dirigidas.",
      objectiveTitle: "Flexibilidad familiar:",
      objectiveDesc: "Tranquilidad y enriquecimiento lúdico continuo para padres de familia profesionistas.",
      circleBg: "bg-[#DA474A] text-white",
      reverse: false,
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full text-slate-900 bg-[#F6D448]">
            Ruta de la Jornada Escolar
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight">
            El Viaje Diario: Horarios & Rutinas que Inspiran
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
            Cada momento del día tiene una intencionalidad pedagógica clara que equilibra la concentración profunda, el movimiento y el juego guiado.
          </p>
        </div>

        {/* Timeline Vertical Alternado con Línea Central */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 relative">
            {milestones.map((item) => (
              <div
                key={item.num}
                className={`flex flex-col md:flex-row items-center justify-between gap-6 ${
                  item.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Lado Contenido Principal */}
                <div
                  className={`w-full md:w-[45%] text-left space-y-2 ${
                    !item.reverse ? "md:text-right" : ""
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${item.timeBg}`}
                  >
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    {item.time}
                  </span>
                  <h3 className="font-headline text-[20px] font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>

                {/* Círculo Central con Número */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-md z-10 shrink-0 ${item.circleBg}`}
                >
                  {item.num}
                </div>

                {/* Lado Objetivo Pedagógico */}
                <div
                  className={`w-full md:w-[45%] p-4 rounded-2xl bg-[#f2f4f6] border border-slate-200/70 text-xs text-slate-600 ${
                    item.reverse ? "md:text-right" : ""
                  }`}
                >
                  <strong className="text-slate-800 block mb-1">
                    {item.objectiveTitle}
                  </strong>
                  {item.objectiveDesc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
