"use client";

export function PrimariaPilares() {
  const pilares = [
    {
      id: "lectoescritura",
      headerBg: "#557EBD",
      badge: "AMCO English Curricular",
      icon: "menu_book",
      iconColor: "text-[#557EBD]",
      subtitle: "Bilingüismo Activo",
      title: "Lectoescritura & Fonética",
      quote: "«Palabras que despiertan su propia voz en dos idiomas.»",
      desc: "Inmersión bilingüe activa y metodología AMCO continua, desarrollando fonética natural, vocabulario rico, producción escrita y comprensión profunda sin traducción mental mecánica.",
      footerLeft: "Inglés intensivo diario",
      footerRight: "100% Curricular",
      footerRightBg: "bg-[#557EBD]/10 text-[#557EBD]",
    },
    {
      id: "logica",
      headerBg: "#E5A93C",
      badge: "Pensamiento Lógico",
      icon: "calculate",
      iconColor: "text-[#b47a16]",
      subtitle: "Método Singapur & Heurística",
      title: "Lógica & Razonamiento",
      quote: "«Comprendiendo el mundo a través del análisis concreto.»",
      desc: "Material concreto estructurado para clasificación, seriación matemática, nociones espaciales y resolución heurística antes de fórmulas mecánicas abstractas.",
      footerLeft: "Pensamiento cuantitativo sólido",
      footerRight: "Criterio Científico",
      footerRightBg: "bg-[#E5A93C]/20 text-[#9c6a12]",
    },
    {
      id: "ciencia",
      headerBg: "#2E9F6E",
      badge: "STEAM Maker",
      icon: "science",
      iconColor: "text-[#2E9F6E]",
      subtitle: "Ciencia & Robótica",
      title: "Exploración Científica",
      quote: "«Pequeños científicos formulando grandes preguntas.»",
      desc: "Aulas y laboratorios equipados para ensamblaje maker, comprensión experimental de causa y efecto, biología práctica y diseño colaborativo de prototipos.",
      footerLeft: "Metodología por indagación",
      footerRight: "Laboratorio STEAM",
      footerRightBg: "bg-[#2E9F6E]/15 text-[#2E9F6E]",
    },
    {
      id: "psicomotricidad",
      headerBg: "#E9A25E",
      badge: "Desarrollo Motor",
      icon: "sports_kabaddi",
      iconColor: "text-[#E9A25E]",
      subtitle: "Cuerpo & Disciplina",
      title: "Psicomotricidad & Deporte",
      quote: "«Coordinación, disciplina y salud integral.»",
      desc: "Circuitos motores, atletismo formativo, orientación espacial y formación marcial en Taekwondo para fortalecer carácter, autocontrol, resiliencia y salud corporal.",
      footerLeft: "Agilidad y reflejos",
      footerRight: "Cuerpo & Mente",
      footerRightBg: "bg-[#E9A25E]/20 text-[#a66222]",
    },
    {
      id: "arte",
      headerBg: "#345F9C",
      badge: "Música Diaria",
      icon: "music_note",
      iconColor: "text-[#345F9C]",
      subtitle: "Expresión Artística & Orquestal",
      title: "Sensibilidad Artística",
      quote: "«Lectura musical, afinación y expresión plástica.»",
      desc: "Formación musical integrada en el horario ordinario con ejecución instrumental, lectura de partituras y ensambles orquestales, además de artes plásticas formativas.",
      footerLeft: "Ensamble y práctica regular",
      footerRight: "Curricular",
      footerRightBg: "bg-[#345F9C]/15 text-[#345F9C]",
    },
    {
      id: "emocional",
      headerBg: "#DA474A",
      badge: "Sistema Everest",
      icon: "favorite",
      iconColor: "text-[#DA474A]",
      subtitle: "Socioafectivo & Carácter",
      title: "Inteligencia Emocional",
      quote: "«Crecimiento con empatía, gratitud y liderazgo ético.»",
      desc: "Educación del carácter, autorregulación asertiva con Guías Everest, cultivo de la amistad, respeto mutuo y gratitud comunitaria con acompañamiento tutorial cercano.",
      footerLeft: "Liderazgo humanista",
      footerRight: "Virtudes Vivas",
      footerRightBg: "bg-[#DA474A]/15 text-[#DA474A]",
    },
  ];

  return (
    <section className="w-full py-24 bg-white" id="pilares-primaria">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span
            className="text-xs uppercase font-bold tracking-widest px-4 py-1.5 rounded-full text-white shadow-xs"
            style={{ backgroundColor: "#546FAC" }}
          >
            Formación Integral & Excelencia Académica
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Pilares de Formación en Primaria Everest
          </h2>
          <p className="font-body text-slate-600 text-base sm:text-lg">
            Una estructura pedagógica balanceada que despierta vocaciones, afianza el carácter y forja mentes analíticas con sentido humanista.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1280px] mx-auto">
          {pilares.map((pilar) => (
            <div
              key={pilar.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Colored Card Header */}
              <div
                className="p-6 relative text-white"
                style={{ backgroundColor: pilar.headerBg }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/20">
                    {pilar.badge}
                  </span>
                  <div
                    className={`w-11 h-11 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0 ${pilar.iconColor}`}
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      {pilar.icon}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 pr-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                    {pilar.subtitle}
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-white leading-tight">
                    {pilar.title}
                  </h3>
                  <p className="font-headline italic text-white/90 text-xs sm:text-[13px] leading-relaxed mt-1">
                    {pilar.quote}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-white space-y-4">
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-body">
                  {pilar.desc}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span>{pilar.footerLeft}</span>
                  <span className={`px-2.5 py-0.5 rounded-full font-bold ${pilar.footerRightBg}`}>
                    {pilar.footerRight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
