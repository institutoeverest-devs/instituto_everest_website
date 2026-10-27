"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface SlotItemData {
  badge: string;
  badgeBg: string;
  title: string;
  imgSrc: string;
  alt: string;
}

interface SlotConfig {
  id: string;
  axis: "x" | "y";
  dir: number; // 1 or -1
  items: SlotItemData[];
}

const CATEGORIES = [
  { name: "Maternal", icon: "child_care" },
  { name: "Preescolar", icon: "toys" },
  { name: "Primaria", icon: "school" },
  { name: "Academias", icon: "sports_martial_arts" },
];

const SUBTITLES = [
  "Maternal — Cuidado con Amor, Estimulación y Primeros Pasos",
  "Preescolar — Bilingüismo Natural AMCO & Curiosidad Activa",
  "Primaria — Pensamiento Crítico STEAM, Bilingüismo y Liderazgo",
  "Academias — Deporte Formativo, Artes, Música y Disciplina",
];

const SLOTS_DATA: SlotConfig[] = [
  // Slot 0: Superior Izquierda Grande (Col-8)
  {
    id: "slot-0",
    axis: "x",
    dir: 1,
    items: [
      {
        badge: "Maternal",
        badgeBg: "bg-[#0A1128]/80",
        title: "Estimulación Sensorial & Aulas Acogedoras",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
        alt: "Ensamble Musical y Actividades",
      },
      {
        badge: "Preescolar",
        badgeBg: "bg-[#557EBD]",
        title: "Inmersión Bilingüe Dinámica AMCO",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
        alt: "Inmersión Bilingüe AMCO",
      },
      {
        badge: "Primaria",
        badgeBg: "bg-[#DA474A]",
        title: "Laboratorio STEAM y Programación con Tablets",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
        alt: "Laboratorio STEAM",
      },
      {
        badge: "Academias",
        badgeBg: "bg-[#0A1128]/80",
        title: "Dojang Profesional de Tae Kwon Do",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Vegy8i6vuay10D7wMMWM0js_NUz8mCTf5S71aPI7ZeZenL7SwcXrOkUNbFxylalfdXEAhtP5_qOgFcMMBBE-xXYy3mNk93H2ZKr7O61RPcafXN_JK4X_70IU5cdPTidxsoQLFp23JJbyJkVOLUfA_FRb-TNULarJ4fQRdm4Noytv9ciL8ezOTvq1ZfnbsO8zSye6jb-IlSFndiruWXc4CYQXnEIqjPoxmi-DodkRA6TkyJu6OCpIY_3no",
        alt: "Dojang Profesional",
      },
    ],
  },
  // Slot 1: Superior Derecha (Col-4)
  {
    id: "slot-1",
    axis: "x",
    dir: -1,
    items: [
      {
        badge: "Maternal",
        badgeBg: "bg-[#0A1128]/80",
        title: "Juego Guiado y Socialización Temprana",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Vg96NgEwDzyFjum7DIsMUKcDTRK9Ioz0RzIHxY2B5Sis5PLvd6chw1WX9FoLG3__Nm9Ko_dO1OvQpvHsX1e8sHQQfUlqzHSp9Xhg3eX-fZAJ2bYxbxcwKHw7MS9aujATiey9cUXILZe3qU0ruYu_JMyTM9iKfToPVbj6jOSMTerKSanxUg6Lys_7jw2nLVdoBSRu93bjvK0fclKH1NR6tVvchPpXrVmFfQ1D32cJUmzs1wo8l2Db8CTg",
        alt: "Desarrollo integral",
      },
      {
        badge: "Preescolar",
        badgeBg: "bg-[#557EBD]",
        title: "Lectoescritura Inicial Divertida",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
        alt: "Lectoescritura Inicial",
      },
      {
        badge: "Primaria",
        badgeBg: "bg-[#DA474A]",
        title: "Campus Digital y Aulas Interactivas",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
        alt: "Campus Digital",
      },
      {
        badge: "Academias",
        badgeBg: "bg-[#0A1128]/80",
        title: "Academia de Violín y Formación Musical",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
        alt: "Academia de Violín",
      },
    ],
  },
  // Slot 2: Inferior Izquierda (Col-4)
  {
    id: "slot-2",
    axis: "y",
    dir: 1,
    items: [
      {
        badge: "Maternal",
        badgeBg: "bg-[#0A1128]/80",
        title: "Exploración Creativa y Motricidad",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1WcxChqsdHHGmXHi83hOJvI-sZbK8DmPOJwNTekxglQSX_ePDyrYjgQdPdvg5hb3k84pj-pl9D_IFnjIfwiRINg0Ah892FM8R_T0_vXMoQzo2aCO32_ElUjL4kO9Jt5pNPEOrnu_-WekCmW3SPtas_3IJpPaIQfsxkv1_UTCmTOmeNKtRUAEAxupVapwCHeHHiGUNWu0AL4DvoaODjw5yfeGRnSy-I0FDnSLraih5oS1kyEZWuC3BdoMRg",
        alt: "Expresión artística",
      },
      {
        badge: "Preescolar",
        badgeBg: "bg-[#557EBD]",
        title: "Iniciación a las Ciencias y STEAM",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
        alt: "Iniciación STEAM",
      },
      {
        badge: "Primaria",
        badgeBg: "bg-[#DA474A]",
        title: "Certificaciones Internacionales en Inglés",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
        alt: "Certificaciones AMCO",
      },
      {
        badge: "Academias",
        badgeBg: "bg-[#0A1128]/80",
        title: "Entrenamiento Deportivo y Competencias",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
        alt: "Entrenamiento Deportivo",
      },
    ],
  },
  // Slot 3: Centro Superior (en Col-5)
  {
    id: "slot-3",
    axis: "y",
    dir: -1,
    items: [
      {
        badge: "Maternal",
        badgeBg: "bg-[#0A1128]/80",
        title: "Estimulación Rítmica y Auditiva",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
        alt: "Ensamble y Música",
      },
      {
        badge: "Preescolar",
        badgeBg: "bg-[#557EBD]",
        title: "Atelier Artístico Infantil",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
        alt: "Atelier Artístico",
      },
      {
        badge: "Primaria",
        badgeBg: "bg-[#DA474A]",
        title: "Orquesta Escolar y Ensambles",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
        alt: "Orquesta Escolar",
      },
      {
        badge: "Academias",
        badgeBg: "bg-[#0A1128]/80",
        title: "Club de Robótica y Torneos",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
        alt: "Robótica y Torneos",
      },
    ],
  },
  // Slot 4: Centro Inferior (en Col-5)
  {
    id: "slot-4",
    axis: "x",
    dir: -1,
    items: [
      {
        badge: "Maternal",
        badgeBg: "bg-[#0A1128]/80",
        title: "Construcción con Bloques y Encastres",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
        alt: "Robótica y Ciencia",
      },
      {
        badge: "Preescolar",
        badgeBg: "bg-[#557EBD]",
        title: "Recreo Inteligente y Parques",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1WcxChqsdHHGmXHi83hOJvI-sZbK8DmPOJwNTekxglQSX_ePDyrYjgQdPdvg5hb3k84pj-pl9D_IFnjIfwiRINg0Ah892FM8R_T0_vXMoQzo2aCO32_ElUjL4kO9Jt5pNPEOrnu_-WekCmW3SPtas_3IJpPaIQfsxkv1_UTCmTOmeNKtRUAEAxupVapwCHeHHiGUNWu0AL4DvoaODjw5yfeGRnSy-I0FDnSLraih5oS1kyEZWuC3BdoMRg",
        alt: "Recreo Inteligente",
      },
      {
        badge: "Primaria",
        badgeBg: "bg-[#DA474A]",
        title: "Tae Kwon Do y Desarrollo Físico",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Vegy8i6vuay10D7wMMWM0js_NUz8mCTf5S71aPI7ZeZenL7SwcXrOkUNbFxylalfdXEAhtP5_qOgFcMMBBE-xXYy3mNk93H2ZKr7O61RPcafXN_JK4X_70IU5cdPTidxsoQLFp23JJbyJkVOLUfA_FRb-TNULarJ4fQRdm4Noytv9ciL8ezOTvq1ZfnbsO8zSye6jb-IlSFndiruWXc4CYQXnEIqjPoxmi-DodkRA6TkyJu6OCpIY_3no",
        alt: "Tae Kwon Do",
      },
      {
        badge: "Academias",
        badgeBg: "bg-[#0A1128]/80",
        title: "Talleres de Oratoria y Expresión",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
        alt: "Talleres de Oratoria",
      },
    ],
  },
  // Slot 5: Inferior Derecha (Col-3)
  {
    id: "slot-5",
    axis: "y",
    dir: 1,
    items: [
      {
        badge: "Maternal",
        badgeBg: "bg-[#0A1128]/80",
        title: "Rincón de Lectura Afectiva",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
        alt: "Lectura Temprana",
      },
      {
        badge: "Preescolar",
        badgeBg: "bg-[#557EBD]",
        title: "Iniciación al Violín y Percusiones",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
        alt: "Iniciación al Violín",
      },
      {
        badge: "Primaria",
        badgeBg: "bg-[#DA474A]",
        title: "Club de Debate y Liderazgo",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
        alt: "Club de Debate",
      },
      {
        badge: "Academias",
        badgeBg: "bg-[#0A1128]/80",
        title: "Ajedrez y Estrategia Cognitiva",
        imgSrc:
          "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
        alt: "Ajedrez y Estrategia",
      },
    ],
  },
];

export function GaleriaCollage() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const currentIndexRef = useRef(0);

  const initSlots = useCallback(() => {
    if (!containerRef.current) return;
    const slotContainers = containerRef.current.querySelectorAll<HTMLElement>(".slot-container");

    slotContainers.forEach((container) => {
      const axis = container.getAttribute("data-axis") || "x";
      const baseDir = parseInt(container.getAttribute("data-dir") || "1", 10) || 1;
      const items = container.querySelectorAll<HTMLElement>(".slot-item");

      items.forEach((item) => {
        const itemIdx = parseInt(item.getAttribute("data-index") || "0", 10);
        item.style.transition = "none";
        if (itemIdx === 0) {
          item.style.transform = "translate(0%, 0%)";
          item.style.zIndex = "2";
        } else {
          const sign = baseDir > 0 ? 100 : -100;
          item.style.transform =
            axis === "x" ? `translate(${sign}%, 0%)` : `translate(0%, ${sign}%)`;
          item.style.zIndex = "1";
        }
      });
    });
  }, []);

  const goToSlide = useCallback(
    (targetIdx: number, navigationStepDirection: number | null = null) => {
      if (!containerRef.current) return;
      if (targetIdx === currentIndexRef.current && navigationStepDirection === null) return;
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      let globalDir = navigationStepDirection;
      if (globalDir === null) {
        globalDir = targetIdx > currentIndexRef.current ? 1 : -1;
      }

      const prevIdx = currentIndexRef.current;
      let nextIdx = targetIdx;
      if (nextIdx < 0) nextIdx = 3;
      if (nextIdx >= 4) nextIdx = 0;

      currentIndexRef.current = nextIdx;
      setCurrentCategoryIndex(nextIdx);

      const slotContainers = containerRef.current.querySelectorAll<HTMLElement>(".slot-container");

      slotContainers.forEach((container) => {
        const axis = container.getAttribute("data-axis") || "x";
        const baseDir = parseInt(container.getAttribute("data-dir") || "1", 10) || 1;
        const effectiveDir = baseDir * (globalDir || 1);

        const items = container.querySelectorAll<HTMLElement>(".slot-item");
        const outgoingEl = Array.from(items).find(
          (item) => parseInt(item.getAttribute("data-index") || "0", 10) === prevIdx
        );
        const incomingEl = Array.from(items).find(
          (item) => parseInt(item.getAttribute("data-index") || "0", 10) === nextIdx
        );

        if (outgoingEl && incomingEl) {
          incomingEl.style.transition = "none";
          const startTranslate = effectiveDir > 0 ? 100 : -100;
          incomingEl.style.transform =
            axis === "x" ? `translate(${startTranslate}%, 0%)` : `translate(0%, ${startTranslate}%)`;
          incomingEl.style.zIndex = "3";
          outgoingEl.style.zIndex = "2";

          // Forzar reflujo de renderizado
          void incomingEl.offsetWidth;

          const transitionStyle = "transform 550ms cubic-bezier(0.25, 1, 0.5, 1)";
          incomingEl.style.transition = transitionStyle;
          outgoingEl.style.transition = transitionStyle;

          incomingEl.style.transform = "translate(0%, 0%)";
          const exitTranslate = effectiveDir > 0 ? -100 : 100;
          outgoingEl.style.transform =
            axis === "x" ? `translate(${exitTranslate}%, 0%)` : `translate(0%, ${exitTranslate}%)`;
        }
      });

      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 560);
    },
    []
  );

  useEffect(() => {
    initSlots();
  }, [initSlots]);

  return (
    <div className="w-full bg-[#F8FAFC] font-sans text-slate-800 antialiased min-h-screen pt-28 pb-16 selection:bg-[#557EBD]/20 selection:text-[#546FAC]">
      <div className="w-full max-w-[98%] xl:max-w-[1360px] mx-auto px-2 sm:px-4 md:px-5 pt-8 sm:pt-12">
        {/* Encabezado de Galería & Filtros por categoría */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 px-1 sm:px-2 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#557EBD]/10 text-[#0A1128] text-xs font-semibold tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0A1128] animate-pulse" />
              Vida en Campus León
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 font-headline">
              Galería
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl">
              Explora momentos significativos de nuestra comunidad escolar y actividades en Campus León.
            </p>
          </div>

          {/* Barra horizontal estilizada de categorías */}
          <div
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 no-scrollbar select-none"
            id="category-filters"
          >
            {CATEGORIES.map((cat, idx) => {
              const isActive = idx === currentCategoryIndex;
              return (
                <button
                  key={cat.name}
                  onClick={() => goToSlide(idx)}
                  className={`category-btn px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "shadow-md bg-[#0A1128] text-white shadow-[#0A1128]/25"
                      : "border border-slate-200 bg-white text-slate-600 hover:text-[#0A1128] hover:border-[#0A1128]/40"
                  }`}
                  data-cat-idx={idx}
                >
                  <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Collage de Galería: Multi-direccional independiente */}
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl bg-slate-100/70 border border-slate-200/80 shadow-sm p-1"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 sm:gap-1.5">
            {/* Slot 0: Superior Izquierda Grande (Col-8) */}
            <div
              className="slot-container md:col-span-8 h-64 sm:h-[300px] md:h-[330px] rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm"
              data-axis={SLOTS_DATA[0].axis}
              data-dir={SLOTS_DATA[0].dir}
              id={SLOTS_DATA[0].id}
            >
              {SLOTS_DATA[0].items.map((item, idx) => (
                <div
                  key={idx}
                  className="slot-item absolute inset-0 w-full h-full"
                  data-index={idx}
                  style={{
                    willChange: "transform",
                    transition: "transform 550ms cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                >
                  <img
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={item.imgSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-0.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-white ${item.badgeBg} rounded-md`}
                      >
                        {item.badge}
                      </span>
                      <p className="text-white font-medium text-sm sm:text-base tracking-tight">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slot 1: Superior Derecha (Col-4) */}
            <div
              className="slot-container md:col-span-4 h-64 sm:h-[300px] md:h-[330px] rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm"
              data-axis={SLOTS_DATA[1].axis}
              data-dir={SLOTS_DATA[1].dir}
              id={SLOTS_DATA[1].id}
            >
              {SLOTS_DATA[1].items.map((item, idx) => (
                <div
                  key={idx}
                  className="slot-item absolute inset-0 w-full h-full"
                  data-index={idx}
                  style={{
                    willChange: "transform",
                    transition: "transform 550ms cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                >
                  <img
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={item.imgSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-0.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-white ${item.badgeBg} rounded-md`}
                      >
                        {item.badge}
                      </span>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slot 2: Inferior Izquierda (Col-4) */}
            <div
              className="slot-container md:col-span-4 h-80 sm:h-[350px] md:h-[380px] rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm"
              data-axis={SLOTS_DATA[2].axis}
              data-dir={SLOTS_DATA[2].dir}
              id={SLOTS_DATA[2].id}
            >
              {SLOTS_DATA[2].items.map((item, idx) => (
                <div
                  key={idx}
                  className="slot-item absolute inset-0 w-full h-full"
                  data-index={idx}
                  style={{
                    willChange: "transform",
                    transition: "transform 550ms cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                >
                  <img
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={item.imgSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-0.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-white ${item.badgeBg} rounded-md`}
                      >
                        {item.badge}
                      </span>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Col-5 con dos slots apilados verticalmente (Slots 3 y 4) */}
            <div className="md:col-span-5 flex flex-col gap-1 sm:gap-1.5 h-80 sm:h-[350px] md:h-[380px]">
              {/* Slot 3: Centro Superior */}
              <div
                className="slot-container h-1/2 w-full rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm"
                data-axis={SLOTS_DATA[3].axis}
                data-dir={SLOTS_DATA[3].dir}
                id={SLOTS_DATA[3].id}
              >
                {SLOTS_DATA[3].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="slot-item absolute inset-0 w-full h-full"
                    data-index={idx}
                    style={{
                      willChange: "transform",
                      transition: "transform 550ms cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                  >
                    <img
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src={item.imgSrc}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <div>
                        <span
                          className={`inline-block px-2 py-0.5 mb-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${item.badgeBg} rounded`}
                        >
                          {item.badge}
                        </span>
                        <p className="text-white font-medium text-xs sm:text-sm">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slot 4: Centro Inferior */}
              <div
                className="slot-container h-1/2 w-full rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm"
                data-axis={SLOTS_DATA[4].axis}
                data-dir={SLOTS_DATA[4].dir}
                id={SLOTS_DATA[4].id}
              >
                {SLOTS_DATA[4].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="slot-item absolute inset-0 w-full h-full"
                    data-index={idx}
                    style={{
                      willChange: "transform",
                      transition: "transform 550ms cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                  >
                    <img
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src={item.imgSrc}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <div>
                        <span
                          className={`inline-block px-2 py-0.5 mb-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${item.badgeBg} rounded`}
                        >
                          {item.badge}
                        </span>
                        <p className="text-white font-medium text-xs sm:text-sm">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slot 5: Inferior Derecha (Col-3) */}
            <div
              className="slot-container md:col-span-3 h-80 sm:h-[350px] md:h-[380px] rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm"
              data-axis={SLOTS_DATA[5].axis}
              data-dir={SLOTS_DATA[5].dir}
              id={SLOTS_DATA[5].id}
            >
              {SLOTS_DATA[5].items.map((item, idx) => (
                <div
                  key={idx}
                  className="slot-item absolute inset-0 w-full h-full"
                  data-index={idx}
                  style={{
                    willChange: "transform",
                    transition: "transform 550ms cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                >
                  <img
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={item.imgSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-0.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-white ${item.badgeBg} rounded-md`}
                      >
                        {item.badge}
                      </span>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carrusel Nav & Controles Horizontales Deslizantes */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0A1128]/10 text-[#0A1128] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">auto_awesome_motion</span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block">
                Galería Dinámica
              </span>
              <span className="text-sm font-bold text-slate-800">
                {SUBTITLES[currentCategoryIndex]}
              </span>
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Contador estilizado */}
            <div className="flex items-center font-mono text-sm px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold tracking-wider">
              <span className="text-[#0A1128] font-bold">0{currentCategoryIndex + 1}</span>
              <span className="mx-1.5 text-slate-400">/</span>
              <span className="text-slate-500">04</span>
            </div>

            {/* Indicador de puntos (dots) */}
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3].map((idx) => {
                const isActive = idx === currentCategoryIndex;
                return (
                  <button
                    key={idx}
                    aria-label={`Nivel ${idx + 1}`}
                    onClick={() => goToSlide(idx)}
                    className={`dot-btn transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-6 h-2 rounded-full bg-[#0A1128]"
                        : "w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                );
              })}
            </div>

            {/* Botones de flechas */}
            <div className="flex items-center gap-2">
              <button
                aria-label="Galería anterior"
                onClick={() => goToSlide((currentCategoryIndex - 1 + 4) % 4, -1)}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm hover:border-[#0A1128] hover:text-[#0A1128] hover:shadow-md active:scale-90 transition-all duration-200 flex items-center justify-center text-slate-700 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">arrow_back</span>
              </button>
              <button
                aria-label="Siguiente galería"
                onClick={() => goToSlide((currentCategoryIndex + 1) % 4, 1)}
                className="w-11 h-11 rounded-full bg-[#0A1128] text-white shadow-md hover:bg-slate-900 hover:shadow-lg active:scale-90 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
