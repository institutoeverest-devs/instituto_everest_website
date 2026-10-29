import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { FloatingActions } from "@/components/layout/FloatingActions";

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
              <Link
                href="/"
                className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#F6D448] rounded-xl w-fit"
                aria-label="Ir al inicio de Instituto Everest"
              >
                <div className="p-2.5 rounded-xl bg-white shadow-md inline-flex items-center justify-center group-hover:scale-105 transition-transform">
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
                  <span className="font-headline text-[20px] font-bold tracking-tight text-white leading-tight group-hover:text-[#F6D448] transition-colors">
                    Instituto Everest
                  </span>
                </div>
              </Link>

              <div className="space-y-1.5 pt-1">
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                  Calle Luis Cabrera no.104. Fraccionamiento La Alameda, León, México, CP 37204.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-slate-200 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[19px] shrink-0 text-[#E5A93C]">
                    call
                  </span>
                  <span>
                    Teléfono: <strong>{SITE_CONFIG.phone}</strong>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola,%20los%20contacto%20a%20trav%C3%A9s%20del%20sitio%20web%20y%20deseo%20recibir%20informaci%C3%B3n`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-200 hover:text-white transition-colors"
                >
                  <svg className="w-[19px] h-[19px] shrink-0" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.37 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
                      fill="#25D366"
                    />
                    <path
                      d="M17.52 14.33C17.22 14.18 15.75 13.45 15.48 13.35C15.21 13.25 15.01 13.2 14.81 13.5C14.61 13.79 14.04 14.46 13.87 14.66C13.7 14.86 13.53 14.88 13.23 14.73C12.93 14.58 11.97 14.27 10.84 13.26C9.96 12.47 9.36 11.5 9.19 11.2C9.02 10.9 9.17 10.74 9.32 10.59C9.45 10.46 9.61 10.25 9.76 10.08C9.91 9.9 9.96 9.78 10.06 9.58C10.16 9.38 10.11 9.21 10.04 9.06C9.96 8.91 9.37 7.46 9.12 6.86C8.88 6.28 8.64 6.36 8.46 6.35H7.9C7.7 6.35 7.37 6.42 7.1 6.72C6.83 7.02 6.06 7.74 6.06 9.2C6.06 10.66 7.12 12.07 7.27 12.27C7.42 12.47 9.36 15.47 12.33 16.75C13.04 17.06 13.59 17.24 14.02 17.38C14.73 17.61 15.38 17.57 15.9 17.49C16.47 17.41 17.66 16.77 17.91 16.07C18.16 15.37 18.16 14.78 18.08 14.66C18 14.53 17.82 14.48 17.52 14.33Z"
                      fill="white"
                    />
                  </svg>
                  <span>
                    WhatsApp: <strong>{SITE_CONFIG.whatsappDisplay}</strong>
                  </span>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Contacto%20desde%20el%20sitio%20web&body=Hola,%20los%20contacto%20a%20trav%C3%A9s%20del%20sitio%20web%20y%20deseo%20recibir%20informaci%C3%B3n`}
                  className="flex items-center gap-2.5 text-sm text-slate-200 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[19px] shrink-0 text-[#E5A93C]">
                    mail
                  </span>
                  <span>
                    Correo: <strong>{SITE_CONFIG.email}</strong>
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
                    <Link href="/#nosotros" className="hover:text-white transition-colors">
                      Nuestro Colegio
                    </Link>
                  </li>
                  <li>
                    <Link href="/galeria" className="hover:text-white transition-colors">
                      Galería
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto" className="hover:text-white transition-colors">
                      Contacto
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
                  <li>Inteligencia Artificial</li>
                  <li>Teatro</li>
                  <li>Arte</li>
                  <li>Taekwondo</li>
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
                  <li>Horario Extendido (Hasta 6:00 PM)</li>
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
          <div className="pt-8 flex flex-col items-center justify-center text-center text-xs text-slate-400 gap-2 border-t border-white/5 pb-4">
            <p>© {new Date().getFullYear()} Instituto Everest. Todos los derechos reservados.</p>
            <p className="text-slate-400/90 text-center">
              Desarrollado por{" "}
              <a
                href="https://www.blackcherryitconsulting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5A93C] hover:underline font-semibold transition-colors"
              >
                BlackCherry IT Consulting
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Actions (WhatsApp + Scroll To Top) */}
      <FloatingActions />
    </>
  );
}
