function crearErrorIdEnUso(message) {
  const error = new Error(message)
  error.type = 'ERROR_ID_EN_USO'
  return error
}

export { crearErrorIdEnUso }