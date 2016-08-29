const mongoose = require('mongoose')
const config = require('../config')
const log = require('log4js').getLogger('db')

exports.connect = function (cb) {
  mongoose.connect(config.db.URI, (err) => {
    if (err) {
      log.error(err.name + ': ' + err.message)
    }
    log.info('Succesfully connected to the database!')
    if (cb) cb(mongoose.connection)
  })
}
