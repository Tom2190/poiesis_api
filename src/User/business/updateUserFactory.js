import createUpdateUser from "./updateUser.js";
import createUserDaoFactory from "../persistence/userDaoFactory.js";

const userDao = createUserDaoFactory();

function updateUserFactory() {
  return createUpdateUser(userDao);
}

export { updateUserFactory };
