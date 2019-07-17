const { User, validate } = require('../models')

exports.getSingle = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password")

  res.send(user)
}

exports.create = async (req, res) => {
  
}

