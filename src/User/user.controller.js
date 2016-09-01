const User = require('./user.model')
const jwt = require('jsonwebtoken')
const config = require('../../config')
const hash = require('../../lib/hash')

exports.signup = function (req, res, next) {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  })

  user.save((err) => {
    if (err) {
      return res.status(400).send(err) // email already exists
    }

    const token = jwt.sign({ email: user.email }, config.auth.secret) // expiration data
    res.send({ token: token, user: user })
  })
}
