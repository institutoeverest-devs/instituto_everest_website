import Image from "next/image";

export function PreescolarAmcoBanner() {
  return (
    <section className="w-full py-14 px-4 sm:px-6 bg-gradient-to-r from-[#19325c] via-[#24467d] to-[#345f9c] text-white relative overflow-hidden shadow-xl border-y border-white/10">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-white/10" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6D448] text-slate-900 font-bold text-xs uppercase tracking-wider shadow-xs">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Programa Bilingüe Oficial AMCO desde Kínder 1</span>
          </div>

          <h2 className="font-headline text-[28px] sm:text-[36px] font-bold text-white tracking-tight leading-tight">
            Inmersión Bilingüe Natural: Pensamiento y Emoción en Dos Idiomas
          </h2>

          <p className="text-white/95 text-base sm:text-lg leading-relaxed font-body">
            En Instituto Everest integramos la metodología internacional{" "}
            <strong className="text-[#F6D448]">AMCO desde 1° de Preescolar (Kínder 1)</strong>: un sistema de inmersión total que estimula el pensamiento crítico, la fluidez oral espontánea y la fonética activa{" "}
            <strong className="text-white underline decoration-[#F6D448]">sin traducción mental</strong>. Potenciamos la plasticidad cerebral temprana de tus pequeños con confianza, naturalidad y alegría.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 border border-white/20 text-xs font-semibold backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px] text-[#F6D448]">
                check_circle
              </span>
              Bilingüismo 100% Curricular
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 border border-white/20 text-xs font-semibold backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px] text-[#F6D448]">
                psychology
              </span>
              Sin traducción mental
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 border border-white/20 text-xs font-semibold backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px] text-[#F6D448]">
                record_voice_over
              </span>
              Storytelling & Fonética Activa
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 border border-white/20 text-xs font-semibold backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px] text-[#F6D448]">
                sentiment_very_satisfied
              </span>
              Confianza Oral Temprana
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/40 w-full flex items-center justify-center transition-all duration-300 hover:scale-[1.02]">
            <Image
              alt="AMCO - Bright Ideas. Brilliant Future."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqpW_cpRFDdVwYseRDeS6w2-s7lpe1Bpnm5yLKg7RaUMvtK-QIinWOiMs__kIXDKdC63RJF48Svfi1tdE0fB1iQ0NL3E3Dr1-hXVnxGlGMmESYo1ZSr00sasutS2enpna-bWSBoTgMJXUzTV8YpL_coICRoNhvziCj6yDow1bVa5NCHaBuQoyQ97KAJySpb6_HAnvkZpLYSPfZpFKJlTufutq5Aq_yN4mB6nuyt4cjv44NXdxkT_DNWo7_70FDIe2KcQ"
              width={280}
              height={140}
              style={{ width: "auto", height: "auto" }}
              className="w-full max-w-[280px] sm:max-w-[320px] object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
