import dotenv from "dotenv";
dotenv.config();

const getUploadFolderPath = () => {
  return process.env.UPLOAD_PATH;
};

const getDevHost = () => {
  return process.env.DEV_HOST;
};

const getMailerInfo = () => {
  return {
    service: process.env.SERVICE,
    user: process.env.USER,
    pass: process.env.PASS,
  };
};

export { getUploadFolderPath, getMailerInfo, getDevHost };
