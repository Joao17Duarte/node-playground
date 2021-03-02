module.exports = function addStudent(student) {
  const mongoose = require('mongoose')
  const User = require('./models/User.js')

  mongoose
    .connect('mongodb://localhost/neuefische', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connected'))
    .catch(() => console.error(error))

  User.create(student).then(result => {
    console.log(result)
    mongoose.connection.close()
  })
}
