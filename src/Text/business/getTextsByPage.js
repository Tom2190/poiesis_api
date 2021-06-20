/*
  Author: Adela Delgadillo
*/

import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function getTextsByPage(textDao) {

  const errorFactory = createErrorFactory();

  return ({
    search: async(page, selectedGenre) => {
      const allowedGenre = ["fiction", "non_fiction", "poetry"];
      if (!allowedGenre.includes(selectedGenre)) {
        errorFactory.createInvalidDataError(
          "El genero que intenta buscar no existe"
        );
      }
      return await textDao.getByGenre(page, selectedGenre);
    }
  })
}
export default getTextsByPage
