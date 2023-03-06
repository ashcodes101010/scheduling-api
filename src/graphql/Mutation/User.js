const User = require('../../models/User')
const knex = require('../../lib/knex')
const { hashPassword } = require('../../lib/auth')
const Availability = require('../../models/Availability')

// Retrieve user or create new user if does not exist
const login = async (obj, { username, password }) => {
  const trans = await knex.transaction(async trx => {
    const passwordHash = await hashPassword(password)
    let user = await User.query(trx).findOne({
      username,
      password: passwordHash,
    })

    if (!user) {
      user = await User.query(trx).insertAndFetch({
        username,
        password: passwordHash,
      })

      await Availability.query(trx).insert({
        userId: user.id,
      })
    }

    return user
  })
  return trans
}

const resolver = {
  Mutation: { login },
}

module.exports = resolver
