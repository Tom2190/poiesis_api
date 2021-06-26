import express from "express";
import { verifyToken } from "../../shared/jwt/jwt.js";
import { getUserFactory } from "../business/getUserFactory.js";
import { createCUAuthUser } from "../business/authUserFactory.js";
import createChangePasswordUser from "../business/ChangePasswordUserFactory.js";

const getUser = getUserFactory();
const CUAuthUser = createCUAuthUser();
const CU_ChangePassword = createChangePasswordUser();

function createUserRouter() {
  const router = express.Router();

  router.get("/", async (req, res, next) => {
    try {
      const user = await getUser.get(req.query.id);
      console.log(user)
      res.status(200).json(user)
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      await CUAuthUser.authUser(req.body.id);
      res.status(200).json({message: "Updated user"})
    } catch (error) {
      next(error);
    }
  });

  router.post("/password", verifyToken, async (req, res, next) => { 
    try {
      await CU_ChangePassword.changePassword({...req.body, userId: req.userId});
      res.status(200).json({message:"Updated password"});
    } catch (error) {
      next(error);
    }
  });

  router.use((error, req, res, next) => {
    if (
      error.type === "USER_NOT_FOUND_ERROR"
      || error.type === "INVALID_DATA_ERROR"
    ) {
      res.status(404);
    } else {
      res.status(500);
    }
    res.json({ message: error.message });
  });

  return router;
}

export default createUserRouter;
