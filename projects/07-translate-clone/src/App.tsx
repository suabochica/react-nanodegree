import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { Action, type State } from './types'

// 1. Create the initial state
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

// 2. Create the reducer

const reducer = (state: State, action: Action) => {
  const { type } = action

  switch (type) {
    case 'INTERCHANGE_LANGUAGES':
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      }
    case 'SET_FROM_LANGUAGE':
      return {
        ...state,
        fromLanguage: action.payload,
      }
    case 'SET_TO_LANGUAGE':
      return {
        ...state,
        toLanguage: action.payload,
      }
    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: '',
      }
    case 'SET_RESULT':
      return {
        ...state,
        loading: false,
        result: action.payload,
      }

    default:
      return state
  }
}

function App() {
  // 3. Use the reducer

  const [state, dispathc] = useReducer(reducer, initialState)

  return (
    <h1>🔣 Translate Clone</h1>
  )
}

export default App
