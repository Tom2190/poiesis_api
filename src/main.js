import { crearServidor } from '../src/Servidor.js'
import { crearAplicacion } from '../src/Aplicacion.js'
import { crearDaoUsuarios } from '../src/daoUsuarios.js'
import { crearUsuario } from '../src/modelos/Usuario.js'
//import { crearClienteRest } from '../src/ClienteRest.js'

const usuario1 = {
    nombreCompleto: 'Tomás Fernández',
    email: 'fernandez.abrevaya@gmail.com',
    diaHorario: 'Viernes a las 19 h',
    frecuenciaEscritura: 'Avanzada',
    generoEscritura: 'Ficción',
    celular: '11-1111-1111'
}

async function main() {
  
  const baseDeDatos = crearDaoUsuarios()
  const aplicacion = crearAplicacion({ baseDeDatos })
  const servidor = await crearServidor({ aplicacion })
  // const cliente = crearClienteRest({
  //   url: `http://localhost:${servidor.port}/api/usuarios`
  // })

  const usuario = crearUsuario(usuario1)
  await baseDeDatos.add(usuario)
  console.log(await aplicacion.getAll())
  await aplicacion.updateAutorizado(usuario)
  console.log(await aplicacion.getAll())
  servidor.close()
}

main()