import { crearEnviadorEmails } from './enviadorEmails.js'
import { crearAutorizador } from '../CUAutorizar_Usuarios/autorizarUsuario.js'
import dotenv from 'dotenv'

dotenv.config()
const service = process.env.SERVICE
const user = process.env.USER
const pass = process.env.PASS

const enviador = await crearEnviadorEmails(service,user,pass)

function crearCU_Autorizador() {
    const CU_Autorizador = crearAutorizador(enviador)    
    return CU_Autorizador
}

export default {
    crearCU_Autorizador
}