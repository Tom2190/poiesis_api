import { crearErrorIdEnUso } from './errores/ErrorIdEnUso.js'
import { crearErrorUsuarioNoEncontrado } from './errores/ErrorUsuarioNoEncontrado.js'
import { crearUsuario } from './modelos/Usuario.js'
import { enviarEmailAutorizado } from './enviadorEmails.js'

function crearAplicacion({ baseDeDatos: db }) {

    return {

        add: async (datosUsuario) => {
            const usuario = crearUsuario(datosUsuario)
            const { added } = await db.addUnique(usuario, 'id')
            if (!added) {
                throw crearErrorIdEnUso('Ya existe un usuario con ese id')
            }
            return usuario
        },
        getAll: async () => {
            return await db.getAll()
        },
        getById: async (datoId) => {
            return await db.getById(datoId)
        },
        deleteById: async (unId) => {
            const { deleted } = await db.deleteById(unId)
            if (!deleted) {
                throw crearErrorUsuarioNoEncontrado()
            }
        },
        updateById: async (datosUsuario, elId) => {
            const usuario = crearUsuario(datosUsuario, elId)
            const { updated } = await db.updateById(usuario)
            if (!updated) {
                throw crearErrorUsuarioNoEncontrado()
            }
            return usuario
        },
        updateAutorizado: async (usuario) => {
            const usuarioAutorizado = await db.updateAutorizado(usuario)
            await enviarEmailAutorizado(usuarioAutorizado)
        }
    }
}


export { crearAplicacion }