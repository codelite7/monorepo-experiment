import { gql } from 'apollo-angular';

export const listApiTokensQuery = gql`
  query Tokens {
    apiTokens {
      tokens {
        name
        token
      }
    }
  }
`;

export const createApiTokenQuery = gql`
  mutation CreateApiToken($in: CreateApiTokenRequestInput) {
    createApiToken(in: $in) {
      token {
        name
        token
      }
    }
  }
`;

export const deleteApiTokenQuery = gql`
  mutation DeleteApiToken($in: DeleteApiTokenRequestInput) {
    deleteApiToken(in: $in) {
      success
    }
  }
`;
