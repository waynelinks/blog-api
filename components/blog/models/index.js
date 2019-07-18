const Joi = require('joi')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    subtitle: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    }
  },
  {
    timestamps: true
  }
)

const Blog = mongoose.model('Blog', blogSchema)

const validate = blog => {
  const schema = {
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
    content: Joi.string().required()
  }

  return Joi.validate(blog, schema)
}

module.exports = { Blog, validate }
