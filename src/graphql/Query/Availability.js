const Availability = require('../../models/Availability')

const allAvailabilities = async () => {
  const data = await Availability.query()
    .joinRelated('user')
    .select('user.username', 'monday', 'tuesday', 'wednesday', 'thursday',
            'friday', 'saturday', 'sunday')
  return data
}

const resolver = {
  Query: {
    allAvailabilities,
  },
}

module.exports = resolver
