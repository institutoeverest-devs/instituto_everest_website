import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { NosotrosHero } from "@/components/nosotros/NosotrosHero";
import { NosotrosMisionVision } from "@/components/nosotros/NosotrosMisionVision";
import { NosotrosPilaresFilosofia } from "@/components/nosotros/NosotrosPilaresFilosofia";
import { NosotrosMascotasValores } from "@/components/nosotros/NosotrosMascotasValores";
import { NosotrosCampusComunidad } from "@/components/nosotros/NosotrosCampusComunidad";
import { NosotrosDocentesFamilia } from "@/components/nosotros/NosotrosDocentesFamilia";

export const metadata: Metadata = {
  title: "Nosotros · Conoce Nuestra Filosofía y Comunidad | Instituto Everest León",
  description:
    "Descubre Instituto Everest León: más de dos décadas formando personas bilingües con valores humanos, metodología AMCO, enfoque STEAM, música curricular y horario extendido en León, Gto.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: `Nosotros · Filosofía y Comunidad | ${SITE_CONFIG.name}`,
    description:
      "Donde tus sueños alcanzan la cima. Conoce nuestra misión, metodología bilingüe AMCO, instalaciones y enfoque socioemocional en León, Guanajuato.",
    url: `${SITE_CONFIG.url}/nosotros`,
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
        width: 1200,
        height: 630,
        alt: "Comunidad Instituto Everest León",
      },
    ],
  },
};

export default function NosotrosPage() {
  return (
    <div className="flex flex-col w-full overflow-x-clip">
      <NosotrosHero />
      <NosotrosMisionVision />
      <NosotrosPilaresFilosofia />
      <NosotrosMascotasValores />
      <NosotrosCampusComunidad />
      <NosotrosDocentesFamilia />
    </div>
  );
}

