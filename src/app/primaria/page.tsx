import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { PrimariaHero } from "@/components/primaria/PrimariaHero";
import { PrimariaAmcoBento } from "@/components/primaria/PrimariaAmcoBento";
import { PrimariaImpactIa } from "@/components/primaria/PrimariaImpactIa";
import { PrimariaPilares } from "@/components/primaria/PrimariaPilares";
import { PrimariaCta } from "@/components/primaria/PrimariaCta";

export const metadata: Metadata = {
  title: "Educación Primaria Bilingüe AMCO (1° a 6° Grado) | Instituto Everest León",
  description:
    "Primaria bilingüe en León, Guanajuato. Inmersión AMCO sin traducción mental, programa IMPACT de Inteligencia Artificial (4° a 6°), música curricular diaria, formación del carácter y horario extendido hasta las 6:00 PM.",
  alternates: {
    canonical: "/primaria",
  },
  openGraph: {
    title: `Educación Primaria Bilingüe | ${SITE_CONFIG.name}`,
    description:
      "Consolidación académica con inglés intensivo, tecnología IMPACT IA, pensamiento crítico y formación humanista en León, Gto.",
    url: `${SITE_CONFIG.url}/primaria`,
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
        width: 1200,
        height: 630,
        alt: "Primaria Instituto Everest León",
      },
    ],
  },
};

export default function PrimariaPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PrimariaHero />
      <PrimariaAmcoBento />
      <PrimariaImpactIa />
      <PrimariaPilares />
      <PrimariaCta />
    </div>
  );
}
