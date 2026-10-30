import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactRequestBody {
  parentName?: string;
  name?: string;
  nombrePadre?: string;
  studentName?: string;
  email?: string;
  correoTutor?: string;
  phone?: string;
  telefonoTutor?: string;
  gradeInterest?: string;
  level?: string;
  nivelInteres?: string;
  preferredDate?: string;
  fechaVisita?: string;
  preferredTime?: string;
  horarioVisita?: string;
  message?: string;
  mensajePadre?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();

    const parentName = (body.parentName || body.name || body.nombrePadre || "").trim();
    const studentName = (body.studentName || "").trim();
    const email = (body.email || body.correoTutor || "").trim();
    const phone = (body.phone || body.telefonoTutor || "").trim();
    const gradeInterest = (body.gradeInterest || body.level || body.nivelInteres || "Preescolar Bilingüe").trim();
    const message = (body.message || body.mensajePadre || "").trim();
    const preferredDate = (body.preferredDate || body.fechaVisita || "").trim();
    const preferredTime = (body.preferredTime || body.horarioVisita || "").trim();

    // Strict validation
    if (!parentName) {
      return NextResponse.json(
        { error: "Por favor introduce el nombre del padre o tutor." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "Por favor introduce un correo electrónico." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El formato de correo electrónico no es válido." },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        { error: "Por favor introduce un número de teléfono o WhatsApp." },
        { status: 400 }
      );
    }

    const phoneClean = phone.replace(/\D/g, "");
    if (phoneClean.length < 10) {
      return NextResponse.json(
        { error: "Por favor introduce un teléfono válido de al menos 10 dígitos." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const toEmail = process.env.LEADS_RECEIVER_EMAIL || "admisiones@institutoeverestleon.edu.mx";
      const fromEmail = process.env.RESEND_FROM_EMAIL || "Instituto Everest <onboarding@resend.dev>";

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: `Solicitud de Información: ${parentName} (${gradeInterest})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 32px 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #24467d; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #24467d; margin: 0 0 6px 0; font-size: 22px;">Solicitud de información</h2>
              <p style="color: #64748b; font-size: 14px; margin: 0;">Instituto Everest Campus León · Notificación Automática</p>
            </div>

            <p style="color: #334155; font-size: 15px; line-height: 1.5; margin-bottom: 20px;">
              Se ha recibido un nuevo registro de contacto de una familia interesada a través del sitio web oficial:
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #f1f5f9;">
              <tbody>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b; width: 38%;">Nombre del Tutor:</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #334155; font-size: 15px;"><strong>${parentName}</strong></td>
                </tr>
                ${studentName ? `
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Nombre del Alumno(a):</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #334155;">${studentName}</td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Nivel de Interés:</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #24467d; font-size: 15px;"><strong>${gradeInterest}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Teléfono / WhatsApp:</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #334155;">
                    <a href="https://wa.me/52${phoneClean}" style="color: #059669; font-weight: 600; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Correo Electrónico:</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #334155;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${preferredDate ? `
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">Fecha sugerida para recorrido:</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #334155;">
                    ${preferredDate} ${preferredTime ? `(${preferredTime === "manana" ? "Turno Matutino: 9:00 - 12:00" : "Turno Vespertino: 13:00 - 16:00"})` : ""}
                  </td>
                </tr>
                ` : ""}
                ${message ? `
                <tr>
                  <td style="padding: 12px 16px; font-weight: 600; color: #1e293b; vertical-align: top;">Comentarios o preguntas:</td>
                  <td style="padding: 12px 16px; color: #334155; line-height: 1.5;">${message}</td>
                </tr>
                ` : ""}
              </tbody>
            </table>

            <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 6px; margin-bottom: 24px;">
              <p style="margin: 0; font-size: 13px; color: #1e40af;">
                💡 <strong>Acción rápida:</strong> Puedes responder directamente a este correo para escribirle a <strong>${email}</strong> o hacer clic en el teléfono para iniciar una conversación por WhatsApp.
              </p>
            </div>

            <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; color: #94a3b8; font-size: 12px;">
              <p style="margin: 0 0 4px 0;">Instituto Everest Campus León · Donde tus sueños alcanzan la cima.</p>
              <p style="margin: 0;">Calle Luis Cabrera 104, La Alameda, León, Gto. · Tel: (477) 949 6200</p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend API returned an error:", error);
        return NextResponse.json(
          { error: `Error de Resend: ${error.message}` },
          { status: 400 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Solicitud de información enviada con éxito. Nuestro personal se contactará con usted a la brevedad.",
        id: data?.id,
      });
    } else {
      // Graceful fallback for local development / testing without API key
      console.log("Mock lead recorded (RESEND_API_KEY not configured):", {
        parentName,
        studentName,
        email,
        phone,
        gradeInterest,
        preferredDate,
        preferredTime,
        message,
        receivedAt: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        message: "Solicitud de información enviada con éxito. Nuestro personal se contactará con usted a la brevedad.",
        mock: true,
      });
    }
  } catch (error: unknown) {
    console.error("Error in /api/send:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al procesar tu solicitud. Inténtalo nuevamente o contáctanos por WhatsApp." },
      { status: 500 }
    );
  }
}
