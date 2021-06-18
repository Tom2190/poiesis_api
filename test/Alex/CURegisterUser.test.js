import createServer from "../../src/shared/server/server.js";
import axios from 'axios'

const PORT = 3000;
const URL = `http://localhost:${PORT}/signup`
const server = await createServer(PORT);

const user = {
  name: "Alex",
  lastName: "Costa",
  email: "alexunio28@gmail.com",
  password: "123456",
  chosenDateTime: "Martes y Jueves",
  writingFrecuency: "Nada",
  writingGenre: "Narrativo",
  phone: "1123318739",
  dni: "43820248"
}

console.log("=========Register=========");
try {
  const resPost = await axios.post(URL, user)
  console.log(resPost.data);

} catch (error) {
  console.log(`${error.message}`)
}

console.log("=========Register same user=========");
try {
  const resPost2 = await axios.post(URL, user)
  console.log(resPost2.data);
} catch (error) {
  console.log(`${error.message}`)
}

server.close();
