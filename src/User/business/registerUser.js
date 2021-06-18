/*
  Author: Alex Costa
*/
import createUser from "../Models/User.js";
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function createRegisterUser(daoUsers, daoEmailText, mailer) {
  const errorFactory = createErrorFactory();

  return {
    registerUser: async (userData) => {
      const user = createUser(userData);
      const {id} = await daoUsers.add(user);
      if (!id) {
        errorFactory.createUserNotFoundError(
          "Ya existe un usuario con ese email y/o dni"
        );
      }
      user.id = id;
      const text = await daoEmailText.getDataText("REGISTER_USER");
      await mailer.send(text.text, userData.email, text.subject);
      return user;
    },
  };
}

export default createRegisterUser;
