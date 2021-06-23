/*
  Author: Alex Costa
*/
import {createEmail} from "../Models/Email.js";
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function createLoginUser(daoUsers) {
  const errorFactory = createErrorFactory();

  return {
    loginUser: async (userData) => {
      const email = createEmail(userData.email);
      const user = await daoUsers.getByEmail(email);
      if (user && userData.password===user.password) {
        return user.id;
      }
      errorFactory.createInvalidDataError("Email y/o Contraseña invalidas.")
    },
  };
}

export default createLoginUser;
