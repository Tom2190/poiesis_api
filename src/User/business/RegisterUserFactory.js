import createUserDao from '../persistence/userDao.js'
import createEmailTextDao from '../persistence/emailTextDao.js'
import createMailerFactory from '../../compartido/mailer/MailerFactory.js'
import createRegisterUser from '../business/registerUser.js'

function createRegisterUserFactory() {
  const daoUsers = createUserDao();
  const daoEmailTexts = createEmailTextDao();
  const mailer = createMailerFactory();

  const registerUser = createRegisterUser(daoUsers, daoEmailTexts, mailer);
  return registerUser;
}

export default createRegisterUserFactory