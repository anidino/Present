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

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!, $lastName: String!, $firstName: String!) {
    addUser(username: $username, email: $email, password: $password, lastName: $lastName, firstName: $firstName) {
      token
      user {
        _id
        username
        email
        firstName
        lastName
      }
    }
  }
`;
