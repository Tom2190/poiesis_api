/*
  Author: Tomás Fernández Abrevaya
*/
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

const errorFactory = createErrorFactory();

function createGetUser(dao) {
  return {
    get: async (idUser) => {
      const user = await dao.getById(idUser);
      if (!user) {
        errorFactory.throwUserNotFoundError("No se pudo encontrar al usuario");
      }
      return user;
    },
    getAll: async () => {
      const users = await dao.getAll();
      return users;
    },
  };
}

export default createGetUser;
