const mongoose = require('mongoose')
// const Joi = require('joi')
const isemail = require('isemail')

const hash = require('../../lib/hash')
// const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: email => isemail.validate(email),
      message: 'Invalid email address.'
    }
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

UserSchema.pre('save', function (next) {
  const user = this

  if (!user.isModified('password')) return next() // why?

  hash.get(user.password, function (err, hash) {
    if (err) next(err)

    user.password = hash
    next()
  })
})

module.exports = mongoose.model('User', UserSchema)
