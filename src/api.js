const express = require('express')

const userController = require('./User/user.controller')

const router = express.Router()

router
  .post('/signup', userController.signup)
  .post('/signin', userController.signin)

module.exports = router
