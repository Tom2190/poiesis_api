import createRegisterUserFactory from '../../User/business/RegisterUserFactory.js';

const testUser = {
    name: "Josesito",
    lastName: "Dominguez",
    email: "fernandez.abrevaya@gmail.com",
    password: "123456",
    chosenDateTime: "Martes y Jueves",
    writingFrecuency: "Alta",
    writingGenre: "Ficción",
    phone: "1123318739",
    dni: "12345678"
}

const factory = createRegisterUserFactory()
try {
    const user = await factory.registerUser(testUser);
    console.log(user);
} catch (error) {
    console.log(error);
}