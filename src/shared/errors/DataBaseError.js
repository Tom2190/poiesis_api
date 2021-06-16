function createDataBaseError(message) {
  const error = new Error(message)
  error.type = 'DATA_BASE_ERROR'
  return error
}

export { createDataBaseError }