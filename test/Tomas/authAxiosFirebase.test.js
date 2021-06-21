import createServer from "../../src/shared/server/server.js";
import axios from "axios";
import createRegisterUserFactory from "../../src/User/business/RegisterUserFactory.js";

const port = 8080;
const URL = `http://localhost:${port}/users`;
const server = await createServer(port);
const registerFactory = createRegisterUserFactory();

// Cambiar email y dni para probar de nuevo
const testUser = {
  name: "Tomás",
  lastName: "Fernández Abrevaya",
  email: "escritura.poiesis@gmail.com",
  password: "123456",
  chosenDateTime: "Martes y Jueves",
  writingFrequency: "Alta",
  writingGenre: "Ficción",
  phone: "1123318739",
  dni: "35324852",
};

try {
  //Agrego al testUser a Firebase y mando email de confirmación
  const user = await registerFactory.registerUser(testUser);
  //Autorizo al usuario a subior textos y mando email de confirmación
  await axios.post(URL, { id: user.id });
} catch (err) {
  console.log("error auth", err);
}

server.close();
