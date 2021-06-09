import { crearDaoUsuarios } from '../persistencia/daoUsuarios.js'
import { crearMailerFactory } from '../../compartido/mailer/MailerFactory.js'
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

const enviador = await crearMailerFactory()
const usuario = crearUsuario(datosUsuario)
const dao = crearDaoUsuarios()
await dao.add(usuario)

async function crearAutorizadorFactory() {
    const AutorizadorFactory = await crearAutorizador(dao,enviador)    
    return AutorizadorFactory
}

export default {
    crearAutorizadorFactory
}