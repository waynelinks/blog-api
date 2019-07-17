const express = require('express')
const CTRL = require('../controllers')

const router = express.Router()

router
  .route('/')
  .post(CTRL.create)

router
  .route('/me')
  .get(CTRL.getSingle)

module.exports = router
