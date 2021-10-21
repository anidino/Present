// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    dashboardPhoto: String
    dob: String
  }

  type Photo {
    _id: ID
    name: String
    desc: String
    source: String
    username: String
  }

  type Song {
    _id: ID
    songUrl: String
    username: String
    reactions: [SongReaction]
  }

  type SongReaction {
    _id: ID
    title: String
    reactionBody: String
    username: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    photos: [Photo]
  }
`;

// export the typeDefs
module.exports = typeDefs;