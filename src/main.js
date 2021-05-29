import { crearDaoUsuarios } from '../src/daoUsuarios.js'
import { autorizarUsuario } from './autorizarUsuario.js'
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

let service = process.env.SERVICE
let user = process.env.USER
let pass = process.env.PASS

async function main() {
  
  const baseDeDatos = crearDaoUsuarios()
  const usuario = await baseDeDatos.add(datosUsuario)
  console.log(await baseDeDatos.getAll())
  await autorizarUsuario(baseDeDatos,usuario,service,user,pass)
  console.log(await baseDeDatos.getAll())
}

main()