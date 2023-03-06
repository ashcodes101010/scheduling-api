const ElapsedTime = require('../../models/ElapsedTime')

const addElapsedTime = async (obj, input) => {
  const elapsedTime = await ElapsedTime.query().insertAndFetch(input)
  return elapsedTime.id
}

const resolver = {
  Mutation: { addElapsedTime },
}

module.exports = resolver
