const users = require('./routes')

module.exports = app => {
  app.use('/api/v1/users', users)
}
