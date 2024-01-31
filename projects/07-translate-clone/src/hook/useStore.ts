import { useReducer } from "react"

import { Action, FromLanguage, Language, type State } from '../types'
import { AUTO_LANGUAGE } from "../constants"

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
      // lógica del estado dentro del reducer y no en el componente
      if (state.fromLanguage === AUTO_LANGUAGE) return state

      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      }
    case 'SET_FROM_LANGUAGE':
      if (state.fromLanguage === action.payload) return state

      return {
        ...state,
        fromLanguage: action.payload,
        result: '',
        loading: state.fromText !== ''
      }
    case 'SET_TO_LANGUAGE':
      if (state.fromLanguage === action.payload) return state

      return {
        ...state,
        toLanguage: action.payload,
        result: '',
        loading: state.fromText !== ''
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

export const useStore = () => {

  // 3. Use the reducer

  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }
  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }
  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }
  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }
  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    dispatch,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
