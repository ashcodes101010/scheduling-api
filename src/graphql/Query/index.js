const merge = require('lodash.merge')
const Availability = require('./Availability')
const User = require('./User')

const resolvers = [Availability, User]

module.exports = merge(...resolvers)
