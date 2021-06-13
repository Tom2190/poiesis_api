function createFileDao() {
  const files = [];

  return {
    add: async (file) => {
      files.push(file);
      const urlPdf = `${process.env.DEV_HOST}/${file.originalname}`;
      return urlPdf;
    },
  };
}

export default createFileDao;
