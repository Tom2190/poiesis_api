/*
  Author: Alex Costa
*/
import createLoginUser from "./loginUser.js";
import createUserDaoFactory from "../persistence/userDaoFactory.js";

const daoUsers = createUserDaoFactory();

function createLoginUserFactory() {
  const loginUser = createLoginUser(daoUsers);
  return loginUser;
}

export default createLoginUserFactory;
