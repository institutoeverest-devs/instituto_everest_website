import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { MaternalHero } from "@/components/maternal/MaternalHero";
import { MaternalPilares } from "@/components/maternal/MaternalPilares";
import { MaternalDimensiones } from "@/components/maternal/MaternalDimensiones";
import { MaternalRutina } from "@/components/maternal/MaternalRutina";
import { MaternalCta } from "@/components/maternal/MaternalCta";

export const metadata: Metadata = {
  title: "Maternal Bilingüe (1 a 3 Años) | Estimulación Temprana y Amor",
  description:
    "Maternal en Instituto Everest León. Estimulación temprana, psicomotricidad guiada, apego seguro, música curricular diaria y horario extendido hasta las 6:00 PM.",
  alternates: {
    canonical: "/maternal",
  },
  openGraph: {
    title: `Maternal Bilingüe | ${SITE_CONFIG.name}`,
    description:
      "Primeros pasos con amor, seguridad y asombro. Estimulación temprana y neurodesarrollo en León, Gto.",
    url: `${SITE_CONFIG.url}/maternal`,
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv22vsS_tksxGdKTCU8_tp_KwTRVHi5K_JQS70rF5iT8-ArJVGVxHySZiAMVtxdtG03yQKSeZqrsqKkzh8n3w1MWtDXMDaL0FVG3yrniouEAO-kzjSRQAqcjF4QS-FXYvSTfmTp0ZbCOKw4GIKsghX8DMKBGfMyo1MtX99MJ5EmvqaPY-BsHlFhJpIkiHeW6wEjXcvNApHFWffpl2Z5lyXWVXRrGcunWSPBz0LUedlETTIfIbM2rp1",
        width: 1200,
        height: 630,
        alt: "Maternal Instituto Everest León",
      },
    ],
  },
};

export default function MaternalPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <MaternalHero />
      <MaternalPilares />
      <MaternalDimensiones />
      <MaternalRutina />
      <MaternalCta />
    </div>
  );
}
