import express from 'express'
import CUFactory from '../negocio/CUFactory.js'

function crearRouterUsuarios() {
  
  const router = express.Router()
  
  router.post('/', async (req, res) => {
    const CU_Autorizador = await CUFactory.crearCU_Autorizador()
    await CU_Autorizador.autorizarUsuario(req.body.id)
    res.json({ msg: 'ok' })
  })

  return router
}

export { crearRouterUsuarios }