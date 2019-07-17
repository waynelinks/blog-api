const morgan = require('morgan')

const error = require('../middleware/error')

module.exports = (app, express) => {
  app.use(express.json())
  app.use(morgan('dev'))

  require('../components/blog')(app)
  require('../components/users')(app)

  app.use(error)
}
