import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer, { rollbackUser, UserId } from './users/users.slice'
import { toast } from 'sonner'

// Middlewares
// -----------

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem("__redux_state__", JSON.stringify(store.getState()))
}

const syncWithDatabasaeMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action as { type: string, payload: UserId };
  const previousState = store.getState() as RootState;
  // Fase 1: Del dispatch al store
  next(action);

  if (type === 'users/deleteUserById') {
    const userIdToRemove = payload
    const userToRemove = previousState.users.find(user => user.id === userIdToRemove)
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: 'DELETE'
    }).then(response => {
      // Comment from ln27 to ln31 to enable the rollbackUser action
      // throw new Error('Error al eliminar el usuario')
      if (response.ok) {
        // Fase 2 : De la store al ui
        toast.success(`Usuario con id ${payload} eliminado`)
      }
    }).catch(err => {
      toast.error(`Error al eliminar el usuario con id ${userIdToRemove}`)
      if (userToRemove) {
        store.dispatch(rollbackUser(userToRemove))
      }
      console.log(err)
    })
  }
}

// Store
// -----------

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, syncWithDatabasaeMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch