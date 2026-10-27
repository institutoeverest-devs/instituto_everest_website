export function PreescolarAreas() {
  const areas = [
    {
      id: "lectoescritura",
      headerBg: "#557EBD",
      badge: "AMCO & Inglés desde 1° de Preescolar",
      badgeClass: "bg-white/20 text-white border border-white/30",
      icon: "menu_book",
      iconWrapper: "bg-white text-[#557EBD]",
      subtitle: "Bilingüismo Activo · Desde Kínder 1",
      subtitleClass: "text-white/80",
      title: "Lectoescritura & Fonética",
      titleClass: "text-white",
      quote: "«Palabras que despiertan su propia voz en dos idiomas desde el primer día.»",
      quoteClass: "text-white/90",
      desc: "Inmersión bilingüe activa y metodología AMCO implementada desde 1º de Preescolar (Kínder 1), desarrollando fonética natural, cuentacuentos y comprensión auditiva continua sin traducción mental.",
      footerLeft: "Inglés y AMCO desde 1° de Preescolar",
      footerLeftClass: "text-[#557EBD]",
      footerRight: "100% Curricular",
    },
    {
      id: "logica",
      headerBg: "#F6D448",
      badge: "Pensamiento Lógico",
      badgeClass: "bg-slate-900/10 text-slate-900 border border-slate-900/20",
      icon: "calculate",
      iconWrapper: "bg-slate-900 text-[#F6D448]",
      subtitle: "Método Singapur & Montessori",
      subtitleClass: "text-slate-800",
      title: "Lógica & Razonamiento",
      titleClass: "text-slate-900",
      quote: "«Comprendiendo el mundo a través de la exploración concreta.»",
      quoteClass: "text-slate-800",
      desc: "Material concreto estructurado para clasificación, seriación matemática, nociones espaciales y resolución intuitiva de problemas.",
      footerLeft: "Conteo sensorial y lógica manipulativa temprana",
      footerLeftClass: "text-amber-800",
    },
    {
      id: "ciencia",
      headerBg: "#2DB362",
      badge: "STEAM Maker",
      badgeClass: "bg-white/20 text-white border border-white/30",
      icon: "science",
      iconWrapper: "bg-white text-[#2DB362]",
      subtitle: "Ciencia & Robótica",
      subtitleClass: "text-white/80",
      title: "Exploración Científica",
      titleClass: "text-white",
      quote: "«Pequeños científicos formulando grandes preguntas.»",
      quoteClass: "text-white/90",
      desc: "Aulas equipadas para ensamblaje de engranes, laboratorio sensorial, botánica con lupas y comprensión experimental de causa y efecto.",
      footerLeft: "Formulación de hipótesis y curiosidad científica",
      footerLeftClass: "text-[#2DB362]",
    },
    {
      id: "psicomotricidad",
      headerBg: "#E9A25E",
      badge: "Desarrollo Motor",
      badgeClass: "bg-white/20 text-white border border-white/30",
      icon: "sports_gymnastics",
      iconWrapper: "bg-white text-[#E9A25E]",
      subtitle: "Cuerpo & Disciplina",
      subtitleClass: "text-white/80",
      title: "Psicomotricidad & Deporte",
      titleClass: "text-white",
      quote: "«Coordinación, equilibrio y disciplina formativa.»",
      quoteClass: "text-white/90",
      desc: "Circuitos motores especializados, equilibrio consciente, orientación espacial, atletismo infantil y formación marcial en Taekwondo.",
      footerLeft: "Conciencia corporal, agilidad y reflejos",
      footerLeftClass: "text-[#E9A25E]",
    },
    {
      id: "arte",
      headerBg: "#546FAC",
      badge: "Música desde 1° de Preescolar (1 día/sem)",
      badgeClass: "bg-white/20 text-white border border-white/30",
      icon: "palette",
      iconWrapper: "bg-white text-[#546FAC]",
      subtitle: "Sensibilidad Visual & Expresión Musical",
      subtitleClass: "text-white/80",
      title: "Sensibilidad Artística",
      titleClass: "text-white",
      quote: "«Expresión libre, texturas y apreciación artística y orquestal.»",
      quoteClass: "text-white/90",
      desc: "Clases formales de música curricular desde 1º de Preescolar (1 sesión semanal) mediante estimulación auditiva, rítmica y vocal, sin manejo de instrumentos musicales. Pintura de caballete y modelado con arcilla.",
      footerLeft: "Música: 1 día a la semana en Kínder 1, 2 y 3",
      footerLeftClass: "text-[#546FAC]",
      footerRight: "Curricular Semanal",
    },
    {
      id: "emocional",
      headerBg: "#DA474A",
      badge: "Valores Everest",
      badgeClass: "bg-white/20 text-white border border-white/30",
      icon: "volunteer_activism",
      iconWrapper: "bg-white text-[#DA474A]",
      subtitle: "Socioafectivo & Virtudes",
      subtitleClass: "text-white/80",
      title: "Inteligencia Emocional",
      titleClass: "text-white",
      quote: "«Creciendo con empatía, gratitud y liderazgo ético.»",
      quoteClass: "text-white/90",
      desc: "Educación del carácter, autorregulación asertiva con Nube Everest, cultivo de la amistad, respeto mutuo y gratitud comunitaria.",
      footerLeft: "Liderazgo ético, empatía y respeto mutuo",
      footerLeftClass: "text-[#DA474A]",
    },
  ];

  return (
    <section className="w-full bg-[#f2f4f6] py-20 lg:py-24" id="areas-desarrollo">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span
            className="text-xs uppercase font-bold tracking-wider px-3.5 py-1 rounded-full text-white shadow-xs"
            style={{ backgroundColor: "rgb(84, 111, 172)" }}
          >
            Formación de Excelencia
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight">
            Áreas Clave de Desarrollo & Aprendizaje Experiencial
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
            Seis dimensiones formativas donde cada niña y niño despliega su potencial mediante el descubrimiento activo y la excelencia curricular.
          </p>
        </div>

        {/* 6 Cards Grid with Notched Corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.id}
              className="card-notched-corner shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80 bg-white flex flex-col justify-between group"
            >
              {/* Header Colored Block */}
              <div className="p-8 text-slate-900 relative" style={{ backgroundColor: area.headerBg }}>
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${area.badgeClass}`}>
                    {area.badge}
                  </span>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shrink-0 ${area.iconWrapper}`}
                  >
                    <span className="material-symbols-outlined text-[36px]">{area.icon}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${area.subtitleClass}`}>
                    {area.subtitle}
                  </span>
                  <h3 className={`font-headline text-[24px] font-bold mt-1 ${area.titleClass}`}>
                    {area.title}
                  </h3>
                  <p className={`text-xs italic mt-1 ${area.quoteClass}`}>
                    {area.quote}
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-7 bg-white space-y-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  {area.desc}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className={`text-xs font-bold ${area.footerLeftClass}`}>
                    {area.footerLeft}
                  </span>
                  {area.footerRight && (
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {area.footerRight}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
