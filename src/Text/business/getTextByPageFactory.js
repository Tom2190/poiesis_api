/*
  Author: Adela Delgadillo
*/
import getTextsByPage from './getTextsByPage.js'
import createTextDao from '../persistence/textDao.js'

const textDao = createTextDao();

function createTextsByPageFactory() {
   const textByPage = getTextsByPage(textDao);
   return textByPage
}


export default createTextsByPageFactory