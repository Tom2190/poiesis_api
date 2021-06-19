import createDriveFunctions from "../../shared/Drive/drive.js";
import createFileDao from "./fileDao.js";

const driveFunctions = createDriveFunctions();

function createFileDaoFactory() {
  const fileDao = createFileDao(driveFunctions);
  return fileDao;
}

export default createFileDaoFactory;
