import express from "express";
import { getToken } from "../../shared/jwt/jwt.js";

import createRegisterUserFactory from "../business/RegisterUserFactory.js";

function createSignUpRouter() {
  const signUpRouter = express.Router();

  const registerUserFactory = createRegisterUserFactory();

  signUpRouter.post("/", async (req, res, next) => {
    try {
      const user = await registerUserFactory.registerUser(req.body);
      const token = getToken({ id: user.id });
      res.json({ token });
    } catch (error) {
      next(error);
    }
  });

  signUpRouter.use((error, req, res, next) => {
    if (error.type === 'USER_NOT_FOUND_ERROR' || error.type === 'INVALID_DATA_ERROR') {
      res.status(403);
    } else {
      res.status(500);
    }
    res.json({ message: error.message });
  });

  return signUpRouter;
}

export default createSignUpRouter;
