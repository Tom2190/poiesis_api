import { crearDaoUsuarios } from '../src/daoUsuarios.js'
import { enviarEmailAutorizado } from './enviadorEmails.js'

const datosUsuario = {
    nombreCompleto: 'Tomás Fernández Abrevaya',
    email: 'fernandez.abrevaya@gmail.com',
    diaHorario: 'Viernes a las 19 h',
    frecuenciaEscritura: 'Avanzada',
    generoEscritura: 'Ficción',
    celular: '11-1111-1111'
}

async function main() {
  
  const baseDeDatos = crearDaoUsuarios()
  const usuario = await baseDeDatos.add(datosUsuario)
  console.log(await baseDeDatos.getAll())
  await baseDeDatos.updateAutorizado(usuario)
  await enviarEmailAutorizado(usuario)
  console.log(await baseDeDatos.getAll())
}

main()