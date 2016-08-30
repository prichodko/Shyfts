const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  firstName: {},
  lastName: {},
  email: {},
  username: {},
  password: {}
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)

const express = require('express')
const fs = require('fs')
