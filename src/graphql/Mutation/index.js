const merge = require('lodash.merge')
const Availability = require('./Availability')
const ElapsedTime = require('./ElapsedTime')
const User = require('./User')

const resolvers = [Availability, ElapsedTime, User]

module.exports = merge(...resolvers)
