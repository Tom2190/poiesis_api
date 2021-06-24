import express from "express";
import { createCUAuthUser } from "../business/authUserFactory.js";
import { getUserFactory } from "../business/getUserFactory.js";

const getUser = getUserFactory();
const CUAuthUser = createCUAuthUser();

function createUserRouter() {
  const router = express.Router();

  router.get("/", async (req, res, next) => {
    try {
      const user = await getUser.get(req.body.id);
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

  router.use((error, req, res, next) => {
    if (
      error.type === "USER_NOT_FOUND_ERROR"
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
