import createUserDao from "../persistence/userDao.js";
import createEmailTextDao from "../persistence/emailTextDao.js";
import createMailerFactory from "../../shared/mailer/MailerFactory.js";
import createAuthUser from "./authUser.js";

const mailer = await createMailerFactory();
const userDao = createUserDao();
const emailTextDao = createEmailTextDao();

function createAuthUserFactory() {
  const authFactory = createAuthUser(userDao, mailer, emailTextDao);
  return authFactory;
}

export default createAuthUserFactory;
