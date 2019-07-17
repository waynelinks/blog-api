const express = require('express')
const CTRL = require('../controllers')

const router = express.Router()

router
  .route('/')
  .get(CTRL.getAll)
  .post(CTRL.create)

router
  .route('/:id')
  .get(CTRL.getSingle)
  .patch(CTRL.update)
  .delete(CTRL.remove)

module.exports = router
