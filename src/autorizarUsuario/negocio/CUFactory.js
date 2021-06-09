import { crearDaoUsuarios } from '../persistencia/daoUsuarios.js'
import { crearEnviadorEmailsFactory } from '../../compartido/mail/EnviadorEmailsFactory.js'
import { crearAutorizador } from './autorizarUsuario.js'
import { crearUsuario } from '../../modelos/Usuario.js'

const datosUsuario = {
    nombreCompleto: 'Tomás Fernández Abrevaya',
    email: 'fernandez.abrevaya@gmail.com',
    diaHorario: 'Viernes a las 19 h',
    frecuenciaEscritura: 'Avanzada',
    generoEscritura: 'Ficción',
    celular: '11-1111-1111'
}

const enviador = await crearEnviadorEmailsFactory()
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