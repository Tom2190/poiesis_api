//Errors
import createErrorFactory from '../../compartido/errors/ErrorFactory.js';

function createEmail(email) {

    const errorFactory = createErrorFactory();

    const emailRegularExpresion = /\S+@\S+\.\S+/;
    if(emailRegularExpresion.test(String(email).toLowerCase()) == false){
        errorFactory.createInvalidDataError('El email es invalido');
    }

    return email
}

export { createEmail }