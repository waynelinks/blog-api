const Joi = require('joi')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({})

const Blog = mongoose.model('Blog', blogSchema)

const validate = blog => {
  const schema = {}

  return Joi.validate(blog, schema)
}

module.exports = { Blog, validate }
