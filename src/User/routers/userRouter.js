import express from "express";
import createAuthUserFactory from "../business/authUserFactory.js";

function createUserRouter() {
  const router = express.Router();
  const authUserFactory = createAuthUserFactory();

  router.post("/", async (req, res, next) => {
    try {
      const updatedUser = await authUserFactory.authUser(req.body.id);
      res.status(200).json(updatedUser)
    } catch (error) {
      next(error);
    }
  });

  router.use((error, req, res, next) => {
    if (
      error.type === "USER_NOT_FOUND_ERROR" ||
      error.type === "INVALID_DATA_ERROR"
    ) {
      res.status(403);
    } else {
      res.status(500);
    }
    res.json({ message: error.message });
  });

  return router;
}

export default createUserRouter;
