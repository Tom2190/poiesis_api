import { firebaseDb } from "../../shared/Firebase/firebase.js";
import createTextDao from "./textDao.js";

function createTextDaoFactory() {
  const textDao = createTextDao(firebaseDb);
  return textDao;
}

export default createTextDaoFactory;
