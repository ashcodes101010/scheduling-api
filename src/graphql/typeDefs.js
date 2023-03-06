const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar JSON

  type Mutation {
    login(username: String!, password: String!): User!
    updateAvailability(id: ID!, input: AvailabilityInput!): Availability!
    addElapsedTime(userId: ID!, timeSpentSeconds: Float!): ID!
  }

  type Query {
    user(id: ID!): User!
  }

  type User {
    id: ID!
    username: String!
    availability: Availability!
    createdAt: String!
    updatedAt: String!
  }
  
  type Availability {
    id: ID!
    userId: ID!
    timezone: String
    monday: [JSON!]
    tuesday: [JSON!]
    wednesday: [JSON!]
    thursday: [JSON!]
    friday: [JSON!]
    saturday: [JSON!]
    sunday: [JSON!]
    createdAt: String!
    updatedAt: String!
  }

  input AvailabilityInput {
    timezone: String
    monday: [JSON!]
    tuesday: [JSON!]
    wednesday: [JSON!]
    thursday: [JSON!]
    friday: [JSON!]
    saturday: [JSON!]
    sunday: [JSON!]
  }
`
