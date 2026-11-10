import type { Metadata, Viewport } from "next";
import { Lilita_One, Belleza } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/analytics/GoogleTagManager";
import { CookieBanner } from "@/components/analytics/CookieBanner";
import { SmoothScrollProvider } from "@/components/layout/SmoothScroll";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InitialLoader } from "@/components/layout/InitialLoader";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
  display: "swap",
});

const belleza = Belleza({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-belleza",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A1128",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Bilingüismo AMCO, STEAM y Valores Humanistas`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Instituto Everest León",
    "colegio bilingüe León Guanajuato",
    "maternal León Gto",
    "preescolar bilingüe",
    "primaria STEAM",
    "metodología AMCO",
    "escuela bilingüe León",
    "horario extendido colegio",
    "robótica educativa para niños",
    "admisiones escolares León",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Donde tus sueños alcanzan la cima`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Formación de líderes bilingües con visión humana`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Donde tus sueños alcanzan la cima`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${lilitaOne.variable} ${belleza.variable} scroll-smooth`}
    >
      <head>
        {/* Preconnect to external assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="preconnect" href="https://assets.mixkit.co" />

        {/* Material Symbols Outlined Icon Suite */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          as="style"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-expect-error non-blocking CSS media swap
          onLoad="this.media='all'"
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* Schema.org JSON-LD Structured Data */}
        <JsonLd />

        {/* Google Tag Manager & Consent Mode Head */}
        <GoogleTagManagerHead />
      </head>
      <body className="font-body bg-[#f7f9fb] text-[#191c1e] antialiased min-h-screen relative selection:bg-[#F6D448] selection:text-[#0A1128]">
        {/* Initial Brand Loader with Curved Curtain Transition */}
        <InitialLoader />

        {/* GTM Noscript Fallback */}
        <GoogleTagManagerBody />

        {/* Accessible Skip Link */}
        <SkipToContent />

        {/* Smooth Scroll Container */}
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content" className="w-full">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
