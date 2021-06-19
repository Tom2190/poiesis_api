/*
  Author: Alex Costa
*/
import createRegisterUser from "../business/registerUser.js";
import createEmailTextDao from "../persistence/emailTextDao.js";
import createUserDaoFactory from "../persistence/userDaoFactory.js";
import createMailerFactory from "../../shared/mailer/MailerFactory.js";

const daoUsers = createUserDaoFactory();
const daoEmailTexts = createEmailTextDao();
const mailer = await createMailerFactory();

function createRegisterUserFactory() {
  const registerUser = createRegisterUser(daoUsers, daoEmailTexts, mailer);
  return registerUser;
}

export default createRegisterUserFactory;
