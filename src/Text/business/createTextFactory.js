/*
  Author: Priscila Bey
*/
import createUserDaoFactory from "../../User/persistence/userDaoFactory.js";
import createTextDao from "../persistence/textDao.js";
import createFileDao from "../persistence/fileDao.js";
import createText from "./createText.js";

function createTextFactory() {
  const userDao = createUserDaoFactory();
  const textDao = createTextDao();
  const fileDao = createFileDao();

  return createText(userDao, textDao, fileDao);
}

export default createTextFactory;
