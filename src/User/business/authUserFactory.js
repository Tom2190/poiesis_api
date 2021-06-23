/*
  Author: Tomás Fernández Abrevaya
*/
import createAuthUser from "./authUser.js";
import createEmailTextDao from "../persistence/emailTextDao.js";
import createUserDaoFactory from "../persistence/userDaoFactory.js";
import createMailerFactory from "../../shared/mailer/MailerFactory.js";

const userDao = createUserDaoFactory();
const emailTextDao = createEmailTextDao();
const mailer = await createMailerFactory();

function createCUAuthUser() {
  return createAuthUser(userDao, mailer, emailTextDao);
}

export { createCUAuthUser };
