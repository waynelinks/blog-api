const bcrypt = require('bcrypt')

const { User, validate } = require('../models')

exports.getSingle = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  res.send(user)
}

exports.create = async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({ email: req.body.email })

  if (user) return res.status(400).send('User already registered.')

  user = new User({ ...req.body })

  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)
  await user.save()

  const token = user.generateAuthToken()

  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']))
}