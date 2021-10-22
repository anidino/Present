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
    photos: [Photo]
  }

  type Photo {
    _id: ID
    imageLink: String
    username: String
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    users: [User]
    photos: [Photo]
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): User
    addPhoto(photo_id: ID!): String!
    deletePhotos(_ids: [ID]!): [String]
    updateDashboardPhoto(_id: ID!, photo: String!): Photo
    deleteDashboardPhoto(_id: ID!): Photo
  }
`;

// export the typeDefs
module.exports = typeDefs;
