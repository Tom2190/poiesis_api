import express from 'express'
import { crearRouterUsuarios } from '../../autorizarUsuario/ruteo/routerUsuarios.js'

async function crearServidor(port) {

    const app = express()

    app.use(express.json())

    app.use('/usuarios', crearRouterUsuarios())

    return new Promise((resolve, reject) => {
        const server = app.listen(port)
            .once('error', () => {
                reject(new Error('Error al conectarse al servidor'))
            })
            .once('listening', () => {
                server.port = server.address().port
                resolve(server)
            })
    })
}

export { crearServidor }