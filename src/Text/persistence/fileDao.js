function createFileDao(driveFunctions) {
  return {
    add: async (fileName, tempFilePath) => {
      const fileData = await driveFunctions.uploadFile(fileName, tempFilePath);
      return fileData.id;
    },
    getFileUrl: async (fileId) => {
      const readFileUrl = await driveFunctions.generatePublicUrl(fileId);
      return readFileUrl;
    },
  };
}

export default createFileDao;
