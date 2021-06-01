import { crearDaoUsuarios } from '../src/daoUsuarios.js'
import { crearAutorizador } from './autorizarUsuario.js'
import { crearEnviadorEmails } from './enviadorEmails.js'
import { crearUsuario } from './Usuario.js'
import dotenv from 'dotenv'

const datosUsuario = {
    nombreCompleto: 'Tomás Fernández Abrevaya',
    email: 'fernandez.abrevaya@gmail.com',
    diaHorario: 'Viernes a las 19 h',
    frecuenciaEscritura: 'Avanzada',
    generoEscritura: 'Ficción',
    celular: '11-1111-1111'
}

dotenv.config()

const service = process.env.SERVICE
const user = process.env.USER
const pass = process.env.PASS

async function main() {

  const baseDeDatos = crearDaoUsuarios()
  const usuario = crearUsuario(datosUsuario)
  await baseDeDatos.add(usuario)
  console.log('Usuario no autorizado a publicar textos:')
  console.log(await baseDeDatos.getAll())
 
  const enviador = await crearEnviadorEmails(service,user,pass)
  const autorizador = await crearAutorizador(enviador)
  const usuarioAutorizado = await autorizador.autorizar(usuario)
  await baseDeDatos.update(usuarioAutorizado)

  console.log('Usuario autorizado a publicar textos:')
  console.log(await baseDeDatos.getAll())
}

main()