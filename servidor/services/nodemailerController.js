
import { createTransport } from "nodemailer";

const transportador = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "proyectofinal118@gmail.com",
    pass: "tolpxasoyctajbvw"
  }
})

export async function correo(tipoCorreo, correo, token) {
  let asunto = "";
  let htmlCorreo = "";
  switch (tipoCorreo) {
    case "1":
      asunto = "Confirmar Reserva";
      htmlCorreo += `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fff;">
  <tr>
    <td align="center">
      <table width="544" cellpadding="0" cellspacing="0" border="0" style="background:#fff; border-radius:12px; font-family:Arial,sans-serif; margin:32px 0;">
        <tr>
          <td align="center" style="padding:0 0 24px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" style="background:#F5F6F8; border-radius:6px; padding:16px 24px;">
                  <span style="font-weight:700; font-size:24px; color:rgba(0,0,0,0.8);">Dolape’s Barber</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style="font-weight:500; font-size:32px; color:#1E1E1E; padding:24px 0 0 0;">
            ¡Gracias por hacer tu reserva en Dolape’s Barber!
          </td>
        </tr>
        <tr>
          <td align="center" style="font-weight:500; font-size:16px; color:#1E1E1E; padding:32px 0 0 0;">
            Solo queda un paso, confirma tu hora
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:48px 0 0 0;">
            <a href="http://localhost:4200/confirmar-reserva/${token}"
              style="display:inline-block; background:#F5F6F8; border-radius:3px; padding:16px 32px; font-weight:700; font-size:16px; color:rgba(0,0,0,0.8); text-decoration:none;">
              Confirma tu reserva
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`
      break;

    case "2":
      asunto = "Reserva Confirmada";
      htmlCorreo += `
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fff;">
    <tr>
      <td align="center">
        <table width="544" cellpadding="0" cellspacing="0" border="0" style="background:#fff; border-radius:12px; font-family:Arial,sans-serif; margin:32px 0;">
          <tr>
            <td align="center" style="padding:0 0 24px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="background:#F5F6F8; border-radius:6px; padding:16px 24px;">
                    <span style="font-weight:700; font-size:24px; color:rgba(0,0,0,0.8);">Dolape’s Barber</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="font-weight:500; font-size:32px; color:#1E1E1E; padding:24px 0 0 0;">
              ¡Gracias por confirmar tu reserva en Dolape’s Barber!
            </td>
          </tr>
          <tr>
            <td align="center" style="font-weight:500; font-size:16px; color:#1E1E1E; padding:32px 0 0 0;">
              ¡Te esperamos el día de tu reserva!
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
      `
      break;

    /* case "3":
        asunto = "Recordatorio de hora reservada";
        htmlCorreo = "<h3>Recordatorio de hora reservada</h3>"
        break; */
  }

  const { data, error } = await transportador.sendMail({
    from: ` "Dolape's Barber" <proyectofinal118@gmail.com>`,
    to: correo,
    subject: asunto,
    headers: {
      "priority": "high"
    },
    html: htmlCorreo
  });

  if (error) {
    console.error(error);
    return { error: 'Error enviando correo' };
  } else {
    return { success: 'Correo Enviado' };
  }

}


