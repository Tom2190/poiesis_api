import createRegisterUserFactory from '../../User/business/RegisterUserFactory.js';
import createUserDaoFactory from '../../User/persistence/userDaoFactory.js';
import firebaseDb from './firebase.js';

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

//===========TEST REGISTER USER==============
/* const factory = createRegisterUserFactory()
try {
    const user = await factory.registerUser(testUser);
    console.log(user);
} catch (error) {
    console.log(error);
} */

//============ELIMINAR TODOS LOS USUARIOS===============
/* const daoUsers = createUserDaoFactory();
const allUsers = await userDao.getAll();
allUsers.forEach(async user => {
    await firebaseDb.collection('users').doc(user.id).delete();
})
console.log("Borrados..."); */



//=============TEST UPDATE USER======================
/* const daoUsers = createUserDaoFactory();
let allUsers = await userDao.getAll();
console.log(allUsers);

const newUser = {
    phone: '1123318739',
    lastName: 'Pepon',
    dni: '43844448',
    email: 'alexuniaoa28@gmail.com',
    writingGenre: 'Narrativo',
    password: '123456',
    chosenDateTime: 'Martes y Jueves',
    writingFrecuency: 'Nada',
    name: 'Josesito',
    shareTexts: false,
    id: 'uG37zl2rJfRCqqMLYGm1'
}

userDao.update(newUser)

allUsers = await userDao.getAll();
console.log(allUsers); */