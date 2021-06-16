import createUser from "../Models/User.js";
//Errors
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function createRegisterUser(daoUsers, daoEmailText, mailer) {
  const errorFactory = createErrorFactory();

  return {
    registerUser: async (userData) => {
      const user = createUser(userData);
      const result = await daoUsers.add(user);
      if (!result) {
        errorFactory.createUserNotFoundError(
          "Ya existe un usuario con ese email y/o dni"
        );
      }
      const text = await daoEmailText.getDataText("REGISTER_USER");
      await mailer.send(text.text, userData.email, text.subject);
      return user;
    },
  };
}

export default createRegisterUser;
