//Errors
import createErrorFactory from "../../shared/errors/ErrorFactory.js";
//Moldes
import { createDni } from "./Dni.js";
import { createEmail } from "./Email.js";

let nextId = 1;

function createUser(data, id = null) {
  const errorFactory = createErrorFactory();
  const user = {};

  if (!data.name) {
    errorFactory.createInvalidDataError("Falta el nombre");
  } else {
    user.name = data.name;
  }

  if (!data.lastName) {
    errorFactory.createInvalidDataError("Falta el apellido");
  } else {
    user.lastName = data.lastName;
  }

  if (!data.email) {
    errorFactory.createInvalidDataError("Ingreso inválido del email");
  }
  user.email = createEmail(data.email);

  if (!data.password) {
    errorFactory.createInvalidDataError("Falta la contrasña");
  } else {
    user.password = data.password;
  }

  if (!data.chosenDateTime) {
    errorFactory.createInvalidDataError(
      "Falta indicar el día y horario predilecto"
    );
  } else {
    user.chosenDateTime = data.chosenDateTime;
  }

  if (!data.writingFrecuency) {
    errorFactory.createInvalidDataError(
      "Falta indicar la frecuencia de escritura"
    );
  } else {
    user.writingFrecuency = data.writingFrecuency;
  }

  if (!data.writingGenre) {
    errorFactory.createInvalidDataError(
      "Falta indicar su género de escritura predilecto"
    );
  } else {
    user.writingGenre = data.writingGenre;
  }

  if (!data.phone) {
    errorFactory.createInvalidDataError("Falta el celular");
  } else {
    user.phone = data.phone;
  }

  if (!data.dni) {
    errorFactory.createInvalidDataError("Falta el dni");
  }
  user.dni = createDni(data.dni);

  if (id) {
    user.id = Number(id);
  } else if (!isNaN(Number(data.id))) {
    user.id = Number(data.id);
  } else {
    user.id = nextId++;
  }

  user.shareTexts = false;

  return user;
}

export default createUser;
