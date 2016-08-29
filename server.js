require('dotenv').load()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const router = require('./src/routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', router)

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('Server listening on port ' + port)
})
