import { SITE_CONFIG } from "@/lib/constants";

export function PreescolarCta() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-16 px-3 sm:px-6 bg-[#f7f9fb]">
      <div
        className="max-w-[1280px] mx-auto rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-white"
        style={{
          background: "linear-gradient(135deg, #19325c 0%, #24467d 50%, #345f9c 100%)",
        }}
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-white/10" />

        <div className="space-y-3 sm:space-y-4 text-left z-10 max-w-xl">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/20 text-white text-[11px] sm:text-xs font-bold backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F6D448]" />
            <span>Inscripciones Preescolar 2027 - 2028 · Cupo Limitado</span>
          </div>

          <h2 className="font-headline text-[24px] xs:text-[26px] sm:text-[30px] lg:text-[32px] xl:text-[34px] font-bold text-white tracking-tight leading-tight">
            ¿Listo para brindarle a tu pequeño el mejor inicio educativo en Instituto Everest?
          </h2>

          <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed font-body">
            Agenda un recorrido guiado por nuestras instalaciones de Preescolar. Conoce nuestras aulas activas, a nuestras docentes bilingües y descubre por qué somos el espacio donde tus sueños alcanzan la cima.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-3.5 z-10 w-full sm:w-auto shrink-0">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20un%20recorrido%20personalizado%20en%20Preescolar%20Instituto%20Everest`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-white text-sm sm:text-base font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer"
            style={{
              backgroundColor: "rgb(218, 71, 74)",
              boxShadow: "rgba(218, 71, 74, 0.45) 0px 8px 24px",
            }}
          >
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            Agendar Recorrido Personalizado
          </a>

          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-white text-sm sm:text-base font-bold transition-all duration-300 hover:bg-white/20 bg-white/10 border border-white/30 backdrop-blur-sm text-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            Llamar: {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
