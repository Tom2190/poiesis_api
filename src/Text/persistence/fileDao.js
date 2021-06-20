function createFileDao(driveFunctions) {
  return {
    add: async (fileName, tempFilePath) => {
      console.log("createFileDao fileName", fileName);
      await driveFunctions.uploadFile(fileName, tempFilePath);

      // files.push(file);
      // const urlPdf = `${getDevHost()}/${file.originalname}`;
      return `www.google.com`;
    },
  };
}

export default createFileDao;
