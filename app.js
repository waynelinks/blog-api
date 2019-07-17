const express = require('express')
const config = require('config')
const winston = require('winston')

const app = express.json()

module.exports = { app, config, winston }
