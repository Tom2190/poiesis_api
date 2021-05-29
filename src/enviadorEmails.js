import nodemailer from 'nodemailer'

async function crearEnviadorEmails(service, user, pass, to, subject) {

    return {
        enviar: async (texto) => {
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

export { crearEnviadorEmails }