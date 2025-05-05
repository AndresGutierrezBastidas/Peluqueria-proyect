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

export async function correo(req, res) {

    const { tipoCorreo, correo } = req.body;

    let asunto = "";
    let htmlCorreo = "<h1>Correo</h1><br>";
    switch (tipoCorreo) {
        case "1":
            asunto = "Reserva de hora confirmada";
            htmlCorreo += "<h3>Reserva de hora confirmada</h3>"
            break;

        case "2":
            asunto = "Reserva de hora cancelada";
            htmlCorreo += "<h3>Reserva de hora cancelada</h3>"
            break;

        case "3":
            asunto = "Recordatorio de hora reservada";
            htmlCorreo += "<h3>Recordatorio de hora reservada</h3>"
            break;
    }
    htmlCorreo += "<br><h1>Fin correo</h1>"

    const { error } = await transportador.sendMail({
        from: '"Prueba de Correo" <proyectofinal118@gmail.com>',
        to: correo,
        subject: asunto,
        headers: {
            "priority" : "high"
        },
        html: htmlCorreo
    });

    if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error enviando correo' });
    } else {
        return res.status(200).json({ success: 'Correo Enviado' });
    }

}

