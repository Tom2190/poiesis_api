import { crearEnviadorEmails } from './enviadorEmails.js'
import dotenv from 'dotenv'

dotenv.config()
const service = process.env.SERVICE
const user = process.env.USER
const pass = process.env.PASS

async function crearEnviadorEmailsFactory () {
    const enviador = await crearEnviadorEmails(service,user,pass)
    return enviador
}

export {
    crearEnviadorEmailsFactory
}