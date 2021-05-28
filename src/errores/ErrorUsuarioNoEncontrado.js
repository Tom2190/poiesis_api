function crearErrorUsuarioNoEncontrado() {
  const error = new Error('No existe usuario con ese id')
  error.type = 'ERROR_USUARIO_NO_ENCONTRADO'
  return error
}

export { crearErrorUsuarioNoEncontrado }