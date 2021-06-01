function crearDaoUsuarios() {

  const usuarios = []

  return {
    add: async (usuario) => {
      usuarios.push(usuario)
    },
    getAll: async () => {
      return [...usuarios]
    },
    update: async (usuario) => {
      const indiceParaReemplazar = usuarios.findIndex(u => u.id == usuario.id)
      if (indiceParaReemplazar === -1) {
        console.log('No se pudo encontrar el usuario.')
      } else {
        usuarios.splice(indiceParaReemplazar, 1, usuario)
      }
    }
  }
}

export { crearDaoUsuarios }