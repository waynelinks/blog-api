
module.exports = (app, express) => {
  app.use(express.json())
  app.use('/api/v1/blog', blog)
}