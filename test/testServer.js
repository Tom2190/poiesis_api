import { crearServidor } from '../src/compartido/servidor/servidor.js'
import { crearClienteRest } from './ClienteRest.js'

const port = 3000
const servidor = await crearServidor(port)
const cliente = crearClienteRest({
  url: `http://localhost:${port}/usuarios`
})

const { data } = await cliente.autorizar(1)
console.log(data)

servidor.close()