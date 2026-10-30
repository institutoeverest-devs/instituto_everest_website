import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactoHero } from "@/components/contacto/ContactoHero";
import { ContactoProcesoPasos } from "@/components/contacto/ContactoProcesoPasos";
import { ContactoFormularioSection } from "@/components/contacto/ContactoFormularioSection";
import { ContactoMapaSection } from "@/components/contacto/ContactoMapaSection";

export const metadata: Metadata = {
  title: "Contacto & Admisiones 2027 - 2028 | Instituto Everest León",
  description:
    "Comienza el futuro de tus hijos en Instituto Everest León. Agenda tu recorrido presencial para Maternal, Preescolar o Primaria. Consulta requisitos, costos y proceso de admisión.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: `Contacto & Admisiones | ${SITE_CONFIG.name}`,
    description:
      "Acompañamos a tu familia en cada etapa del ingreso a Maternal, Preescolar o Primaria en León, Guanajuato.",
    url: `${SITE_CONFIG.url}/contacto`,
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1Wd4EVGsOe3B7TDtJAz4a84_tSYRM0FeYyjaJO5yTPJEnFgwQjpniwnr1BMaewBbn5Pk2OJHPnXer3x4MluV09rP4ga9Jch3_XHDRZxj-fq-k9aHF_D4dZ5Dd6ckNH6C2Xd045LYNycRqlkQ3SsvSX9Mp6vNQTp89LyLFUZCnFJM8YlSswJ08P6gw6j_2zf5o5sMnKvSxGqi5JhoQb2_bj7jVuwapgyzN_DKbfu6OMMoDaU2vXXCx8ZTLE",
        width: 1200,
        height: 630,
        alt: "Admisiones Instituto Everest León",
      },
    ],
  },
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <ContactoHero />
      <ContactoProcesoPasos />
      <ContactoFormularioSection />
      <ContactoMapaSection />
    </div>
  );
}
