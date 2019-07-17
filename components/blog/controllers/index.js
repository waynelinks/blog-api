const validateObjectID = require('../../../middleware/validateObjectID')
const { Blog, validate } = require('../models')

exports.getAll = async (req, res) => {
  const posts = await Blog.find()

  res.send(posts)
}

exports.getSingle = async (req, res) => {
  res.send('getSingle')
}

exports.create = async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let post = new Blog({
    ...req.body
  })

  post = await post.save()

  res.send(post)
}

exports.update = async (req, res) => {
  res.send('update')
}

exports.remove = async (req, res) => {
  res.send('remove')
}
