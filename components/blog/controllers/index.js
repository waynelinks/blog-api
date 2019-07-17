const validateObjectID = require('../../../middleware/validateObjectID')
const {Blog, validate} = require('../models')

exports.getAll = async (req, res) => {
  const posts = await Blog.find()

  res.send(posts)
}

exports.getSingle = async (req, res) => {
  res.send('getSingle')
}

exports.create = async (req, res) => {
  res.send('create')
}

exports.update = async (req, res) => {
  res.send('update')
}

exports.remove = async (req, res) => {
  res.send('remove')
}