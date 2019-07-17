const mongoose = require('mongoose')

module.exports = (winston, config) => {
  const db = config.get('DB.host')
  mongoose
    .connect(db, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => winston.info(`> Connected to ${db}...`))
}
