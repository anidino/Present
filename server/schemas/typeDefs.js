// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs

const typeDefs = gql`
  type Query {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
  }
`;

// export the typeDefs
module.exports = typeDefs;
