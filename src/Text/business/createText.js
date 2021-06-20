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
      console.log("createText file", file);
      if (!user) {
        errorFactory.createUserNotFoundError("Usuario no identificado");
      }

      let newText = crearNewText(textData);
      const fileName = `${user.name}-${user.lastName}-${newText.title}.pdf`;
      console.log("fileName", fileName);
      const fileUrl = await fileDao.add(fileName, tempFilePath);

      newText = { ...newText, urlPdf: fileUrl };
      const createdTextId = await textDao.addUnique(newText);
      console.log(createdTextId);
      if (!createdTextId) {
        errorFactory.createDuplicateTextError(
          "El texto que desea agregar ya existe con ese titulo"
        );
      }
      fs.unlinkSync(tempFilePath);
      return { ...newText, id: createdTextId };
    },
  };
}

export default createText;
