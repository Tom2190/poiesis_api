function createFileDao(driveFunctions) {
  return {
    add: async (file) => {
      await driveFunctions.uploadFile(file);

      // files.push(file);
      // const urlPdf = `${getDevHost()}/${file.originalname}`;
      return `www.google.com`;
    },
  };
}

export default createFileDao;
