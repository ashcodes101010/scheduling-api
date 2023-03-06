const ElapsedTime = require('../../models/ElapsedTime')

const addElapsedTime = async (obj, { userId, timeSpentSeconds }) => {
  const elapsedTime = await ElapsedTime.query().insertAndFetch({ userId, timeSpentSeconds })
  return elapsedTime.id
}

const resolver = {
  Mutation: { addElapsedTime },
}

module.exports = resolver
