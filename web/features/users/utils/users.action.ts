import { gql } from "@apollo/client";
import { UserEntity } from "./users.interface";

export type GetAllUsersType = { getAllUsers: UserEntity[] };
export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      name
    }
  }
`;
