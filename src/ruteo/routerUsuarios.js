import express from 'express'
import CUFactory from '../src/CUAutorizar_Usuarios/CUFactory.,js'

const router = express.Router()

router.post('/', async (req, res) => {
  const CU_Autorizador = CUFactory.crearCU_Autorizador()
  await CU_Autorizador.autorizarUsuario(req.body)
  res.json({ msg: 'ok' })
})

export default router