function createDuplicateUserError(message) {
  const error = new Error(message)
  error.type = 'DUPLICATE_USER_ERROR'
  return error
}

export { createDuplicateUserError }