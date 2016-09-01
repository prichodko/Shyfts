const express = require('express')
const controller = require('./user.controller')
// const config = require('../../config')
// const jwt = require('express-jwt')

const router = express.Router()

router.delete('/hello', (req, res) => {
  res.send('Hello man.')
})
// router.post('/signup', controller.signup)
// router.post('/signin', controller.signin)

module.exports = router