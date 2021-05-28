import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

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

async function enviarEmailAutorizado(usuario) {

    dotenv.config()

    let service = process.env.SERVICE
    let user = process.env.USER
    let pass = process.env.PASS
    let to = usuario.email
    let subject = '¡Usuario Actualizado!'
    let texto = 'Su usuario ahora puede publicar textos en el Área Común.'

    const enviador = await crearEnviadorEmails(service, user, pass, to, subject)
    await enviador.enviar(texto)
}


export { enviarEmailAutorizado }

