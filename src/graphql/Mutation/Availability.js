const Availability = require('../../models/Availability')

const updateAvailability = async (obj, { id, input }) => {
  const availRet = Availability.query().patchAndFetchById(id, input)
  return availRet
}

const resolver = {
  Mutation: { updateAvailability },
}

module.exports = resolver
