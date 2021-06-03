
import { crearDaoUsuarios } from '../src/daoUsuarios.js'
import { crearUsuario } from './Usuario.js'

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
  const usuario = crearUsuario(datosUsuario)
  await baseDeDatos.add(usuario)
 
  const autorizador = await crearCUAutorizador()
  await autorizador.autorizarUsuario(usuario)
  await baseDeDatos.update(usuario)


}

main()