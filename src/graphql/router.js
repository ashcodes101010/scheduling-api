// Adapted from HSA DEV Bootcamp starter code
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const initializeGraphqlRouter = app => {
  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => ({ req, res }),
    formatError: error => error,
    introspection: true,
    playground: true,
    tracing: true,
    cacheControl: true,
    engine: false,
  })

  // Security and authorization
  server.applyMiddleware({ app, path: '/graphql', cors: false })
  return server
}

module.exports = initializeGraphqlRouter
