import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function getTextsById(textDao, userDao) {
  const errorFactory = createErrorFactory();

  return {
    getByTextId: async (textId) => {
      return await textDao.getById(textId);
    },
    getByUserId: async (userId) => {
      const user = await userDao.getById(userId);
      if (!user) {
        errorFactory.throwUserNotFoundError("Usuario no identificado");
      }
      return await textDao.getAllByUser(userId);
    },
  };
}
export default getTextsById;
