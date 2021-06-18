/*
  Author: Priscila Bey
*/
import createUserDao from "../../User/persistence/userDao.js";
import createTextDao from "../persistence/textDao.js";
import createFileDao from "../persistence/fileDao.js";
import createText from "./createText.js";

function createTextFactory() {
  const userDao = createUserDao();
  const textDao = createTextDao();
  const fileDao = createFileDao();

  return createText(userDao, textDao, fileDao);
}

export default createTextFactory;
