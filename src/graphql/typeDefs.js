const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar JSON

  type Mutation {
    login(username: String!, password: String!): User!
    updateAvailability(userId: ID!, input: AvailabilityInput): ID!
    addElapsedTime(userId: ID!, timeSpentSeconds: Float! startTime: String, endTime: String): ID!
  }

  type Query {
    user(id: ID!): User!
    allAvailabilities: [AllAvailabilitiesReturn]
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
    monday: JSON
    tuesday: JSON
    wednesday: JSON
    thursday: JSON
    friday: JSON
    saturday: JSON
    sunday: JSON
    createdAt: String!
    updatedAt: String!
  }

  type AllAvailabilitiesReturn {
    username: String
    monday: JSON
    tuesday: JSON
    wednesday: JSON
    thursday: JSON
    friday: JSON
    saturday: JSON
    sunday: JSON
  }

  input AvailabilityInput {
    timezone: String
    monday: [TimeSlot]
    tuesday: [TimeSlot]
    wednesday: [TimeSlot]
    thursday: [TimeSlot]
    friday: [TimeSlot]
    saturday: [TimeSlot]
    sunday: [TimeSlot]
  }

  input TimeSlot {
    startHr: Float
    startMin: Float
    endHr: Float
    endMin: Float
    virtual: Boolean
  }
`
