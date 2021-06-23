/*
  Author: Adela Delgadillo
*/

import createErrorFactory from "../../shared/errors/ErrorFactory.js";

const errorFactory = createErrorFactory();
//En el factory, o no.
const allowedGenre = ["fiction", "non_fiction", "poetry"];

function getTextsByPage(textDao, textsToShowByPage) {
  return {
    search: async (paginated) => {
      if (!allowedGenre.includes(paginated.genre)) {
        errorFactory.throwInvalidDataError(
          "El género que intenta buscar no existe"
        );
      }
      return await textDao.getByGenre(
        paginated.page,
        paginated.genre,
        textsToShowByPage
      );
    },

    /* search: async(page, selectedGenre) => {
      const allowedGenre = ["fiction", "non_fiction", "poetry"];
      if (!allowedGenre.includes(selectedGenre)) {
        errorFactory.throwInvalidDataError(
          "El genero que intenta buscar no existe"
        );
      }
      return await textDao.getByGenre(page, selectedGenre);
    }*/
  };
}
export default getTextsByPage;
