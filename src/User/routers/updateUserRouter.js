import express from "express";

import { verifyToken } from "../../shared/jwt/jwt.js";
import createChangePasswordUser from "../business/ChangePasswordUserFactory.js";

function createUpdateUserRouter() {
  const updateUserRouter = express.Router();

  const CU_ChangePassword = createChangePasswordUser();

  updateUserRouter.post("/password", verifyToken, async (req, res, next) => { 
    try {
      await CU_ChangePassword.changePassword(req.body);
      res.status(200).json({message:"hola"});
    } catch (error) {
      next(error);
    }
  });

  updateUserRouter.use((error, req, res, next) => {
    if (
      error.type === "USER_NOT_FOUND_ERROR" || error.type === "INVALID_DATA_ERROR"
    ) {
      res.status(404);
    } else {
      res.status(500);
    }
    res.json({ message: error.message });
  });

  return updateUserRouter;
}

export default createUpdateUserRouter;
