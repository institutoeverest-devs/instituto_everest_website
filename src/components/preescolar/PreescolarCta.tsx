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
                Admisiones Preescolar 2025 - 2026 · Cupo Limitado
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
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#DA474A",
                  boxShadow: "0 10px 25px rgba(218, 71, 74, 0.45)",
                }}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.181-.076.355.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825zM12.012 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.988.583 3.844 1.593 5.409L2 22l4.757-1.564c1.513.918 3.28 1.448 5.255 1.448 5.508 0 9.985-4.477 9.985-9.985 0-5.508-4.477-9.985-9.985-9.985z" />
                </svg>
                <span>Contactar a Admisiones (WhatsApp)</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white text-sm sm:text-base transition-all duration-300 hover:bg-white/20 bg-white/10 border border-white/30 backdrop-blur-sm font-semibold hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>Conmutador: {SITE_CONFIG.phone}</span>
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
