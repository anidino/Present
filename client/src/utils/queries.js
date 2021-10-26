import { gql } from "@apollo/client";

export const QUERY_PLAYLISTS = gql`
  query QueryPlist {
    playlists {
      _id
      playlistName
      playlistUrl
      username
    }
  }
`;

export const QUERY_USER = gql`
  query User {
    user {
      _id
      email
      username
      firstName
      lastName
      playlists {
        _id
        playlistName
        playlistUrl
        reactions
      }
    }
  }
`;