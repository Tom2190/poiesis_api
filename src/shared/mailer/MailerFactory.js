import createMailer from './mailer.js'
import dotenv from 'dotenv'

dotenv.config()
const service = process.env.SERVICE
const user = process.env.USER
const pass = process.env.PASS

async function createMailerFactory () {
    const mailer = await createMailer(service,user,pass)
    return mailer
}

export default createMailerFactory