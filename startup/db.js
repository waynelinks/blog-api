const mongoose = require('mongoose')

module.exports = (winston, config) => {
  const db = config.get('DB.host')
  mongoose.connect(db).then(() => winston.info(`> Connected to ${db}...`))
}
