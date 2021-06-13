function createTextDao() {
  const texts = [];

  return {
    addUnique: async (textData) => {
      const exists = texts.some((e) => {
        return e[titulo] === textData[titulo];
      });
      if (exists) {
        return { added: 0 };
      } else {
        texts.push(textData);
        return { added: 1 };
      }
    },
    getAllByUser: async ({ userId }) => {
      return texts.filter((txt) => txt.userId === userId);
    },
  };
}

export default createTextDao;
