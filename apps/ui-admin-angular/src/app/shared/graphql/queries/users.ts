import { gql } from 'apollo-angular';
import { PipelinesListResponse } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

export const listUsersQuery = gql`
  query Users {
    users {
      users {
        firebase_tenant_id
        firebase_tenant_display_name
        firebase_user_id
        email
        account_uuid
        created_at
        updated_at
      }
    }
  }
`;

export const inviteUserQuery = gql`
  mutation Mutation($in: InviteUserRequestInput) {
    inviteUser(in: $in) {
      success
    }
  }
`;
export const changePasswordQuery = gql`
  mutation ChangePassword($in: ChangePasswordRequestInput) {
    changePassword(in: $in) {
      success
    }
  }
`;

export const deleteUserQuery = gql`
  mutation DeleteUser($in: DeleteUserRequestInput) {
    deleteUser(in: $in) {
      success
    }
  }
`;
