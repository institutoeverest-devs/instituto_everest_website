import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { GaleriaCollage } from "@/components/galeria/GaleriaCollage";

export const metadata: Metadata = {
  title: "Galería de Momentos & Vida Escolar | Instituto Everest León",
  description:
    "Explora momentos significativos de nuestra comunidad escolar y actividades en Campus León: Maternal, Preescolar, Primaria y Academias formativas.",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    title: `Galería | ${SITE_CONFIG.name}`,
    description:
      "Explora momentos significativos de nuestra comunidad escolar y actividades formativas en Campus León.",
    url: `${SITE_CONFIG.url}/galeria`,
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
        width: 1200,
        height: 630,
        alt: "Galería Instituto Everest León",
      },
    ],
  },
};

export default function GaleriaPage() {
  return <GaleriaCollage />;
}
