import express from "express";
import { getToken } from "../../shared/jwt/jwt.js";

import createLoginUserFactory from "../business/LoginUserFactory.js";

function createLoginRouter() {
  const loginRouter = express.Router();

  const CU_loginUser = createLoginUserFactory();

  loginRouter.post("/", async (req, res, next) => {
    try {
      const userId = await CU_loginUser.loginUser(req.body);
      const token = getToken({ id: userId });
      res.json({ token });
    } catch (error) {
      next(error);
    }
  });

  loginRouter.use((error, req, res, next) => {
    if (
      error.type === "INVALID_DATA_ERROR"
    ) {
      res.status(403);
    } else {
      res.status(500);
    }
    res.json({ message: error.message });
  });

  return loginRouter;
}

export default createLoginRouter;
