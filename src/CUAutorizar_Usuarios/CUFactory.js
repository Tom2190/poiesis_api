import { crearDaoUsuarios } from '../daos/daoUsuarios.js'
import { crearEnviadorEmails } from './enviadorEmails.js'
import { crearAutorizador } from './autorizarUsuario.js'
import { crearUsuario } from '../Modelos/Usuario.js'
import dotenv from 'dotenv'

dotenv.config()
const service = process.env.SERVICE
const user = process.env.USER
const pass = process.env.PASS
const enviador = await crearEnviadorEmails(service,user,pass)

const datosUsuario = {
    nombreCompleto: 'Tomás Fernández Abrevaya',
    email: 'fernandez.abrevaya@gmail.com',
    diaHorario: 'Viernes a las 19 h',
    frecuenciaEscritura: 'Avanzada',
    generoEscritura: 'Ficción',
    celular: '11-1111-1111'
}

const usuario = crearUsuario(datosUsuario)
const dao = crearDaoUsuarios()
await dao.add(usuario)

async function crearCU_Autorizador() {
    const CU_Autorizador = await crearAutorizador(dao,enviador)    
    return CU_Autorizador
}

export default {
    crearCU_Autorizador
}