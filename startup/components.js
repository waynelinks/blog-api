const error = require('../middleware/error')

module.exports = (app, express) => {
  app.use(express.json())

  require('../components/blog/routes')(app)

  app.use(error)
}
