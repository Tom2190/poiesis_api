function getTextsById(textDao) {
  return {
    getById: async (id) => {
      return await textDao.getById(id);
    },
  };
}
export default getTextsById;
