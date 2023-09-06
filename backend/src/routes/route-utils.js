function registerCrudRoutes (router, service) {
  router.get('/', async (req, res) => {
    res.send(await service.getAll())
  })

  router.get('/:id', async (req, res) => {
    res.send(await service.getById(req.params.id))
  })

  router.post('/', async (req, res) => {
    res.send(await service.create(req.body))
  })

  router.put('/:id', async (req, res) => {
    res.send(await service.update(req.params.id, req.body))
  })

  router.delete('/:id', async (req, res) => {
    res.send(await service.delete(req.params.id))
  })
}

module.exports = { registerCrudRoutes }
