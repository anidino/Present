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
    playlists: [Playlist]

    photos: [Photo]
  }

  type DashboardPhoto {
    _id: ID
    imageLink: String
    username: String
  }

  type Playlist {
    _id: ID
    playlistUrl: String
    playlistName: String
    username: String
  }

  type Photo {
    _id: ID
    name: String
    desc: String
    source: String
    username: String
  }

  type Playlist {
    _id: ID
    playlistUrl: String
    playlistName: String
    username: String
    reactions: [PlaylistReaction]
  }

  type PlaylistReaction {
    _id: ID
    title: String
    reactionBody: String
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
    playlists: [Playlist]
    playlistreaction: [PlaylistReaction]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): User
    addPhoto(photo_id: ID!): String!
    deletePhotos(_ids: [ID]!): [String]
    addPlaylist(_ids: [ID]!): Boolean
    deletePlaylist(_ids: [ID]!): [ID]
  }
`;

// export the typeDefs
module.exports = typeDefs;
