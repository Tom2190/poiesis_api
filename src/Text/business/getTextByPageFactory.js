/*
  Author: Adela Delgadillo
*/
import getTextsByPage from './getTextsByPage.js'
import createTextDao from '../persistence/textDao.js'
import { firebaseDb } from '../../shared/Firebase/firebase.js';

const textDao = createTextDao(firebaseDb);

function createTextsByPageFactory() {
   const textByPage = getTextsByPage(textDao);
   return textByPage
}


export default createTextsByPageFactory