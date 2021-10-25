import { gql } from "@apollo/client";

export const MUTATION_LOGIN = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
        email
      }
      token
    }
  }
`;

// export const MUTATION_ADDPLAYLISTS = gql`
//   mutation AddPlaylistMutation($ids: [ID]!) {
//     addPlaylist(_ids: $ids)
//   }
// `;
