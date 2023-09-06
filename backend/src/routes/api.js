const express = require('express')
const router = express.Router()

const userRouter = require('./users')
const trainerRouter = require('./trainers')

router.use('/users', userRouter)
router.use('/trainers', trainerRouter)

module.exports = router
