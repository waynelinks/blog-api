const express = require('express')
const config = require('config')
const winston = require('winston')

const app = express()

require('./startup/logging')(winston)
require("./startup/cors")(app);
require("./startup/db")(winston, config);

module.exports = { app, config, winston }
