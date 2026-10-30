import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function PreescolarCta() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-[#f7f9fb] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#19325c] via-[#24467d] to-[#345f9c] border border-white/15 text-white">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-white/10" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-[#F6D448]/15" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F6D448] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                Admisiones Preescolar 2027 - 2028 · Cupo Limitado
              </span>
            </div>

            <h2 className="font-headline text-[32px] sm:text-[42px] lg:text-[46px] font-bold text-white tracking-tight leading-tight drop-shadow-sm">
              Bríndale a tu pequeño el mejor inicio educativo en Instituto Everest
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-body">
              Descubre en persona nuestras aulas activas, conoce a nuestro cálido equipo docente y experimenta el ambiente bilingüe que forjará su seguridad, asombro y felicidad para toda la vida.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white">
                <span className="material-symbols-outlined text-[16px] text-[#F6D448]">
                  verified
                </span>
                Inmersión Bilingüe AMCO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white">
                <span className="material-symbols-outlined text-[16px] text-[#F6D448]">
                  psychology
                </span>
                Estimulación Emocional
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white">
                <span className="material-symbols-outlined text-[16px] text-[#F6D448]">
                  science
                </span>
                STEAM & Robótica
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20deseo%20información%20sobre%20admisiones%20para%20Preescolar%20en%20Instituto%20Everest%20León`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-white font-bold text-sm sm:text-base whitespace-nowrap shrink-0 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#DA474A",
                  boxShadow: "0 10px 25px rgba(218, 71, 74, 0.45)",
                }}
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.37 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
                    fill="#25D366"
                  />
                  <path
                    d="M17.52 14.33C17.22 14.18 15.75 13.45 15.48 13.35C15.21 13.25 15.01 13.2 14.81 13.5C14.61 13.79 14.04 14.46 13.87 14.66C13.7 14.86 13.53 14.88 13.23 14.73C12.93 14.58 11.97 14.27 10.84 13.26C9.96 12.47 9.36 11.5 9.19 11.2C9.02 10.9 9.17 10.74 9.32 10.59C9.45 10.46 9.61 10.25 9.76 10.08C9.91 9.9 9.96 9.78 10.06 9.58C10.16 9.38 10.11 9.21 10.04 9.06C9.96 8.91 9.37 7.46 9.12 6.86C8.88 6.28 8.64 6.36 8.46 6.35H7.9C7.7 6.35 7.37 6.42 7.1 6.72C6.83 7.02 6.06 7.74 6.06 9.2C6.06 10.66 7.12 12.07 7.27 12.27C7.42 12.47 9.36 15.47 12.33 16.75C13.04 17.06 13.59 17.24 14.02 17.38C14.73 17.61 15.38 17.57 15.9 17.49C16.47 17.41 17.66 16.77 17.91 16.07C18.16 15.37 18.16 14.78 18.08 14.66C18 14.53 17.82 14.48 17.52 14.33Z"
                    fill="white"
                  />
                </svg>
                <span className="whitespace-nowrap">Contactar a Admisiones WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white text-sm sm:text-base transition-all duration-300 hover:bg-white/20 bg-white/10 border border-white/30 backdrop-blur-sm font-semibold whitespace-nowrap shrink-0 hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px] shrink-0">call</span>
                <span className="whitespace-nowrap">Teléfono: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative flex items-center justify-center py-4 w-full">
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <Image
                alt="Nube Everest - Mascota Institucional Preescolar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs3GY2N3sk7i87toLuPqaNPzmHGAgp-2EJKDp43CEiyceMaDwaqFEUO7SRc8z_bczVD0GYfpUFVvV8GNHVhRsssmmYaIb10XHSAoXrPWXvngB4Iw0yfy6-j7acdfpU2ErWY42DEf5EVcKpWR4z1lEJja5Gul6o4pa-TglDHy7bF67HkVpi9KDoUcQAZV3Q3itR_2zwW_rKPZloGzf5Qya2_9_R-Wj_X0CvMf6rVXJj28xJ-qIX4cBHmtsqJurmxtqE9Q"
                width={300}
                height={300}
                style={{ width: "auto" }}
                className="relative z-10 w-64 sm:w-72 md:w-80 h-auto max-h-[300px] object-contain drop-shadow-2xl animate-gentle-float filter brightness-105 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs font-medium shadow-xs mt-1">
              <span className="material-symbols-outlined text-[16px] text-[#F6D448]">favorite</span>
              <span>Conoce a Nube Everest, amiga de tus pequeños</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
