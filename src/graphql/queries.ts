import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query GetUserByID($id: Int!) {
    users_by_pk(id: $id) {
      email
      id
      name
    }
  }
`;
