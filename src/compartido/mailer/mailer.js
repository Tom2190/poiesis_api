import nodemailer from 'nodemailer'

async function crearMailer(service, user, pass) {

    return {
        enviar: async (texto, to, subject) => {
            let transporter = nodemailer.createTransport({
                service: service,
                auth: {
                    user: user,
                    pass: pass
                }
            })

            await transporter.sendMail({
                from: 'escritura.poiesis@gmail.com',
                to: to,
                subject: subject,
                text: texto
            })
            console.log("Email enviado")
        }
    }
}

export { crearMailer }