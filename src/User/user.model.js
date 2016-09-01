const mongoose = require('mongoose')
const hash = require('../../lib/hash')
// const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
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

// Safely store a password using bcrypt hashing function
// UserSchema.pre('save', function (next) {
//   const user = this

//   if (!user.isModified('password')) return next() // why?

//   bcrypt.genSalt(function (err, salt) {
//     if (err) next(err)

//     bcrypt.hash(user.password, salt, function (err, encrypted) {
//       if (err) next(err)

//       user.password = encrypted
//       next()
//     })
//   })
// })


module.exports = mongoose.model('User', UserSchema)
