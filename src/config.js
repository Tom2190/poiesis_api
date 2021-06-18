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

const getFirebaseConfig = () => {
  return {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };
};

export { getUploadFolderPath, getMailerInfo, getDevHost, getFirebaseConfig };
