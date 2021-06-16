import { createDataBaseError } from "./DataBaseError.js";
import { createInvalidDataError } from "./InvalidDataError.js";
import { createUserNotFoundError } from "./UserNotFoundError.js";
import { createDuplicateUserError } from "./DuplicateUserError.js";
import { createDuplicateTextError } from "./DuplicateTextError.js";

function createErrorFactory() {
  return {
    createDataBaseError: (message) => {
      throw createDataBaseError(message);
    },
    createInvalidDataError: (message) => {
      throw createInvalidDataError(message);
    },
    createUserNotFoundError: (message) => {
      throw createUserNotFoundError(message);
    },
    createDuplicateUserError: (message) => {
      throw createDuplicateUserError(message);
    },
    createDuplicateTextError: (message) => {
      throw createDuplicateTextError(message);
    },
  };
}

export default createErrorFactory;
