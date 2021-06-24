/*
  Author: Tomás Fernández Abrevaya
*/
import createGetUser from "./getUser.js";
import createUserDaoFactory from "../persistence/userDaoFactory.js";

const userDao = createUserDaoFactory();

function getUserFactory() {
  return createGetUser(userDao);
}

export { getUserFactory };
