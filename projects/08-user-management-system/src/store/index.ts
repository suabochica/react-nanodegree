import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer from './users/users.slice'
import { toast } from 'sonner'

// Middlewares
// -----------

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem("__redux_state__", JSON.stringify(store.getState()))
}

const syncWithDatabasaeMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  // Fase 1: Del dispatch al store
  next(action)

  if (type === 'users/deleteUserById') {
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
      method: 'DELETE'
    }).then(response => {
      if (response.ok) {

        // Fase 2 : De la store al ui
        toast.success(`Usuario con id ${payload} eliminado`)
      }
    }).catch(err => console.log('error'))
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