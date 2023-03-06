const ElapsedTime = require('../../models/ElapsedTime')

const addElapsedTime = async (obj, { userId, timeSpentSeconds }) => {
  const elapsedTime = ElapsedTime.query().insertAndFetch({ userId, timeSpentSeconds })
  return elapsedTime.id
}

const resolver = {
  Mutation: { addElapsedTime },
}

module.exports = resolver
