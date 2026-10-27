import { SITE_CONFIG } from "@/lib/constants";

export function JsonLd() {
  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "School", "LocalBusiness"],
    "@id": `${SITE_CONFIG.url}/#school`,
    name: SITE_CONFIG.name,
    legalName: "Instituto Everest de León S.C.",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.ogImage,
    image: SITE_CONFIG.ogImage,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.1219",
      longitude: "-101.6826",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
    ],
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Oferta Educativa Bilingüe",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Maternal Bilingüe y Estimulación Temprana",
            description: "Estimulación temprana, psicomotricidad y desarrollo socioemocional para niños de 1 a 3 años.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Preescolar Bilingüe AMCO",
            description: "Bilingüismo 50/50, fonética interactiva y lectoescritura constructiva para niños de 3 a 6 años.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Primaria Bilingüe STEAM & Robótica",
            description: "Laboratorio STEAM, robótica educativa, orquesta infantil y pensamiento computacional para niños de 6 a 12 años.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Horario Extendido hasta las 6:00 PM",
            description: "Tareas dirigidas con especialistas, comedor saludable balanceado y academias de taekwondo, arte y teatro.",
          },
        },
      ],
    },
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Modelo Educativo",
        item: `${SITE_CONFIG.url}#ruta-crecimiento`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Niveles Educativos",
        item: `${SITE_CONFIG.url}#niveles-educativos`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Admisiones e Inscripciones",
        item: `${SITE_CONFIG.url}#contacto`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  );
}
