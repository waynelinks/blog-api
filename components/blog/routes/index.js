const express = require('express')
const CTRL = require('../controllers')
const validateObjectID = require('../../../middleware/validateObjectID')
const auth = require('../../../middleware/auth')

const router = express.Router()

router
  .route('/')
  .get(CTRL.getAll)
  .post(auth,CTRL.create)

router
  .route('/:id')
  .get(validateObjectID, CTRL.getSingle)
  .patch([auth, validateObjectID], CTRL.update)
  .delete([auth, validateObjectID], CTRL.remove)

module.exports = router
