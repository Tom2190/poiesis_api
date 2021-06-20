import createTextsByPageFactory from "../../Text/business/getTextByPageFactory.js";
import createTextDaoFactory from "../../Text/persistence/textDaoFactory.js";
import createRegisterUserFactory from "../../User/business/RegisterUserFactory.js";
import createUserDaoFactory from "../../User/persistence/userDaoFactory.js";
import { firebaseDb } from "./firebase.js";

const testUser = {
  name: "Josesito",
  lastName: "Dominguez",
  email: "fernandez.abrevaya@gmail.com",
  password: "123456",
  chosenDateTime: "Martes y Jueves",
  writingFrecuency: "Alta",
  writingGenre: "Ficción",
  phone: "1123318739",
  dni: "12345678",
};

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


/**
 * TEXTO
 * idText: int
 * userId: string
 * title: string
 * genre: enum('fiction', 'non_fiction', 'poetry')
 * hasPdf: boolean
 * urlPdf?: string
 * content?: string
 */

const texts = [
    {idText: 2, userId: "SDFSDFSD", title:"Titulo2", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido2"},
    {idText: 3, userId: "SDFSDFSD", title:"Titulo3", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido3"},
    {idText: 4, userId: "SDFSDFSD", title:"Titulo4", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido4"},
    {idText: 5, userId: "SDFSDFSD", title:"Titulo5", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido5"},
    {idText: 6, userId: "SDFSDFSD", title:"Titulo6", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido6"},
    {idText: 7, userId: "SDFSDFSD", title:"Titulo7", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido7"},
    {idText: 8, userId: "SDFSDFSD", title:"Titulo8", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido8"},
    {idText: 9, userId: "SDFSDFSD", title:"Titulo9", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido9"},
    {idText: 10, userId: "SDFSDFSD", title:"Titulo1", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido1"},
    {idText: 11, userId: "SDFSDFSD", title:"Titulo2", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido2"},
    {idText: 12, userId: "SDFSDFSD", title:"Titulo3", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido3"},
    {idText: 13, userId: "SDFSDFSD", title:"Titulo4", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido4"},
    {idText: 14, userId: "SDFSDFSD", title:"Titulo5", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido5"},
    {idText: 15, userId: "SDFSDFSD", title:"Titulo6", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido6"},
    {idText: 16, userId: "SDFSDFSD", title:"Titulo7", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido7"},
    {idText: 17, userId: "SDFSDFSD", title:"Titulo8", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido8"},
    {idText: 18, userId: "SDFSDFSD", title:"Titulo9", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido9"},
    {idText: 19, userId: "SDFSDFSD", title:"Titulo1", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido1"},
    {idText: 20, userId: "SDFSDFSD", title:"Titulo2", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido2"},
    {idText: 21, userId: "SDFSDFSD", title:"Titulo3", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido3"},
    {idText: 22, userId: "SDFSDFSD", title:"Titulo4", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido4"},
    {idText: 23, userId: "SDFSDFSD", title:"Titulo5", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido5"},
    {idText: 24, userId: "SDFSDFSD", title:"Titulo6", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido6"},
    {idText: 25, userId: "SDFSDFSD", title:"Titulo7", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido7"},
    {idText: 26, userId: "SDFSDFSD", title:"Titulo8", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido8"},
    {idText: 27, userId: "SDFSDFSD", title:"Titulo9", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido9"},
];

/* const textDao = createTextDaoFactory();
texts.forEach(async text => {
    await textDao.addUnique(text)
})
console.log("Todo listo");

const allTexts = await textDao.getAllByUser({userId:"SDFSDFSD"});
console.log(allTexts);
 */


//============ELIMINAR TODOS LOS TEXTOS===============
/* allTexts.forEach(async text => {
    await firebaseDb.collection('texts').doc(text.id).delete();
})
console.log("Borrados..."); */

const getTextsByPage = createTextsByPageFactory();
const newTexts = await getTextsByPage.search(1,"fiction");
console.log(newTexts);