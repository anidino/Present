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


export const QUERY_PHOTOS = gql`
  query Photos {
    photos {
      _id
      name
      desc
      imageLink
    }
  }
`;

export const QUERY_PHOTOS_and_PLAYLISTS = gql`
  query PhotosandPlaylists {
    photos {
      _id
      name
      desc
      imageLink
    }
    playlists {
        _id
        playlistName
        playlistUrl
        username
    }
  }
`;
