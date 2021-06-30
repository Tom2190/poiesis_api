import createErrorFactory from "../../shared/errors/ErrorFactory.js";

const errorFactory = createErrorFactory();

function createUpdateUser(dao) {
  return {
    update: async (user) => {
      const foundUser = await dao.getById(user.id);
      if (!foundUser) {
        errorFactory.throwUserNotFoundError("No se pudo encontrar al usuario");
      } else {
        await dao.update(user)
      }
      }
    }
}

export default createUpdateUser;
