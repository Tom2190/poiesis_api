import { isEmpty } from "../../shared/utils/index.js";
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

/**
 * TEXTO
 * idText: int
 * userId: string
 * title: string
 * genre: enum('fiction', 'non_fiction', 'poetry')
 * hasPdf: boolean
 * urlPdf?: string
 * content?: string
 */

let nextId = 1;

function crearNewText(data, textId = null) {
  const errorFactory = createErrorFactory();
  const allowedGenre = ["fiction", "non_fiction", "poetry"];
  const text = {};

  text.userId = data.userId;

  if (!data.title) {
    errorFactory.createInvalidDataError("falta el title");
  } else {
    text.title = data.title;
  }

  if (!allowedGenre.includes(data.genre)) {
    errorFactory.createInvalidDataError(
      "el genero que intenta crear no existe"
    );
  } else {
    text.genre = data.genre;
  }

  if (data.hasPdf && !data.containsFile) {
    errorFactory.createInvalidDataError("pdf no adjuntado");
  }

  if (!data.hasPdf && isEmpty(data.content)) {
    errorFactory.createInvalidDataError("este texto no tiene contenido");
  }

  if (!data.hasPdf && data.containsFile) {
    errorFactory.createInvalidDataError(
      "el texto que se intenta crear no deberia contener archivos adjuntos"
    );
  }

  if (textId) {
    text.textId = Number(textId);
  } else if (!isNaN(Number(data.textId))) {
    text.textId = Number(data.textId);
  } else {
    text.textId = nextId++;
  }

  text.hasPdf = data.hasPdf;
  text.content = data.content || null;

  return text;
}

export default crearNewText;
