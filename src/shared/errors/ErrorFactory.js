import { createDataBaseError } from "./DataBaseError.js";
import { createInvalidDataError } from "./InvalidDataError.js";
import { createUserNotFoundError } from "./UserNotFoundError.js";
import { createDuplicateUserError } from "./DuplicateUserError.js";
import { createDuplicateTextError } from "./DuplicateTextError.js";

function createErrorFactory() {
  return {
    throwDataBaseError: (message) => {
      throw createDataBaseError(message);
    },
    throwInvalidDataError: (message) => {
      throw createInvalidDataError(message);
    },
    throwUserNotFoundError: (message) => {
      throw createUserNotFoundError(message);
    },
    throwDuplicateUserError: (message) => {
      throw createDuplicateUserError(message);
    },
    throwDuplicateTextError: (message) => {
      throw createDuplicateTextError(message);
    },
  };
}

export default createErrorFactory;
