function createInvalidDataError(message) {
  const error = new Error(message);
  error.type = "INVALID_DATA_ERROR";
  return error;
}

export { createInvalidDataError };
