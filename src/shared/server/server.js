import express from "express";
import createUserRouter from "../../User/routers/userRouter.js";
import createSignUpRouter from "../../User/routers/signUpRouter.js";
import createTextRouter from "../../Text/routers/textRouter.js";

async function createServer(port) {
  const app = express();
  app.use(express.json());

  app.use("/users", createUserRouter());
  app.use("/signup", createSignUpRouter());
  app.use("/texts", createTextRouter());

  return new Promise((resolve, reject) => {
    const server = app
      .listen(port)
      .once("error", () => {
        reject(new Error("Error al conectarse al server"));
      })
      .once("listening", () => {
        server.port = server.address().port;
        resolve(server);
      });
  });
}

export default createServer;
