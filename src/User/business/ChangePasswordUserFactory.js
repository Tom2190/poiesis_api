/*
  Author: Alex Costa
*/
import createChangePasswordUser from "./changePasswordUser.js";
import createUserDaoFactory from "../persistence/userDaoFactory.js";

const daoUsers = createUserDaoFactory();

function createChangePasswordUserFactory() {
  const changePasswordUser = createChangePasswordUser(daoUsers);
  return changePasswordUser;
}

export default createChangePasswordUserFactory;
