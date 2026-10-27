import { SITE_CONFIG } from "@/lib/constants";

export function MaternalCta() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-[#f7f9fb]">
      <div
        className="max-w-[1280px] mx-auto rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 text-white"
        style={{
          background: "linear-gradient(135deg, #546FAC 0%, #345f9c 100%)",
        }}
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-white/10" />

        <div className="space-y-4 text-left z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F6D448]" />
            <span>Inscripciones Maternal 2025 · Cupo Limitado</span>
          </div>

          <h2 className="font-headline text-[30px] sm:text-[38px] lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            ¿Listo para dar los primeros pasos de tu pequeño en Instituto Everest?
          </h2>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-body">
            Agenda un recorrido guiado por nuestras instalaciones de Maternal. Descubre por qué somos el espacio donde tus sueños alcanzan la cima.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 z-10 w-full sm:w-auto shrink-0">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20agendar%20un%20recorrido%20personalizado%20en%20Maternal%20Instituto%20Everest`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white text-sm sm:text-base font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white text-sm sm:text-base font-bold transition-all duration-300 hover:bg-white/20 bg-white/10 border border-white/30 backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            Llamar: {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
