"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function PrimariaAmcoBento() {
  return (
    <section className="w-full py-20 lg:py-24 bg-[#F7F9FB] relative" id="seccion-amco">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header Showcase AMCO */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#557EBD]/10 text-[#557EBD] font-bold text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Propuesta Educativa Global AMCO en Primaria</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Metodología Internacional AMCO: Pensamiento Global sin Traducción Mental
              </h2>
              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                Contamos con una propuesta educativa apoyada por{" "}
                <strong className="text-primary font-bold">AMCO</strong> que incorpora metodologías, herramientas y recursos orientados al aprendizaje y al desarrollo de habilidades cognitivas, emocionales y de comunicación activa en nuestros estudiantes de Primaria.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center w-full max-w-[300px] shadow-xs hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <span className="material-symbols-outlined text-4xl">language</span>
                </div>
                <span className="font-headline text-xl font-bold text-slate-900">AMCO English</span>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Alianza Metodológica Oficial
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Minimalista de Valor */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-headline text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Aprender con sentido es el pilar de la excelencia
              </h3>
              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Un ecosistema pedagógico bilingüe centrado en potenciar el pensamiento analítico, la autonomía y la creatividad de cada alumno en Primaria.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end gap-3 pb-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20conocer%20más%20sobre%20el%20modelo%20AMCO%20en%20Primaria%20Everest`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Explorar AMCO</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Bento Col 1: Indagación PBL */}
            <div className="lg:col-span-5 relative min-h-[440px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
              <Image
                alt="Indagación y Proyectos PBL en Primaria"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute top-5 right-5 z-10">
                <span className="w-11 h-11 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-md">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 z-10 space-y-2">
                <h4 className="font-headline text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Indagación & Proyectos PBL
                </h4>
                <p className="font-body text-sm sm:text-base text-slate-200 leading-relaxed">
                  Formulación de hipótesis, trabajo colaborativo y soluciones reales a retos de la comunidad.
                </p>
              </div>
            </div>

            {/* Bento Col 2: Expresión & Mindfulness */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="relative h-[210px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
                <Image
                  alt="Expresión y Música"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VO1ILPSwD8_9SmTF-7xbOohmLZIjN977Oz-9m9rImzQQ7O3g27XSVAncjdu8l92pMGVuQXrdXHUyLRUqRsMK13rY3wHFQ1rcs8kEiq49zIoFFDT7VplxhSpIMmBl59uRDn6GyjFRsUk9dMJQ2AHqI5SJNu07DGGN-VJKDAO5IpJ-np1E1s4DuzhHXD6Llcrp_eBDkhhYk_QANQCACIj_wCIK_eczGT76inqzRkC91BzWiv0NxDyH1hDfY"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 z-10 space-y-1">
                  <h4 className="font-headline text-lg font-bold text-white leading-tight">
                    Expresión & Música
                  </h4>
                  <p className="text-xs text-slate-200 line-clamp-2 font-body">
                    Arte sonoro, rítmica y creatividad integrada en su horario regular.
                  </p>
                </div>
              </div>

              {/* Tarjeta Verde Institucional Mindfulness */}
              <div
                className="flex-1 min-h-[210px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-[#2E9F6E]/30 shadow-md text-white"
                style={{ backgroundColor: "#2E9F6E" }}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-white/20 backdrop-blur-sm border border-white/30">
                    Enfoque AMCO
                  </span>
                  <span className="material-symbols-outlined text-2xl text-white">self_improvement</span>
                </div>
                <p className="font-body text-white text-sm sm:text-[15px] font-medium leading-relaxed">
                  Mindfulness y habilidades socioemocionales para aprender con serenidad, concentración y empatía en cada jornada.
                </p>
              </div>
            </div>

            {/* Bento Col 3: Fluidez Bilingüe & Debate */}
            <div className="lg:col-span-4 relative min-h-[440px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 group">
              <Image
                alt="Fluidez Bilingüe & Debate"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wg91R-_7d_4UpoQBmWkLnpxDrUs4-GRc3wotLoVx2uVwZoW5OXZLeN_pJmFZfLALOnvh2VcHpFG5X1BAm6FJHhV8Axlpsq-zEgfaIBDV4V712pv88NY8yRbhbuSwD0lPWvJ2pIP1wrG5yEJkl-nCfEL56Z48o_j0T5nsy52tt7Da0qv6F411ASwHM_c-ZkpN-5JbNVDOBDN2idE0tcwuAhXS_uHTnhA3d2dauzB6jU_AmecP95BhteEbI"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 z-10 space-y-3">
                <div className="space-y-1.5">
                  <h4 className="font-headline text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Fluidez Bilingüe & Debate
                  </h4>
                  <p className="font-body text-sm sm:text-base text-slate-200 leading-relaxed">
                    Pensamiento ágil en inglés con fonética interactiva continua.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20conocer%20las%20certificaciones%20bilingües%20de%20Primaria%20Everest`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
                  >
                    <span>Ver certificaciones</span>
                    <span className="material-symbols-outlined text-[14px]">north_east</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
