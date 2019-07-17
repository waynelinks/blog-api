const express = require('express')
const config = require('config')
const winston = require('winston')

const app = express()

require('./startup/logging')(winston)
require('./startup/cors')(app)
require('./startup/components.js')(app, express)
require('./startup/db')(winston, config)
require('./startup/config')(config)
require('./startup/validation')()

module.exports = { app, config, winston }
