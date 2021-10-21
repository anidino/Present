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
    imageLink: String
    username: String
  }

  type Query {
    users: [User]
    photos: [Photo]
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
