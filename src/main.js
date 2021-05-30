import { crearDaoUsuarios } from '../src/daoUsuarios.js'
import { autorizarUsuario } from './autorizarUsuario.js'
import { crearEnviadorEmails } from './enviadorEmails.js'
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
  const usuario = await baseDeDatos.add(datosUsuario)
  console.log(await baseDeDatos.getAll())
  const enviador = await crearEnviadorEmails(service,user,pass)
  await autorizarUsuario(enviador,baseDeDatos,usuario)
  console.log(await baseDeDatos.getAll())
}

main()