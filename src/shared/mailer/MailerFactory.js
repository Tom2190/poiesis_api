import createMailer from "./mailer.js";
import { getMailerInfo } from "../../config.js";
const mailerInfo = getMailerInfo();
const service = mailerInfo.service;
const user = mailerInfo.user;
const pass = mailerInfo.pass;

async function createMailerFactory() {
  const mailer = await createMailer(service, user, pass);
  return mailer;
}

export default createMailerFactory;
