import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "Everest León",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A1128",
    theme_color: "#3b5692",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
