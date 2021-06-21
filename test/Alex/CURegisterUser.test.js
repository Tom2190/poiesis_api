import createServer from "../../src/shared/server/server.js";
import axios from "axios";

const PORT = 8080;
const URL = `http://localhost:${PORT}/signup`;
const server = await createServer(PORT);

const user = {
  name: "Alex",
  lastName: "Costa",
  email: "alexuniaoa28@gmail.com",
  password: "123456",
  chosenDateTime: "Martes y Jueves",
  writingFrequency: "Nada",
  writingGenre: "Narrativo",
  phone: "1123318739",
  dni: "43844448",
};

console.log("=========Register=========");
try {
  const resPost = await axios.post(URL, user);
  console.log(resPost.data);
} catch (error) {
  console.log("ERROR!", error.response.data.message);
}

console.log("=========Register same user=========");
try {
  const resPost2 = await axios.post(URL, user);
  console.log(resPost2.data);
} catch (error) {
  console.log("ERROR!", error.response.data.message);
}

server.close();
