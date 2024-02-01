import { UserId, User, addUser, deleteUserById } from '../store/users/users.slice'
import { useUsersDispatch } from './store.type.hook'

export const useUserActions = () => {
  const dispatch = useUsersDispatch()

  const createUser = ({ name, email, github }: User) => {
    dispatch(addUser({ name, email, github }))
  }

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return {
    createUser,
    removeUser
  }
}

