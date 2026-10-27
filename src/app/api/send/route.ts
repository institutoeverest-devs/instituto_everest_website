import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactRequestBody {
  parentName: string;
  studentName?: string;
  email: string;
  phone: string;
  gradeInterest: string;
  message?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();
    const { parentName, studentName, email, phone, gradeInterest, message } = body;

    // Strict validation
    if (!parentName || !email || !phone || !gradeInterest) {
      return NextResponse.json(
        { error: "Por favor completa todos los campos obligatorios." },
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

    const phoneClean = phone.replace(/\D/g, "");
    if (phoneClean.length < 10) {
      return NextResponse.json(
        { error: "Por favor introduce un teléfono de 10 dígitos válido." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const toEmail = process.env.LEADS_RECEIVER_EMAIL || "admisiones@institutoeverestleon.edu.mx";

      const data = await resend.emails.send({
        from: "Instituto Everest <onboarding@resend.dev>",
        to: [toEmail],
        replyTo: email,
        subject: `Nuevo Prospecto de Admisiones: ${parentName} (${gradeInterest})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px;">
            <h2 style="color: #3b5692; margin-top: 0;">Nuevo Registro de Admisiones - Instituto Everest León</h2>
            <p style="color: #475569; font-size: 15px;">Se ha recibido una nueva solicitud de información personalizada a través del sitio web:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Nombre del Tutor:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155;">${parentName}</td>
              </tr>
              ${studentName ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Nombre del Alumno(a):</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155;">${studentName}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Nivel de Interés:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155;"><strong>${gradeInterest}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Teléfono / WhatsApp:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Correo Electrónico:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e293b;">Mensaje / Dudas:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155;">${message}</td>
              </tr>
              ` : ""}
            </table>
            <p style="color: #64748b; font-size: 12px; margin-top: 24px;">Instituto Everest León · Donde tus sueños alcanzan la cima.</p>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        message: "¡Solicitud enviada con éxito! Nuestro equipo de admisiones te contactará a la brevedad.",
        id: data.data?.id,
      });
    } else {
      // Graceful fallback for local development / testing without API key
      console.log("Mock lead recorded (RESEND_API_KEY not configured):", {
        parentName,
        studentName,
        email,
        phone,
        gradeInterest,
        message,
        receivedAt: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        message: "¡Solicitud registrada correctamente! Nuestro equipo de admisiones se comunicará contigo.",
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
