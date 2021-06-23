import express from "express";
import createUserRouter from "../../User/routers/userRouter.js";
import createSignUpRouter from "../../User/routers/signUpRouter.js";
import createTextRouter from "../../Text/routers/textRouter.js";
import createLoginRouter from "../../User/routers/loginRouter.js";

async function createServer(port) {
  const app = express();
  app.use(express.json());

  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use("/users", createUserRouter());
  app.use("/signup", createSignUpRouter());
  app.use("/login", createLoginRouter());
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
