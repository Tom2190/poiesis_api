/*
  Author: Adela Delgadillo
*/
import getTextsByPage from "./getTextsByPage.js";
import createTextDao from "../persistence/textDao.js";
import { firebaseDb } from "../../shared/Firebase/firebase.js";

const textDao = createTextDao(firebaseDb);
const textsToShowByPage = 9;

function createCUTextsByPageFactory() {
  const textByPage = getTextsByPage(textDao, textsToShowByPage);
  return textByPage;
}

export { createCUTextsByPageFactory };
