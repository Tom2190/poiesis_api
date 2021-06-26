import createServer from "../../src/shared/server/server.js";
import axios from "axios";
import createRegisterUserFactory from "../../src/User/business/RegisterUserFactory.js";

const port = 3000;
const URL = `http://localhost:${port}/users`;
const server = await createServer(port);
const registerFactory = createRegisterUserFactory();

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

const idTestUser = 'ixNUgpM7jkTgo7cZOMWT'

try {
  
  //Agrego al testUser a Firebase y mando email de confirmación
  //const user = await registerFactory.registerUser(testUser);
  
  //Autorizo al usuario a subir textos y mando email de confirmación
  const userGet = await axios.get( URL, { id: idTestUser } )
  console.log(userGet.id)
  //const res = await axios.post( URL, { id: userGet.id } );
  //console.log(res.data.message);
  
  
} catch (err) {
  console.log("error test", err);
}

server.close();
