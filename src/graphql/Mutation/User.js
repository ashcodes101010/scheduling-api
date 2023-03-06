const User = require('../../models/User')
const knex = require('../../lib/knex')
const { hashPassword, comparePassword } = require('../../lib/auth')
const Availability = require('../../models/Availability')
const ZoomAvailability = require('../../models/ZoomAvailability')

// Retrieve user or create new user if does not exist
const login = async (obj, { username, password }) => {
  const trans = await knex.transaction(async trx => {
    const passwordHash = await hashPassword(password)
    let user = await User.query(trx).findOne({
      username,
    })
    if (!user) {
      user = await User.query(trx).insertAndFetch({
        username,
        password: passwordHash,
      })
      await Availability.query(trx).insert({
        userId: user.id,
      })
      await ZoomAvailability.query(trx).insert({
        userId: user.id,
      })
    } else {
      const validPassword = await comparePassword(password, user.password)
      if (!validPassword) {
        throw new Error('Incorrect password')
      }
    }

    return user
  })
  return trans
}

const resolver = {
  Mutation: { login },
}

module.exports = resolver
