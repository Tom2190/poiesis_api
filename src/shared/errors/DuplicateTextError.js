function createDuplicateTextError(message) {
  const error = new Error(message);
  error.type = "DUPLICATE_TEXT_ERROR";
  return error;
}

export { createDuplicateTextError };
