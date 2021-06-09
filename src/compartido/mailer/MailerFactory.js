import { crearMailer } from './mailer.js'
import dotenv from 'dotenv'

dotenv.config()
const service = process.env.SERVICE
const user = process.env.USER
const pass = process.env.PASS

async function crearMailerFactory () {
    const enviador = await crearMailer(service,user,pass)
    return enviador
}

export {
    crearMailerFactory
}