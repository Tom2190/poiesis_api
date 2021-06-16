import createServer from "../src/shared/server/server.js";
import axios from "axios";

const port = 3000;
const urlAuth = `http://localhost:${port}/users`
const server = await createServer(port);

// Autorizo al usuario con id 0
try {
const { data } = await axios.post(urlAuth, { id: 0 });
console.log(data);
} catch (err) {
  console.log("error auth", err)
}


server.close();