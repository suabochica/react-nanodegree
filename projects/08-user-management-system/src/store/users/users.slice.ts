import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const DEFAULT_USER_STATE = [
  {
    id: "1",
    name: 'John Doe',
    email: 'johndoe@midu.com',
    github: 'johndoe'
  },
  {
    id: "2",
    name: 'Jane Doe',
    email: 'janedoe@midu.com',
    github: 'janedoe'
  },
  {
    id: "3",
    name: 'John Smith',
    email: 'johnsmith@midu.com',
    github: 'midudev'
  }

]

// Use of and IIFE to get the initial state from localStorage and enable
// the possibility of have two returns

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux_state__")
  if (persistedState) {
    return JSON.parse(persistedState).users
  }

  return DEFAULT_USER_STATE
})()


export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()

      return [...state, { ...action.payload, id }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload

      return state.filter((user) => user.id !== id)
    },
    rollbackUser: (state, action) => {
      const isUserDefined = state.some(user => user.id === action.payload.id)
      if (!isUserDefined) {
        return [...state, action.payload]
      }
    }
  },
})

export default userSlice.reducer

// Actions
// -------

export const { addUser, deleteUserById, rollbackUser } = userSlice.actions