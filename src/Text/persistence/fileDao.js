import { getDevHost } from "../../config.js";

function createFileDao() {
  const files = [];

  return {
    add: async (file) => {
      files.push(file);
      const urlPdf = `${getDevHost()}/${file.originalname}`;
      return urlPdf;
    },
  };
}

export default createFileDao;
