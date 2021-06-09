import express from 'express'
import AutorizadorFactory from '../negocio/AutorizadorFactory.js'

function crearRouterUsuarios() {
  
  const router = express.Router()
  
  router.post('/', async (req, res) => {
    const autorizador = await AutorizadorFactory.crearAutorizadorFactory()
    await autorizador.autorizarUsuario(req.body.id)
    res.json({ msg: 'ok' })
  })

  return router
}

export { crearRouterUsuarios }