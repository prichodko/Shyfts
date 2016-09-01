const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10

exports.get = function (password, cb) {
  bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
    if (err) cb(err)

    bcrypt.hash(password, salt, function (err, encrypted) {
      if (err) cb(err)

      return cb(null, encrypted)
    })
  })
}

exports.verify = function (hash, password, cb) {
  bcrypt.compare(password, hash, function (err, same) {
    if (err) cb(err)

    cb(null, same)
  })
}
