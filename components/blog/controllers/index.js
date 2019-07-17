const { Blog, validate } = require('../models')

exports.getAll = async (req, res) => {
  const posts = await Blog.find()

  res.send(posts)
}

exports.getSingle = async (req, res) => {
  const post = await Blog.findById(req.params.id).select('-__v')

  if (!post)
    return res.status(404).send('The post with the given ID was not found.')

  res.send(post)
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
  const post = await Blog.findByIdAndRemove(req.params.id)

  if (!post) return res.status(404).send('The post with the given ID was not found. ')

  res.send(post)
}
