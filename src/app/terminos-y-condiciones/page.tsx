import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Instituto Everest León",
  description:
    "Consulta los Términos y Condiciones de uso del sitio web oficial y los lineamientos de servicios informativos y de admisiones de Instituto Everest Campus León.",
  alternates: {
    canonical: "/terminos-y-condiciones",
  },
  openGraph: {
    title: `Términos y Condiciones | ${SITE_CONFIG.name}`,
    description:
      "Términos y condiciones de uso del portal web, servicios digitales y procesos de admisión en Campus León.",
    url: `${SITE_CONFIG.url}/terminos-y-condiciones`,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Términos y Condiciones Instituto Everest León",
      },
    ],
  },
};

const SECTIONS = [
  { id: "identidad", title: "1. Identidad Institucional y Responsable" },
  { id: "objeto", title: "2. Objeto y Ámbito de Aplicación" },
  { id: "admisiones", title: "3. Proceso de Admisiones y Citas" },
  { id: "propiedad-intelectual", title: "4. Propiedad Intelectual y Marcas" },
  { id: "uso-portal", title: "5. Uso Adecuado del Portal Web" },
  { id: "datos-personales", title: "6. Datos Personales y Confidencialidad" },
  { id: "pagos-administrativos", title: "7. Lineamientos Administrativos y Pagos" },
  { id: "canales-digitales", title: "8. Atención por Canales Digitales y WhatsApp" },
  { id: "modificaciones", title: "9. Actualizaciones y Modificaciones" },
  { id: "jurisdiccion", title: "10. Jurisdicción y Legislación Aplicable" },
  { id: "contacto-legal", title: "11. Contacto para Aclaraciones" },
];

export default function TerminosYCondicionesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#f7f9fb]">
      {/* Header / Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#0A1128] via-[#101b3d] to-[#0A1128] text-white">
        {/* Glow Accents */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#557EBD]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-[#F6D448]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/70 mb-4 font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-[#F6D448]">Términos y Condiciones</span>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide bg-[#F6D448]/20 text-[#F6D448] border border-[#F6D448]/30">
                <span className="material-symbols-outlined text-[16px]">gavel</span>
                Marco Institucional & Legal
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                Campus León, Gto.
              </span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-4">
              Términos y Condiciones de Uso
            </h1>

            <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Lineamientos generales para la navegación, consulta informativa, solicitud de recorridos y trámites de admisión digital en el portal oficial de Instituto Everest León.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#F6D448]">calendar_today</span>
                Última actualización: Ciclo Escolar 2025 - 2026
              </span>
              <span>·</span>
              <span>Vigencia permanente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sidebar Sticky Index Navigation */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                <h2 className="font-headline text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#3b5692]">toc</span>
                  Índice de Secciones
                </h2>
                <nav className="space-y-1.5 text-xs">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-lg text-slate-600 hover:text-[#3b5692] hover:bg-slate-50 transition-colors font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="bg-[#FEF9E7] rounded-xl p-3.5 border border-[#F6D448]/30 text-xs text-slate-800">
                    <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[17px] text-[#F6D448]">help</span>
                      ¿Dudas sobre estos términos?
                    </p>
                    <p className="text-slate-600 mb-2 leading-relaxed">
                      El equipo administrativo está a tu disposición para orientarte de forma personalizada.
                    </p>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-1 font-bold text-[#3b5692] hover:underline"
                    >
                      Ir al Formulario de Contacto →
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Legal Content */}
            <article className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-10 text-slate-700 leading-relaxed font-body">
              {/* Alert Note */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-blue-950 flex items-start gap-3">
                <span className="material-symbols-outlined text-[22px] text-[#3b5692] shrink-0 mt-0.5">
                  info
                </span>
                <p>
                  Al acceder, navegar o utilizar este sitio web (<strong>{SITE_CONFIG.url}</strong>), los usuarios, padres de familia, tutores y aspirantes aceptan sujetarse plenamente a los presentes Términos y Condiciones. Te invitamos a leerlos con atención antes de enviar cualquier información o solicitud.
                </p>
              </div>

              {/* Section 1 */}
              <section id="identidad" className="space-y-3 pt-2">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">1.</span> Identidad Institucional y Responsable
                </h2>
                <p className="text-sm sm:text-base">
                  El presente sitio web es propiedad y está administrado por <strong>{SITE_CONFIG.name}</strong>, institución educativa particular con campus en {SITE_CONFIG.address.street}, {SITE_CONFIG.address.neighborhood}, C.P. {SITE_CONFIG.address.postalCode}, León, Guanajuato, México.
                </p>
                <p className="text-sm sm:text-base">
                  Instituto Everest ofrece servicios educativos integrales de carácter formativo para los niveles de <strong>Maternal</strong> (1 a 3 años), <strong>Preescolar Bilingüe</strong> (3 a 6 años) con metodología AMCO, <strong>Primaria Bilingüe</strong> (1° a 6° grado) con enfoque STEAM y robótica IMPACT IA, así como programa complementario de horario extendido y talleres extracurriculares.
                </p>
              </section>

              {/* Section 2 */}
              <section id="objeto" className="space-y-3">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">2.</span> Objeto y Ámbito de Aplicación
                </h2>
                <p className="text-sm sm:text-base">
                  El objeto principal de esta plataforma digital es poner al alcance de las familias información verídica, oportuna y detallada relativa a nuestra propuesta pedagógica, modelo educativo bilingüe, vida escolar, calendario de admisiones, convocatorias, y facilitar la comunicación directa con el Comité de Admisiones y la Dirección del plantel.
                </p>
                <p className="text-sm sm:text-base">
                  El uso de cualquier funcionalidad (como el agendamiento de visitas presenciales o la consulta de requisitos escolares) implica el conocimiento y conformidad con los presentes lineamientos.
                </p>
              </section>

              {/* Section 3 */}
              <section id="admisiones" className="space-y-3">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">3.</span> Proceso de Admisiones y Citas
                </h2>
                <p className="text-sm sm:text-base">
                  La solicitud de citas para recorridos presenciales o el envío de formularios de contacto a través de este portal <strong>no garantiza la asignación automática de un lugar</strong> ni constituye una matrícula definitiva. La inscripción definitiva de alumnos en Maternal, Preescolar o Primaria está supeditada a:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-600">
                  <li>La disponibilidad real de cupos por grado y grupo escolar para el ciclo lectivo correspondiente.</li>
                  <li>La realización de la entrevista formativa y la valoración diagnóstica integral del aspirante.</li>
                  <li>La entrega en tiempo y forma de la documentación oficial requerida por la Secretaría de Educación de Guanajuato (SEG) y la dirección escolar.</li>
                  <li>La formalización del contrato de prestación de servicios educativos y el cumplimiento de las obligaciones administrativas correspondientes.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="propiedad-intelectual" className="space-y-3">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">4.</span> Propiedad Intelectual y Marcas
                </h2>
                <p className="text-sm sm:text-base">
                  Todos los contenidos publicados en este sitio web, incluyendo textos, logotipos, emblemas, diseños gráficos, fotografías escolares, videos, infografías, código fuente, así como las figuras y personajes de los 5 Embajadores del Aprendizaje (<em>Sol, Nube, Montaña, Estrella y Búho Everest</em>) son propiedad exclusiva de Instituto Everest León o cuentan con las debidas licencias de uso.
                </p>
                <p className="text-sm sm:text-base">
                  Queda estrictamente prohibida la reproducción parcial o total, distribución, explotación comercial, modificación o almacenamiento no autorizado de cualquier material de este sitio sin la previa autorización por escrito de la representación legal del Instituto. Las marcas de terceros, tales como <em>AMCO</em> o referencias de certificaciones, pertenecen a sus respectivos titulares.
                </p>
              </section>

              {/* Section 5 */}
              <section id="uso-portal" className="space-y-3">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">5.</span> Uso Adecuado del Portal Web
                </h2>
                <p className="text-sm sm:text-base">
                  Al interactuar con los formularios interactivos, el usuario se compromete a:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-600">
                  <li>Proporcionar información fidedigna, completa y actualizada en los campos de contacto (nombre de tutor, teléfono, correo electrónico, grado de interés).</li>
                  <li>No suplantar identidades de terceros ni ingresar información maliciosa o no consentida.</li>
                  <li>No realizar actos que puedan sobrecargar, vulnerar o perjudicar la infraestructura del servidor, bases de datos o servicios en la nube de la institución.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section id="datos-personales" className="space-y-3">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">6.</span> Datos Personales y Confidencialidad
                </h2>
                <p className="text-sm sm:text-base">
                  En Instituto Everest asumimos con el más alto rigor ético y normativo la custodia de la información de las familias. Los datos personales proporcionados para la solicitud de informes, visitas escolares o trámites de nuevo ingreso serán tratados con estricta confidencialidad de acuerdo con la legislación mexicana en materia de protección de datos personales en posesión de los particulares (LFPDPPP).
                </p>
                <p className="text-sm sm:text-base">
                  Dichos datos se emplean con el único propósito de brindar asesoría sobre las admisiones, coordinar recorridos guiados y dar seguimiento a los requerimientos de la comunidad educativa.
                </p>
              </section>

              {/* Section 7 */}
              <section id="pagos-administrativos" className="space-y-3">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">7.</span> Lineamientos Administrativos y Pagos
                </h2>
                <p className="text-sm sm:text-base">
                  Los costos, cuotas de inscripción, reinscripción, materiales, uniformes y colegiaturas informados a través de medios digitales son de carácter informativo para el ciclo escolar especificado. Todos los compromisos financieros y plazos de pago definitivos se estipulan en la documentación administrativa oficial suscrita directamente en Campus León.
                </p>
              </section>

              {/* Section 8 */}
              <section id="canales-digitales" className="space-y-3">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">8.</span> Atención por Canales Digitales y WhatsApp
                </h2>
                <p className="text-sm sm:text-base">
                  Para comodidad de las familias, contamos con un canal directo de atención vía WhatsApp oficial (<strong>{SITE_CONFIG.whatsappDisplay}</strong>). El uso de este canal se rige por normas de respeto mutuo y está destinado exclusivamente a la orientación escolar, resolución de dudas sobre admisiones y atención a citas programadas.
                </p>
              </section>

              {/* Section 9 */}
              <section id="modificaciones" className="space-y-3">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">9.</span> Actualizaciones y Modificaciones
                </h2>
                <p className="text-sm sm:text-base">
                  Instituto Everest León se reserva el derecho de actualizar, adicionar o modificar los presentes Términos y Condiciones en cualquier momento con el fin de adaptarlos a reformas normativas o cambios en los servicios institucionales. Las modificaciones entrarán en vigor a partir de su publicación en esta misma página.
                </p>
              </section>

              {/* Section 10 */}
              <section id="jurisdiccion" className="space-y-3">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">10.</span> Jurisdicción y Legislación Aplicable
                </h2>
                <p className="text-sm sm:text-base">
                  Para la interpretación y cumplimiento de los presentes términos, las partes se someten expresamente a las leyes aplicables de los Estados Unidos Mexicanos y a la competencia de los tribunales de la ciudad de <strong>León, Guanajuato</strong>, renunciando a cualquier otro fuero que por razón de domicilio presente o futuro pudiera corresponderles.
                </p>
              </section>

              {/* Section 11 - Contact Box */}
              <section id="contacto-legal" className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="font-headline text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#DA474A]">11.</span> Contacto para Aclaraciones Institucionales
                </h2>
                <p className="text-sm sm:text-base">
                  Para cualquier consulta, aclaración o sugerencia sobre estos Términos y Condiciones, te invitamos a ponerte en contacto con nosotros a través de los medios oficiales del plantel:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm">
                    <p className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-[#3b5692]">call</span>
                      Conmutador Escolar
                    </p>
                    <p className="text-slate-600">{SITE_CONFIG.phone}</p>
                    <p className="text-[11px] text-slate-500">Horario: {SITE_CONFIG.schedule}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm">
                    <p className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-[#25D366]">chat</span>
                      Admisiones WhatsApp
                    </p>
                    <p className="text-slate-600">{SITE_CONFIG.whatsappDisplay}</p>
                    <p className="text-[11px] text-slate-500">Atención personalizada directa</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm sm:col-span-2">
                    <p className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-[#E5A93C]">location_on</span>
                      Campus León
                    </p>
                    <p className="text-slate-600">
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, C.P. {SITE_CONFIG.address.postalCode}.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0A1128] hover:bg-[#1c2c5c] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    <span>Volver a la Página Principal</span>
                  </Link>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    <span>Agendar Cita en Campus</span>
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
