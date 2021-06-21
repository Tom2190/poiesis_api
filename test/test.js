import createTextDaoFactory from "../src/Text/persistence/textDaoFactory.js";

const texts = [
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo2", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido2"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo3", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido3"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo4", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido4"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo5", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido5"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo6", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido6"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo7", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido7"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo8", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido8"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo9", genre:"fiction", hasPdf: false, urlPdf:"", content:"Contenido9"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo1", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido1"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo2", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido2"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo3", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido3"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo4", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido4"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo5", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido5"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo6", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido6"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo7", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido7"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo8", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido8"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo9", genre:"non_fiction", hasPdf: false, urlPdf:"", content:"Contenido9"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo1", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido1"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo2", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido2"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo3", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido3"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo4", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido4"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo5", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido5"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo6", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido6"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo7", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido7"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo8", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido8"},
    {createdAt: new Date(), userId: "60EVxeUZqbkp7G3enCKc", title:"Titulo9", genre:"poetry", hasPdf: false, urlPdf:"", content:"Contenido9"},
];

const textDao = createTextDaoFactory();
texts.forEach(async text => {
    await textDao.addUnique(text)
})
console.log("Listo!");