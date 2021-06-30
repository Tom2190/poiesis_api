import express from "express";
import { verifyToken } from "../../shared/jwt/jwt.js";
import { getUserFactory } from "../business/getUserFactory.js";
import { updateUserFactory } from "../business/updateUserFactory.js";
import { createCUAuthUser } from "../business/authUserFactory.js";
import createChangePasswordUser from "../business/ChangePasswordUserFactory.js";

const getUser = getUserFactory();
const updateUser = updateUserFactory();
const CUAuthUser = createCUAuthUser();
const CU_ChangePassword = createChangePasswordUser();

function createUserRouter() {
  const router = express.Router();

  router.get("/", verifyToken, async (req, res, next) => {
    try {
      const user = await getUser.get(req.userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  });

  router.get("/all", verifyToken, async (req, res, next) => {
    try {
      const users = await getUser.getAll();
      console.log(users);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      await CUAuthUser.authUser(req.body.id);
      res.status(200).json({ message: "User auth: ok" });
    } catch (error) {
      next(error);
    }
  });

  router.post("/password", verifyToken, async (req, res, next) => {
    try {
      await CU_ChangePassword.changePassword({
        ...req.body,
        userId: req.userId,
      });
      res.status(200).json({ message: "Updated password" });
    } catch (error) {
      next(error);
    }
  });

  router.put("/profile", verifyToken, async (req, res, next) => {
    try {
        const user = { ...req.body.user, id: req.userId }
        await updateUser.update(user)
        res.status(200).json('Updated user')
    } catch (error) {
      next(error);
    }
  });

  router.use((error, req, res, next) => {
    if (
      error.type === "USER_NOT_FOUND_ERROR" ||
      error.type === "INVALID_DATA_ERROR"
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
