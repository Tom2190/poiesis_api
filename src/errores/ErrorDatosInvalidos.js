function crearErrorDatosInvalidos(message) {
  const error = new Error(message)
  error.type = 'ERROR_DATOS_INVALIDOS'
  return error
}

export { crearErrorDatosInvalidos }