"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  badge: string;
  badgeBg: string;
  title: string;
  imgSrc: string;
  alt: string;
}

interface CategoryTheme {
  id: string;
  name: string;
  icon: string;
  subtitle: string;
  pages: GalleryItem[][];
}

const THEMES: CategoryTheme[] = [
  {
    id: "maternal",
    name: "Maternal",
    icon: "child_care",
    subtitle: "Maternal — Cuidado con Amor, Estimulación Temprana y Primeros Pasos",
    pages: [
      // Página 1 (6 fotos)
      [
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Estimulación Sensorial & Aulas Acogedoras",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBv22vsS_tksxGdKTCU8_tp_KwTRVHi5K_JQS70rF5iT8-ArJVGVxHySZiAMVtxdtG03yQKSeZqrsqKkzh8n3w1MWtDXMDaL0FVG3yrniouEAO-kzjSRQAqcjF4QS-FXYvSTfmTp0ZbCOKw4GIKsghX8DMKBGfMyo1MtX99MJ5EmvqaPY-BsHlFhJpIkiHeW6wEjXcvNApHFWffpl2Z5lyXWVXRrGcunWSPBz0LUedlETTIfIbM2rp1",
          alt: "Estimulación Sensorial Maternal",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Juego Guiado y Socialización Temprana",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuABqvUS6YHXmTvX2lXmFVN5o49AR-TOGpIlkvvcpCbubvlCKuSTlRUyo4c_mpf9nNLq9roE1jBeYi9AQGqpQjUFYz65hJSkPj8g6vFec1Fao5nqfTXSwxtkipBW6Xk92uR0qo6tPuQ_kfmuysx2Cp9N6G2bqO0qQPfYiHroPv8XzwmtksBxY8uGbmSifBmcPdz4ng6qizZJ90UesL2_08hIpr6Pt4zXVGJYF7BRhMN8S5WO780Iou_3G1EPkTKVlTJ1wA",
          alt: "Juego Guiado Maternal",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Exploración Creativa y Motricidad Fina",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAvtQ1oo2CLKosbJMoa4ZRkypxHtyXe1LR25_bmY1NE5fNai_ibxgGrNoH6Harw0TmFSupxUXxz4Bl5du7oT2qynTb2LpGSQORR_g-SBmuxaWPmZGrrGZzigHrkGjIYqwdpe6z0UyyLipJKABlOcyhNeRhfzR6PEywFTN8A0qifHuWGVPKiB_HGKho6o8YnoLZcieARbdQgcag768uGfxFfm-4yP-l7Ljs2HHpqvRFCeOBGZ89wtLFD",
          alt: "Psicomotricidad Maternal",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Estimulación Rítmica y Cantos Infantiles",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDvpd8NsGUx_lcKnganIvcjRr6uEPQL2ArHu1uF_Ezvxa6jcX7OWDrTjJbvOX9DEZAHK2q6rv_0N7iH-u-zZC7VWLMqRKnLBUE_3sprVJp6IaSAp63QijU4AFZ4J6CJsXJ38d40cgVAEZQi1JIDnUlxQL_QGoA33XeWKpa3CLuQ6xVMePfkvotJGjQ2WLzkc01kvQjQb1xJADYpurfSfk6aF6N7uQ8pqlpfrT63sLe2T5gnAVyP7X4J",
          alt: "Música Maternal",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Construcción con Bloques y Encastres",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBs6OQM42L6HoaYsv0XCk4wUgHZft7ccO_kI3Y5k3Hcr2n1viwiRjEVeHzwnsDhlk740XHlNFH_1g2fS77tIYF33h4Az1igh3dcGo5o1wiriyfQ6_yOv_bBuEpoJ0tWZEASh3_pSBkrKaQr_pTr0L0VJ-rne58rk-11IlyM7N4fHN8z_6sSHEPdcvWEuLKIchI4H_9KzEKCm8YRKfHskDuYDsuPEE03iOn8DZgyITdkaGcGnjqPqPtP_a-zs6pPftG52Q",
          alt: "Bloques Maternal",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Rincón de Lectura Afectiva y Apego Seguro",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1UpLLOfVZwJcc-fQrsMgrnLTlsEmUMlU6ExBT1lWc8FPMcavLFIbbdVB7vyUIS9ftb9XcB4FuKpagfTe_l8C9-vCoqjEFKaDzG51We4UjHJAX-AWbrxw5oMDRfruMqXUFhg0fhSpQ899A7peKRx4eFYwIAmDwlqRlpqk565a7f9Eov9l4jkpAS9G0SbsGiD6ohHGuRDBDPENQ4efk41gwVDKAGDQCWNgqPOgP0iIu99HGs96jMtXtBAGr4",
          alt: "Lectura Afectiva Maternal",
        },
      ],
      // Página 2 (6 fotos)
      [
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Gimnasio de Psicomotricidad Temprana",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB2NYkrk25gtGb1OBiiu45_4xKQOU1Xo0ddzjUIATrDja6JwQTJ8OZ1aUYmmLj8Kl2mpDZqCZuiC0CtzATfzCqYYmX4JzEtQnVzrQCETd8irkNxw_LHpWKByVs9zLdnpnmp7fkXX1JNW8mimVqxy6moRjp8bvB56zrCGEfxBYM9WMnKASl4_StpyPVcwp_mcT4I1abc_W9UXEYv78m56eLzyzV8JUHNfd5XVxsrN_MbcBl06MoBAGYs",
          alt: "Psicomotricidad Temprana",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Ambiente Adaptado y Seguro a su Escala",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBBHV2O2ErEGQMhL_Qea0nzgOMek4cH28X2xFVtqDP__Qrf5P3dVBwdw_r7VVo_xvbjsIzQPt8OMhEW74a3QjTh_kECkoy8N-oO4yiubaxvMDllniAJtaCU88gN-uxXgqCYDApE9-GraVpks8mIKyHP_KejxQjPlI4Z74NXvcyWI2zqTt5s_PV20jpRN-FVYKUD5FPfEQG0p_jOjpsxL4ZGfldPOFFxf7A66-zskECqirqaL2lLvqB2",
          alt: "Ambiente Adaptado",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Socialización y Primeros Vínculos de Amistad",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCa6bR31FScB4seYQAvfL_oPnd_MyXWXPbwTlLH7DsQ6MMJdmEx2IwOHkz6ECq0puteTac3mwR-zZWwiefEE995yarkFYwkmVG22Maud-pVzwUFQyvOne4-YroCjO5lD97vPAg6C5ST_mdbxoiHve3zvoRkzB0OjTiG29f9cFcu2SLKgi1JbAhspDjWjdNFZXQQRtGO0liar9z2E_COg3qoPkhuI0YR5STBbLbW3DKhY4TbP3YIVC4Z",
          alt: "Primeros Vínculos",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Rutinas Saludables y Bienestar Emocional",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Vg96NgEwDzyFjum7DIsMUKcDTRK9Ioz0RzIHxY2B5Sis5PLvd6chw1WX9FoLG3__Nm9Ko_dO1OvQpvHsX1e8sHQQfUlqzHSp9Xhg3eX-fZAJ2bYxbxcwKHw7MS9aujATiey9cUXILZe3qU0ruYu_JMyTM9iKfToPVbj6jOSMTerKSanxUg6Lys_7jw2nLVdoBSRu93bjvK0fclKH1NR6tVvchPpXrVmFfQ1D32cJUmzs1wo8l2Db8CTg",
          alt: "Rutinas y Bienestar",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Desarrollo Cognitivo y Motriz Guiado",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WcxChqsdHHGmXHi83hOJvI-sZbK8DmPOJwNTekxglQSX_ePDyrYjgQdPdvg5hb3k84pj-pl9D_IFnjIfwiRINg0Ah892FM8R_T0_vXMoQzo2aCO32_ElUjL4kO9Jt5pNPEOrnu_-WekCmW3SPtas_3IJpPaIQfsxkv1_UTCmTOmeNKtRUAEAxupVapwCHeHHiGUNWu0AL4DvoaODjw5yfeGRnSy-I0FDnSLraih5oS1kyEZWuC3BdoMRg",
          alt: "Desarrollo Guiado",
        },
        {
          badge: "Maternal",
          badgeBg: "bg-[#0A1128]/80",
          title: "Acompañamiento Amoroso y Cuidado Integral",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBv22vsS_tksxGdKTCU8_tp_KwTRVHi5K_JQS70rF5iT8-ArJVGVxHySZiAMVtxdtG03yQKSeZqrsqKkzh8n3w1MWtDXMDaL0FVG3yrniouEAO-kzjSRQAqcjF4QS-FXYvSTfmTp0ZbCOKw4GIKsghX8DMKBGfMyo1MtX99MJ5EmvqaPY-BsHlFhJpIkiHeW6wEjXcvNApHFWffpl2Z5lyXWVXRrGcunWSPBz0LUedlETTIfIbM2rp1",
          alt: "Acompañamiento Amoroso",
        },
      ],
    ],
  },
  {
    id: "preescolar",
    name: "Preescolar",
    icon: "toys",
    subtitle: "Preescolar — Bilingüismo Natural AMCO & Curiosidad Activa",
    pages: [
      // Página 1 (6 fotos)
      [
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Inmersión Bilingüe Dinámica AMCO",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
          alt: "Inmersión Bilingüe AMCO",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Lectoescritura Inicial Fonética Divertida",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WEkywM1dCUfkQw6IGGd8loUL6ZUijoufDtn0AC6ILxPQ765AbYxGd8wL88ijzhKcVoThfcADutSzyzovJoIDg-NfjuP55ep2o2RY9AmUZMYOuDqp7gKh0eDQ2eS7OohYj9KXfX1FjzxgRicBooSrZsL91D3vP_TQ9uov97pJj2Fo6fRRd4i_sDmaX3mfTHXQde1t5zZlYCMagLclui2N6lyeCpCIdKn1iSwTmfycqMficONqhB1ixux1Y",
          alt: "Lectoescritura Inicial",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Iniciación a las Ciencias y Proyectos STEAM",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WnjnAAqxww6xqK8GFdCTlqGHCW98swCrss2JAD-1tt19BDvZChqC9eNxZ5gtxjqrxLyS0ZiYrWs1g7RwKM6Y0sIY99lU_ofJPpXk1JoyqJ2yME18XZDPOQgvh_qBq5aBhT7dPB0-ZB3y7AyNoBkoPDZtn8eSg0Q-dzgj3C_F-GsV9_rspYD7RIYJxBj-DWIq1Q8Gi-sxlXQNU6vUdNZbnw7iQqG9uBCjV1kv5zwrEUZObcuOSlkqUqqwU",
          alt: "Iniciación STEAM",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Atelier Artístico Infantil y Expresión Libre",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Ag3jatczZGX-NDdxAhxeOVMr2iW2RNX65of2LgIjUSPsM8XKlnctv6n8wSuLnMb0OLHVpjpzZO-KgsEa-7rpjoCrTYtptaCi4TdH9itwJkfCLya7eMAOxno37vbprykSxFZGyHpnhEpYDdTAmhCG-IT0ObSJoeLS9H4IToMMajNoCILKgmaz7L8xv7VMaNvSpxA0R5hCLvBkZ51Wlo2-OlpU19Ev5XYvJpdl6zoRMe4cGrcb4Fe68V_1foWgYqwGzA",
          alt: "Atelier Artístico Preescolar",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Recreo Inteligente y Parques Infantiles Seguros",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAqpW_cpRFDdVwYseRDeS6w2-s7lpe1Bpnm5yLKg7RaUMvtK-QIinWOiMs__kIXDKdC63RJF48Svfi1tdE0fB1iQ0NL3E3Dr1-hXVnxGlGMmESYo1ZSr00sasutS2enpna-bWSBoTgMJXUzTV8YpL_coICRoNhvziCj6yDow1bVa5NCHaBuQoyQ97KAJySpb6_HAnvkZpLYSPfZpFKJlTufutq5Aq_yN4mB6nuyt4cjv44NXdxkT_DNWo7_70FDIe2KcQ",
          alt: "Recreo Inteligente",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Iniciación al Violín y Percusiones Rítmicas",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCs3GY2N3sk7i87toLuPqaNPzmHGAgp-2EJKDp43CEiyceMaDwaqFEUO7SRc8z_bczVD0GYfpUFVvV8GNHVhRsssmmYaIb10XHSAoXrPWXvngB4Iw0yfy6-j7acdfpU2ErWY42DEf5EVcKpWR4z1lEJja5Gul6o4pa-TglDHy7bF67HkVpi9KDoUcQAZV3Q3itR_2zwW_rKPZloGzf5Qya2_9_R-Wj_X0CvMf6rVXJj28xJ-qIX4cBHmtsqJurmxtqE9Q",
          alt: "Iniciación Musical",
        },
      ],
      // Página 2 (6 fotos)
      [
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Pensamiento Lógico-Matemático en Acción",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
          alt: "Pensamiento Matemático",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Exploración de la Naturaleza y Espacios Verdes",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
          alt: "Exploración Naturaleza",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Actividades de Motricidad Gruesa y Juegos de Equipo",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WcxChqsdHHGmXHi83hOJvI-sZbK8DmPOJwNTekxglQSX_ePDyrYjgQdPdvg5hb3k84pj-pl9D_IFnjIfwiRINg0Ah892FM8R_T0_vXMoQzo2aCO32_ElUjL4kO9Jt5pNPEOrnu_-WekCmW3SPtas_3IJpPaIQfsxkv1_UTCmTOmeNKtRUAEAxupVapwCHeHHiGUNWu0AL4DvoaODjw5yfeGRnSy-I0FDnSLraih5oS1kyEZWuC3BdoMRg",
          alt: "Motricidad y Juegos",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Desarrollo de Habilidades Socioemocionales",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
          alt: "Socioemocional",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Rincón Sensorial y Proyectos Colaborativos",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Ag3jatczZGX-NDdxAhxeOVMr2iW2RNX65of2LgIjUSPsM8XKlnctv6n8wSuLnMb0OLHVpjpzZO-KgsEa-7rpjoCrTYtptaCi4TdH9itwJkfCLya7eMAOxno37vbprykSxFZGyHpnhEpYDdTAmhCG-IT0ObSJoeLS9H4IToMMajNoCILKgmaz7L8xv7VMaNvSpxA0R5hCLvBkZ51Wlo2-OlpU19Ev5XYvJpdl6zoRMe4cGrcb4Fe68V_1foWgYqwGzA",
          alt: "Rincón Sensorial",
        },
        {
          badge: "Preescolar",
          badgeBg: "bg-[#557EBD]",
          title: "Presentaciones Infantiles y Expresión Bilingüe",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WEkywM1dCUfkQw6IGGd8loUL6ZUijoufDtn0AC6ILxPQ765AbYxGd8wL88ijzhKcVoThfcADutSzyzovJoIDg-NfjuP55ep2o2RY9AmUZMYOuDqp7gKh0eDQ2eS7OohYj9KXfX1FjzxgRicBooSrZsL91D3vP_TQ9uov97pJj2Fo6fRRd4i_sDmaX3mfTHXQde1t5zZlYCMagLclui2N6lyeCpCIdKn1iSwTmfycqMficONqhB1ixux1Y",
          alt: "Expresión Bilingüe",
        },
      ],
    ],
  },
  {
    id: "primaria",
    name: "Primaria",
    icon: "school",
    subtitle: "Primaria — Pensamiento Crítico STEAM, Bilingüismo y Liderazgo",
    pages: [
      // Página 1 (6 fotos)
      [
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Laboratorio STEAM y Programación con Tablets",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
          alt: "Laboratorio STEAM Primaria",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Campus Digital y Aulas Interactivas Multimedia",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
          alt: "Campus Digital",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Certificaciones Internacionales de Inglés AMCO",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1VO1ILPSwD8_9SmTF-7xbOohmLZIjN977Oz-9m9rImzQQ7O3g27XSVAncjdu8l92pMGVuQXrdXHUyLRUqRsMK13rY3wHFQ1rcs8kEiq49zIoFFDT7VplxhSpIMmBl59uRDn6GyjFRsUk9dMJQ2AHqI5SJNu07DGGN-VJKDAO5IpJ-np1E1s4DuzhHXD6Llcrp_eBDkhhYk_QANQCACIj_wCIK_eczGT76inqzRkC91BzWiv0NxDyH1hDfY",
          alt: "Certificaciones AMCO Primaria",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Orquesta Escolar, Música Instrumental y Ensambles",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
          alt: "Orquesta Escolar Primaria",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Feria de Ciencias y Pensamiento Analítico",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wg91R-_7d_4UpoQBmWkLnpxDrUs4-GRc3wotLoVx2uVwZoW5OXZLeN_pJmFZfLALOnvh2VcHpFG5X1BAm6FJHhV8Axlpsq-zEgfaIBDV4V712pv88NY8yRbhbuSwD0lPWvJ2pIP1wrG5yEJkl-nCfEL56Z48o_j0T5nsy52tt7Da0qv6F411ASwHM_c-ZkpN-5JbNVDOBDN2idE0tcwuAhXS_uHTnhA3d2dauzB6jU_AmecP95BhteEbI",
          alt: "Feria de Ciencias",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Club de Debate, Pensamiento Crítico y Liderazgo",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDdr305AZc30Zq6yJSlu1wDXClCZnjshiwoJ52XJESqQD0iUri0xknBeT-GKMiGZi1kgU3nFLIx3timKyEhAawvcKqZAfZm0jBeJ6qPhz96rGuKOw2Bba9mbUQzY0cHaXL7MEFOevKxUEI5CWODfK31joyXQOI-_r8lXq99xmBxrgLsj2wCtp6pGWJuYCWjHK9WW7NVmB8aa0IYbwRDun5VZbf4te0cIPXQTycwGANSqY7Au6Dax-Qi",
          alt: "Club de Debate Primaria",
        },
      ],
      // Página 2 (6 fotos)
      [
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Proyectos STEAM y Robótica Educativa",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
          alt: "Robótica Primaria",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Biblioteca Activa e Investigación Guiada",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
          alt: "Biblioteca Primaria",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Inteligencia Artificial y Alfabetización Digital",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wg91R-_7d_4UpoQBmWkLnpxDrUs4-GRc3wotLoVx2uVwZoW5OXZLeN_pJmFZfLALOnvh2VcHpFG5X1BAm6FJHhV8Axlpsq-zEgfaIBDV4V712pv88NY8yRbhbuSwD0lPWvJ2pIP1wrG5yEJkl-nCfEL56Z48o_j0T5nsy52tt7Da0qv6F411ASwHM_c-ZkpN-5JbNVDOBDN2idE0tcwuAhXS_uHTnhA3d2dauzB6jU_AmecP95BhteEbI",
          alt: "Inteligencia Artificial Primaria",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Concursos Académicos y Trabajo en Equipo",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1VO1ILPSwD8_9SmTF-7xbOohmLZIjN977Oz-9m9rImzQQ7O3g27XSVAncjdu8l92pMGVuQXrdXHUyLRUqRsMK13rY3wHFQ1rcs8kEiq49zIoFFDT7VplxhSpIMmBl59uRDn6GyjFRsUk9dMJQ2AHqI5SJNu07DGGN-VJKDAO5IpJ-np1E1s4DuzhHXD6Llcrp_eBDkhhYk_QANQCACIj_wCIK_eczGT76inqzRkC91BzWiv0NxDyH1hDfY",
          alt: "Trabajo en Equipo",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Educación Física y Deportes Formativos",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBFiSn5VW59BlYnbJlo93YQO4iAAjY8sY7ASTfcrg7v7KNDYpePD0RhlBNbxwtki-QVmldTP-gJWBdi8lVWLJc0yTxNQY4oU-dRYRLGtW1GkbLsheVJd4T-dHVo8Zc3Bd-_Ip96k5qWY1E9R3o5adGXYjzGmm5ozCjaTYK1ArjMnkRc7niGzP6hudoNvyBEf89eLYRBEbQSShvxEchxrnqvRM8dvMQKlBmU8jjqIsBQWPJlEtpxyF1Y",
          alt: "Deportes Primaria",
        },
        {
          badge: "Primaria",
          badgeBg: "bg-[#DA474A]",
          title: "Desarrollo Integral y Valores para la Vida",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDdr305AZc30Zq6yJSlu1wDXClCZnjshiwoJ52XJESqQD0iUri0xknBeT-GKMiGZi1kgU3nFLIx3timKyEhAawvcKqZAfZm0jBeJ6qPhz96rGuKOw2Bba9mbUQzY0cHaXL7MEFOevKxUEI5CWODfK31joyXQOI-_r8lXq99xmBxrgLsj2wCtp6pGWJuYCWjHK9WW7NVmB8aa0IYbwRDun5VZbf4te0cIPXQTycwGANSqY7Au6Dax-Qi",
          alt: "Valores Primaria",
        },
      ],
    ],
  },
  {
    id: "taekwondo",
    name: "Taekwondo",
    icon: "sports_martial_arts",
    subtitle: "Taekwondo — Disciplina Marcial, Formación del Carácter y Respeto",
    pages: [
      // Página 1 (6 fotos)
      [
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Dojang Profesional de Tae Kwon Do Everest",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Vegy8i6vuay10D7wMMWM0js_NUz8mCTf5S71aPI7ZeZenL7SwcXrOkUNbFxylalfdXEAhtP5_qOgFcMMBBE-xXYy3mNk93H2ZKr7O61RPcafXN_JK4X_70IU5cdPTidxsoQLFp23JJbyJkVOLUfA_FRb-TNULarJ4fQRdm4Noytv9ciL8ezOTvq1ZfnbsO8zSye6jb-IlSFndiruWXc4CYQXnEIqjPoxmi-DodkRA6TkyJu6OCpIY_3no",
          alt: "Dojang Profesional Tae Kwon Do",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Entrenamiento Formativo y Coordinación Física",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
          alt: "Entrenamiento Marcial",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Técnicas de Pateo, Elasticidad y Concentración",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Vegy8i6vuay10D7wMMWM0js_NUz8mCTf5S71aPI7ZeZenL7SwcXrOkUNbFxylalfdXEAhtP5_qOgFcMMBBE-xXYy3mNk93H2ZKr7O61RPcafXN_JK4X_70IU5cdPTidxsoQLFp23JJbyJkVOLUfA_FRb-TNULarJ4fQRdm4Noytv9ciL8ezOTvq1ZfnbsO8zSye6jb-IlSFndiruWXc4CYQXnEIqjPoxmi-DodkRA6TkyJu6OCpIY_3no",
          alt: "Pateo y Elasticidad",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Exámenes de Grado y Ascenso de Cintas",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
          alt: "Examen de Cintas",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Valores Marciales: Respeto, Honor y Constancia",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
          alt: "Valores Marciales",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Exhibición Marcial y Torneos Intercolegiales",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
          alt: "Torneos y Exhibición",
        },
      ],
      // Página 2 (6 fotos)
      [
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Formas Poomsae y Precisión Técnica",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Vegy8i6vuay10D7wMMWM0js_NUz8mCTf5S71aPI7ZeZenL7SwcXrOkUNbFxylalfdXEAhtP5_qOgFcMMBBE-xXYy3mNk93H2ZKr7O61RPcafXN_JK4X_70IU5cdPTidxsoQLFp23JJbyJkVOLUfA_FRb-TNULarJ4fQRdm4Noytv9ciL8ezOTvq1ZfnbsO8zSye6jb-IlSFndiruWXc4CYQXnEIqjPoxmi-DodkRA6TkyJu6OCpIY_3no",
          alt: "Poomsae Everest",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Acondicionamiento y Fortaleza Física",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
          alt: "Acondicionamiento",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Combate Formativo con Protección Certificada",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Vegy8i6vuay10D7wMMWM0js_NUz8mCTf5S71aPI7ZeZenL7SwcXrOkUNbFxylalfdXEAhtP5_qOgFcMMBBE-xXYy3mNk93H2ZKr7O61RPcafXN_JK4X_70IU5cdPTidxsoQLFp23JJbyJkVOLUfA_FRb-TNULarJ4fQRdm4Noytv9ciL8ezOTvq1ZfnbsO8zSye6jb-IlSFndiruWXc4CYQXnEIqjPoxmi-DodkRA6TkyJu6OCpIY_3no",
          alt: "Combate Formativo",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Compañerismo, Fraternidad y Espíritu Deportivo",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
          alt: "Espíritu Deportivo",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Instrucción de Maestros Cintas Negras Certificados",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
          alt: "Maestros Certificados",
        },
        {
          badge: "Taekwondo",
          badgeBg: "bg-[#0A1128]/80",
          title: "Confianza, Autocontrol y Superación Personal",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
          alt: "Autocontrol y Superación",
        },
      ],
    ],
  },
  {
    id: "arte",
    name: "Arte",
    icon: "palette",
    subtitle: "Arte — Creatividad Plástica, Pintura y Sensibilidad Estética",
    pages: [
      // Página 1 (6 fotos)
      [
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Taller de Pintura y Expresión Artística",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Ag3jatczZGX-NDdxAhxeOVMr2iW2RNX65of2LgIjUSPsM8XKlnctv6n8wSuLnMb0OLHVpjpzZO-KgsEa-7rpjoCrTYtptaCi4TdH9itwJkfCLya7eMAOxno37vbprykSxFZGyHpnhEpYDdTAmhCG-IT0ObSJoeLS9H4IToMMajNoCILKgmaz7L8xv7VMaNvSpxA0R5hCLvBkZ51Wlo2-OlpU19Ev5XYvJpdl6zoRMe4cGrcb4Fe68V_1foWgYqwGzA",
          alt: "Taller de Pintura",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Modelado en Barro, Escultura y Texturas",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WcxChqsdHHGmXHi83hOJvI-sZbK8DmPOJwNTekxglQSX_ePDyrYjgQdPdvg5hb3k84pj-pl9D_IFnjIfwiRINg0Ah892FM8R_T0_vXMoQzo2aCO32_ElUjL4kO9Jt5pNPEOrnu_-WekCmW3SPtas_3IJpPaIQfsxkv1_UTCmTOmeNKtRUAEAxupVapwCHeHHiGUNWu0AL4DvoaODjw5yfeGRnSy-I0FDnSLraih5oS1kyEZWuC3BdoMRg",
          alt: "Modelado y Escultura",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Galería de Exposición de Obras Estudiantiles",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
          alt: "Galería de Arte Everest",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Teoría del Color, Acuarelas y Pinceladas",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
          alt: "Acuarelas y Color",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Técnicas Mixtas, Grabado y Collages Creativos",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
          alt: "Técnicas Mixtas",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Muralismo Colectivo y Expresión Libre",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WEkywM1dCUfkQw6IGGd8loUL6ZUijoufDtn0AC6ILxPQ765AbYxGd8wL88ijzhKcVoThfcADutSzyzovJoIDg-NfjuP55ep2o2RY9AmUZMYOuDqp7gKh0eDQ2eS7OohYj9KXfX1FjzxgRicBooSrZsL91D3vP_TQ9uov97pJj2Fo6fRRd4i_sDmaX3mfTHXQde1t5zZlYCMagLclui2N6lyeCpCIdKn1iSwTmfycqMficONqhB1ixux1Y",
          alt: "Muralismo Colectivo",
        },
      ],
      // Página 2 (6 fotos)
      [
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Dibujo Artístico y Proporciones Visuales",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Ag3jatczZGX-NDdxAhxeOVMr2iW2RNX65of2LgIjUSPsM8XKlnctv6n8wSuLnMb0OLHVpjpzZO-KgsEa-7rpjoCrTYtptaCi4TdH9itwJkfCLya7eMAOxno37vbprykSxFZGyHpnhEpYDdTAmhCG-IT0ObSJoeLS9H4IToMMajNoCILKgmaz7L8xv7VMaNvSpxA0R5hCLvBkZ51Wlo2-OlpU19Ev5XYvJpdl6zoRMe4cGrcb4Fe68V_1foWgYqwGzA",
          alt: "Dibujo Artístico",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Arte con Materiales Reciclados y Sustentabilidad",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WcxChqsdHHGmXHi83hOJvI-sZbK8DmPOJwNTekxglQSX_ePDyrYjgQdPdvg5hb3k84pj-pl9D_IFnjIfwiRINg0Ah892FM8R_T0_vXMoQzo2aCO32_ElUjL4kO9Jt5pNPEOrnu_-WekCmW3SPtas_3IJpPaIQfsxkv1_UTCmTOmeNKtRUAEAxupVapwCHeHHiGUNWu0AL4DvoaODjw5yfeGRnSy-I0FDnSLraih5oS1kyEZWuC3BdoMRg",
          alt: "Arte Sustentable",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Apreciación del Arte Universal e Historia",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
          alt: "Apreciación del Arte",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Técnicas de Ilustración y Creación Gráfica",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
          alt: "Ilustración Infantil",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Exploración de Texturas y Sensibilidad Visual",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
          alt: "Exploración Sensorial",
        },
        {
          badge: "Arte",
          badgeBg: "bg-[#2E9F6E]",
          title: "Exposición Anual para Familias de Campus León",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WEkywM1dCUfkQw6IGGd8loUL6ZUijoufDtn0AC6ILxPQ765AbYxGd8wL88ijzhKcVoThfcADutSzyzovJoIDg-NfjuP55ep2o2RY9AmUZMYOuDqp7gKh0eDQ2eS7OohYj9KXfX1FjzxgRicBooSrZsL91D3vP_TQ9uov97pJj2Fo6fRRd4i_sDmaX3mfTHXQde1t5zZlYCMagLclui2N6lyeCpCIdKn1iSwTmfycqMficONqhB1ixux1Y",
          alt: "Exposición Anual de Arte",
        },
      ],
    ],
  },
  {
    id: "teatro",
    name: "Teatro",
    icon: "theater_comedy",
    subtitle: "Teatro — Expresión Escénica, Seguridad Personal y Oratoria",
    pages: [
      // Página 1 (6 fotos)
      [
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Taller de Dramatización y Expresión Escénica",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
          alt: "Taller de Dramatización",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Seguridad Escénica, Dicción y Proyección de Voz",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDdr305AZc30Zq6yJSlu1wDXClCZnjshiwoJ52XJESqQD0iUri0xknBeT-GKMiGZi1kgU3nFLIx3timKyEhAawvcKqZAfZm0jBeJ6qPhz96rGuKOw2Bba9mbUQzY0cHaXL7MEFOevKxUEI5CWODfK31joyXQOI-_r8lXq99xmBxrgLsj2wCtp6pGWJuYCWjHK9WW7NVmB8aa0IYbwRDun5VZbf4te0cIPXQTycwGANSqY7Au6Dax-Qi",
          alt: "Dicción y Oratoria",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Caracterización, Vestuario y Creación de Personajes",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
          alt: "Caracterización y Personajes",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Ensayos Generales y Trabajo en Equipo Escénico",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
          alt: "Ensayos Generales",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Improvisación, Dinámicas Teatrales y Empatía",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
          alt: "Dinámicas Teatrales",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Festival de Teatro Escolar y Presentaciones con Público",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
          alt: "Festival de Teatro Everest",
        },
      ],
      // Página 2 (6 fotos)
      [
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Obras Bilingües en Inglés y Español",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Urn-CEP0EfE82HddbtWq4UO3L6nHR_NqsG0P7Uax8E4tygoncTxpscuB00L3Ih4S4LD-7Q2SnFHCUVswELndFqm_1brX8f_HPRWC_gzSWkeVBFZupJs-RU63gEhI_adHOmwb3XiEW1OB8tk0q0IN04TdRBwn7-_z-Umq_-Q-gsecWK7s9zUW-ppWQXyRKazwzbsuFzBpPEDas2DuAGWzFbhjUEa8YIsBd4TwXmPIKvPty9w8I0ODUGl64",
          alt: "Obras Bilingües",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Montajes Escénicos Musicales Infantiles",
          imgSrc:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDdr305AZc30Zq6yJSlu1wDXClCZnjshiwoJ52XJESqQD0iUri0xknBeT-GKMiGZi1kgU3nFLIx3timKyEhAawvcKqZAfZm0jBeJ6qPhz96rGuKOw2Bba9mbUQzY0cHaXL7MEFOevKxUEI5CWODfK31joyXQOI-_r8lXq99xmBxrgLsj2wCtp6pGWJuYCWjHK9WW7NVmB8aa0IYbwRDun5VZbf4te0cIPXQTycwGANSqY7Au6Dax-Qi",
          alt: "Musicales Infantiles",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Títeres, Guiñol y Cuentos Representados",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1Wx4A_yiAni49w4yrMD7HtmbewT4IAYEHJhsJ_yDymo9Nben7jEabxD0KpPaqQRaszzXAr8OEq-zywrJ1xTIKXOTjgJiOPauZfi87kelg4_bRxypaQmApv_pmZ-C9g8FvBXRX1Gzx0nxyGzmwmGcQZyjDpz2Y5H57U8OkYh7IpwI4sN8PNjjbluiPNIRLEC0APNMlA4n1eN3tNyJp23YL8JMxlXKDhj9-8V_IbmW3Zwci2ibQJw2dVk-6s",
          alt: "Títeres y Guiñol",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Expresión Corporal y Presencia en Escenario",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1V1UiwLO8PFuE-fMENr1TQNz08UMeB7yUEhxNGyA2eZ4axpe6wPPW8SI0YjbTktRspwAMH7weCtfsF0S0RdIxcl6YQSTPUPXN2Usu8vCdjLkEzp7zzEh53GhW59LR6RLx4GlfFFCqhD7Cu2xrn0sSt--MOkY8v0K1sR2Ug2bnjMemb56EDis4LN-bxzBLGULI4QyhhZZrW3BSVuztMcCDuvAb_YI-ZE2YufL-_1EGOVOXT6UnuvTXmO1A",
          alt: "Expresión Corporal",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Creación de Escenografía y Utilería Teatral",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1W6rZb1Pl4OT83miM2x9WqY2F2c-1KwY4hYY7CSS_uKgmBVu32-3QWWJs0LnT315sOa1MhYf1Up4niz-xW4LJEwjKf7CNEz9TCzqpgZ_zv_zTHL4Uv7KtuPHSuXRnAf3vlNlzK2xi8_En1-ri-13KrMgPiOfbfQZs9n9TrWbmJ6yEgyKoj8_aEmvbaQfau8IDWsDMOJD3jWqFL9SCkQxbvYGWQuNuY9zGtpt2B9dIbG3oi-HgHWTaDwN9I",
          alt: "Escenografía y Utilería",
        },
        {
          badge: "Teatro",
          badgeBg: "bg-[#E5A93C]",
          title: "Aclamaciones, Aplausos y Crecimiento Artístico",
          imgSrc:
            "https://lh3.googleusercontent.com/aida/AEtjO1WCcDiezrR-5URfEUBYR2yVqsuRLZSoq1PoXTH52Ib3aJjPxT3wbTPQ9xfFE8jk7rAjtsXohODvMnJ7TlVT7l1i5DMhGFPpwD5Q_VSNb2VuS8CJMxlaAR-KU6Zn-5jSrG3lw698u0niRdEwc-hFYjOzCi7PzgygmdQIQRjaHQTpCVAQ_krm6i5Zq0QsX7M5UyQDLD8pUCpZTDj7Mnqt-zGcRKbFNRgQqr4pU40LZL5lF3i5z5ulQpzowQ4",
          alt: "Crecimiento Artístico",
        },
      ],
    ],
  },
];

export function GaleriaCollage() {
  const [selectedThemeIdx, setSelectedThemeIdx] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageDirection, setPageDirection] = useState<1 | -1>(1);

  const activeTheme = THEMES[selectedThemeIdx];
  const totalPages = activeTheme.pages.length;
  const currentItems = activeTheme.pages[currentPage] || activeTheme.pages[0];

  const handleSelectTheme = (idx: number) => {
    if (idx === selectedThemeIdx) return;
    setSelectedThemeIdx(idx);
    setCurrentPage(0);
    setPageDirection(1);
  };

  const handlePrevPage = () => {
    setPageDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNextPage = () => {
    setPageDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handleSelectPage = (targetPage: number) => {
    if (targetPage === currentPage) return;
    setPageDirection(targetPage > currentPage ? 1 : -1);
    setCurrentPage(targetPage);
  };

  return (
    <div className="w-full bg-[#F8FAFC] font-sans text-slate-800 antialiased min-h-screen pt-28 pb-16 selection:bg-[#557EBD]/20 selection:text-[#546FAC]">
      <div className="w-full max-w-[98%] xl:max-w-[1360px] mx-auto px-2 sm:px-4 md:px-5 pt-8 sm:pt-12">
        {/* Encabezado de Galería & Filtros por tema */}
        <div className="px-1 sm:px-2 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#557EBD]/10 text-[#0A1128] text-xs font-semibold tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0A1128] animate-pulse" />
              Vida en Campus León
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 font-headline">
              Galería
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-xl">
              Explora momentos significativos de nuestra comunidad escolar y actividades formativas en Campus León.
            </p>
          </div>

          {/* Selector de los 6 temas: uno a lado del otro debajo del texto */}
          <div
            className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5 select-none"
            id="category-filters"
          >
            {THEMES.map((cat, idx) => {
              const isActive = idx === selectedThemeIdx;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectTheme(idx)}
                  className={`category-btn px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "shadow-md bg-[#0A1128] text-white shadow-[#0A1128]/25"
                      : "border border-slate-200 bg-white text-slate-600 hover:text-[#0A1128] hover:border-[#0A1128]/40"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] shrink-0">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Collage de Galería: Sólo imágenes del tema seleccionado */}
        <div className="relative w-full rounded-2xl bg-slate-100/70 border border-slate-200/80 shadow-sm p-1 overflow-hidden">
          <AnimatePresence mode="wait" custom={pageDirection}>
            <motion.div
              key={`${activeTheme.id}-page-${currentPage}`}
              custom={pageDirection}
              initial={{ opacity: 0, x: pageDirection * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: pageDirection * -40 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-1 sm:gap-1.5"
            >
              {/* Slot 0: Superior Izquierda Grande (Col-8) */}
              {currentItems[0] && (
                <div className="md:col-span-8 h-64 sm:h-[300px] md:h-[330px] rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm">
                  <img
                    alt={currentItems[0].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={currentItems[0].imgSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-0.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-white ${currentItems[0].badgeBg} rounded-md`}
                      >
                        {currentItems[0].badge}
                      </span>
                      <p className="text-white font-medium text-sm sm:text-base tracking-tight">
                        {currentItems[0].title}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Slot 1: Superior Derecha (Col-4) */}
              {currentItems[1] && (
                <div className="md:col-span-4 h-64 sm:h-[300px] md:h-[330px] rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm">
                  <img
                    alt={currentItems[1].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={currentItems[1].imgSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-0.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-white ${currentItems[1].badgeBg} rounded-md`}
                      >
                        {currentItems[1].badge}
                      </span>
                      <p className="text-white font-medium text-sm">{currentItems[1].title}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Slot 2: Inferior Izquierda (Col-4) */}
              {currentItems[2] && (
                <div className="md:col-span-4 h-80 sm:h-[350px] md:h-[380px] rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm">
                  <img
                    alt={currentItems[2].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={currentItems[2].imgSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-0.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-white ${currentItems[2].badgeBg} rounded-md`}
                      >
                        {currentItems[2].badge}
                      </span>
                      <p className="text-white font-medium text-sm">{currentItems[2].title}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Col-5 con dos slots apilados verticalmente (Slots 3 y 4) */}
              <div className="md:col-span-5 flex flex-col gap-1 sm:gap-1.5 h-80 sm:h-[350px] md:h-[380px]">
                {/* Slot 3: Centro Superior */}
                {currentItems[3] && (
                  <div className="h-1/2 w-full rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm">
                    <img
                      alt={currentItems[3].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src={currentItems[3].imgSrc}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <div>
                        <span
                          className={`inline-block px-2 py-0.5 mb-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${currentItems[3].badgeBg} rounded`}
                        >
                          {currentItems[3].badge}
                        </span>
                        <p className="text-white font-medium text-xs sm:text-sm">{currentItems[3].title}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slot 4: Centro Inferior */}
                {currentItems[4] && (
                  <div className="h-1/2 w-full rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm">
                    <img
                      alt={currentItems[4].alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src={currentItems[4].imgSrc}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <div>
                        <span
                          className={`inline-block px-2 py-0.5 mb-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${currentItems[4].badgeBg} rounded`}
                        >
                          {currentItems[4].badge}
                        </span>
                        <p className="text-white font-medium text-xs sm:text-sm">{currentItems[4].title}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slot 5: Inferior Derecha (Col-3) */}
              {currentItems[5] && (
                <div className="md:col-span-3 h-80 sm:h-[350px] md:h-[380px] rounded-xl overflow-hidden relative group bg-slate-900 shadow-sm">
                  <img
                    alt={currentItems[5].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={currentItems[5].imgSrc}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-0.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-white ${currentItems[5].badgeBg} rounded-md`}
                      >
                        {currentItems[5].badge}
                      </span>
                      <p className="text-white font-medium text-sm">{currentItems[5].title}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carrusel Nav & Controles de paginación del tema activo */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0A1128]/10 text-[#0A1128] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">{activeTheme.icon}</span>
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block">
                Galería — {activeTheme.name}
              </span>
              <span className="text-sm font-bold text-slate-800">
                {activeTheme.subtitle}
              </span>
            </div>
          </div>

          {/* Controles de paginación dentro del mismo tema */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Contador de páginas del tema */}
            <div className="flex items-center font-mono text-sm px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold tracking-wider">
              <span className="text-[#0A1128] font-bold">0{currentPage + 1}</span>
              <span className="mx-1.5 text-slate-400">/</span>
              <span className="text-slate-500">0{totalPages}</span>
            </div>

            {/* Indicador de puntos (dots de página del tema activo) */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => {
                const isActive = idx === currentPage;
                return (
                  <button
                    key={idx}
                    aria-label={`Página ${idx + 1} de ${activeTheme.name}`}
                    onClick={() => handleSelectPage(idx)}
                    className={`dot-btn transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-6 h-2 rounded-full bg-[#0A1128]"
                        : "w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                );
              })}
            </div>

            {/* Flechas de paginación (muestran más fotos del mismo tema) */}
            <div className="flex items-center gap-2">
              <button
                aria-label={`Ver fotos anteriores de ${activeTheme.name}`}
                onClick={handlePrevPage}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm hover:border-[#0A1128] hover:text-[#0A1128] hover:shadow-md active:scale-90 transition-all duration-200 flex items-center justify-center text-slate-700 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">arrow_back</span>
              </button>
              <button
                aria-label={`Ver más fotos de ${activeTheme.name}`}
                onClick={handleNextPage}
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
