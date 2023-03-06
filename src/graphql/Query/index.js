const merge = require('lodash.merge')
const User = require('./User')

const resolvers = [User]

module.exports = merge(...resolvers)
