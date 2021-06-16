import createServer from "../src/shared/server/server.js";
import { crearClienteRest } from "./ClienteRest.js";

const port = 3000;
const server = await createServer(port);
const cliente = crearClienteRest({
  url: `http://localhost:${port}/users`,
});

const { data } = await cliente.autorizar(1);
console.log(data);

server.close();
