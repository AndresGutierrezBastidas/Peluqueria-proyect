
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

const style = ` <style>
    body {
      box-sizing: border-box;
      background: #fff;
      margin: 0;
      padding: 0;
      font-family: 'Inter', Arial, sans-serif;
    }
    .container {
      width: 544px;
      margin: 0 auto;
      background: #fff;
      border-radius: 12px;
      position: relative;
      padding-bottom: 32px;
    }
    .header {
      background: #F5F6F8;
      border-radius: 6px;
      width: 544px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }
    .header-text {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -0.019em;
      color: rgba(0, 0, 0, 0.8);
      text-align: center;
    }
    .main-message {
      width: 400px;
      margin: 48px auto 0 auto;
      font-weight: 500;
      font-size: 32px;
      line-height: 39px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #1E1E1E;
    }
    .sub-message {
      width: 288px;
      margin: 32px auto 0 auto;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.011em;
      color: #1E1E1E;
      text-align: center;
    }
    .button-container {
      width: 176px;
      height: 48px;
      margin: 48px auto 0 auto;
      position: relative;
    }
    .button-shape {
      background: #F5F6F8;
      border-radius: 3px;
      width: 176px;
      height: 48px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .button-text {
      display:block;
      width:160px;
      height:24px;
      font-weight:700;
      font-size:16px;
      line-height:24px;
      letter-spacing:-0.011em;
      color:rgba(0,0,0,0.8);
      text-align:center;
      text-decoration:none;
      background:#F5F6F8;
      border-radius:3px;
      padding:12px 8px;
      margin:auto;
    }
    @media (max-width: 600px) {
      .container, .header {
        width: 100% !important;
        min-width: 0 !important;
      }
      .main-message, .sub-message {
        width: 90% !important;
      }
      .button-container {
        width: 90% !important;
      }
    }
  </style>`
export async function correo(tipoCorreo, correo, token) {
    let asunto = "";
    let htmlCorreo = "";
    switch (tipoCorreo) {
        case "1":
            asunto = "Confirmar Reserva";
            htmlCorreo = style + `<div class="container">
            <div class="header">
            <div class="header-text">Dolape’s Barber</div>
            </div>
            <div class="main-message">
            ¡Gracias por hacer tu reserva en Dolape’s Barber!
            </div>
            <div class="sub-message">
            Solo queda un paso, confirma tu hora
            </div>
            <div class="button-container">
            <div class="button-shape"></div>
            <a href="http://localhost:4200/confirmar-reserva/${token}" class="button-text">
                Confirma tu reserva
            </a>
            </div>
            </div>`
            break;

        case "2":
            asunto = "Reserva Confirmada";
            htmlCorreo = style + `<div class="container">
            <div class="header">
            <div class="header-text">Dolape’s Barber</div>
            </div>
            <div class="main-message">
            ¡Gracias por confirmar tu reserva en Dolape’s Barber!
            </div>
            <div class="sub-message">
            ¡Te esperamos el dia de tu reserva!
            </div>`
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


