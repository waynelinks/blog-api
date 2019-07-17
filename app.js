const express = require('express')
const config = require('config')
const winston = require('winston')

const app = express()

require('./startup/logging')(winston)
require("./startup/cors")(app);

module.exports = { app, config, winston }
