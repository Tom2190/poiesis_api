/*
  Author: Priscila Bey
*/
import createUserDaoFactory from "../../User/persistence/userDaoFactory.js";
import createTextDaoFactory from "../persistence/textDaoFactory.js";
import createFileDaoFactory from "../persistence/fileDaoFactory.js";
import createText from "./createText.js";

const userDao = createUserDaoFactory();
const textDao = createTextDaoFactory();
const fileDao = createFileDaoFactory();

function createTextFactory() {
  return createText(userDao, textDao, fileDao);
}

export { createTextFactory };
