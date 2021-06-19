import createServer from "../../src/shared/server/server.js";
import createAuthUserFactory from "../../src/User/business/authUserFactory.js";
import createRegisterUserFactory from "../../src/User/business/RegisterUserFactory.js";

const port = 8080;
const server = await createServer(port);

const registerFactory = createRegisterUserFactory();
const authFactory = createAuthUserFactory();

const testUser = {
  name: "Tomás",
  lastName: "Fernández Abrevaya",
  email: "fernandez.abrevaya@gmail.com",
  password: "123456",
  chosenDateTime: "Martes y Jueves",
  writingFrecuency: "Alta",
  writingGenre: "Ficción",
  phone: "1123318739",
  dni: "35324852",
};

try {
  const user = await registerFactory.registerUser(testUser);
  await authFactory.authUser(user.id);
} catch (err) {
  console.log("error auth", err);
}

server.close();
