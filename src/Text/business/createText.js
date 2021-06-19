/*
  Author: Priscila Bey
*/
import crearNewText from "../models/Text.js";
import createErrorFactory from "../../shared/errors/ErrorFactory.js";
import fs from "fs";

function createText(userDao, textDao, fileDao) {
  const errorFactory = createErrorFactory();
  return {
    createText: async ({ textData, file, tempFilePath }) => {
      const user = await userDao.getById(textData.userId);
      if (!user) {
        errorFactory.createUserNotFoundError("Usuario no identificado");
      }

      let newText = crearNewText(textData);
      const fileUrl = await fileDao.add(file);

      newText = { ...newText, urlPdf: fileUrl };
      const createdText = await textDao.addUnique(newText);
      if (!createdText) {
        errorFactory.createDuplicateTextError(
          "El texto que desea agregar ya existe con ese titulo"
        );
      }
      fs.unlinkSync(tempFilePath);
      return newText;
    },
  };
}

export default createText;
