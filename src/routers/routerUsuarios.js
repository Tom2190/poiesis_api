import express from 'express'

function crearRouterUsuarios(application) {
  const routerUsuarios = express.Router()

  routerUsuarios.get('/', async (req, res, next) => {
    try {
      let usuarios
      if (req.query.id) {
        usuarios = await application.getById(req.query.id)
      } else {
        usuarios = await application.getAll()
      }
      res.json(usuarios)
    } catch (error) {
      next(error)
    }
  })

  routerUsuarios.post('/', async (req, res, next) => {
    try {
      const usuario = await application.add(req.body)
      res.status(201).json(usuario)
    } catch (error) {
      next(error)
    }
  })

  routerUsuarios.delete('/:id', async (req, res, next) => {
    try {
      await application.deleteById(req.params.id)
      res.status(204).end()
    } catch (error) {
      next(error)
    }
  })

  routerUsuarios.put('/:id', async (req, res, next) => {
    try {
      const usuario = await application.updateById(req.body, req.params.id)
      res.json(usuario)
    } catch (error) {
      next(error)
    }
  })

  routerUsuarios.use((error, req, res, next) => {
    if (error.type === 'ERROR_ID_EN_USO') {
      res.status(400)
    } else if (error.type === 'ERROR_DATOS_INVALIDOS') {
      res.status(400)
    } else if (error.type === 'ERROR_USUARIO_NO_ENCONTRADO') {
      res.status(404)
    } else {
      res.status(500)
    }
    res.json({ message: error.message })
  })

  return routerUsuarios
}

export { crearRouterUsuarios }