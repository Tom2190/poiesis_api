/*
  Author: Tomás Fernández Abrevaya
*/
import errorFactory from "../../shared/errors/ErrorFactory.js";

const error = errorFactory();
const emailCode = "AUTH_USER";

function createAuthUser(dao, mailer, daoEmailsTexts) {
  return {
    authUser: async (idUser) => {
      const user = await dao.getById(idUser);
      if (!user) {
        error.throwUserNotFoundError("No se pudo encontrar al usuario");
      }
      user.canShareTexts = true;
      await dao.update(user);
      const dataEmail = await daoEmailsTexts.getDataText(emailCode);
      await mailer.send(dataEmail.text, user.email, dataEmail.subject);
    },
  };
}

export default createAuthUser;
