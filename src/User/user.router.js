const express = require('express')
const controller = require('./user.controller')

const router = express.Router()

router
  .post('/signup', controller.signup)
  .post('/signin', controller.signin)

module.exports = router
