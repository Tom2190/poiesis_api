import express from "express";
import upload from "../middleware/fileUpload.js";
import { verifyToken } from "../../shared/jwt/jwt.js";
import createTextFactory from "../business/createTextFactory.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createTextRouter() {
  const textRouter = express.Router();

  textRouter.use(express.static(path.join(__dirname, "uploads"))); // no se como redirigir esto a uploads fuera de esta carpeta

  textRouter.post("/", verifyToken, upload, async (req, res, next) => {
    const info = { textData: req.body };
    info.textData.userId = req.userId;
    info.textData.hasPdf = req.body.hasPdf === "true"; // convert string to actual boolean

    if (req.file) {
      info.textData.containsFile = true;
      info.file = req.file;
      info.tempFilePath = req.file.path;
    }

    try {
      const textFactory = createTextFactory();
      const text = await textFactory.createText(info);
      res.status(201).json(text);
    } catch (error) {
      next(error);
    }
  });

  textRouter.use((error, req, res, next) => {
    if (error.code == "LIMIT_FILE_SIZE") {
      res.status(400);
    } else if (error.type === "USER_NOT_FOUND_ERROR") {
      res.status(403);
    } else if (error.type === "DUPLICATE_TEXT_ERROR") {
      res.status(403);
    } else if (error.type === "INVALID_DATA_ERROR") {
      res.status(403);
    } else {
      res.status(500);
    }
    res.json({ message: error.message });
  });

  return textRouter;
}

export default createTextRouter;
