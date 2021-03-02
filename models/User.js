const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: String,
  php: Boolean,
})

const User = mongoose.model('User', userSchema)

module.exports = User
