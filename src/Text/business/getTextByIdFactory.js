import getTextsById from "./getTextsById.js";
import createTextDao from "../persistence/textDao.js";
import { firebaseDb } from "../../shared/Firebase/firebase.js";
import createUserDaoFactory from "../../User/persistence/userDaoFactory.js";

const textDao = createTextDao(firebaseDb);
const userDao = createUserDaoFactory();

function createCUTextByIdFactory() {
  return getTextsById(textDao, userDao);
}

//Exportar con llaves
export { createCUTextByIdFactory };
