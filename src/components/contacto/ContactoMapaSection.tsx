"use client";

import { SITE_CONFIG } from "@/lib/constants";

export function ContactoMapaSection() {
  return (
    <section className="w-full py-16 bg-white border-y border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#557EBD] bg-[#557EBD]/10 uppercase tracking-widest mb-2">
              Ubicación Estratégica
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-slate-900">
              Conoce el Campus
            </h2>
            <p className="text-slate-600 text-sm mt-2 font-body">
              Ubicado en una zona residencial tranquila y segura de León, Guanajuato, con fácil acceso vial desde Blvd. Aeropuerto y Vía de los Mártires.
            </p>
          </div>

          {/* Botón de apertura en Google Maps */}
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#546FAC] hover:bg-[#465f94] transition-colors shadow-xs shrink-0 cursor-pointer"
            href="https://www.google.com/maps/search/?api=1&query=Instituto+Everest+Calle+Luis+Cabrera+104+La+Alameda+Leon+Gto&query_place_id=ChIJAQAAENm-K4QRm1i_oNu6n8Y"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">map</span>
            <span>Abrir en Google Maps</span>
          </a>
        </div>

        {/* Contenedor del Mapa con Tarjeta Flotante Informativa */}
        <div className="relative w-full h-[460px] sm:h-[500px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
          <iframe
            allowFullScreen
            className="w-full h-full min-h-[380px] rounded-2xl"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.03711118485!2d-101.6581261!3d21.150917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbed910000001%3A0xc69fbadba0bf589b!2sInstituto%20Everest!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
            style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
            title="Ubicación Instituto Everest León"
            width="100%"
          />

          {/* Card Flotante con Datos Clave de Cómo Llegar */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#DA474A] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">school</span>
              </span>
              <div>
                <h4 className="font-headline font-bold text-slate-900 text-base leading-tight">
                  {SITE_CONFIG.name}
                </h4>
                <p className="text-xs text-slate-500 font-body">Maternal · Preescolar · Primaria</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-body">
              <strong>Dirección:</strong> {SITE_CONFIG.address.street}, {SITE_CONFIG.address.neighborhood}, C.P. {SITE_CONFIG.address.postalCode}, {SITE_CONFIG.address.city}, Gto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
