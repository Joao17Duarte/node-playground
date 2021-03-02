const addStudent = require('./addStudent')

const [, , name, role] = process.argv
addStudent({ name, role, php: false })
