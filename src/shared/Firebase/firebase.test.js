import firebaseDb from './firebase.js'

const testUser = {
    name: "Tomás",
    lastName: "Fernández",
    email: "fernandez.abrevaya@gmail.com",
    password: "123456",
    chosenDateTime: "Martes y Jueves",
    writingFrecuency: "Alta",
    writingGenre: "Ficción",
    phone: "1123318739",
    dni: "12345678"
}

firebaseDb.collection('users').add(testUser)
