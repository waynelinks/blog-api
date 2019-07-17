const blog = require('./routes')

module.exports = app => {
  app.use('/api/v1/blog', blog)
}
