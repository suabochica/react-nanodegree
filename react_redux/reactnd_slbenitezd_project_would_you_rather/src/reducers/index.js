import { combineReducers } from 'redux'
// Relative imports
import users from './users'
import questions from './questions'

export default combineReducers({
    users,
    questions
})