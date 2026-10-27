import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <>
      <footer
        className="w-full text-white pt-16 pb-10 relative overflow-hidden"
        id="footer-everest"
        style={{ backgroundColor: "#0A1128" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Main 4-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
            {/* Column 1: Brand & Contact */}
            <div className="lg:col-span-4 flex flex-col space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white shadow-md inline-flex items-center justify-center">
                  <Image
                    alt="Instituto Everest León"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJFPWqYrvEUNm2zzcnwoSHbMtbpR5mhW7eP3WxKw44OSJAP9xVdZHn15EppSEgTX5yzkDEfxzqQWPGbEi1jsf5-ZLAc5BsEwKCrIRvJKJSpjd-mWgUqS5K6yRI-mh-4TQLQh6-xkXZJIAF8novmOKWD5foBIjRf3QvxhsUIjItPlQPzRy7penO3atyFfEZwUl0vkPkK67eaja94AKH0dpAEdK-l1uXvCeg2F6fsE_obp8o_bxuOebzWrKhWfXU1PwuTA"
                    width={36}
                    height={36}
                    style={{ width: "auto" }}
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-[20px] font-bold tracking-tight text-white leading-tight">
                    {SITE_CONFIG.name}
                  </span>
                  <span className="text-xs text-white/70">{SITE_CONFIG.subtagline}</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <h4 className="font-bold text-[16px] text-[#E5A93C] tracking-wide">
                  {SITE_CONFIG.campus}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                  {SITE_CONFIG.address.street} {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, CP {SITE_CONFIG.address.postalCode}.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <span className="material-symbols-outlined text-[19px] shrink-0 text-[#E5A93C]">
                    headset_mic
                  </span>
                  <span>
                    Conmutador: <strong>{SITE_CONFIG.phone}</strong>
                  </span>
                </div>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-200 hover:text-white transition-colors"
                >
                  <svg className="w-[18px] h-[18px] shrink-0 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.181-.076.355.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825zM12.012 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.988.583 3.844 1.593 5.409L2 22l4.757-1.564c1.513.918 3.28 1.448 5.255 1.448 5.508 0 9.985-4.477 9.985-9.985 0-5.508-4.477-9.985-9.985-9.985z" />
                  </svg>
                  <span>
                    Admisiones (WhatsApp): <strong>{SITE_CONFIG.whatsappDisplay}</strong>
                  </span>
                </a>
              </div>

              <div className="pt-2">
                <span className="block text-xs uppercase font-bold tracking-widest mb-2.5 text-[#E5A93C]">
                  Síguenos
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Everest"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#0A1128] text-white flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.75 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                    </svg>
                  </a>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Everest"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E5A93C] hover:text-[#0A1128] text-white flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Links */}
            <div className="lg:col-span-3 flex flex-col space-y-7">
              <div>
                <h3 className="font-headline text-[20px] font-bold mb-3.5 text-[#E5A93C]">
                  Instituto Everest
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
                  <li>
                    <Link href="#hero" className="hover:text-white transition-colors">
                      Nuestro Colegio
                    </Link>
                  </li>
                  <li>
                    <Link href="#ruta-crecimiento" className="hover:text-white transition-colors">
                      Modelo Educativo
                    </Link>
                  </li>
                  <li>
                    <Link href="#pilares-showcase" className="hover:text-white transition-colors">
                      Deporte y Cultura
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto" className="hover:text-white transition-colors">
                      Contacto y Citas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Innovation & Services */}
            <div className="lg:col-span-3 flex flex-col space-y-7">
              <div>
                <h3 className="font-headline text-[20px] font-bold mb-3.5 text-[#E5A93C]">
                  Innovación & Programas
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
                  <li>
                    <Link href="#pilares-showcase" className="hover:text-white transition-colors">
                      Metodología AMCO
                    </Link>
                  </li>
                  <li>
                    <Link href="#pilares-showcase" className="hover:text-white transition-colors">
                      Inteligencia Artificial & Robótica
                    </Link>
                  </li>
                  <li>
                    <Link href="#pilares-showcase" className="hover:text-white transition-colors">
                      Orquesta Infantil & Música
                    </Link>
                  </li>
                  <li>
                    <Link href="#niveles-educativos" className="hover:text-white transition-colors">
                      Taekwondo & Talleres
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[16px] mb-2 text-[#E5A93C]">Servicios</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>
                    <Link href="/contacto" className="hover:text-white transition-colors">
                      Directorio Institucional
                    </Link>
                  </li>
                  <li>
                    <Link href="#niveles-educativos" className="hover:text-white transition-colors">
                      Horario Extendido (Hasta 6:00 PM)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Levels & Privacy */}
            <div className="lg:col-span-2 flex flex-col space-y-7">
              <div>
                <h3 className="font-headline text-[20px] font-bold mb-3.5 text-[#E5A93C]">
                  Niveles Educativos
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
                  <li>
                    <Link href="/maternal" className="hover:text-white transition-colors">
                      Maternal (1 a 3 Años)
                    </Link>
                  </li>
                  <li>
                    <Link href="/preescolar" className="hover:text-white transition-colors">
                      Preescolar (3 a 6 Años)
                    </Link>
                  </li>
                  <li>
                    <Link href="/primaria" className="hover:text-white transition-colors">
                      Primaria (1° a 6° Grado)
                    </Link>
                  </li>
                  <li>
                    <Link href="#niveles-educativos" className="hover:text-white transition-colors">
                      Horario Extendido
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[16px] mb-2 text-[#E5A93C]">Legal</h4>
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  <li>
                    <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
                      Términos y Condiciones
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <p>© {new Date().getFullYear()} Instituto Everest León. Todos los derechos reservados.</p>
            <p className="text-slate-400/80">Donde tus sueños alcanzan la cima · Aquí crecemos juntos</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        aria-label="Contactar por WhatsApp"
        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20quisiera%20recibir%20información%20de%20admisiones%20en%20Instituto%20Everest%20León`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
        style={{ boxShadow: "rgba(37, 211, 102, 0.45) 0px 10px 25px" }}
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.181-.076.355.101.173.449.741.963 1.2.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825zM12.012 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.988.583 3.844 1.593 5.409L2 22l4.757-1.564c1.513.918 3.28 1.448 5.255 1.448 5.508 0 9.985-4.477 9.985-9.985 0-5.508-4.477-9.985-9.985-9.985z" />
        </svg>
        <span className="sr-only">Contactar por WhatsApp con Admisiones</span>
      </a>
    </>
  );
}
