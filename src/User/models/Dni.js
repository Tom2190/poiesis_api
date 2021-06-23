//Errors
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function createDni(dni) {
  const errorFactory = createErrorFactory();

  if (!dni || dni.length === 0) {
    errorFactory.throwInvalidDataError("El dni debe ser obligatorio");
  }

  if (dni.length > 8 || dni.length < 7) {
    errorFactory.throwInvalidDataError("El dni es invalido");
  }

  return dni;
}

export { createDni };
