/*
  Author: Adela Delgadillo
*/
import getTextsByPage from './getTextsByPage.js'
import createTextDao from '../persistence/textDao.js'
import { firebaseDb } from '../../shared/Firebase/firebase.js';

const textDao = createTextDao(firebaseDb);
const textsToShowByPage=9;

// Cambiar nombre
function createTextsByPageFactory() {
   const textByPage = getTextsByPage(textDao,textsToShowByPage);
   return textByPage
}

//Exportar con llaves
export default createTextsByPageFactory