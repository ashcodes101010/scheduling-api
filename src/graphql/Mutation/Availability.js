const knex = require('../../lib/knex')
const Availability = require('../../models/Availability')

const updateAvailability = async (obj, { userId, input }) => {
  const trans = await knex.transaction(async trx => {
    Object.keys(input).forEach(k => input[k] = JSON.stringify(input[k]))
    await Availability.query(trx).findOne({ userId }).patch(input)
    return userId
  })
  return trans
}

const resolver = {
  Mutation: { updateAvailability },
}

module.exports = resolver
