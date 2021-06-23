//Errors
import createErrorFactory from "../../shared/errors/ErrorFactory.js";
//Moldes
import { createDni } from "./Dni.js";
import { createEmail } from "./Email.js";

function createUser(data) {
  const errorFactory = createErrorFactory();
  const user = {};

  if (!data.name) {
    errorFactory.throwInvalidDataError("Falta el nombre");
  } else {
    user.name = data.name;
  }

  if (!data.lastName) {
    errorFactory.throwInvalidDataError("Falta el apellido");
  } else {
    user.lastName = data.lastName;
  }

  if (!data.email) {
    errorFactory.throwInvalidDataError("Ingreso inválido del email");
  }
  user.email = createEmail(data.email);

  if (!data.password) {
    errorFactory.throwInvalidDataError("Falta la contrasña");
  } else {
    user.password = data.password;
  }

  if (!data.chosenDateTime) {
    errorFactory.throwInvalidDataError(
      "Falta indicar el día y horario predilecto"
    );
  } else {
    user.chosenDateTime = data.chosenDateTime;
  }

  if (!data.writingFrequency) {
    errorFactory.throwInvalidDataError(
      "Falta indicar la frecuencia de escritura"
    );
  } else {
    user.writingFrequency = data.writingFrequency;
  }

  if (!data.writingGenre) {
    errorFactory.throwInvalidDataError(
      "Falta indicar su género de escritura predilecto"
    );
  } else {
    user.writingGenre = data.writingGenre;
  }

  if (!data.phone) {
    errorFactory.throwInvalidDataError("Falta el celular");
  } else {
    user.phone = data.phone;
  }

  if (!data.dni) {
    errorFactory.throwInvalidDataError("Falta el dni");
  }
  user.dni = createDni(data.dni);

  user.canShareTexts = false;

  return user;
}

export default createUser;
