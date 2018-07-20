import { GET_USERS } from './types.action'

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  }
}
