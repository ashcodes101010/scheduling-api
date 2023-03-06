const bcrypt = require('bcrypt')

const hashPassword = password => new Promise((resolve, reject) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      reject(err)
    } else {
      resolve(hash)
    }
  })
})

const comparePassword = (password, hashedPassword) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hashedPassword, (err, matches) => {
    if (err) {
      reject(err)
    } else {
      resolve(matches)
    }
  })
})

module.exports = { hashPassword, comparePassword }
