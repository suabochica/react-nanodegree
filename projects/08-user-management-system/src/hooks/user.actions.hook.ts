import { UserId, deleteUserById } from '../store/users/users.slice'
import { useUsersDispatch } from './store.type.hook'

export const useUserActions = () => {
  const dispatch = useUsersDispatch()

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return {
    removeUser
  }
}

