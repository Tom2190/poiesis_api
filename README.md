# Documentacón de poiesis_api

> En la siguiente documentación se encuentran listadas las 4 principales funcionalidades de la aplicacion creada para el taller literario **Poiesis**

Para levantar el proyecto es necesario:
1. Instalar las dependencias del proyecto a través de `npm install`
2. Pedir el archivo `.env` de configuración para el mailer, base de datos y storage de archivos
3. Correr `npm start` desde la terminal

## 1. Autenticación y creacion de usuarios
*Por Alex Costa*

### Descripción:

- Se van a validar los datos del usuario.
- En caso de no existir un usuario y que los datos sean validados correctamente se almacenara el usuario y se le enviara un mail confirmando su registración.

### Endpoint: `POST /signup`

#### Request:
- Se deben enviar todos los datos requeridos del usuario en el cuerpo de la petición.

| Nombre   |  Tipo  | Descripción                    |
| -------- | :----: | ------------------------------ |
| name     |  String   | Nombre del usuario |
| lastName     |  String   | Apellido del usuario |
| email     |  String   | Email del usuario, debe ser un email valido |
| password   | String | Contraseña del usuario |
| chosenDateTime   | String | Dia y horario elegido por el usuario |
| writingFrequency   | String | Frecuencia de escritura del usuario |
| writingGenre   | String | Genero de escritura del usuario |
| phone   | String | Celular del usuario |
| dni   | String | DNI del usuario |

#### `201` Response data:

```
{
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwRVZ4ZVVacWJrcDdHM2VuQ0tjIiwiaWF0IjoxNjI0Mjg2NjI4fQ.NE06_k9FMVCJvp2bmcCu7tsvBO5YKTmoQwnJa4Rz1qQ'    
}
```
- Campos extra:

| Nombre   |  Tipo  | Descripción                    |
| -------- | :----: | ------------------------------ |
| canShareTexts     |  boolean   | Determina si el usuario puede o no publicar textos |
| id     |  String   | Id creado para el usuario desde firebase |

### Tests: 
- El archivo de test se encuentra en la ruta `./test/Alex/CURegisterUser.js`
- Para ejecutar el archivo es necesario usar el comando `npm run testRegisterUser` en la terminal


## 2. Autorizacion y mailer
*Por Tomás Fernández Abrevaya*

### Descripción:

- Al querer autorizar a un usuario, primero se lo buscará por su id, después se le cambiará el atributo canShareTexts a true, y se hace el update. Desde este momento, podrá subir textos a la página.
- Se le enviará un email al usuario autorizado que indique que ahora puede subir textos a la página.

### Endpoint: `POST /users`

#### Request:
- Se hará una request para reemplazar al usuario por el mismo excepto que ahora está autorizado para subir textos.
- El **body** tendrá el id del usuario para buscarlo en la base de datos.

#### `200` Response data:

```
{
  writingGenre: 'Ficción',
  lastName: 'Fernández Abrevaya',
  email: 'escritura.poiesis@gmail.com',
  phone: '1123318739',
  canShareTexts: true,
  name: 'Tomás',
  dni: '35324852',
  writingFrecuency: 'Alta',
  chosenDateTime: 'Martes y Jueves',
  password: '123456',
  id: '6CShT2kgKrqfbJ7maKbo'
}
```
- Campos extra:

| Nombre   |  Tipo  | Descripción                    |
| -------- | :----: | ------------------------------ |
| canShareTexts     |  boolean   | Determina si el usuario puede o no publicar textos |
| id     |  String   | Id creado para el usuario desde firebase |

### Tests: 
- El archivo de test se encuentra en la ruta `./test/Tomas/authAxiosFirebase.test.js`
- Para ejecutar el archivo es necesario usar el comando `npm run testAuthMailer` en la terminal


## 3. Creacion de textos
*Por Priscila E. Bey*

### Descripción:

- Los usuarios autenticados y autorizados en la aplicacion tendrán permiso para poder subir sus textos a la plataforma. Los mismos pueden ser en forma de texto pleno o como archivo PDF. 
- Los archivos serán subidos al drive del taller y podran ser visualizados gracias a la URL pública devuelta por el mismo Drive.

### Endpoint: `POST /texts`

#### Request:
- Los textos pueden ser creados solamente por aquellos usuarios autenticados por lo que es necesario enviar el token a través de header `x-access-token`
- El **body** se enviará en formato `FormData` con los siguientes datos

| Nombre   |  Tipo  | Descripción                    |
| -------- | :----: | ------------------------------ |
| title     |  String   | No pueden repetirse los titulos de los textos |
| genre   | Enum | fiction / non_fiction / poetry |
| hasPdf | Boolean | Este campo determina si el texto será en pdf o no|
| content     |  String   | Campo opcional dependiendo del hasPdf (false) |
| demo      | Buffer | Opcional dependiendo del hasPdf (true), archivo pdf leido como stream de datos |

#### `201` Response data:

```
{
  userId: 'FTlNPqZkYvQxwtMb0DBM',
  title: 'Un nuevo cuento 109',
  genre: 'poetry',
  textId: 1,
  hasPdf: true,
  content: null,
  pdfUrl: 'https://drive.google.com/file/d/1UiBWpJR14D2MYVoz7Y-jlvi1MtEFDHDQ/view?usp=drivesdk',
  pdfFileId: '1UiBWpJR14D2MYVoz7Y-jlvi1MtEFDHDQ',
  id: 'tVnAk9Vcvjru6iTwlZRP'
}
```
- Campos extra:

| Nombre   |  Tipo  | Descripción                    |
| -------- | :----: | ------------------------------ |
| userId     |  String   | Id del usuario que creo el texto |
| pdfUrl   | String | Url pública de drive para ver el archivo |
| pdfFileId | String | Id del archivo |
| id     |  String   | Nuevo id creado para el texto desde firebase |

### Tests: 
- El archivo de test se encuentra en la ruta `./test/Priscila/index.js`
- Para ejecutar el archivo es necesario usar el comando `npm run testCreateText` en la terminal


## 4. Paginación y filtrado de textos
*Por Adela Delgadillo*
