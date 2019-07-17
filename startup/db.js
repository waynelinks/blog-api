const mongoose = require('mongoose')

module.exports = (winston, config) => {
  const db = config.get('DB.host')
  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => winston.info(`> Connected to ${db}...`))
}
