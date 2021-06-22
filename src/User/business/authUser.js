/*
  Author: Tomás Fernández Abrevaya
*/
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function createAuthUser(dao, mailer, daoEmailsTexts) {
  const emailCode = "AUTH_USER";
  const errorFactory = createErrorFactory();
  return {
    authUser: async (idUser) => {
      const user = await dao.getById(idUser);
      if (!user) {
        errorFactory.createUserNotFoundError("No se pudo encontrar al usuario");
      }
      user.canShareTexts = true;
      await dao.update(user);
      const dataEmail = await daoEmailsTexts.getDataText(emailCode);
      await mailer.send(dataEmail.text, user.email, dataEmail.subject);
      return user
    },
  };
}

export default createAuthUser;
