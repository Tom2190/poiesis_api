import { firebaseDb } from "../../shared/Firebase/firebase.js";
import createUserDao from "./userDao.js";

function createUserDaoFactory() {
  const userDao = createUserDao(firebaseDb);
  return userDao;
}

export default createUserDaoFactory;
