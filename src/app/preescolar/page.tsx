import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { PreescolarHero } from "@/components/preescolar/PreescolarHero";
import { PreescolarAmcoBanner } from "@/components/preescolar/PreescolarAmcoBanner";
import { PreescolarRutaPedagogica } from "@/components/preescolar/PreescolarRutaPedagogica";
import { PreescolarAreas } from "@/components/preescolar/PreescolarAreas";
import { PreescolarViajeDiario } from "@/components/preescolar/PreescolarViajeDiario";
import { PreescolarCta } from "@/components/preescolar/PreescolarCta";

export const metadata: Metadata = {
  title: "Preescolar Bilingüe AMCO (Kínder 1, 2 y 3) | Instituto Everest León",
  description:
    "Preescolar bilingüe AMCO en León, Gto. Inmersión en inglés sin traducción mental, metodología STEAM, psicomotricidad, valores Everest, música curricular y horario extendido.",
  alternates: {
    canonical: "/preescolar",
  },
  openGraph: {
    title: `Preescolar Bilingüe AMCO | ${SITE_CONFIG.name}`,
    description:
      "Inmersión bilingüe natural, pensamiento crítico, indagación STEAM y formación en virtudes en León, Gto.",
    url: `${SITE_CONFIG.url}/preescolar`,
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1WnjnAAqxww6xqK8GFdCTlqGHCW98swCrss2JAD-1tt19BDvZChqC9eNxZ5gtxjqrxLyS0ZiYrWs1g7RwKM6Y0sIY99lU_ofJPpXk1JoyqJ2yME18XZDPOQgvh_qBq5aBhT7dPB0-ZB3y7AyNoBkoPDZtn8eSg0Q-dzgj3C_F-GsV9_rspYD7RIYJxBj-DWIq1Q8Gi-sxlXQNU6vUdNZbnw7iQqG9uBCjV1kv5zwrEUZObcuOSlkqUqqwU",
        width: 1200,
        height: 630,
        alt: "Preescolar Bilingüe Instituto Everest León",
      },
    ],
  },
};

export default function PreescolarPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PreescolarHero />
      <PreescolarAmcoBanner />
      <PreescolarRutaPedagogica />
      <PreescolarAreas />
      <PreescolarViajeDiario />
      <PreescolarCta />
    </div>
  );
}
