require('dotenv').load()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('./lib/mongoose')
const log = require('log4js').getLogger('app')

const app = express()

const router = require('./src/api')

mongoose.connect()

app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', router)

log.info(app.get('env'))

app.listen(app.get('port'), function () {
  log.info('Listening on port: ' + app.get('port'))
})
