import express from "express";
import upload from "../middleware/fileUpload.js";
import { verifyToken } from "../../shared/jwt/jwt.js";
import { createCUcreateTextFactory } from "../business/createTextFactory.js";
import { createCUTextsByPageFactory } from "../business/getTextByPageFactory.js";
import { createCUTextByIdFactory } from "../business/getTextByIdFactory.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { getUploadFolderPath } from "../../config.js";

const CU_CreateText = createCUcreateTextFactory();
const CU_TextByPage = createCUTextsByPageFactory();
const CU_TextById = createCUTextByIdFactory();

function createTextRouter() {
  const textRouter = express.Router();

  textRouter.use(
    express.static(path.join(__dirname, `../../../${getUploadFolderPath()}`))
  );

  textRouter.post("/", verifyToken, upload, async (req, res, next) => {
    const info = { textData: req.body };
    info.textData.userId = req.userId;
    info.textData.hasPdf = req.body.hasPdf === "true"; // convert string to actual boolean

    if (req.file) {
      info.textData.containsFile = true;
      info.tempFilePath = req.file.path;
    }

    try {
      const text = await CU_CreateText.createText(info);
      res.status(201).json(text);
    } catch (error) {
      next(error);
    }
  });

  textRouter.get("/detail", async (req, res, next) => {
    try {
      const text = await CU_TextById.getByTextId(req.query.textId);
      res.status(201).json(text);
    } catch (err) {
      next(err);
    }
  });

  textRouter.get("/user", verifyToken, async (req, res, next) => {
    try {
      const texts = await CU_TextById.getByUserId(req.userId);
      res.status(201).json(texts);
    } catch (err) {
      next(err);
    }
  });

  textRouter.get("/", async (req, res, next) => {
    try {
      const paginatedTexts = await CU_TextByPage.search(req.query);
      res.json({
        content: paginatedTexts,
      });
      /*
        const page = parseInt(req.query.page);
        const genre = req.query.genre;
        const paginatedTexts = await CU_TextByPage.search(page, genre);
      
        res.json({
        page,
        content: paginatedTexts,
      });*/
    } catch (err) {
      next(err);
    }
  });

  textRouter.use((error, req, res, next) => {
    if (error.code == "LIMIT_FILE_SIZE") {
      res.status(400);
    } else if (error.type === "USER_NOT_FOUND_ERROR") {
      res.status(401);
    } else if (error.type === "DUPLICATE_TEXT_ERROR") {
      res.status(403);
    } else if (error.type === "INVALID_DATA_ERROR") {
      res.status(400);
    } else if (error.type === "DATA_BASE_ERROR") {
      res.status(500);
    } else {
      res.status(500);
    }
    res.json({ message: error.message });
  });

  return textRouter;
}

export default createTextRouter;
