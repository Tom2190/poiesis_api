function crearErrorDeBaseDeDatos(message) {
  const error = new Error(message)
  error.type = 'ERROR_BASE_DE_DATOS'
  return error
}

export { crearErrorDeBaseDeDatos }