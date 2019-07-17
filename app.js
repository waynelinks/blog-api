const express = require('express')
const config = require('config')
const winston = require('winston')

const app = express.json()

require('./startup/logging')(winston)

module.exports = { app, config, winston }
