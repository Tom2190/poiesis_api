/*
  Author: Priscila Bey
*/
import crearNewText from "../models/Text.js";
import createErrorFactory from "../../shared/errors/ErrorFactory.js";
import fs from "fs";

function createText(userDao, textDao, fileDao) {
  const errorFactory = createErrorFactory();
  return {
    createText: async ({ textData, tempFilePath }) => {
      const user = await userDao.getById(textData.userId);

      if (!user) {
        errorFactory.createUserNotFoundError("Usuario no identificado");
      }

      let newText = crearNewText(textData);

      if (tempFilePath) {
        const fileName = `${user.name}-${user.lastName}-${newText.title}.pdf`;
        const fileId = await fileDao.add(fileName, tempFilePath);
        const fileUrl = await fileDao.getFileUrl(fileId);
        newText = { ...newText, pdfUrl: fileUrl, pdfFileId: fileId };
        fs.unlinkSync(tempFilePath);
      }

      const createdTextId = await textDao.addUnique(newText);

      if (!createdTextId) {
        errorFactory.createDuplicateTextError(
          "El texto que desea agregar ya existe con ese titulo"
        );
      }
      return { ...newText, id: createdTextId };
    },
  };
}

export default createText;
