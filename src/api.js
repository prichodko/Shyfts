const express = require('express')
const jwt = require('express-jwt')

const config = require('../config')
const userController = require('./User/user.controller')

const router = express.Router()

router
  .post('/signup', userController.signup)
  .post('/signin', userController.signin)
  .get('/auth', jwt({ secret: config.auth.secret }), (req, res) => {
    res.json(req.user)
  })

module.exports = router
