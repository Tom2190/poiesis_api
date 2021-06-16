function createUserNotFoundError(message) {
  const error = new Error(message);
  error.type = 'USER_NOT_FOUND_ERROR'
  return error
}

export { createUserNotFoundError }