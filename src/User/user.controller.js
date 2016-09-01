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

exports.signin = function (req, res, next) {
  User.findOne({ email: req.body.email.toLowerCase() }, function (err, user) {
    if (err || !user) {
      return res.status(400).send(err) // no email
    }

    hash.verify(user.password, req.body.password, (err, same) => {
      if (err) {
        return res.status(400, err) // ?
      }

      if (!same) {
        return res.status(401).send('Invalid email or password')
      }

      const token = jwt.sign({ email: user.email }, config.auth.secret)
      res.send({ token: token, id: user.id })
    })
  })
}
