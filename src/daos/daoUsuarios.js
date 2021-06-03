function crearDaoUsuarios() {

  const usuarios = []

  return {
    add: async (usuario) => {
      const usuarioBuscado = usuarios.find(u => u.id === id)
      if (usuarioBuscado === null) {
        console.log('El usuario ya fue ingresado.')
      } else {
        usuarios.push(usuario)
      }
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