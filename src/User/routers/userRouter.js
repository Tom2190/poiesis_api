import express from "express";
import createAuthUserFactory from "../business/authUserFactory.js";

function createUserRouter() {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      const authUserFactory = createAuthUserFactory();
      await authUserFactory.authUser(req.body.id);
      res.json({ msg: "ok" });
    } catch (error) {
      next(error);
    }
  });

  router.use((error, req, res, next) => {
    // TO DO
    /*     if (error.type === 'ERROR_DNI_EN_USO') {
      res.status(400)
    } else if (error.type === 'ERROR_DATOS_INVALIDOS') {
      res.status(400)
    } else if (error.type === 'ERROR_ESTUDIANTE_NO_ENCONTRADO') {
      res.status(404)
    } else {
      res.status(500)
    } */
    res.status(400).json({ message: error.message });
  });

  return router;
}

export default createUserRouter;
