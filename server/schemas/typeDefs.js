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
    playlistReactions: [PlaylistReaction]
    photos: [Photo]
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
    reactions: String
  }

  type PlaylistReaction {
    _id: ID
    title: String
    reactionBody: String
    username: String
    playlist_id: String
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
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!, lastName: String!, firstName: String!): Auth!

    addPhoto(photo_id: ID!): String!
    deletePhotos(_ids: [ID]!): [String]
    addPlaylist(_ids: [ID]!): Boolean
    addReaction(_ids: [ID]!, reactions: String): String
    deletePlaylist(_ids: [ID]!): [ID]
    addPlaylistReaction(playlist_id: String!, title: String!, reactionBody: String!): PlaylistReaction
    deletePlaylistReaction(playlist_id: String!, reaction_id: String!): PlaylistReaction
    updatePlaylistReaction(playlist_id: String!, reaction_id: String!, title: String, reactionBody: String): PlaylistReaction
  }
`;

// export the typeDefs
module.exports = typeDefs;
