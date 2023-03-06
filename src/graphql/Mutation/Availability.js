const knex = require('../../lib/knex')
const Availability = require('../../models/Availability')
const ZoomAvailability = require('../../models/ZoomAvailability')

const updateAvailability = async (obj, { userId, input, zoomInput }) => {
  const trans = await knex.transaction(async trx => {
    Object.keys(input).forEach(k => input[k] = JSON.stringify(input[k]))
    Object.keys(zoomInput).forEach(k => zoomInput[k] = JSON.stringify(zoomInput[k]))
    await Availability.query(trx).findOne({ userId }).patch(input)
    await ZoomAvailability.query(trx).findOne({ userId }).patch(zoomInput)
    return userId
  })
  return trans
}

const resolver = {
  Mutation: { updateAvailability },
}

module.exports = resolver
