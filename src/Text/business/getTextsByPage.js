/*
  Author: Adela Delgadillo
*/

import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function getTextsByPage(textDao) {

  const errorFactory = createErrorFactory();

  return ({
    search: (page, selectedGenre) => {
      const allowedGenre = ["ficcion", "no_ficcion", "poesia"];
      if (!allowedGenre.includes(selectedGenre)) {
        errorFactory.createInvalidDataError(
          "el genero que intenta crear no existe"
        );
      }
      return textDao.getByGenre(page, selectedGenre);
    }
  })
}
export default getTextsByPage
