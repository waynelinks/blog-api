const http = require('http')
const { app, winston, config } = require('../app')


const port = process.env.PORT || config.get('PORT')
const server = http.createServer(app)

server.listen(port, (err) => {
  if (err) {
    winston.exception(`${err.message}`)
  }

  winston.info(`> App running on port ${port}`)
})

module.exports = server