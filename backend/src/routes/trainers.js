const express = require('express')
const router = express.Router()

const Service = require('../services/trainer-service')
const { registerCrudRoutes } = require('./route-utils')

registerCrudRoutes(router, Service)

module.exports = router
