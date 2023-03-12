const User = require('../../models/User')

// # Time Block: Retrieves time blocks for a user
const availability = async obj => {
  const availObj = await obj.$relatedQuery('availability')
  return availObj
}

const user = async (obj, { id }) => {
  const u = await User.query().findById(id)
  return u
}

const resolver = {
  Query: {
    user,
  },
  User: {
    availability,
  },
}

module.exports = resolver
