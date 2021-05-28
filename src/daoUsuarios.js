function crearDaoUsuarios() {

  const usuarios = []

  return {
    add: async (usuario) => {
      usuarios.push(usuario)
    },
    addUnique: async (usuario, claveUnica) => {
      const existe = usuarios.some(u => {
        return u[claveUnica] === usuario[claveUnica]
      })
      if (existe) {
        return { added: 0 }
      } else {
        usuarios.push(usuario)
        return { added: 1 }
      }
    },
    addAll: async (usuariosNuevos) => {
      usuariosNuevos.forEach(u => usuarios.push(u))
    },
    getAll: async () => {
      return [...usuarios]
    },
    getById: async (id) => {
      return usuarios.filter(u => u.id === id)
    },
    deleteById: async (unId) => {
      const indiceParaBorrar = usuarios.findIndex(u => u.id == unId)
      if (indiceParaBorrar === -1) {
        return { deleted: 0 }
      } else {
        usuarios.splice(indiceParaBorrar, 1)
        return { deleted: 1 }
      }
    },
    updateById: async (usuario) => {
      const indiceParaReemplazar = usuarios.findIndex(u => u.id == usuario.id)
      if (indiceParaReemplazar === -1) {
        return { updated: 0 }
      } else {
        usuarios.splice(indiceParaReemplazar, 1, usuario)
        return { updated: 1 }
      }
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