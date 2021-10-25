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
