const error = require('../middleware/error')

module.exports = (app, express) => {
  require('../components/blog/routes')(app, express)

  app.use(error)
}
