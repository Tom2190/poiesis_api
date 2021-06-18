/*
  Author: Tomas Fernandez Abrevaya
*/
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function createAuthUser(dao, mailer, daoEmailsTexts) {
  const emailCode = "AUTH_USER";
  const errorFactory = createErrorFactory();
  return {
    authUser: async (idUser) => {
      const user = await dao.getById(idUser);
      const updatedUser = { ...user, shareTexts: true };
      const result = await dao.update(updatedUser);
      if (!result) {
        errorFactory.createUserNotFoundError("No se pudo encontrar al usuario");
      }
      const dataEmail = daoEmailsTexts.getDataText(emailCode);
      await mailer.send(dataEmail.text, user.email, dataEmail.subject);
    },
  };
}

export default createAuthUser;
