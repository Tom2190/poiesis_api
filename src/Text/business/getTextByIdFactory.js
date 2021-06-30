import getTextsById from "./getTextsById.js";
import createTextDao from "../persistence/textDao.js";
import { firebaseDb } from "../../shared/Firebase/firebase.js";

const textDao = createTextDao(firebaseDb);

// Cambiar nombre
function createTextByIdFactory() {
  const text = getTextsById(textDao);
  return text;
}

//Exportar con llaves
export default createTextByIdFactory;
