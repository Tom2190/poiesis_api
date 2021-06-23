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
        if (tempFilePath) {
          fs.unlinkSync(tempFilePath);
        }
        errorFactory.throwUserNotFoundError("Usuario no identificado");
      }

      let newText = crearNewText(textData);

      if (tempFilePath) {
        try {
          const fileName = `${user.name}-${user.lastName}-${newText.title}.pdf`;
          const fileId = await fileDao.add(fileName, tempFilePath);
          const fileUrl = await fileDao.getFileUrl(fileId);
          newText.pdfUrl = fileUrl;
          newText.pdfFileId = fileId;
        } catch (err) {
          // TODO tirar error
          errorFactory.throwDataBaseError(
            "Error en Drive al intentar subir el archivo"
          );
        } finally {
          fs.unlinkSync(tempFilePath);
        }
      }

      const createdTextId = await textDao.addUnique(newText);

      if (!createdTextId) {
        errorFactory.throwDuplicateTextError(
          "El texto que desea agregar ya existe con ese titulo"
        );
      }
      newText.id = createdTextId;
      return newText;
    },
  };
}

export default createText;
