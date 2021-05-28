import { crearUsuario } from '../src/Usuario.js'

function crearDaoUsuarios() {

  const usuarios = []

  return {
    add: async (datos) => {
      const usuario = crearUsuario(datos)
      usuarios.push(usuario)
      return usuario
    },
    getAll: async () => {
      return [...usuarios]
    },
    updateAutorizado: async (usuario) => {
      const indiceParaReemplazar = usuarios.findIndex(u => u.id == usuario.id)
      if (indiceParaReemplazar === -1) {
        return { updated: 0 }
      } else {
        usuario.publicarTextos = true
        usuarios.splice(indiceParaReemplazar, 1, usuario)
        return usuario
      }
    }
  }
}

export { crearDaoUsuarios }