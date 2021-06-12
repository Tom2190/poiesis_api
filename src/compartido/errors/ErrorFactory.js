import { createDataBaseError } from './DataBaseError';
import { createInvalidDataError } from './InvalidDataError';
import { createUserNotFoundError } from './UserNotFoundError';
import { createDuplicateUserError } from './DuplicateUserError';

function createErrorFactory(){
    return{
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
    }
}

export default createErrorFactory;