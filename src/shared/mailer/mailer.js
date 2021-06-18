import nodemailer from 'nodemailer'

async function createMailer(service, user, pass) {
    return {
        send: async (text, to, subject) => {
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
                text: text
            })
            console.log("Email Sent");
        }
    }
}

export default createMailer